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

+++ {"editable": true, "slideshow": {"slide_type": ""}}

# Posters and ephemera

+++ {"editable": true, "slideshow": {"slide_type": ""}}

`series:"Australian ephemera collection (General)"` 

<https://trove.nla.gov.au/search?keyword=series%3A%22Australian%20ephemera%20collection%20%28General%29%22>

even better just `series:ephemera` across all categories

<https://trove.nla.gov.au/search/category/correspondence?keyword=series%3Aephemera>


This link goes to two finding aids with lots of digitised resources: <https://trove.nla.gov.au/work/20934136>

Will need method to go from work record to finding aid and harvest all items?

For finding aids:

- use current code to scrape FA
- to get images use node id to request, eg: https://nla.gov.au/nla.obj-2956520256/findingaid/nla.obj-2956524425/thumbnailList (first id is FA, second is node) -- rturns html list of thumnails, can extract image ids
