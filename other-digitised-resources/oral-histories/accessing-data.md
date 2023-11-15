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

# Accessing data from digitised oral histories

Note about licence.

To get a list of audio files (and other info), load JS from url like this: https://nla.gov.au/tarkine/listen/transcript/nla.obj-219744819.js (changing the ID as required)

The JS also includes fields indicating if there's a timed summary or full transcript, and the timecoded summary itself.

All the 'collection' browse links I've tried give 404 errors. Eg: https://nla.gov.au/nla.obj-221466843 (from https://trove.nla.gov.au/work/19002018)

Work record with multiple 'versions' pointing to different recordings with same people: https://api.trove.nla.gov.au/v3/work/19002018?encoding=json&include=workversions,links

To find more just search using holdingsCount: https://trove.nla.gov.au/search/category/music?keyword=%22nla.obj%22%20holdingsCount%3A4&l-format=Sound%2FInterview,%20lecture,%20talk&l-availability=y

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Metadata

Search params:

``` python
params = {
    "q": '"nla.obj"',
    "l-availability": "y",
    "l-format": "Sound/Interview, lecture, talk",
}
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

Use standard method:

- there are links to collection pages but these are currently broken, assume that individual items have work records
- multiple interviews can be grouped as versions of a work -- eg multiple interviews over a period of time

Additional metadata:

- additional info scraped from web page
- details from JS

+++

## Transcripts and summaries

Using nla.obj id

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Audio files

Get file ids from javascript

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```
