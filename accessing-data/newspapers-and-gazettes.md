---
jupytext:
  formats: ipynb,md:myst
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

# Newspapers and gazettes

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

<mark>==This might link to a fuller discussion in the contexts section?==</mark>

Before you start requesting data from Trove's digitised newspapers, it's worth thinking a bit about the way newspapers are represented in Trove and the relationships between **articles**, **pages**, **issues**, and **titles**. When you search the newspapers, you're searching for *articles*. You might think that newspapers are organised in a simple hierarchical structure with titles at the top, and articles at the bottom, but it's not quite that straighforward. Articles are linked to both pages and titles. Titles have their own API endpoint that can lead you to issues, though following an issue url will actually take you to a page. Pages have identifiers, and you can browse their contents in the Trove web interface, but they don't exist as separate entities in the API. These sorts of oddities mean that sometimes there's no direct route to the information that you want, but by thinking about what is connected to what, you can find alternative paths. For example, while there's no direct link between issues and articles, if you get the publication date and title from an issue, you can then search for articles published in that issue by using the `date` index and `title` facet.

This section is organised by **articles**, **pages**, **issues**, and **titles**. For each entity, I've described a variety of methods to access metadata, text and images – some are straightforward, others are a bit hacky, but they work!

```{tableofcontents}
```

<mark>==Not sure where these bits go yet...==</mark>

The boundaries of articles are defined as part of the OCR process. In most cases they represent a single piece of content with a heading and some text (or an illustration). But sometimes blocks of content are grouped together. Advertisements, for example, are often grouped as a single 'article' headed 'Advertising'.

<mark>==Somewhere -- perhaps in the search section -- need to talk about things like editorial pages with long lists of short news items, often grouped as a single article. What are the implications of this for relevance, and reuse.==</mark>

- Articles are linked to pages and titles. A single article can be split across multiple pages. 

- Pages have unique identifiers and can be browsed using the web interface, but they don't exist as separate entities within the API. You can't search for a page, only for articles published on a page.

- An issue is a publication of a particular title on a particular date. Issues have identifiers, and are linked to titles. In the web interface, issue identifiers resolve to the first page of that issue, providing an indirect way of linking titles and issues to pages. Articles are indirectly linked to issues through their publication date.

- A title is a particular publication or masthead. Titles have their own identifiers and API endpoint.

```{code-cell} ipython3

```
