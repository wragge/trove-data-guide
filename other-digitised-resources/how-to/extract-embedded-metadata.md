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

# HOW TO: Extract additional metadata from the digitised resource viewer

````{card}
On this page


```{contents}
:local:
:backlinks: None
```
````

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

## What metadata is available?

The available metadata varies by viewer and format. The main differences are:

- the image viewer includes information about digitised images in the `copies` field
- the books and journals viewer includes information in the `children` field about individual pages and sub-sections such as chapters and articles

### All viewers

All of the viewers embed some basic metadata, like `id` and `title`, at the top level of the JSON data. However, the actual fields can vary by format and viewer type, so don't assume that a particular field exists, or has a value. Here's an example from an issue of *Walkabout*.

```json
    "id": "71404117",
    "collection": "nla.aus",
    "type": "work",
    "form": "Journal",
    "displayTitlePage": "false",
    "subType": "book",
    "issueDate": "Sun, 02 Dec 1934",
    "subUnitNo": "Vol. 1 No. 2 (2 December 1934)",
    "bibLevel": "Item",
    "bibId": "2592481",
    "holdingNumber": "Nq 919.4 WAL",
    "pid": "nla.obj-714041173",
    "title": "Walkabout.",
    "accessConditions": "Unrestricted",
    "copyrightPolicy": "Out of Copyright",
    "recordSource": "NLACat",
    "sensitiveMaterial": "No",
    "commentsExternal": "Some pages in this issue have been restricted. This may affect left/right page sequencing. Some loss of text in gutter due to page edges stitched into gutter at binding process",
    "digitalStatus": "Captured",
    "startDate": "01 January 1934",
    "creator": "",
    "extent": "v. : ill., maps. ; 34 cm.",
    "isMissingPage": "false",
    "publisherName": "Australian National Travel Association",
```

There's also a `topLevelCollection` field that contains the `nla.obj` identifier of the parent record in this collection. If it's a single item (ie a collection of one) then `topLevelCollection` will probably be the same as the item identifier in `pid`.

All of the viewers also embed a JSON-ified MARC record in the `marcData` field.

### Image and map viewer

The image and map viewer includes a `copies` field at the top level of the JSON data. This field includes a list of the images associated with this item. Here's an example from [nla.obj-133327370](http://nla.gov.au/nla.obj-133327370):

```json
"copies": [
    {
        "copyrole": "access",
        "blobId": 146939732,
        "filename": "314560922.jp2",
        "filesize": 6663187,
        "technicalmetadata": {
            "width": 8566,
            "height": 12449
        }
    },
    {
        "copyrole": "m",
        "access": "false",
        "filesize": 745416848
    }
],
```

The 'copies' of the image are different formats or resolutions created for specific purposes, such as access or preservation. Apparently `copyrole` values can be one of`access`, `m`, `o`, `i`, or `fd`, but I've only come across `access` and `m`. The `m` copies seem to refer to high-resolution TIFFs, and if `access` is set to `true` then these TIFF versions are made available for download. You can find downloadable TIFFs amongst the digitised maps. For example, [this map](https://nla.gov.au/nla.obj-232162256) has `access` set to `true` for the `m` copy:

```json
"copies": [
    {
        "copyrole": "access",
        "blobId": 7682805,
        "filename": "23216230.jp2",
        "filesize": 1560253,
        "technicalmetadata": {
            "width": 4519,
            "height": 5508
        }
    },
    {
        "copyrole": "m",
        "access": "true",
        "filesize": 74685872
    }
],
```

The map viewer reads this value and adds a TIFF option under the download tab. If `access` is `true` you can also download the high-resolution TIFF directly by adding `/m` to the item identifier (though take note of the file size as the downloads can be huge!): 

<a href="https://nla.gov.au/nla.obj-232162256/m">https://nla.gov.au/nla.obj-232162256/m</a>

### Books and journals viewer

The books and journals viewer has a `children` field in the top-level JSON data which includes `page`, `article`, and `chapter` fields.

#### Pages

The `page` field contains details of every page image. Here's the metadata for a single page in the book *The story of the Australian bushrangers*:

```json
{
    "id": "48661387",
    "subType": "page",
    "title": "The story of the Australian bushrangers",
    "bibId": "1068148",
    "pid": "nla.obj-486613874",
    "form": "Book",
    "accessConditions": "Unrestricted",
    "copyrightPolicy": "Out of Copyright",
    "bibLevel": "Part",
    "digitalStatus": "Captured",
    "holdingNumber": "NL 343.94 BOX",
    "copies": [
        {
            "copyrole": "access",
            "blobId": 15236579,
            "filename": "48661395.jp2",
            "filesize": 506342,
            "technicalmetadata": {
                "width": 2335,
                "height": 3495
            }
        },
        {
            "copyrole": "m",
            "access": "false",
            "filesize": 24482931
        }
    ]
}

```

While some of these fields duplicate what's available at the top-level of the metadata, the `pid` here is the identifier of this particular page. This identifier can be used to download the page image and [OCR data](/other-digitised-resources/how-to/get-ocr-layout-data).

