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

# HOW TO: Get text, images, and PDFs using Trove's download link

## Background

You can download text, images, and PDFs from individual digitised items using the Trove web interface. But only the text of periodical articles is available for machine access through the Trove API. This makes it difficult to assemble datasets, or build processing pipelines involving digitised resources.

This page documents a workaround developed by reverse-engineering the download link used by the Trove web interface. You can use it to automate the download of text, images, and PDFs from many digitised resources.

## Understanding Trove's download link

Trove's digitised object viewers include a 'Download' tab that provides options for downloading the current item.

```{figure} ../../images/download-button.png
:name: download-button
:width: 500px

Download options for a digitised book
```

When you click on the **Start download** button, your browser actually fires off a request to Trove that looks like this:

`https://nla.gov.au/nla.obj-33685055/download?downloadOption=ocr&firstPage=0&lastPage=101`

The url contains a few key parameters.

`https://nla.gov.au/nla.obj-[ID]/download?downloadOption=[FORMAT]&firstPage=[FIRST]&lastPage=[LAST]`

| parameter | description |
|-----------|-------------|
| `[ID]` | the NLA identifier for the current item or collection, for example `nla.obj-3199043190`
| `downloadOption` | the desired format of the download, it can be one of `ocr`, `pdf`, `zip`, or `tif` (the available options depend on the type of resource)
| `firstPage` and `lastPage` | numbers that define the range of items you want to download – ranges start at `0`, so if a book had fifty pages you'd set `firstPage` to `0` and `lastPage` to `49`|

Note that 'pages' in this context actually refers to the number of images in the digitised version, rather than the number of printed pages in the original work. This is because the digitised version will typically include images of book covers and endpapers as well as printed pages.

## Constructing urls

Once you understand the structure of the download urls, you can construct your own, instead of using the web interface. All you need to know is the NLA identifier of a resource, and the number of pages/images it contains. 

for example, [The gold finder of Australia : how he went, how he fared, how he made his fortune](https://nla.gov.au/nla.obj-248742150) is a pamphlet published in 1853. It's NLA identifier is `nla.obj-248742150` and it has `80` pages. To download all 

# Variations

First pages only

## How do you know the number of pages?

## Limitations

Zip files can be big



The url above could be used to download all the OCRd text from the book [The pearling disaster, 1899 : a memorial](https://nla.gov.au/nla.obj-33685055/):

- it's NLA identifier is `nla.obj-33685055`
- it has 102 'pages'. Pages in this context actually refers to the images in the digitised version, rather than the number of printed pages in the original work. This is because the digitised version will typically include images of book covers, and endpapers, as well as printed pages. Using this information we can construct a url to download all the OCRd text in the book, setting `lastPage` to `101` (102 - 1), because the numbering starts at `0`:

<https://nla.gov.au/nla.obj-33685055/download?downloadOption=ocr&firstPage=0&lastPage=101>


```{code-cell} ipython3

```
