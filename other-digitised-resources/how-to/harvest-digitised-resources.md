---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.15.2
kernelspec:
  display_name: Python 3 (ipykernel)
  language: python
  name: python3
---

+++ {"editable": true, "slideshow": {"slide_type": ""}}

# Harvest digitised resources

Not straightforward because of the different ways resources are grouped into collections.

Basic strategy is to harvest as many records as possible, following all the possible routes. This may result in duplicates, but these can be dealt with later. In any case, Trove contains a large number of duplicate records that need to be dealt with.

Get metadata from API:

- Get work records from search results
- Get versions/sub-version records from work
- Loop through all versions/sub-versions checking to see if they have an NLA fulltext link
- If they do, get the metadata from the sub-version and add to dataset. Sometimes records will have multiple fulltext urls, if so, add a record for each url to the dataset. Sometimes subversions don't have fulltext links, but parent version does. If so add fulltext links from parent version to subversion metadata.

Enrich dataset using embedded metadata:

- [Scrape metadata](/other-digitised-resources/how-to/extract-embedded-metadata) from fulltext url page
- If no list of pages in metadata, it's probably a collection page -- try to [harvest a list of collection items](/other-digitised-resources/how-to/get-collection-items), scrape metadata for each item, and add to dataset
- Get number of pages
- Add or update fields using scraped metadata (eg subunit values)

Download text:

- Using the number of pages attempt to [download text from publication](/other-digitised-resources/how-to/download-items-text-images)
- If successful add text file name to dataset

Merge/remove duplicates from dataset:

- Identify columns that can contain only one value (eg fulltext_url, and text_file)
- Identify columns that could contain multiple values
- Merge values of columns with multiple values into new dataframes
- Merge dataframe with single value columns together with all the new dataframes, linking on the text_file field

Uses:

- [](/other-digitised-resources/how-to/get-collection-items)
- [](/other-digitised-resources/how-to/extract-embedded-metadata)
- [](/other-digitised-resources/how-to/download-items-text-images)

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
import os
import re
import requests_cache
from tqdm.auto import tqdm
import pandas as pd
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.retry import Retry
from pathlib import Path
import json

s = requests_cache.CachedSession("harvest.db")
retries = Retry(total=5, backoff_factor=1, status_forcelist=[502, 503, 504])
s.mount("https://", HTTPAdapter(max_retries=retries))
s.mount("http://", HTTPAdapter(max_retries=retries))

load_dotenv()
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
# Insert your Trove API key
API_KEY = "YOUR API KEY"

