---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.15.2
kernelspec:
  display_name: Python 3 (ipykernel)
  language: python
  name: python3
---

# Accessing data from books

+++

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

+++

## Metadata

There seem to be a lot of duplicate records -- Libraries Australia and Trove DL (why not merged?)

- work records (via search and `/work/` endpoints)
- embedded metadata
    - pages (number of pages important for text, images, pdf)
    - chapters?
- lists of items in collections

Create datasets

Pre-harvested datasets -- digitised books with OCR

Search and formats/categories

Facets -- eg language? (but usual work/version problems)

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Text

Some in API but not all and limits on length -- don't use!

Once you have number of pages can download --> how to

Pre-harvested datasets

You can get text via the API, but you have to add `include=workversions` then loop through versions, looking in the `description` field for a `value` with `"type": "open_fulltext"`.

I think there are limits on the amount of text you can get from the API -- need to test this.

+++

## Images and PDF

Once you have number of pages can download --> how to

Some allow view but not download: https://nla.gov.au/nla.obj-2490195342/view

+++

## Oddities

This is a collection, but instead of the items in the collection having their own work records, they're versions of the work. This makes it hard to get at the individual items via the API.

https://trove.nla.gov.au/work/12938999/
