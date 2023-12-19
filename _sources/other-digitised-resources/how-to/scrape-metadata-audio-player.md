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

# HOW TO: Scrape metadata from the Trove audio player

````{margin}
```{seealso}
For an example of this code in action see the GLAM Workbench notebook [Harvest oral histories metadata](https://glam-workbench.net/trove-music/harvest-oral-histories/).
```
````

Trove's audio player displays some metadata that isn't included in the API records. This can include:

- a descriptive note with the date and place of the recording
- a note about the availability of transcript
- roles of the people involved – ie 'interviewer' and 'interviewee'

The `scrape_metadata()` function below retrieves the audio player page from an oral history's digital object url and uses BeautifulSoup to find and extract the metadata.

For example, the 'Listen' link from [this oral history record](https://trove.nla.gov.au/work/245550803) goes to the url <https://nla.gov.au/nla.obj-220905784> which opens the audio player. In the API, the digital object url will be in the `identifier` field of the work or version, with a `linktype` of "fulltext".

```json
    "type": "url",
    "linktype": "fulltext",
    "value": "https://nla.gov.au/nla.obj-220905784"
```

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F245550803%3Fencoding%3Djson%26include%3Dworkversions%2Clinks%2Choldings&comment=)

Just give the `scrape_metadata()` function the digital object url and it will return the metadata as a Python dictionary with the following fields:

- `catalogue_url` – url of the NLA catalogue record for this oral history
- `identifier` – NLA identifier for this oral history
- `description`
- `extent`
- `notes`
- `contributor`

The fields `description`, `extent`, and `contributor` can have multiple values and are returned as lists.

```{code-cell} ipython3
import re

import requests
from bs4 import BeautifulSoup


def scrape_metadata(url):
    """
    Scrape metadata about an oral history from the audio player page.
    """
    response = requests.get(url)
    # If this is a collection page you'll get a 404
    if response.status_code != 200:
        return {}
    soup = BeautifulSoup(response.text)
    # Get the metadata container
    details = soup.find("div", class_="workdetails")
    if not details:
        return {}
    # Get link to NLA catalogue
    catalogue = details.find("section", class_="catalogue")
    catalogue_link = catalogue.find("a", href=re.compile("nla.cat-vn"))["href"]
    # Get oral history id
    oral_history_id = ""
    for string in catalogue.stripped_strings:
        if string.startswith("ORAL TRC"):
            oral_history_id = string
    # Get extent, description and notes
    extent = []
    description = []
    for section in details.find_all("section", class_="extent"):
        if section.string.startswith("Recorded"):
            description.append(section.string.strip())
        else:
            extent.append(section.string)
    try:
        notes = details.find("section", class_="notes").string
    except AttributeError:
        notes = ""
    # Get contributors and role
    contributors = []
    for div in details.find_all("div", class_="contributor"):
        role = div.find("span", class_="role")
        if role:
            contributors.append(f"{list(div.stripped_strings)[0]} {role.string}")
        else:
            contributors.append(f"{list(div.stripped_strings)[0]}")
    return {
        "catalogue_url": catalogue_link,
        "identifier": oral_history_id,
        "description": description,
        "extent": extent,
        "notes": notes,
        "contributor": contributors,
    }
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
scrape_metadata("https://nla.gov.au/nla.obj-220905784")
```
