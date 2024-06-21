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

# Accessing data from digitised resources

````{card}
On this page

```{contents}
:local:
:backlinks: None
```
````

Trove's digitised resources are delivered in a number of different ways depending on their format and arrangement. See [](whatis:interfaces:digitised) and [](/accessing-data/using-web-interface) for hints on using digitised resources through Trove's web interface. 

Access to machine-readable data is even more complicated. The Trove API provides limited information about digitised resources, necessitating a variety of hacks and workarounds. Nonetheless, there are some methods of accessing data from digitised resources that work reliably across multiple formats. These are described below.

For more specific information relating to particular formats see:

- [Accessing data from oral histories](oral-histories/accessing-data.md)
- [Accessing data from periodicals](periodicals/accessing-data.md)

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
# Let's import the libraries we need.
import os
import requests
from dotenv import load_dotenv
load_dotenv()
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
# Insert your Trove API key
YOUR_API_KEY = "YOUR API KEY"

# Use api key value from environment variables if it is available
if os.getenv("TROVE_API_KEY"):
    YOUR_API_KEY = os.getenv("TROVE_API_KEY")
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Metadata

There are three main sources of machine-readable metadata describing digitised resources:

- search results delivered by the Trove API
- individual work/version records delivered by the Trove API
- JSON embedded in the digitised resource viewer

### Search results delivered by the Trove API

[Finding digitised resources](other-digitised:finding) is not straightforward, so it might take some experimentation to build a query that meets your needs. Once you've constructed your search you can [harvest the complete set of results using the Trove API](/accessing-data/how-to/harvest-complete-results). However, because of the way digitised resources are arranged and described, a simple harvest of work records is likely to miss some digitised resources and include duplicate records for others. To construct a dataset of digitised resources that is as complete as possible and yet contains no duplicates, you need to join a number of different processing steps together. **This strategy is described in detail in [](/other-digitised-resources/how-to/harvest-digitised-resources).**

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Work/version records delivered by the Trove API

You can request information about an individual work using the Trove API's `/work` endpoint. For example, the pamphlet [The gold-finder of Australia : how he went, how he fared, how he made his fortune](https://trove.nla.gov.au/work/9453675) has the work identifier `9453675`. You can request metadata about it using the url:

`https://api.trove.nla.gov.au/v3/work/9453675?encoding=json&reclevel=full`

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F9453675%3Fencoding%3Djson%26reclevel%3Dfull&comment=)

The link to view a digitised item in one of Trove's [digitised resource viewers](whatis:interfaces:digitised) is contained in the `identifier` field. You need to loop through the values in `identifier` looking for one that has `linktype` set to `fulltext` and a url that contains `"nla.obj"`. For example:

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
import requests

headers = {"X-API-KEY": YOUR_API_KEY}

response = requests.get("https://api.trove.nla.gov.au/v3/work/9453675?encoding=json&reclevel=full", headers=headers)
data = response.json()
for url in data["identifier"]:
    if url["linktype"] == "fulltext" and "nla.obj" in url["value"]:
        break
print(url["value"])
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

Work records can combine metadata from digitised and non-digitised versions, so the information in the top-level record might not accurately represent what's been digitised. For example, the API response for *The gold-finder of Australia* gives the date of the publication as `1853-1973`, munging together the original publication date and the date of a later reproduction. For this reason, you will probably want to access the individual version records for any work that includes digitised resources. You do this by setting the `include` parameter to `workVersions`:

`https://api.trove.nla.gov.au/v3/work/9453675?encoding=json&reclevel=full&include=workVersions`

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F9453675%3Fencoding%3Djson%26reclevel%3Dfull%26include%3DworkVersions&comment=)

What if you only have the `nla.obj` identifier rather than the work identifier? There’s no direct way to look up additional metadata describing a digitised resource from the API endpoint using its `nla.obj` identifier. To find a corresponding work record, you have to search for the digital object identifier using the `/result` endpoint. This is not an exact search, and will match the identifier wherever it appears in a record. As a result, it’s possible there might be multiple results requiring some manual checking. Setting `l-availability` to `y` should help narrow things down. Here's an API search for *The gold-finder of Australia* using its identifier `"nla.obj-248742150"`.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22nla.obj-248742150%22%26category%3Dbook%26encoding%3Djson%26l-availability%3Dy&comment=)

