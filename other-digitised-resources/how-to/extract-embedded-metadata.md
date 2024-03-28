---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.16.1
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

This metadata can be useful in a number of different contexts. For example, you can extract the number of pages in a digitised book, then use this number to [automatically download the full text or a PDF](download-items-text-images). The GLAM Workbench includes an example where geospatial coordinates are extracted from the MARC data to add to a [harvest of digitised maps](https://glam-workbench.net/trove-maps/exploring-digitised-maps/).

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


def get_metadata(id):
    """
    Extract work data in a JSON string from the work's HTML page.
    """
    if not id.startswith("http"):
        id = "https://nla.gov.au/" + id
    response = requests.get(id)
    try:
        work_data = re.search(
            r"var work = JSON\.parse\(JSON\.stringify\((\{.*\})", response.text
        ).group(1)
    except AttributeError:
        work_data = "{}"
    return json.loads(work_data)
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [output_scroll]
---
work_id = "https://nla.gov.au/nla.obj-362059651/"

metadata = get_metadata(work_id)

display(metadata)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Get information about pages

+++ {"editable": true, "slideshow": {"slide_type": ""}}

Depending on the format, the `children` field can contain information about pages, chapters, and articles contained within the digitised work. Books and periodical issues should include `page` data. To find the number of pages, you just need to get the length of the `page` list.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
# How many pages are there?
len(metadata["children"]["page"])
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

If you want to get the identifiers for each individual page, just loop through the list of pages saving the `pid` value.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
page_ids = [p["pid"] for p in metadata["children"]["page"]]
page_ids[:5]
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

These page identifiers can be used to download images of the pages.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Get MARC catalogue data

+++ {"editable": true, "slideshow": {"slide_type": ""}}

The MARC data is contained in the `marcData` field. This field can contain multiple records – the main metadata is contained in the record which has `type` set to `Bibliographic` in the `leader` field. 

Tools like [PyMARC](https://pymarc.readthedocs.io/en/latest/index.html) can help you get information from MARC records, however, Trove's `marcData` isn't in a format that PyMARC recognises. The function below finds the `Bibliographic` record and restructures the data for use with PyMARC.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
import json

from pymarc import JSONReader


def parse_marc(metadata):
    """
    Parse the bibliographic MARC data in the embedded metadata.
    This produces a structure that can be loaded into PyMarc's JSON reader.
    """
    # Some nla.obj items don't have MARC data
    # For example some collections
    try:
        records = metadata["marcData"]["record"]
    except KeyError:
        return {}

    # The metadata contains bibliographic and holdings MARC data
    # here we'll select the bib record.
    for record in records:
        if record["leader"].get("type") == "Bibliographic":
            break

    fields = []
    # Control fields only have content, no subfields
    for cf in record.get("controlfield", []):
        fields.append({str(cf["tag"]): str(cf["content"])})

    # Loop through all the fields
    for field in record["datafield"]:
        subfields = []
        # Get any subfields
        sfs = field.get("subfield", [])
        # The subfields value can be a list or dict
        # Check if it's a list
        if isinstance(sfs, list):
            # Loop through the subfields adding the values
            for sf in sfs:
                subfields.append({sf["code"]: str(sf["content"])})
        # If it's not a list just add the details from the dict
        else:
            subfields.append({sfs["code"]: str(sfs["content"])})
        fields.append(
            {
                str(field["tag"]): {
                    "subfields": subfields,
                    "ind1": field["ind1"],
                    "ind2": field["ind2"],
                }
            }
        )

    return [{"leader": record["leader"]["content"], "fields": fields}]
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

First you extract the MARC data and restructure it for use with PyMARC.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
marc_json = parse_marc(metadata)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

Then you can load the MARC data into PyMARC.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
# PyMARC expects a JSON string so we dump it to a string first
reader = JSONReader(json.dumps(marc_json))
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

To retrieve a value from PyMARC you need to know the [MARC tag and subfield](https://www.loc.gov/marc/bibliographic/) for the field you’re interested in.  For example, the main title of a work is in MARC tag `245`, subfield `a`.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
for record in reader:
    print(record["245"]["a"])
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

The subfield `c` contains a 'statement of responsibility'.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
for record in reader:
    print(record["245"]["c"])
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

PyMARC also includes some handy shortcuts to save you having to remeber all the codes.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
for record in reader:
    print(record.title)
    print(record.author)
    print(record.publisher)
    print(record.pubyear)
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```
