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

# Working with a Trove collection in Tropy

```{contents}
:local:
:backlinks: None
```

+++

## Scenario

You want to be able to work on a collection of digitised images from Trove on your desktop – adding notes, transcriptions, and annotations. In the future you might want to share your research online.

+++

## Tools and standards

`````{grid}
:gutter: 3

````{grid-item-card} IIIF
:columns: 4

![IAW logo](/images/iiif_notext.png)

IIIF is a set of open standards for delivering high-quality, attributed digital objects online at scale. 

+++
```{button-link} https://iiif.io/
:color: primary
More info
```
````

````{grid-item-card} Tropy
:columns: 4

![IAW logo](/images/tropy-icon-light.png)

Tropy is free, open-source software that allows you to organize and describe photographs of research material.

+++
```{button-link} https://tropy.org/
:color: primary
More info
```
````
`````

+++

## Method

- find the collection identifier
- generate an IIIF manifest
- configure Tropy
  - template
  - vocab
- import manifest

+++

## Identifying a collection in Trove

The first thing you need is a collection to harvest! More specifically, you need to find a collection's landing page in Trove's digitised collection viewer. Once you've found the collection page, you can copy its `nla.obj` identifier.

### Finding collection pages

<-- see also link to GW list of finding aids? -->

Trove groups digitised resources into collections of different shapes and sizes. Here are some examples:

- [a finding aid describing the papers of Sir Edmund Barton](https://nla.gov.au/nla.obj-224441684)
- [an album of photographs from the B.A.N.Z. Antarctic Research Expedition](https://nla.gov.au/nla.obj-141170265)
- [a collection of postcards featuring actresses and Australian towns](https://nla.gov.au/nla.obj-140670968)

Collections can contain a variety of formats including photographs, posters, art works, ephemera, letters, and manuscripts.

Finding collections in Trove can be tricky because there's no way of filtering search results to only show collections. This means your search results might include collections, as well as individual items from those collections. See [](../../understanding-search/finding-digitised-content) for help with finding digitised resources. Search results will include a **View** link that takes you to Trove's digital resource viewer.

Most collections have a landing page with a big green button that says 'Browse this collection'. 

```{figure} ../../images/collection-album-landing.png
:width: 600px
:name: collection-album-landing

The landing page for the B.A.N.Z. Antarctic Research Expedition photographs (https://nla.gov.au/nla.obj-141170265)
```

If your search results lead to an item within a collection, rather than a landing page, you can usually navigate up the collection hierarchy by using the breadcrumb links.

```{figure} ../../images/collection-breadcrumbs.png
:width: 600px
:name: collection-breadcrumbs

An photo within the B.A.N.Z. Antarctic Research Expedition collection (https://nla.gov.au/nla.obj-141171021) – clicking on the breadcrumb link will take you up to the collection landing page.
```

Collections can also include other collections. For example, the Barton Papers are divided into series, and each series has its own landing page. Here's the landing page for [Series 6, Papers relating to the Federation Campaign](https://nla.gov.au/nla.obj-224441858). However, the finding aid only links to items within a series, not to the series landing page itself. To get to the series page from the finding aid, you need to go down the hierarchy to an item in the series, then back up the breadcrumbs trail.

Navigation within collections can be confusing, and it can sometimes be hard to tell what level of the collection hierarchy you're actually on. Because of this it might take a bit of trial and error to get to the page you need to harvest the collection data you're actually interested in.

### Getting the collection's `nla.obj` identifier

Once you've found the collection's landing page you need to copy its `nla.obj` identifier. You can find the identifier in a couple of places.

If the page has a **Cite** button or tab, click on it to reveal more information about the collection, including the identifier.

```{figure} ../../images/collection-cite-identifier.png
:name: collection-cite-identifier
:width: 600px
Clicking on the **Cite** button reveals the collection's identifier.
```

You don't need the full identifier url, just the section that starts with `nla.obj`. So, in the example above, the identifier value would be `nla.obj-141170265`.

Alternatively, you can just grab the identifier from your browser's location bar.

```{figure} ../../images/collection-url-identifier.png
:name: collection-url-identifier
:width: 600px
Your browser's location bar includes the identifier of the current page.
```

Copy the `nla.obj` to use in the next step.

```{code-cell} ipython3

```