### JSON embedded in the digitised resource viewer

Trove's [digitised resource viewers](/what-is-trove/interfaces) display limited metadata about each item. But there's more useful metadata embedded as a JSON string in the HTML code of the page. **Methods for accessing and using this metadata are fully documented in [](/other-digitised-resources/how-to/extract-embedded-metadata), but here's a quick summary.**

To access the embedded metadata you need to load the digitised viewer and then scrape the JSON string from the HTML code. The actual metadata available depends on the format of the resource, but can include:

- lists of pages in digitised books and periodicals, including individual page identifiers
- lists of articles in a periodical issue
- details of digitised images, including pixel dimensions
- complete MARC records from the NLA catalogue

This metadata can be used to enrich and expand records provided by the Trove API, but it also opens up a number of new possibilities. For example, by accessing information about pages in a book or periodical you can [automate the download of OCRd text or images](/other-digitised-resources/how-to/download-items-text-images).

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Collections

````{margin}
```{seealso}
The GLAM Workbench notebook [Download a collection of digitised images](https://glam-workbench.net/trove-images/download-image-collection/) uses this method to find and download all the images in a collection or finding-aid.
```
````

The NLA’s digitised resources are often presented as 'collections'. A collection could be the volumes in a multi-volume work, the issues of a periodical, a map series, an album of photographs, or a manuscript collection. While you can use the `magazine/title` API endpoint to get a list of issues from a periodical, there’s no way to get the contents of other types of collections from the Trove API.

To get machine-readable information about the members of a digitised collection you need to extract information from the browse window of Trove's digitised collection viewer. **This method is fully documented in [](how-to/get-collection-items).**

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(digitised:accessing-data:text)=
## Text

Digitised publications like books, pamphlets, and periodicals usually make their contents available as plain text, extracted from the digitised pages using Optical Character Recognition (OCR). There are two main ways of accessing OCRd text computationally:

- construct download links for a complete publication or range of pages
- download OCR data for a single page

(digitised:accessing-data:download-text-link)=
### Construct download links for a complete publication or range of pages

**This method is fully documented in [](how-to/get-downloads), but here's a quick summary.**

To download the complete OCRd text of a single publication you need to know the number of pages in the publication. This can be found by [extracting the metadata](/other-digitised-resources/how-to/extract-embedded-metadata) embedded in the digitised book and journal viewer and [getting the length of the `page` list](digitised:howto:embedded:pages).

You can then construct a url to download the OCRd text using the publications `nla.obj` identifier and the total number of pages:

`https://nla.gov.au/[NLA.OBJ ID]/download?downloadOption=ocr&firstPage=0&lastPage=[TOTAL PAGES - 1]`

