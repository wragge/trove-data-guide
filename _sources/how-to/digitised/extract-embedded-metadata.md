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

# HOW TO: Extract additional metadata from the web page of a digitised work

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
from myst_nb import glue
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

````{margin}
```{seealso}
This method is also documented in the GLAM Workbench notebook, [Metadata for Trove digitised works](https://glam-workbench.net/trove-books/metadata-for-digital-works/).
```
````

The viewers you use to examine digitised resources in Trove embed some metadata that isn't available through the Trove API. This includes a JSON-ified version of the item's MARC record (presumably copied from the NLA catalogue), as well as structural information used by the viewer itself, such as a list of pages in a digitised book.

This metadata can be useful in a number of different contexts. For example, you can extract the number of pages in a digitised book, then use this number to [automatically download the full text or a PDF](/how-to/digitised/download-items-text-images.md). The GLAM Workbench includes an example where geospatial coordinates are extracted from the MARC data to add to a [harvest of digitised maps](https://glam-workbench.net/trove-maps/exploring-digitised-maps/).

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [output_scroll]
---
import json
import re

import requests
from IPython.display import JSON

work_id = "https://nla.gov.au/nla.obj-362059651/"

# Get the HTML page
response = requests.get(work_id)

# Search for the JSON string using regex
try:
    work_data = re.search(
        r"var work = JSON\.parse\(JSON\.stringify\((\{.*\})", response.text
    ).group(1)
except AttributeError:
    # Just in case it's not there...
    work_data = "{}"
    print("No data found!")

# Load the JSON data
data = json.loads(work_data)

data
```

## Get information about pages

+++

Depending on the format, the `children` field can contain information about pages, chapters, and articles contained within the digitised work. Books and periodical issues should include `page` data. To find the number of pages, you just need to get the length of the `page` list.

```{code-cell} ipython3
# How many pages are there?
len(data["children"]["page"])
```

If you want to get the identifiers for each individual page, just loop through the list of pages saving the `pid` value.

```{code-cell} ipython3
page_ids = [p["pid"] for p in data["children"]["page"]]
page_ids[:5]
```

These page identifiers can be used to download images of the pages.

+++

## Get MARC catalogue data

+++

The MARC data is contained in the `marcData` field. This field can contain multiple records – the main metadata is contained in the `Bibliographic` record. To retrieve a value you need to know the [MARC tag and subfield](https://www.loc.gov/marc/bibliographic/) for the field you're interested in. You can then loop through the `datafield` list until you find the tag and subfield, and extract the value from the `content` field.

The functions below will extract the value of a given MARC tag and subfield from the embedded metadata.

```{code-cell} ipython3
def find_field_content(record, tag, subfield):
    """
    Loop through a MARC record looking for tag/subfield.
    If found, return the subfield value.
    """
    try:
        for field in record["datafield"]:
            if str(field["tag"]) == tag:
                if isinstance(field["subfield"], list):
                    for sfield in field["subfield"]:
                        if sfield["code"] == subfield:
                            return sfield["content"]
                else:
                    if field["subfield"]["code"] == subfield:
                        return field["subfield"]["content"]
    except (KeyError, TypeError):
        pass
    return None


def get_marc_field(work_data, tag, subfield):
    """
    Find the Bibliographic record in the MARC data and find the value
    of a given tag and subfield.
    """
    if "marcData" in work_data and work_data["marcData"]:
        for record in work_data["marcData"]["record"]:
            if record["leader"]["type"] == "Bibliographic":
                value = find_field_content(record, tag, subfield)
                break
    return value
```

For example, the main title of a work is in MARC tag `245`, subfield `a`.

```{code-cell} ipython3
get_marc_field(data, "245", "a")
```

The subfield `c` contains a 'statement of responsibility'.

```{code-cell} ipython3
get_marc_field(data, 245, "c")
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```
