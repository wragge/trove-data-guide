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

# Interfaces

+++

For most users, Trove is defined by its web interface – by the screens, buttons, boxes, links, and lists you interact with as you navigate around the site. This Guide focuses on getting and using the data that sits behind the web interface, but, in some cases, access to data is constrained by the design and functioning of the website. It's therefore useful to think about the different components of the web interface and how they fit together.

+++

(interfaces-home)=
## Trove welcome, news, and help pages

The [Trove home page](https://trove.nla.gov.au/), and the various news and documentation pages connected to it, are delivered through a content management system. New articles are added regularly. You can catch up on what's been posted recently on the [News](https://trove.nla.gov.au/news) page. Unfortunately there's no functional RSS feed.

```{figure} /images/collection-feature.png
:name: collection-feature
A collection feature on Natural History Books  
<https://trove.nla.gov.au/collection/BHL/biodiversity/explore>
```

Of particular interest are the [Collection Features](https://trove.nla.gov.au/news?type=trove_collection_feature) which present curated subsets of Trove resources. These include some basic visualisations, and an option to search within the collection subset. However, there doesn't seem to be any way of downloading information about the complete set of items in a subset. The usual Bulk Download option isn't available, and the main Trove API doesn't know anything about these 'collections'.

Some useful links are hidden in unexpected places:

* the [Newspapers & Gazettes browse interface](https://trove.nla.gov.au/newspaper) is linked from the [Explore](https://trove.nla.gov.au/landing/explore) tab
* the [thematic collection of web sites](https://webarchive.nla.gov.au/collection) selected for preservation is linked from the [Categories](https://trove.nla.gov.au/landing/categories) tab
* API documentation can be found under the [**About > Create something**](https://trove.nla.gov.au/about/create-something) menu item

+++

## Search interface

The search application is at the heart of Trove, giving users a single entry point to a range of different systems and formats. See the [Trove help system](https://trove.nla.gov.au/help/searching/search) for an introduction, and the 

Trove's search interface includes a number of different components.

### 'Simple' search box

```{figure} /images/search-box.png
:name: search-box
Trove's simple search box 
```

Simple in design, but powerful in function – see [](/understanding-search/simple-search-options) for information on constructing complex queries.

### 'Advanced' search form

```{figure} /images/advanced-search.png
:name: advanced-search
The advanced search form for digitised newspapers
```

Advanced search doesn't really add any search options (except in the web archives category), but it does layer a structured interface over the standard query options. Each category has it's own version of the advanced search form.

### Search results summary

A single page overview of results across all categories (except websites)

### Search results

Links out to different viewers (differences bw newspapers and others)

+++

## Work records

+++

## Newspapers – titles, browse and viewer

+++

## Digitised content viewers

* digital collections
* digital books and periodicals
* digital images
* digital maps
* finding aids


+++

## Web archives – search, view, collections

+++

## List – view and edit

+++

## User profile
