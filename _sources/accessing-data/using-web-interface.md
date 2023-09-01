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

See [](/what-is-trove/trove-web-interface) for a overview of the different components that make up the web interface. In particular, it's important to understand the difference between the main search interface and the digitised item viewers.

+++

(downloading-images-web-interface)=
## Downloading images, PDFs, text, and audio

Items that have been digitised by the NLA and made available through one of Trove's digitised item viewers can usually be downloaded in a variety of formats. This includes newspapers, books, journals, images, maps, manuscripts, and oral histories.

The official Trove Help includes a page on [Downloading](https://trove.nla.gov.au/help/using-trove/downloading) that describes the options available in the various Trove categories for downloading images, PDFs, text, and audio. Different formats have different viewers, but generally speaking you just need to find the download tab in the sidebar, select a format, and click the button.

+++

```{figure} ../images/web-download-example.png
:name: download-tab
:width: 300
Example of the download tab in the digitised magazines and newsletters viewer
```

+++

Items that are arranged in hierarchical structures, such as some images, maps, and manuscripts, might have an option to download a 'collection'. If so a **Download** button will appear on the collection page. This isn't always available, and there can be limits on how many items in a collection you can download at once. To find the 'collection' page, try using the breadcrumb links to move up the record hierarchy.

While many of the same download options are available across different Trove categories, they don't always mean the same thing! For example, the 'text' you get from newspapers is not the same as the 'text' you get from books. This table summarises what's available and describes some of these oddities.

```{list-table} Available download options
:header-rows: 1
:name: table-available-download-options
* - Trove category
  - Item type
  - Download option
  - Note
* - Newspapers & gazettes
  - article
  - image
  - The 'image' option actually delivers an HTML page with embedded images. Long articles will often be sliced up in unfortunate ways to 'fit' an A4 page. To get the images themselves you need to extract them from the HTML and try to reassemble them.
* - Newspapers & gazettes
  - article
  - PDF
  -
* - Newspapers & gazettes
  - article
  - text
  - The 'text' option actually delivers an HTML page that includes the publication details as well as the article text. If you just want the plain OCRd text you'd need to extract it from the HTML and remove the publication details.
* - Newspapers & gazettes
  - page
  - PDF
  -
* - Newspapers & gazettes
  - issue
  - PDF
  - 
* - Books & libraries
  - single page, range of pages, or complete book
  - image
  - Images (single or multiple) are packaged in a zip file with an additional page of copyright information.
* - Books & libraries
  - single page, range of pages, or complete book
  - PDF
  - 
* - Books & libraries
  - single page, range of pages, or complete book
  - text
  - Unlike the newspapers, this is plain text with no formatting.
* - Books & libraries
  - single page, range of pages, or complete book
  - image
  - Images (single or multiple) are packaged in a zip file with an additional page of copyright information.
* - Magazines & newsletters
  - single page, range of pages, or complete issue
  - PDF
  - 
* - Magazines & newsletters
  - single page, range of pages, or complete issue
  - text
  - Unlike the newspapers, this is plain text with no formatting.
* - Images, maps, & artefacts
  - single item, range of items
  - image
  - Images are packaged in a zip file with an additional page of copyright information. As well as the standard JPEG format, some maps include an option to download high-resolution TIFF files.
* - Images, maps, & artefacts
  - single item, range of items
  - PDF
  -
* - Images, maps, & artefacts
  - collection
  - image
  - A maximum of 20 images can be downloaded at one time.
* - Images, maps, & artefacts
  - collection
  - PDF
  - A maximum of 20 images can be included in the PDF.
* - Diaries, letters & archives
  - single page, range of pages
  - image
  - Images are packaged in a zip file with an additional page of copyright information.
* - Diaries, letters & archives
  - single page, range of pages
  - PDF
  - 
* - Diaries, letters & archives
  - collection
  - image
  - Images are packaged in a zip file with an additional page of copyright information.
* - Diaries, letters & archives
  - collection
  - PDF
  - 
* - Music, audio & video
  - oral history interview transcript
  - text
  -
* - Music, audio & video
  - oral history interview transcript
  - PDF
  -
* - Music, audio & video
  - oral history interview
  - audio recording
  - MP3 files available at a variety of bitrates (the higher the bitrate, the larger the file), eg: 48kbps, 128kbps, and 256kbps

```

Some download options you might expect to find are not actually available. These are listed in the table below.

````{margin}
```{seealso}
The **GLAM Workbench** provides some useful workarounds where download options are missing or don't deliver data in useful formats. For example, there are web apps to help you [save a newspaper article as an image](https://glam-workbench.net/trove-newspapers/Save-Trove-newspaper-article-as-image-app/) and to [download a page as an image](https://glam-workbench.net/trove-newspapers/Save-page-image/). The [Trove Newspaper & Gazette Harvester](https://glam-workbench.net/trove-harvester/) cleans up article text and can download images as well.
```
````

```{list-table} Missing download formats
:header-rows: 1
:name: table-missing-download-formats
* - Trove category
  - Item type
  - Download format
  - Note
* - Newspapers & gazettes
  - page
  - image
  - There's no option to download a page as an image, just a page image embedded in a PDF.
* - Magazines & newsletters
  - article
  - any
  - There's no option to download individual articles as images, PDFs, or text. While you search for individual articles, the viewer only presents pages. This is different to the newspapers where the viewer presents individual articles.
```

+++

```{admonition} What about image resolutions?
:class: note

One confusing, and often frustrating, aspect of image downloads is their resolution (or size). You can use the Trove image viewer to zoom in close to many photographs and manuscripts, enabling you to pick up fine details. But if you download the same image, you could find the resolution is much lower. This means you're limited in how you can use the downloaded image. The available resolutions vary across categories and formats, and you really don't know what you'll get until you download it. Many manuscripts, in particular, seem to have low-resolution downloads, which doesn't help you much when you're trying to decipher someone's handwriting! But never fear, there are a [few hacks and work arounds](/how-to/web-interface/download-higher-resolution-images) you can try to get higher resolution versions.
```

+++

## Download metadata using citations and BibTex

BibTex is a [file format](https://www.bibtex.org/Format/) used to save structured information about references, and is used by many tools to manage citations and build bibliographies. You can download item metadata in BibTex format using Trove's 'Citation' tab.

In the main search interface, the 'Citation' tab includes a BibTex option. You can copy or download the BibTex record.

```{figure} ../images/trove-citation-tab.png
:name: citation-tab
:width: 400
Example of the Citation tab with the BibTex option selected
```

In the digitised newspaper viewer, the 'Citation' tab includes a button to download a BibTex record.

```{figure} ../images/newspaper-citation-options.png
:name: newspaper-citation-tab
:width: 300
Options for downloading newspaper citations
```

The Trove viewers for digitised books, journals, images, and maps don't include a BibTex option.

This is a simple way of capturing metadata in a structured format, but the BibTex records don't always include the full range of metadata available in Trove.

+++

## Downloading lists

```{code-cell} ipython3

```
