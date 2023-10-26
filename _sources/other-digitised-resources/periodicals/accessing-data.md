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

# Accessing data from periodicals

+++

## Articles

### Metadata

`/search` in `magazine` category and `/work` endpoints 

`bibliographicCitation` in article records has structured publication metadata

Advertisements on multiple pages in an issue grouped as a single work record for discovery: https://trove.nla.gov.au/work/232859472?keyword=fullTextInd%3Ay

Can access as separate versions via the API: https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F232859472%3Fencoding%3Djson%26include%3Dall&comment=

### Text

Via API

### Images and PDFs

Page images

+++

## Issues

### Metadata

`/magazine/title` endpoint

Issue id