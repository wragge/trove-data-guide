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

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Metadata

There are two main sources of machine-readable metadata that describe digitised resources:

- work/version records delivered by the Trove API
- JSON embedded in the digitised resource viewer

### Work/version records delivered by the Trove API



### JSON embedded in the digitised resource viewer

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Collections

````{margin}
```{seealso}
The GLAM Workbench notebook [Download a collection of digitised images](https://glam-workbench.net/trove-images/download-image-collection/) uses this method to find and download all the images in a collection or finding-aid.
```
````

The NLA’s digitised resources are often presented as 'collections'. A collection could be the volumes in a multi-volume work, the issues of a periodical, a map series, an album of photographs, or a manuscript collection. While you can use the `magazine/title` API endpoint to get a list of issues from a periodical, there’s no way to get the contents of other types of collections from the Trove API.

To get machine-readable information about the members of a digitised collection you need to extract information from the browse window of Trove's digitised collection viewer. This method is fully documented in [](how-to/get-collection-items)

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Text

Digitised publications like books, pamphlets, and periodicals usually make their contents available as plain text, extracted from the digitised pages using Optical Character Recognition (OCR). The 

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Images

There are two main ways of downloading images from digitised resources:

- Using Trove's download links
- Constructing image urls using `nla.obj` identifiers

### Using Trove's download links

This method is described in [](how-to/download-items-text-images.md). It's best suited to downloading small groups of page images from books and periodicals.

(digitised:data:image-urls)=

### Constructing image urls using `nla.obj` identifiers

This is the most flexible method for downloading digitised images, but you need to know the `nla.obj` identifier for the page or image you want to download. Once you have the identifier, it's just a matter of adding the appropriate suffix to construct a url that leads directly to the image file.

The suffixes are:

- `-t`: leads to a thumbnail version of the image (usually around 123px wide)
- `/image`: leads to a higher-resolution JPEG version of the image (longest dimension is a maximum of 5000px)
- `/representativeImage`: leads to an image which has been selected to represent a collection
- `/m`: leads to a very high-resolution TIFF version of the image (only available for selected resources, mostly maps)

There are additional parameters you can use with `/image` and `/representativeImage`, though I'm not sure how reliably they work:

- `wid`: desired width in pixels
- `hei`: desired height in pixels

In most cases you'll probably want to use the `/image` suffix to get a JPEG version of the image at the highest available resolution. 

```{admonition} Image sizes
:class: note
The sizes of images downloaded using the `/image` suffix vary unpredictably. Sizes seem to range up to a maximum of 5000 pixels along the longest dimension, but some are much smaller, including many digitised photographs. However, images obtained this way are at the same, or higher, resolution than those available through Trove's built-in download option.
```



#### How do you know if a TIFF version is available?

[embedded metadata](digitised:howto:embedded:images)

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```