# Use api key value from environment variables if it is available
if os.getenv("TROVE_API_KEY"):
    API_KEY = os.getenv("TROVE_API_KEY")
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Get metadata from API

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```python
def get_total_results(params, headers):
    """
    Get the total number of results for a search.
    """
    these_params = params.copy()
    these_params["n"] = 0
    response = s.get(
        "https://api.trove.nla.gov.au/v3/result", params=these_params, headers=headers
    )
    data = response.json()
    return int(data["category"][0]["records"]["total"])


def get_value(record, field, keys=["value"]):
    """
    Get the values of a field.
    Some fields are lists of dicts, if so use the `key` to get the value.
    """
    value = record.get(field, [])
    if value and isinstance(value[0], dict):
        for key in keys:
            try:
                return [re.sub(r"\s+", " ", v[key]) for v in value]
            except KeyError:
                pass
    else:
        return value


def merge_values(record, fields, keys=["value"]):
    """
    Merges values from multiple fields, removing any duplicates.
    """
    values = []
    for field in fields:
        values += get_value(record, field, keys)
    # Remove duplicates and None value
    return list(set([v for v in values if v is not None]))


def flatten_values(record, field, key="type"):
    """
    If a field has a value and type, return the values as strings with this format: 'type: value'
    """
    flattened = []
    values = record.get(field, [])
    for value in values:
        if key in value:
            flattened.append(f"{value[key]}: {value['value']}")
        else:
            flattened.append(value["value"])
    return flattened


def flatten_identifiers(record):
    """
    Get a list of control numbers from the identifier field and flatten the values.
    """
    ids = {
        "identifier": [
            v
            for v in record.get("identifier", [])
            if "type" in v and v["type"] == "control number"
        ]
    }
    return flatten_values(ids, "identifier", "source")


def get_fulltext_url(links):
    """
    Loop through the identifiers to find a link to the full text version of the book.
    """
    urls = []
    for link in links:
        if (
            "linktype" in link
            and link["linktype"] == "fulltext"
            and "nla.obj" in link["value"]
        ):
            url = re.sub(r"^http\b", "https", link["value"])
            link_text = link.get("linktext", "")
            urls.append({"url": url, "link_text": link_text})
    return urls


def get_catalogue_url(links):
    """
    Loop through the identifiers to find a link to the NLA catalogue.
    """
    for link in links:
        if (
            "linktype" in link
            and link["linktype"] == "notonline"
            and "nla.cat" in link["value"]
        ):
            return link["value"]
    return ""


def has_fulltext_link(links):
    """
    Check if a list of identifiers includes a fulltext url pointing to an NLA resource.
    """
    for link in links:
        if (
            "linktype" in link
            and link["linktype"] == "fulltext"
            and "nla.obj" in link["value"]
        ):
            return True


def get_digitised_versions(work):
    """
    Get the versions from the given work that have a fulltext url pointing to an NLA resource
    in the `identifier` field.
    """
    versions = []
    for version in work["version"]:
        if "identifier" in version and has_fulltext_link(version["identifier"]):
            versions.append(version)
    return versions


def harvest_works(params):
    """
    Harvest metadata relating to digitised works.
    """
    default_params = {
        "category": "all",
        "bulkHarvest": "true",
        "n": 100,
        "encoding": "json",
        "include": ["links", "workversions"],
    }
    params.update(default_params)
    headers = {"X-API-KEY": API_KEY}
    total = get_total_results(params, headers)
    start = "*"
    with Path("pp-metadata.ndjson").open("w") as ndjson_file:
        with tqdm(total=total) as pbar:
            while start:
                params["s"] = start
                response = s.get(
                    "https://api.trove.nla.gov.au/v3/result",
                    params=params,
                    headers=headers,
                )
                data = response.json()
                items = data["category"][0]["records"]["item"]
                for item in items:
                    for category, record in item.items():
                        # See if there's a link to the full text version.
                        if category == "work" and "identifier" in record:
                            versions = get_digitised_versions(record)
                            for version in versions:
                                for sub_version in version["record"]:
                                    metadata = sub_version["metadata"]["dc"]
                                    # Sometimes fulltext identifiers are only available on the
                                    # version rather than the sub version. So we'll look in the
                                    # sub version first, and if they're not there use the url from
                                    # the version.
                                    # Sometimes there are multiple fulltext urls associated with a version:
                                    # eg a collection page and a publication. If so add records for both urls.
                                    # They could end up pointing to the same digitised publication, but
                                    # we can sort that out later. Aim here is to try and not miss any possible
                                    # routes to digitised publications!
                                    urls = get_fulltext_url(metadata["identifier"])
                                    if len(urls) > 1:
                                        print(record.get("troveUrl"))
                                    elif len(urls) == 0:
                                        urls = get_fulltext_url(version["identifier"])
                                        if len(urls) > 1:
                                            print(record.get("troveUrl"))
                                    for url in urls:
                                        work = {
                                            # This is not the full set of available fields,
                                            # adjust as necessary.
                                            "title": get_value(metadata, "title"),
                                            "work_url": record.get("troveUrl"),
                                            "work_type": record.get("type", []),
                                            "contributor": merge_values(
                                                metadata,
                                                ["creator", "contributor"],
                                                ["value", "name"],
                                            ),
                                            "date": merge_values(
                                                metadata, ["date", "issued"]
                                            ),
                                            # Using merge here because I've noticed some duplicate values
                                            "type": merge_values(metadata, ["type"]),
                                            "format": get_value(metadata, "format"),
                                            "rights": merge_values(
                                                metadata, ["rights", "licenseRef"]
                                            ),
                                            "language": get_value(metadata, "language"),
                                            "extent": get_value(metadata, "extent"),
                                            "subject": merge_values(
                                                metadata, ["subject"]
                                            ),
                                            # Flattened type/value
                                            "is_part_of": flatten_values(
                                                metadata, "isPartOf"
                                            ),
                                            # Only get control numbers and flatten
                                            "identifier": flatten_identifiers(metadata),
                                            "fulltext_url": url["url"],
                                            "fulltext_url_text": url["link_text"],
                                            "catalogue_url": get_catalogue_url(
                                                metadata["identifier"]
                                            )
                                            # Could also add in data from bibliographicCitation
                                            # Although the types used in citations seem to vary by work and format.
                                        }
                                        ndjson_file.write(f"{json.dumps(work)}\n")
                # The nextStart parameter is used to get the next page of results.
                # If there's no nextStart then it means we're on the last page of results.
                try:
                    start = data["category"][0]["records"]["nextStart"]
                except KeyError:
                    start = None
                pbar.update(len(items))
```

+++

## Enrich dataset using embedded metadata

+++

