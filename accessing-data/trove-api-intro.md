---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.14.6
kernelspec:
  display_name: Python 3 (ipykernel)
  language: python
  name: python3
---

+++ {"editable": true, "slideshow": {"slide_type": ""}}

# Trove API introduction

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Types of requests:

- search
- individual records
- lists of values

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Endpoints

<mark>==Link where appropriate to sections on specific categories/formats==</mark>

### Search

- `/result`

### Lists

- `/newspaper/titles`
- `/gazette/titles`
- `/magazine/titles`
- `/contributor`

### Items

- `/newspaper/[id]`
- `/work/[id]`
- `/people/[id]`
- `/list/[id]`
- `/contributor/[id]`
- `/newspaper/title/[id]`
- `/gazette/title/[id]`
- `/magazine/title/[id]`

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Parameters

<mark>==How much detail do I go into? Do I just point to Trove docs?==</mark>

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Translating a web query into an API query

- trove-query-parser for newspapers
- easier with 'simple' search

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Authentication

- anonymous access
- API keys

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Making a request

Basic examples linked to API Console

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## API responses

<mark>==Again how much details is required? Specific info can be provided in the sections about particular categories/formats==</mark>

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Harvesting a complete result set

- Use of `bulkHarvest` parameter
- using `nextStart`
- effect of `category=all`

Provide a basic code pattern for paginating through a result set.

Saving results (ndjson, csv (with flattening) etc)

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```
