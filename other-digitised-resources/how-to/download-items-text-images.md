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

# HOW TO: Automate the download of digitised items as text, images, or PDFs

+++ {"editable": true, "slideshow": {"slide_type": ""}}

You can download text, images, and PDFs from individual digitised items [using the Trove web interface](/accessing-data/using-web-interface.md). But only the text of periodical articles is available for machine access through the Trove API. This makes it difficult to assemble datasets, or build processing pipelines involving digitised resources. This page documents a series of work arounds that enable you to automate the download of digitised items as text, images, or PDFs.

## Using Trove's download link

When you click on the download button in the web interface, your browser fires off a request to Trove that looks like this:

`https://nla.gov.au/nla.obj-[ID]/download?downloadOption=[FORMAT]&firstPage=[FIRST]&lastPage=[LAST]`

- `[ID]` is the NLA identifier for the current item or collection, for example `nla.obj-3199043190`
- `downloadOption` is the format of the download, it can be one of `ocr`, `pdf`, `zip` (for images), or `tif` (available with some maps)
- `firstPage` and `lastPage` are numbers that define the range of items you want to download – ranges start at `0`, so if a book had fifty pages you'd set `firstPage` to `0` and `lastPage` to `49`.

For example, the book [The pearling disaster, 1899 : a memorial](https://nla.gov.au/nla.obj-33685055/) is identified as `nla.obj-33685055` and has 102 'pages'. Pages in this context actually refers to the images in the digitised version, rather than the number of printed pages in the original work. This is because the digitised version will typically include images of book covers, and endpapers, as well as printed pages. Using this information we can construct a url to download all the OCRd text in the book, setting `lastPage` to `101` (102 - 1), because the numbering starts at `0`:

<https://nla.gov.au/nla.obj-33685055/download?downloadOption=ocr&firstPage=0&lastPage=101>

This method also works with collections of items that don't have numbered pages. For example, [B.A.N.Z. Antarctic Research Expedition photographs](https://nla.gov.au/nla.obj-141170265) is an album containing 151 photographs. To download them all in one PDF, you would construct the following url:

<https://nla.gov.au/nla.obj-141170265/download?downloadOption=pdf&firstPage=0&lastPage=150>

```{note}
If you're downloading a collection of images you might notice that you get the first image twice. This is because the first image is used as a 'cover image' for the collection, as well as being a child of the collection. When you download, you get the collection container and it's contents, so the first image appears twice with different identifiers.
```

This method is consistent across most formats, so you can develop processes that construct urls like these from a list of NLA identifiers and download their contents automatically. But if you want to get the *complete* contents, you need some way of discovering the total number of pages or images to set the `lastPage` value. You can find this value embedded in the code of the web page, though it's location varies:

- in books, periodicals, and other works with consecutive pages it's in a block of embedded JSON metadata
- in collections of images, maps, and manuscripts you need to look for `maxNumOfChildDownloads` variable in the page's Javascript

<mark>==Code example==</mark>

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(download-high-res-images)=
## Downloading high-resolution images individually

The method described above has a couple of problems when it comes to downloading images. The first is that all the requested images are delivered in a single `zip` file. If you're requested images of all the pages in a book, this file could get very large. The second problem is that the built-in download link doesn't always provide images at the highest possible resolution.

An alternative approach that avoids both of these problems is to construct a url for each individual page. All you need to do this is get the page identifier and tack `/image` on the end of the url.

For example, this [cute picture of a penguin](http://nla.gov.au/nla.obj-141171324) has the identifier `http://nla.gov.au/nla.obj-141171324`. To download a high-resolution version, just add `/image`:

<http://nla.gov.au/nla.obj-141171324/image>

But how do you get the individual identifiers for all the pages in a book, or all the images in a collection? Once again, the methods vary by format:

- in books, periodicals, and other works with consecutive pages it's in a block of embedded JSON metadata
- in collections of images, maps, and manuscripts you need to [extract the list of identifiers from the collection's pop-up browse screen](/other-digitised-resources/how-to/get-collection-items.md)

<mark>==Code example==</mark>

```{code-cell} ipython3

```