```python
def get_work_data(url):
    """
    Extract work data in a JSON string from the work's HTML page.
    """
    try:
        response = s.get(url)
    except requests.exceptions.InvalidURL:
        response = s.get(url.replace("\\\\", "//"))
    try:
        work_data = re.search(
            r"var work = JSON\.parse\(JSON\.stringify\((\{.*\})", response.text
        ).group(1)
    except AttributeError:
        work_data = "{}"
    if not response.from_cache:
        time.sleep(0.2)
    return json.loads(work_data)


def get_pages(work):
    """
    Get the number of pages from the work data.
    """
    try:
        pages = len(work["children"]["page"])
    except KeyError:
        pages = 0
    return pages


def get_volumes(parent_id):
    """
    Get the ids of volumes that are children of the current record.
    """
    start_url = "https://nla.gov.au/{}/browse?startIdx={}&rows=20&op=c"
    # The initial startIdx value
    start = 0
    # Number of results per page
    n = 20
    parts = []
    # If there aren't 20 results on the page then we've reached the end, so continue harvesting until that happens.
    while n == 20:
        # Get the browse page
        response = s.get(start_url.format(parent_id, start))
        # Beautifulsoup turns the HTML into an easily navigable structure
        soup = BeautifulSoup(response.text, "lxml")
        # Find all the divs containing issue details and loop through them
        details = soup.find_all(class_="l-item-info")
        for detail in details:
            title = detail.find("h3")
            if title:
                issue_id = title.parent["href"].strip("/")
            else:
                issue_id = detail.find("a")["href"].strip("/")
            # Get the issue id
            parts.append(issue_id)
        if not response.from_cache:
            time.sleep(0.2)
        # Increment the startIdx
        start += n
        # Set n to the number of results on the current page
        n = len(details)
    return parts


def add_pages():
    """
    Add the number of pages to the metadata for each work.
    Add volumes from multi volume books.
    """
    total = sum(1 for _ in open('pp-metadata.ndjson'))
    with Path("pp-metadata.ndjson").open("r") as ndjson_in:
        with Path("pp-metadata-pages.ndjson").open("w") as ndjson_out:
            for line in tqdm(ndjson_in, total=total):
                work = json.loads(line)
                # print(book['fulltext_url'])
                metadata = get_work_data(work["fulltext_url"])
                # Some ids are for sections (articles) rather than the complete publications
                # ignore these as we should already have the complete publication.
                trove_id = re.search(r"(nla\.obj\-\d+)", work["fulltext_url"]).group(1)
                if trove_id == metadata.get("pid"):
                    form = metadata.get("form")
                    pages = get_pages(metadata)
                    title = metadata.get("title")
                    sub_unit = metadata.get("subUnitNo", "")
                    work["pages"] = pages
                    work["format"].append(form)
                    # Sometimes the work record has the subunit as its title, eg PP no. 5
                    # I'm hoping this will get better titles
                    if title and (work["title"] == sub_unit):
                        work["title"] = title
                    work["sub_unit"] = sub_unit
                    work["parent"] = ""
                    work["parent_url"] = ""
                    work["children"] = ""
                    # Multi volume books are containers with child volumes
                    # so we have to get the ids of each individual volume and process them
                    if pages == 0 and form in ["Multi Volume Book", "Journal"]:
                        # Get child volumes
                        volumes = get_volumes(trove_id)
                        # For each volume get details and add as a new book entry
                        for volume_id in volumes:
                            volume = work.copy()
                            # Add link up to the container
                            volume["parent"] = trove_id
                            volume["parent_url"] = work["work_url"]
                            volume["work_url"] = ""
                            volume["fulltext_url"] = "https://nla.gov.au/{}".format(volume_id)
                            # volume["trove_id"] = volume_id
                            metadata = get_work_data(volume["fulltext_url"])
                            if vol_title := metadata.get("title"):
                                volume["title"] = vol_title
                            volume["sub_unit"] = " ".join(
                                [metadata.get("subUnitType", ""), metadata.get("subUnitNo", "")]
                            ).strip()
                            if not volume["rights"] and (vol_rights := metadata.get("copyrightPolicy", "")):
                                volume["rights"] = vol_rights
                            if not volume["date"] and (date := re.search(r"\b(\d{4})$", metadata.get("issueDate", ""))):
                                volume["date"] = date.group(1)
                            
                            pages = get_pages(metadata)
                            volume["format"].append(metadata.get("form"))
                            volume["pages"] = pages
                            # print(volume)
                            ndjson_out.write(f"{json.dumps(volume)}\n")
                        # Add links from container to volumes
                        work["children"] = "|".join(volumes)
                else:
                    work["parent"] = metadata.get("pid", "")
                # print(book)
                ndjson_out.write(f"{json.dumps(work)}\n")
```

```{code-cell} ipython3

```