Each page has a `copies` field describing the available image versions. The image dimensions of the `access` copy included in the `technicalmetadata` field can be useful if you want [to use the OCR data to crop sections out of the page image](other-digitised:ocr-data:crop-images).

(digitised:howto:embedded-metadata:articles)=
#### Articles

Periodical issues can include a list of articles in the `article` field. Here's an example of an article entry from *Walkabout*:

```json
{
    "id": "75337488",
    "subType": "article",
    "pid": "nla.obj-753374885",
    "title": "A Visit to Lake Frome",
    "creator": "By ARTHUR W. UPFIELD",
    "bibLevel": "Section",
    "existson": [
        {
            "id": "71404264",
            "page": "nla.obj-714042646"
        },
        {
            "id": "71404251",
            "page": "nla.obj-714042515"
        },
        {
            "id": "71404232",
            "page": "nla.obj-714042324"
        },
        {
            "id": "71404219",
            "page": "nla.obj-714042196"
        }
    ]
}

```

Articles have their own values for `pid`, `title`, and `creator` (if the article has a byline). The `existson` field lists the pages on which this article appears. This article starts on page `nla.obj-714042646`.

#### Chapters

Books can include a list of chapters in the `chapter` field. Here's an example of a chapter entry from *The story of the Australian bushrangers*:

```json
{
    "id": "49622020",
    "subType": "chapter",
    "subUnitNo": "2",
    "title": "PREFACE.",
    "pid": "nla.obj-496220207",
    "bibLevel": "Section",
    "existson": [
        {
            "id": "48661510",
            "page": "nla.obj-486615102"
        },
        {
            "id": "48661523",
            "page": "nla.obj-486615233"
        }
    ]
}
```

Chapters have their own values for `pid` and `title`, while the `subUnitNo` specifies the order of the chapters. The `existson` field lists the pages on which this chapter appears.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(digitised:howto:embedded:extract-metadata)=
## Extracting the metadata

The function to extract the metadata is fairly straightforward. It loads the viewer's HTML code and uses a regular expression to find and extract the embedded JSON string. It expects an `nla.obj` identifier. For the image and map viewers, this is the identifier of an individual item. For the book and journal viewer you can use the `nla.obj` identifier for the book, issue, page, or article. This is because page and article identifiers are redirected to issues. Here's a full examp[le that extracts the embedded metadata for the book [*Lord Robert Cecil's gold fields diary*](https://nla.gov.au/nla.obj-362059651).

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


book_id = "https://nla.gov.au/nla.obj-362059651/"

metadata = get_metadata(book_id)

display(metadata)
```

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

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(digitised:howto:embedded:pages)=
## Get information about pages

+++ {"editable": true, "slideshow": {"slide_type": ""}}

Books and periodical issues should include `page` data in the `children` field. To find the number of pages, you just need to get the length of the `page` list.

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

Here's a function you can use to get the dimensions of the `access` copy of a page. Note, however, that the downloadble versions of page images seem to limited to a maximum of 5000 pixels on the longest dimension. It's important to know the difference between the size of the `access` copy and the downloaded page if you're going to make use of [the page's OCR layout data](get-ocr-layout-data.md).

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
def get_page_size(page_id):
    """
    Get the dimensions of a page image from embedded metadata.
    """
    metadata = get_metadata(page_id)
    for page in metadata["children"]["page"]:
        if page["pid"] == page_id:
            for copy in page["copies"]:
                if copy["copyrole"] == "access":
                    break
    return copy["technicalmetadata"]

get_page_size("nla.obj-362059904")
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(digitised:howto:embedded:articles)=
## Get a list of articles in a periodical issue

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
from IPython.display import Markdown
issue_id = "nla.obj-714041173"

issue_metadata = get_metadata(issue_id)
md = ""
for article in issue_metadata["children"]["article"]:
    md += f"* [{article['title']}](https://nla.gov.au/{article['pid']})\n"
display(Markdown(md))
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(digitised:howto:embedded:images)=
## Get information about images and maps

The digitised image and map viewers include information about digitised images in the `copies` field. This function returns the details of the image with the specified role – defaulting to the `access` version.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
def get_image_copy(image_id, role="access"):
    """
    Get image copy details for a particular copy role.
    """
    metadata = get_metadata(image_id)
    for copy in metadata["copies"]:
        if copy["copyrole"] == role:
            return copy

get_image_copy("nla.obj-232162256")
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

You might want to check whether a high-resolution TIFF version is available for download. To do this you would look for a version with a `copyrole` value set to `m`. You can then check the `access` value to see whether it is set to `true` (can be downloaded) or `false` (can't be downloaded).

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
tiff_copy = get_image_copy("nla.obj-232162256", role="m")

if tiff_copy["access"] == "true":
    download_url = "https://nla.gov.au/nla.obj-232162256/m"
    print(f"Download: {download_url}")
else:
    print("Cannot be downloaded")
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```
