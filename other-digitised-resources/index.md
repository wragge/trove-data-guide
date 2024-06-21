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

# Understanding digitised resources

+++ {"editable": true, "slideshow": {"slide_type": ""}}

````{card} On this page
This section describes resources (other than newspapers and gazettes) that have been digitised by the NLA and partners and delivered through Trove. This includes things likes books, periodicals, photographs, maps, oral histories, and manuscript collections.

```{contents}
:local:
:backlinks: None
```
````

## What has been digitised?

````{margin}
```{seealso}
The GLAM Workbench also contains some useful information on the scale and mix of digitised resources in Trove. See, for example, [Exploring digitised maps in Trove](https://glam-workbench.net/trove-maps/exploring-digitised-maps/) and [NLA digitised finding aids: summary information](https://glam-workbench.net/trove-unpublished/finding-aids-summary/).
```
````

It's difficult to gain a sense of how much has been digitised from the Trove web interface. To understand the scale of digitisation and the types of content available, you really need to harvest data out of Trove and then do some additional analysis. Here are some examples for selected format types:

- [Books](/other-digitised-resources/books/overview)
- [Oral histories](/other-digitised-resources/oral-histories/overview)
- [Parliamentary Papers](/other-digitised-resources/parliamentary-papers/overview)
- [Periodicals](/other-digitised-resources/periodicals/overview)

```{figure} /images/oral-histories-places.png
:name: oral-histories-places
:width: 600px

[Exploring the countries related to oral history records](digitised:oralhistories:locations)
```

(other-digitised:finding)=
## Finding digitised resources

Digitised resources are spread across multiple categories and mixed with records aggregated from other collections. The one exception to this is periodical articles, which have their own *Magazines & Newsletters* category.

Digitised resources can be found in the following categories:

- Books & Libraries (eg books and ephemera)
- Magazines & Newsletters (periodical articles)
- Images, Maps & Artefacts (eg photographs and maps)
- Research & Reports (eg government reports)
- Diaries, Letters & Archives (eg manuscript collections)
- Music, Audio & Video (eg sheet music and oral histories)

While it's easy to search Trove for a particular word or phrase, how do you limit your results to resources digitised by the NLA and partners? Unfortunately, there's no single filter or facet you can use to find digitised resources. As described in [](/understanding-search/finding-digitised-content.md) the most reliable method of finding digitised items is to search for `"nla.obj"` and then apply additional facets as required. Here are some additional hints for different format types:

- [Finding digitised books](other-digitised:books:finding)
- [Finding digitised Parliamentary Papers](/other-digitised-resources/parliamentary-papers/finding-pp)
- [Finding digitised periodicals](/other-digitised-resources/periodicals/finding-periodicals)
- [Finding oral histories](finding-oral-histories)


## Description and arrangement of digitised resources

````{margin}
```{figure} /images/nla.obj-2383582349-1.jpg
:name: broadside-example

Is this a book? Example of a digitised broadside found in the *Books & Libraries* category. (<http://nla.gov.au/nla.obj-2383582349>)
```
````

The metadata describing digitised items is not always accurate or consistent. For example, the *Books & Libraries* category contains a large amount of digitised emphemera, such as pamphlets and posters. This material is in the *Books & Libraries* category because the `type` of these works has been set as `Book`, even though other formats might have been more appropriate. For example, there are more than a thousand ["broadsides"](https://trove.nla.gov.au/search/category/books?keyword=%22nla.obj%22%20broadsides&l-format=Book) (or posters) found in the *Books & Libraries* category. Similar sorts of digitised works can also be found in the *Images, Maps & Artefacts* category, where their `type` has been set as `Poster, chart, other`. This means that searching for digitised items can require a certain amount of exploration and iteration, as you learn more about the way they've been described and arranged.

Individual digitised resources can also be [grouped into 'works'](/what-is-trove/works-and-versions). These 'works' combine metadata describing both digitised and non-digitised versions of resources, derived from multiple contributing organisations. This can make it difficult to see the metadata associated with a specific, digitised version. There can also be duplicate versions of digitised resources. For example, the work record for [The gold-finder of Australia : how he went, how he fared, how he made his fortune](https://trove.nla.gov.au/work/9453675), a pamphlet published in 1853, combines metadata from 6 versions. Two of these versions point to the same digitised copy. The other four are bibliographic records describing either the original pamphlet, or a 1973 reproduction. In many cases you will want to isolate the records of digitised resources from their work groupings, so you know that the metadata actually describes the version you can access online.

Sometimes the digitised resources you find are not individual items, but *collections* of digitised items – books can have multiple volumes, maps can be arranged in series, and photographs can be digitised as albums. Search results can include records for a collection as well the individual items within that collection. For example, this record describes an [album of photographs from the B.A.N.Z. Antarctic Research Expedition](https://trove.nla.gov.au/work/30068558). But there are separate records for each individual photograph, such as this [cute penguin and baby](https://trove.nla.gov.au/work/22456751). There's no search option that lets you distinguish between a collection and its contents. 

The arrangement of items and collections is most complex in the *Diaries, Letters & Archives* category where hierarchical finding aids have been flattened out to aid discovery of their digitised contents. Collections there can contain a confusing mix of items and nested collections.

Once you've found a digitised item or collection, Trove provides a link to access the resource in one of [a number of different 'viewers'](whatis:interfaces:digitised). While these viewers share many characteristics, there can be differences in the way you navigate and download resources. This, in turn, affects your ability to [access the underlying data](accessing-data.md).

<!---

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
--->

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```
