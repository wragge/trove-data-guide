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

# HOW TO: Harvest data relating to digitised resources

Harvesting data relating to digitised resources (other than newspapers) in Trove is not as simple as making a few API requests. The major problem is that digitised resources are often assembled into groups or collections, and the full details of these groupings are not available through the Trove API. This means that simply harvesting results from an API query will miss many digitised resources. In addition, the way resources are described and arranged is often inconsistent, so you can't assume that a particular type of resource will be grouped in a particular way.

As a result of these problems, a 'belts and braces' approach seems best – follow every possible route and harvest as many records as possible. This may result in duplicates, but these can be dealt with later. In any case, Trove already contains a large number of duplicate records for digitised resources, so some form of merging or de-duplication will always be required.

## Outline of harvesting method

This method works currently with multi-page publications like books and parliamentary papers. A few adjustments will be necessary for other resource types.

### Harvest metadata from API

Searches using the API return work-level records. Sometimes digitised resources are grouped as versions of a work, even though they're quite different. To make sure you get everything, you need to work your way down through through the hierarchy of work -> version -> sub-version (labelled 'record' in API responses), harvesting every relevant record.

- get work records from search results
- get version/sub-version records from each work
- loop through all versions/sub-versions checking to see if they have an NLA fulltext link (indicating that a digitised version is available)
- if they do, get the metadata from the sub-version and add to dataset
    - sometimes records will have multiple fulltext urls, if so, add a record for each url to the dataset
    - sometimes sub-versions don't have fulltext links but the parent version does – if so add fulltext links from parent version to sub-version metadata

### Expand collections and enrich dataset using embedded metadata

As noted in [](/other-digitised-resources/how-to/extract-embedded-metadata), most of Trove's digitised resource viewers embed useful metadata in the HTML of their web pages. You can use this to determine whether a fulltext url points to a single resource or a collection, and to enrich the metadata you obtained from the API.

- scrape metadata from the page returned by each fulltext url in the dataset
- if the metadata doesn't include a list of pages then it's probably a collection page
    - if so [harvest a list of collection items](/other-digitised-resources/how-to/get-collection-items) and add them to the dataset
- get the number of pages in the resource (or optionally a list of page identifiers) – this information can be used to download OCRd text and images from a resource
- add or update fields using scraped metadata (eg add sub-unit values)

### Check for 'missing' records

Some of the records in the dataset will represent *parts* of resources, such as the sections of a Parliamentary Paper. The identifiers of the parent resources are added to the child records in the previous processing step. You can check the parent identifiers to make sure they're already included in the dataset.

- compare the list of parent identifiers in the dataset with the fulltext urls
- if a parent identifier is missing, scrape metadata about it and add to the dataset

### Merge/remove duplicates from dataset

The aim of this step is to de-duplicate the harvested records while preserving all the harvested metadata. The result is a dataset with one record for each fulltext url. If there are multiple values in any column, these will merged into a single list.

- identify columns that can contain only one value (eg `fulltext_url`) and create a de-duplicated dataframe containing these columns
- identify columns that could contain multiple values that need to be de-duplicated
- merge values of columns with multiple values into new dataframes
- merge dataframe with single value columns together with all the new dataframes, linking on the `fulltext_url` field

### Download text

- use the number of pages attempt to [download text from publication](/other-digitised-resources/how-to/download-items-text-images)
- if successful add text file name to dataset

### Download images

