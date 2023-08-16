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

# Data access options

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

**This section documents ways of accessing {term}`machine-readable` data from Trove. The focus is on reusable and extensible methods that can be used in a variety of workflows, such as the creation of datasets for further analysis.**

There are many different [types of data](types-of-data/types-of-data) available from Trove and many different ways of accessing it. You can manually download some data, such as images, from Trove's web interface. If you're creating small, selective datasets, these manual methods might be all you need.

But what if you want to save *all* the results from a search, automate downloading of images and text, or create a pipeline to feed Trove data into a specific tool for analysis? In these sorts of cases, you need access methods that are reusable and extensible – methods that can be invoked using code and that deliver data in a {term}`machine readable` format that computers can manipulate.

The Trove {term}`Application Programming Interface (API)` is the main way of accessing machine-readable data using automated methods. Computer programs can request data from the API and have it delivered in a predictable, structured format. Using the API you can construct reusable data-processing workflows, and create datasets containing millions of items.

However, the Trove API does have a few gaps and inconsistencies. Sometimes there's just no convenient way of getting the data you want. In these cases you might need to resort to {term}`screen scraping` – a process of extracting structured data from regular web pages. Compared to API access, screen scraping tends to be inefficient and error prone. But it's a handy technique when other methods fail. See, for example: [](/how-to/newspapers/get-ocr-coordinates).

It's also possible that someone might have done all the work for you! There are a number of ready-made datasets available for you to download and explore. 

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{tableofcontents}
```
