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

Trove's digitised resources are delivered in a number of different ways depending on their format and arrangement. However, there are some ways of accessing data that work across different formats. These are described below.

For more specific information see:

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

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Text

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

#### Examples

This photograph of some angry penguins on Heard Island has the identifier `nla.obj-147135602`.

```{figure} /images/nla.obj-141171021.jpg
:width: 600px

Two Rockhopper Penguins and a predatory Skua, Heard Island, Antarctica, ca. 1930 (by Frank Hurley) [http://nla.gov.au/nla.obj-141171021](http://nla.gov.au/nla.obj-141171021)
```

|  |  |
|-------------|-----|
|The persistent url is created by adding `http://nla.gov.au/` to the identifier|<http://nla.gov.au/nla.obj-141171021>|
|To view the photograph in Trove's digitised image viewer, you just add `view` to the persistent url (this is where the persistent url redirects to anyway)|<http://nla.gov.au/nla.obj-141171021/view>|
|To access a thumbnail version of the image, you add `-t` to the persistent url|<http://nla.gov.au/nla.obj-141171021-t>|
|To access a high-resolution version of the image, you add `/image` to the persistent url|<http://nla.gov.au/nla.obj-141171021/image>|
|To access a version of the image that is 1000 pixels wide, you add `/image?wid=1000` to the persistent url|<http://nla.gov.au/nla.obj-141171021/image?wid=1000>|

This works the same way with pages in books and periodicals, however, the urls are a bit more complicated. For example, this page in *The Home* also features a photo of penguins by Frank Hurley. The page's identifier is `nla.obj-387326197`.

```{figure} /images/nla.obj-387326197.jpg
:width: 600px

'Penguin pageant' by Frank Hurley, *The Home*, vol. 20, no. 1, January 1940, p. 44 [http://nla.gov.au/nla.obj-387326197](http://nla.gov.au/nla.obj-387326197)
```
|  |  |
|-------------|-----|
|The persistent url is created by adding `http://nla.gov.au/` to the identifier|<http://nla.gov.au/nla.obj-387326197>|
|If you access the page's persistent url you are redirected to the issue, with the page identifier included as a `partId` parameter|<https://nla.gov.au/nla.obj-387284380/view?partId=nla.obj-387326197>|
|To access a thumbnail version of the page image, you add `-t` to the persistent url|<http://nla.gov.au/nla.obj-387326197-t>|
|To access a high-resolution version of the page image, you add `/image` to the persistent url|<http://nla.gov.au/nla.obj-387326197/image>|
|To access a version of the image that is 500 pixels high, you add `/image?hei=500` to the persistent url|<http://nla.gov.au/nla.obj-387326197/image?hei=500>|

#### How do you get `nla.obj` identifiers for pages or images?

- from the **Cite** tab
- from the digitised viewer's url
- from the browse screens of a digitised collection
- from embedded metadata

#### How do you know if a TIFF version is available?

[embedded metadata](digitised:howto:embedded:images)

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```