- use the number of pages or page identifiers to [download page images from a publication](/other-digitised-resources/how-to/download-items-text-images)

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```python
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

def has_holding(holdings, nucs):
    """
    Check if a list of holdings includes one of the supplied nucs.
    """
    for holding in holdings:
        if holding.get("nuc") in nucs:
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

def get_nuc_versions(work, nucs=["ANL", "ANL:DL"]):
    """
    Get the versions from the given work that are held by the NLA.
    """
    versions = []
    for version in work["version"]:
        if "holding" in version and has_holding(version["holding"], ["ANL", "ANL:DL"]):
            versions.append(version)
    return versions


def harvest_works(params, filter_by="url", nucs=["ANL", "ANL:DL"]):
    """
    Harvest metadata relating to digitised works.
    The filter_by parameter selects records for inclusion in the dataset, options:
        * url -- only include versions that have an NLA fulltext url
        * nuc -- only include versions that have an NLA nuc (ANL or ANL:DL)
    """
    default_params = {
        "category": "all",
        "bulkHarvest": "true",
        "n": 100,
        "encoding": "json",
        "include": ["links", "workversions", "holdings"],
    }
    params.update(default_params)
    headers = {"X-API-KEY": API_KEY}
    total = get_total_results(params, headers)
    start = "*"
    with Path("harvested-metadata.ndjson").open("w") as ndjson_file:
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
                        if category == "work":
                            if filter_by == "nuc":
                                versions = get_nuc_versions(record, nucs) 
                            else:
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
                                    urls = get_fulltext_url(metadata.get("identifier", []))
                                    if len(urls) == 0:
                                        urls = get_fulltext_url(version.get("identifier", []))
                                    if len(urls) == 0 and filter_by == "nuc":
                                        urls = [{"url": "", "link_text": ""}]
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
                                            "publisher": get_value(
                                                metadata, "publisher"
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
                                            "spatial": get_value(
                                                metadata, "spatial"
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

+++ {"editable": true, "slideshow": {"slide_type": ""}}

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
    Get the number of pages from the work metadata.
    """
    try:
        pages = len(work["children"]["page"])
    except KeyError:
        pages = 0
    return pages


def get_page_ids(work):
    """
    Get a list of page identifiers from the work metadata.
    """
    try:
        page_ids = [p["pid"] for p in work["children"]["page"]]
    except KeyError:
        page_ids = []
    return page_ids


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


def add_metadata(work, metadata, pages, include_page_ids=False):
    """
    Add embedded metadata to existing record.
    New values will be appended to existing list.
    """
    fields = [
        {"to": "title", "from": "title"},
        {"to": "contributor", "from": "creator"},
        {"to": "publisher", "from": "publisherName"},
        {"to": "format", "from": "form"},
        {"to": "rights", "from": "copyrightPolicy"},
        {"to": "extent", "from": "extent"},
        {"to": "identifier", "from": "holdingNumber"},
    ]
    for field in fields:
        value_from = metadata.get(field["from"])
        if value_from:
            try:
                if value_from not in work[field["to"]]:
                    work[field["to"]].append(metadata.get(field["from"]))
            except KeyError:
                work[field["to"]] = [metadata.get(field["from"])]
            except AttributeError:
                if value_from != work[field["to"]]:
                    work[field["to"]] = [work[field["to"]], metadata.get(field["from"])]
    work["sub_unit"] = " ".join(
        [
            metadata.get("subUnitType", ""),
            metadata.get("subUnitNo", ""),
        ]
    ).strip()
    if date := re.search(r"\b(\d{4})$", metadata.get("issueDate", "")):
        work["date"] = date.group(1)
    work["pages"] = pages
    if include_page_ids:
        work["page_ids"] = get_page_ids(metadata)
    return work


def add_pages(include_page_ids=False):
    """
    Add the number of pages to the metadata for each work.
    Add volumes from multi volume books.
    """
    total = sum(1 for _ in open("pp-metadata.ndjson"))
    with Path("harvested-metadata.ndjson").open("r") as ndjson_in:
        with Path("harvested-metadata-pages.ndjson").open("w") as ndjson_out:
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
                    work = add_metadata(work.copy(), metadata, pages, include_page_ids)
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
                            volume = {
                                # Use values from parent
                                # If there are additional values in embedded metadata,
                                # they'll be added by add_metadata() below
                                "format": work["format"],
                                "subject": work["subject"],
                                "language": work["language"],
                                "is_part_of": work["is_part_of"],
                                "identifier": work["identifier"],
                                # Add link up to parent
                                "parent": trove_id,
                                "parent_url": work["work_url"],
                                # Because this is a collection child it has no work url.
                                # If there's an individual record for this publication
                                # it'll be separately harvested and merged later.
                                "work_url": "",
                                "fulltext_url": "https://nla.gov.au/{}".format(
                                    volume_id
                                ),
                            }
                            metadata = get_work_data(volume["fulltext_url"])
                            pages = get_pages(metadata)
                            volume = add_metadata(
                                volume, metadata, pages, include_page_ids
                            )
                            # print(volume)
                            ndjson_out.write(f"{json.dumps(volume)}\n")
                        # Add links from container to volumes
                        work["children"] = "|".join(volumes)
                else:
                    work["parent"] = metadata.get("pid", "")
                # print(book)
                ndjson_out.write(f"{json.dumps(work)}\n")
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Check for missing resources

```python

def get_missing_metadata(include_page_ids=False):
    df = pd.read_json("harvested-metadata-pages.ndjson", lines=True, convert_dates=False)
    parent_ids = list(df["parent"].unique())
    fulltext_urls = list(df["fulltext_url"].unique())
    fulltext_ids = [f.split("/")[-1] for f in fulltext_urls]
    missing_ids = [m for m in list(set(parent_ids) - set(fulltext_ids)) if m != ""]
    with Path("harvested-metadata-pages.ndjson").open("a") as ndjson_out:
        for mid in tqdm(missing_ids):
            fulltext_url = f"https://nla.gov.au/{mid}"
            metadata = get_work_data(fulltext_url)
            work = {
                "fulltext_url": fulltext_url,
            }
            pages = get_pages(metadata)
            work = add_metadata(work, metadata, pages, include_page_ids)
            ndjson_out.write(f"{json.dumps(work)}\n")
```

+++

## Merge duplicate records

```python

def merge_column(columns):
        values = []
        for value in columns:
            if isinstance(value, list):
                values += [str(v) for v in value if v]
            elif value:
                values.append(str(value))
        return " | ".join(sorted(set(values)))

def merge_records(df):
    df["pages"].fillna(0, inplace=True)
    df.fillna("", inplace=True)
    df["pages"] = df["pages"].astype("Int64")

    # Add base dataset with columns that will always have only one value
    dfs = [
        df.loc[df["pages"] > 0][
            ["fulltext_url", "pages", "sub_unit", "text_file"]
        ].drop_duplicates()
    ]

    # Columns that potentially have multiple values which will be merged
    columns = [
        "title",
        "work_url",
        "work_type",
        "contributor",
        "publisher",
        "date",
        "type",
        "format",
        "extent",
        "language",
        "subject",
        "spatial",
        "is_part_of",
        "identifier",
        "rights",
        "fulltext_url_text",
        "catalogue_url",
        "parent",
        "parent_url",
        "children",
    ]

    # Merge values from each column in turn, creating a new dataframe from each
    for column in columns:
        dfs.append(
            df.groupby(["fulltext_url"])[column].apply(merge_column).reset_index()
        )

    # Merge all the individual dataframes into one, linking on `text_file` value
    df_merged = reduce(
        lambda left, right: pd.merge(left, right, on=["fulltext_url"], how="left"), dfs
    )
    return df_merged

df = pd.read_json("harvested-metadata-pages-text.ndjson", lines=True, convert_dates=False)

df_merged = merge_records(df)
```

```{code-cell} ipython3

```
