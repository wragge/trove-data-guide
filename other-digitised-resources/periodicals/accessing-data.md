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

API provides `/magazine/titles` and `/magazine/title/[ID]` endpoints 

#### Format `periodical` and "nla.obj"

There are 2,500 titles in the title endpoint, but only about 1,000 when you search for `"nla.obj"` & `l-format=periodical`. Is there any way to reconcile? Is it because of PP?

Check by getting ids from title endpoint, then extracting embedded metadata? Will that help?

Get lists of nla.obj ids from both methods and compare -- see what the difference is.

#### `/magazine/titles`

- paginated using `limit` and `offset`

Example record:

``` json
{
    "id": "nla.obj-8423556",
    "title": "\"Coo-ee!\" : the journal of the Bishops Knoll Hospital, Bristol.",
    "publisher": "Partridge & Love Ltd.",
    "troveUrl": "https://nla.gov.au/nla.obj-8423556",
    "startDate": "1916-01-01",
    "endDate": "1917-10-20"
}
```

#### `/magazine/title/[ID]`

- [ID] can either be a nla.obj id or a numeric work id (however the work ids aren't in the returned records)
- Get a list of issues by using `include=years` and `range=YYYYMMDD-YYYYMMDD`
- issues returned grouped by year

Example issue:

``` json
{
    "id": "nla.obj-8447243",
    "date": "1916-11-10",
    "url": "https://nla.gov.au/nla.obj-8447243"
},

Issue id
