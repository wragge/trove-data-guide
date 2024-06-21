---
jupytext:
  formats: ipynb,md:myst
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

# Accessing data from newspapers and gazettes

Before you start requesting data from Trove's digitised newspapers, it's worth thinking a bit about the way newspapers are represented in Trove and the relationships between **articles**, **pages**, **issues**, and **titles**. You might think that newspapers are organised in a simple hierarchical structure with titles at the top, and articles at the bottom, but it's not quite that straighforward. Articles are linked to both pages and titles. Titles have their own API endpoint that can lead you to issues, though following an issue url will actually take you to a page. Pages have identifiers, and you can browse their contents in the Trove web interface, but they don't exist as separate entities in the API. These sorts of oddities mean that sometimes there's no direct route to the information that you want, but by thinking about what is connected to what, you can find alternative paths. For example, while there's no direct link between issues and articles, if you get the publication date and title from an issue, you can then search for articles published in that issue by using the `date` index and `title` facet.

This section is organised by **articles**, **pages**, **issues**, and **titles**. For each entity, I've described a variety of methods to access metadata, text and images – some are straightforward, others are a bit hacky, but they work!

<!---
<mark>==Somewhere -- perhaps in the search section -- need to talk about things like editorial pages with long lists of short news items, often grouped as a single article. What are the implications of this for relevance, and reuse.==</mark>

--->

+++

```{tableofcontents}
```
