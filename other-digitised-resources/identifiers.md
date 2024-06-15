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

# Digital object identifiers

The complexities of Trove's digital object identifer scheme are introduced in [](/what-is-trove/links-and-identifiers). The main issue confronting users is that identifiers for different types of digital objects – such as books, pages, issues, articles, photographs, and collections – all look the same. This is important because the digital identifier provides a key to unlock an object's metadata and digital representations. **To access data about digitised resources in Trove you need to understand how the identifiers work.**

## Recognising digital object identifiers

Digital object identifiers are a url with the form: `https://nla.gov.au/nla.obj-[NUMBER]`

For example: <http://nla.gov.au/nla.obj-141171021> identifies a photograph of two angry rockhopper penguins. 

The actual identifier part is the `nla.obj-141171021`. The `nla.obj` tells you identifier scheme being using, and `141171021` points to an object uniquely identified within this scheme. Sometimes when I talk about identifiers I mean the `nla.obj-141171021` part rather than the whole url.

## Where do the urls go?

When you plug a digital object identifier into your browser you're taken to one of Trove's digital object viewers.

## Parts and wholes

## Collections and items

## Page identifiers 

## Data access methods

+++

Digitsed versus born digital

+++

Print publications (book or periodical issue) -- get page identifiers, get section/article identifiers, get text, get pdf, get images (all or page range)

+++

| object type | identifier can be used to access | but you also need |
|-------------|----------------------------------|-------------|
| **print publications (book or periodical issue)** | get OCRd text from a range of pages | |
| | get OCRd text from the complete publication | the total number of pages |
| | 

+++

book, periodical issue, or other thing with pages:

- get OCRd text from complete publication
- get OCRd text from a range of pages
- get OCRd text from a page with positional information

- get PDF

- get all pages in a zip file
- get all pages individually

- get additional metadata
- get MARC data
- get page identifiers
- get article identifiers

images, maps, manuscripts

- get PDF

- get all pages in a zip file
- get all pages individually

+++

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
