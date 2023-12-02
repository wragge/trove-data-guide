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

# Understanding and using digitised resources

+++ {"editable": true, "slideshow": {"slide_type": ""}}



+++

This section describes how to access data from resources (other than newspapers and gazettes) that have been digitised by the NLA and partners and delivered through Trove. This includes things likes books, periodicals, photographs, maps, oral histories, and manuscript collections.

These resources are spread across multiple categories and mixed with records aggregated from other collections. This makes finding NLA digitised items quite challenging. The one exception to this is periodical articles, which have their own *Magazines & Newsletters* category.

Digitised resources can be found in the following categories:

- Books & Libraries (eg books and ephemera)
- Magazines & Newsletters (periodical articles)
- Images, Maps & Artefacts (eg photographs and maps)
- Research & Reports (eg government reports)
- Diaries, Letters & Archives (eg manuscript collections)
- Music, Audio & Video (eg sheet music and oral histories)

````{margin}
```{figure} /images/nla.obj-2383582349-1.jpg
:name: broadside-example

Is this a book? Example of a digitised broadside found in the *Books & Libraries* category. (<http://nla.gov.au/nla.obj-2383582349>)
```
````

As described in [](/understanding-search/finding-digitised-content.md) the most reliable method of finding digitised items within a category is to search for "nla.obj" and then apply additional facets as required.

However, the metadata describing digitised items is not always accurate or consistent. For example, the *Books & Libraries* category contains a large amount of digitised emphemera, such as pamphlets and posters. This material is in the *Books & Libraries* category because the `type` of these works has been set as `Book`, even though other formats might have been more appropriate. For example, there are more than a thousand ["broadsides"](https://trove.nla.gov.au/search/category/books?keyword=%22nla.obj%22%20broadsides&l-format=Book) (or posters) found in the *Books & Libraries* category. Similar sorts of digitised works can also be found in the *Images, Maps & Artefacts* category, where their `type` has been set as `Poster, chart, other`. This means that searching for digitised items can require a certain amount of exploration and iteration, as you learn more about the way they've been described and arranged.

<mark>==Something about works and versions here?==</mark>

Sometimes the digitised resources you find are not individual items, but *collections* of digitised items – books can have multiple volumes, maps can be arranged in series, and photographs can be digitised as albums. Search results can include records for a collection as well the individual items within that collection. For example, this record describes an [album of photographs from the B.A.N.Z. Antarctic Research Expedition](https://trove.nla.gov.au/work/30068558). But there are separate records for each individual photograph, such as this [cute penguin and baby](https://trove.nla.gov.au/work/22456751). There's no search option that lets you distinguish between a collection and its contents. 

The arrangment of items and collections is most complex in the *Diaries, Letters & Archives* category where hierarchical finding aids have been flattened out to aid discovery of their digitised contents. Collections there can contain a confusing mix of items and nested collections.

Once you've found a digitised item or collection, Trove provides a link to access the resource in one of a number of different 'viewers'. While these viewers share many characteristics, there can be differences in the way you navigate and download resources. This, in turn, affects your ability to access the underlying data.

This complex mix of categories, formats, and viewers makes it difficult to organise information about how to access data from digitised resources. To make it easier to understand all the differences and similarities, this section creates yet another grouping of resources!

- Books, pamphlets, and print music 
- Periodicals
- Government publications
- Posters and ephemera
- Photographs
- Maps
- Oral histories
- Manuscripts

<mark>==Need to mention the different uses of `type` and `format` in UI and API==</mark>

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Metadata

Get children of collections by scraping browse list, except for periodicals.

Get pages (also chapters, articles) of publications from JSON metadata

Get articles from search

MARC data in embedded JSON sometimes richer than API

+++

## Downloading text images and PDFs

Method is the same across different format types, but the results differ depending on whether it's a collection, publication etc.

+++

## Things you might want to do

- finding digitised resources
- Get all issues of a journal as PDFs
- All the text of a book
- Books with OCR
- Maps relating to a region
- images from a finding aid
- all images under a specific collection (including any subcollections)

## How tos

- Get a a list of items in a collection of digitised items (recursive for nested collections?)
