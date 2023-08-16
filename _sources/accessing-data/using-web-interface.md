---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.14.7
kernelspec:
  display_name: Python 3 (ipykernel)
  language: python
  name: python3
---

# Downloading data from the Trove web interface

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

+++

- download images and text
- download citations
- bulk export
- download lists
- using Zotero (newspapers)

+++

## Downloading images, PDFs, text, and audio

The official Trove Help includes a page on [Downloading](https://trove.nla.gov.au/help/using-trove/downloading) that describes the options available in the various Trove categories for downloading images, PDFs, text, and audio. Different formats have different viewers, but generally speaking you just need to find the download tab in the sidebar, select a format, and click the button.

+++

```{figure} ../images/web-download-example.png
:name: download-tag
:width: 300
Example of the download tab in the digitised magazines and newsletters viewer
```

+++

|Trove category | Item type | Download option | Note |
|---------|------|--------|------|
| Newspapers & gazettes | article | image | The 'image' option actually delivers an HTML page with embedded images. Long articles will often be sliced up in unfortunate ways to 'fit' an A4 page. To get the images themselves you need to extract them from the HTML and try to reassemble them. See... for alternatives|
| Newspapers & gazettes | article | PDF |
| Newspapers & gazettes | article | text | The 'text' option actually delivers an HTML page that includes the publication details as well as the article text. If you just want the plain OCRd text you'd need to extract it from the HTML and remove the publication details.
| Newspapers & gazettes | page | PDF | Note that there's no option to download a page as an image. See... for alternatives.
| Newspapers & gazettes | issue | PDF | 
| Books & libraries | book (single page, range of pages, or complete) | image | Images (single or multiple) are downloaded in a zip file with a page of copyright information.
| Books & libraries | book (single page, range of pages, or complete) | PDF |
| Books & libraries | book (single page, range of pages, or complete) | text | Unlike the newspapers, this is plain text with no formatting. 
| Magazines & newsletters | article | | There's no option to download individual articles as images or text. While you search for individual articles, the viewer only presents pages. This is different to the newspapers where the viewer presents individual articles.
| Magazines & newsletters | single page, range of pages, or complete issue | image | Images (single or multiple) are downloaded in a zip file with a page of copyright information.
| Magazines & newsletters | single page, range of pages, or complete issue | PDF | 
| Magazines & newsletters | single page, range of pages, or complete issue | text | Unlike the newspapers, this is plain text with no formatting.

+++

```{admonition} What about image resolutions?
:class: note

Describe variations...
```

```{code-cell} ipython3

```
