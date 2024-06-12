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

```{code-cell} ipython3

```
