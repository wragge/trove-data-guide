---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.14.7
kernelspec:
  display_name: Python 3 (ipykernel)
  language: python
  name: python3
---

+++ {"editable": true, "slideshow": {"slide_type": ""}}

# Trove API introduction

The Trove Application Programming Interface (API) is the main way of accessing machine-readable data using automated methods. Computer programs can request data from the API and have it delivered in a predictable, structured format. Using the API you can construct reusable data-processing workflows, and create datasets containing millions of items.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

+++

## Why use the API?

````{margin}
```{admonition} 19 million records later
:class: seealso

Trove's API makes it possible for you to compile *big* datasets. To explore the way newspaper front pages changed over time, I [downloaded the metadata from 19 million articles](https://updates.timsherratt.org/2023/08/08/exploring-the-front.html).

```
````

The API is not the only way of getting data from Trove, but it's the most flexible, reliable and scalable. You can give it a search query and work your way through the complete set of results, downloading *every* record. By comparison, the Trove web interface displays a maximum of 2,000 results, and even the Bulk Export feature is limited to one million.

The data you get back from the API is in a structured form that can be read and manipulated by computers. This means you can take advantage of a wide range of existing tools and libraries to build reusable pipelines for data analysis and visualisation.

You can use the Trove API to:

- create datasets containing metadata and text
- build new applications to visualise, analyse, or annotate Trove data
- integrate Trove data into existing tools or interfaces

The Trove API allows you to:

- download a complete set of search results (no matter the size)
- control the amount and type of metadata retrieved
- download the full text content of some resources

Limitations:

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
