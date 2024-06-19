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

# HOW TO: Create download links for images using `nla.obj` identifiers

````{card}
On this page

```{contents}
:local:
:backlinks: None
```
````

## Introduction

Many of the resources digitised by the NLA and its partners are made up of images. These might be digitised copies of visual material like photos and maps, or scanned pages of print publications like books or periodicals. In Trove, each image or page has its own unique `nla.obj` identifier. You can use these identifiers to construct urls that lead directly to downloadable versions of the image file.

## Method

````{margin}
```{seealso}
While this method is particularly useful in developing computational processes for downloading and processing images, you can also use it in the web interface to make sure you're downloading the highest available resolution of an image. See [](/accessing-data/how-to/download-higher-resolution-images)
```
````

To construct a url to an image file you just add a suffix to the identifier url. For example, this [photograph of a group of school children with gardening tools](https://nla.gov.au/nla.obj-141828112) has the identifier `nla.obj-141828112`. To create a direct link to the image, you just add `/image` to the identifier url:

<https://nla.gov.au/nla.obj-141828112/image>

The `/image` suffix is probably the most useful option as it provides access to the image at its highest available resolution. In many cases this will be at a higher resolution than is available through the download option provided by the web interface. There are, however, other possible image suffixes:

- `/image`: leads to a higher-resolution JPEG version of the image (longest dimension is a maximum of 5000px)
- `-t`: leads to a thumbnail version of the image (usually around 123px wide)
- `/representativeImage`: leads to an image which has been selected to represent a collection
- `/m`: leads to a very high-resolution TIFF version of the image (only available for selected resources, mostly maps)

```{figure} /images/journal-cover-thumbnails.png
:name: journal-cover-thumbnails

An example of using the `-t` suffix to [assemble a collection of periodical cover thumbnails](digitised:periodicals:data:thumbnails)
```

There are additional parameters you can use with `/image` and `/representativeImage`, though I'm not sure how reliably they work:

- `wid`: desired width in pixels
- `hei`: desired height in pixels

For example: <a href="https://nla.gov.au/nla.obj-141828112/image?wid=500">https://nla.gov.au/nla.obj-141828112/image?wid=500</a>

```{admonition} Image sizes
:class: note
The sizes of images downloaded using the `/image` suffix vary unpredictably. Sizes seem to range up to a maximum of 5000 pixels along the longest dimension, but some are much smaller, including many digitised photographs. However, images obtained this way are at the same, or higher, resolution than those available through Trove's built-in download option.
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## More examples

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

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Getting image/page identifiers

````{margin}
```{seealso}
The GLAM Workbench notebook [Download a collection of digitised images](https://glam-workbench.net/trove-images/download-image-collection/) provides a full working example of obtaining a list of image identifiers from a collection and then downloading each image by adding the `/image` suffix.

```
````

If you want to use this method in a computational process to download all the images in a collection or publication you need some way of finding all the image/page identifiers. The method for doing depends on the type of digitised resource you're dealing with.

If you're downloading images from a resource that is made up of pages, such as a book or periodical, you need to:

- [extract the metadata](digitised:howto:embedded:extract-metadata) embedded in the digitised book or journal viewer
- [get a list of page identifiers](digitised:howto:embedded:pages) from the metadata

If you're downloading images from a collection of photographs, maps, or manuscripts, you need to:

- [harvest item identifiers](/other-digitised-resources/how-to/get-collection-items) from the digitised collection viewer

In fact, the latter method will also work with books and periodicals because they're treated like collections of pages, but it's much more efficient to grab the page identifiers from the embedded metadata.

## Availability of high-resolution TIFF files

````{margin}
```{seealso}

According to the [Exploring digitised maps in Trove](https://glam-workbench.net/trove-maps/exploring-digitised-maps/) notebook in the GLAM Workbench there are more than 30,000 digitised maps with high-resolution TIFF downloads. The largest weighs in at more than 3gb!

```
````

As noted the `/m` suffix can be used to download huge, high-resolution TIFF versions of some images. I've only come across this option amongst the digitised maps, though it could be available elsewhere. If you add the `/m` suffix to an image that doesn't have a TIFF version you'll end up downloading a jpeg placeholder image that says 'Not available online'. So how can you determine if a TIFF version is available to download? You need to:

- [extract the metadata](digitised:howto:embedded:extract-metadata) embedded in the digitised map viewer
- [inspect the `copies` metadata](digitised:howto:embedded:images) to find a verion with `copyrole` set to `m` and `access` set to `true
