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

# HOW TO: Get a list of items in a digitised collection

The NLA's digitised resources are often presented as 'collections'. A collection could be the volumes in a multi-volume work, the issues of a periodical, a map series, an album of photographs, or a manuscript collection. In the web interface, collections will have a 'Browse this collection' link or button that lets you navigate through their contents, but getting machine-readable data is not so straightforward. You can use the `magazine/title` API endpoint to get a list of issues from a periodical, but there's no way to get the contents of other types of collections from the Trove API. Fortunately, it's possible to scrape the contents of the collection browse window to extract a list of items.

```{code-cell} ipython3

```