Note that the `lastPage` parameter is set to the total number of pages, minus one. This is because page numbering starts at zero. For example, [this issue](https://nla.gov.au/nla.obj-326379450) of *Pacific Islands Monthly* contains 164 pages, so the url to download the complete OCRd text would be:

<a href="https://nla.gov.au/nla.obj-326379450/download?downloadOption=ocr&firstPage=0&lastPage=163">https://nla.gov.au/nla.obj-326379450/download?downloadOption=ocr&firstPage=0&lastPage=163</a>

You can use the same url pattern to download OCRd text from any range of pages. For example, to download text from the first five pages of a publication, you'd set `firstPage` to `0` and `lastPage` to `4`. To download text from page two, you'd set both `firstPage` and `lastPage` to `1`.

(digitised:accessing-data:ocr)=
### Download OCR data for a single page

**This method is fully documented in [](how-to/get-ocr-layout-data), but here's a quick summary.**

If you know the `nla.obj` identifier of a specific page in a digitised publication, you can access machine-readable information about the OCR process by simply adding `/ocr` to the identifier url. For example, this [page](http://nla.gov.au/nla.obj-326405522) in *Pacific Islands Monthly* has the identifier `nla.obj-326405522`. To retrieve the OCR data you just add `/ocr` to the identifier: 

<a href="http://nla.gov.au/nla.obj-326405522/ocr">http://nla.gov.au/nla.obj-326405522/ocr</a>

To find the `nla.obj` identifiers for all the pages in a publication, you can [access the metadata](/other-digitised-resources/how-to/extract-embedded-metadata) embedded in the digitised book and journal viewer and then [extract the page identifiers from the `page` list](digitised:howto:embedded:pages).

The OCR data is quite complex. It contains information about the position of *every word* on the page. To extract just the text you have to find all the text blocks, then loop through each line and word, stitching them back together as a plain text document. If all you want is the text, the method described above is probably more efficient, but if you're interested in the layout as well as the content of a page, this methods opens up some new possibilities.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(digitised:accessing-data:images)=
## Images and PDFs

Most digitised resources include images you can download. Images can be digitised versions of visual material such as photographs, maps, or artworks, but they can also be scanned copies of pages in a publication or manuscript collection. There are two main methods for accessing digitised images computationally:

- Construct download links for a range of images
- Constructing image urls using `nla.obj` identifiers

In addition, it's possible to extract illustrations from pages of digitised books and periodicals by using data generated through the OCR process.

(digitised:accessing-data:download-images-link)=
### Construct download links for a range of images

**This method is fully documented in [](how-to/get-downloads), but here's a quick summary.**

This method is basically the same as [the method described above](digitised:accessing-data:download-text-link) to download OCRd text, you just need to set the `downloadOption` parameter in the url to either `zip` for images or `pdf` for a PDF. For example, the [E.J. Brady collection of photographs](https://nla.gov.au/nla.obj-141826952) (nla.obj-141826952) contains 14 images, so the url to download the complete collection in a single zip file would be: 

<a href="https://nla.gov.au/nla.obj-141826952/download?downloadOption=zip&firstPage=0&lastPage=13">https://nla.gov.au/nla.obj-141826952/download?downloadOption=zip&firstPage=0&lastPage=13</a>

Similarly, the [The gold finder of Australia : how he went, how he fared, how he made his fortune](https://nla.gov.au/nla.obj-248742150) is a pamphlet with 80 pages, so the url to download it as a PDF would be:

<a href="https://nla.gov.au/nla.obj-248742150/download?downloadOption=pdf&firstPage=0&lastPage=79">https://nla.gov.au/nla.obj-248742150/download?downloadOption=pdf&firstPage=0&lastPage=79</a>

You can also adjust the `firstPage` and `lastPage` to download selected images.

It's important to note that zip files containing multiple images can get very large. If you want to download all the images from publications or collections, you should probably use the method described below to download one image at a time.

(digitised:data:image-urls)=
### Constructing image urls using `nla.obj` identifiers

**This method is fully documented in [](/other-digitised-resources/how-to/download-images). but here's a quick summary.**

If you know the `nla.obj` identifier for a page or image, you can download it simply by adding an `/image` suffix to the identifier url. For example, this [photograph of a group of school children with gardening tools](https://nla.gov.au/nla.obj-141828112) has the identifier `nla.obj-141828112`. To create a direct link to the image, you just add `/image` to the identifier url:

<https://nla.gov.au/nla.obj-141828112/image>


### Extract illustrations from pages of digitised books and periodicals

**This method is fully documented in [](other-digitised:ocr-data:crop-images), but here's a quick summary.**

As described above, if you know the `nla.obj` identifier of a specific page in a digitised publication, you can [access machine-readable information](/other-digitised-resources/how-to/get-ocr-layout-data) about the OCR process by simply adding `/ocr` to the identifier url.

Within the OCR data there are `zs` blocks describing the position of each illustration. You can loop through each of these blocks and use the coordinates to crop the illustrations from the full page image. However, the coordinates in the OCR data are sometimes derived from higher resolution versions of the page images than you can download. To workaround this, you can you can [access the metadata](/other-digitised-resources/how-to/extract-embedded-metadata) embedded in the digitised book and journal viewer, [extract the dimensions](digitised:howto:embedded:pages) of the high-resolution version of the page, and then convert the coordinates to work with the downloadable version.

```{figure} /images/cat-collection.png
:name: cat-collection

Sample from a <a href="https://www.dropbox.com/scl/fo/60imdoyf4ss2b6vh01q1w/h?rlkey=zuwbjaqnmr7qvkuinovdu5ot0&dl=0">collection of cat photos</a> harvested from a search for articles with `cat` or `kitten` in their title [using the GLAM Workbench](https://glam-workbench.net/trove-journals/harvest-illustrations-from-periodicals/)
```
