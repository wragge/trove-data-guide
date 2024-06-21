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

+++ {"editable": true, "slideshow": {"slide_type": ""}}

# Data access options

+++ {"editable": true, "slideshow": {"slide_type": ""}}

````{margin}
```{seealso}
The GLAM Workbench includes a [list of GLAM data sources](https://glam-workbench.net/glam-data-list/) including many datasets harvested from Trove.
```
````

There are many different types of data available from Trove and many different ways of accessing it. You can [manually download some data](/accessing-data/using-web-interface), such as images, from Trove's web interface. If you're creating small, selective datasets, these manual methods might be all you need.

But what if you want to save *all* the results from a search, automate downloading of images and text, or create a pipeline to feed Trove data into a specific tool for analysis? In these sorts of cases, you need access methods that are reusable and extensible – methods that can be invoked using code and that deliver data in a {term}`machine readable` format that computers can manipulate.

The Trove {term}`Application Programming Interface (API)` is the main way of accessing machine-readable data using automated methods. Computer programs can request data from the API and have it delivered in a predictable, structured format. [Using the API](/accessing-data/trove-api-intro) you can construct reusable data-processing workflows, and create datasets containing millions of items.

However, the Trove API does have a few gaps and inconsistencies. Sometimes there's just no convenient way of getting the data you want. In these cases you might need to resort to {term}`screen scraping` – a process of extracting structured data from regular web pages. Compared to API access, screen scraping tends to be inefficient and error prone. But it's a handy technique when other methods fail. See, for example: [](/newspapers-and-gazettes/how-to/get-ocr-coordinates).

For information on accessing data from specfic types of resources see:

- [accessing data from digitised newspapers](/newspapers-and-gazettes/data/accessing-data)
- [accessing data from other digitised resources](/other-digitised-resources/accessing-data)

It's also possible that someone might have done all the work for you! The [Pathways](/pathways/index) section includes information on ready-made datasets you to download and explore.

```{code-cell} ipython3

```
