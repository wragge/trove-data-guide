---
jupytext:
  formats: ipynb,md:myst
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

+++ {"user_expressions": []}

# Categories and zones

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

+++ {"user_expressions": []}

Trove’s resources are divided into **categories**. Understanding the nature and content of these categories will help you construct effective searches and access useful data.

There are nine categories in Trove:

- Books & Libraries
- Diaries, Letters & Archives
- Images, Maps & Artefacts
- Lists
- Magazines & Newsletters
- Music, Audio & Video
- Newspapers & Gazettes
- People & Organisations
- Research & Reports

On the surface they seem to based on the format of resources – books in one category, newspapers in another. But it’s a bit more complicated than that. Categories are determined by the format of a resource, the source of data about the resource, and the way that data is managed within Trove. For example, newspaper articles are obviously in the Newspapers category, but part of the reason is that newspaper articles are added, described, and managed within their own separate system.

```{admonition} The mysterious case of the Australian Women's Weekly
:class: tip
Ever wondered why the *Australian Women’s Weekly* is found in the Newspapers category and not with the Magazines? It’s because when the Women’s Weekly was digitised, the only way for Trove to ingest digitised publications was through the newspapers pipeline. Comparable systems for managing magazines, journals, books, images, and other digitised content came later. 
```

+++

## All categories are not the same

Broadly speaking, there are two types of categories in Trove: those that aggregate content, in various formats, from range of organisations and sources; and those that are limited to a specific type of resource created or managed by the NLA.

Categories that contain aggregated content in a variety of formats:

- Books & Libraries
- Diaries, Letters &  Archives
- Images, Maps & Artefacts
- Music, Audio & Video
- Research & Reports

Categories limited to a specific type of resource:

- Lists – created by Trove users
- Magazines & Newsletters – digitised periodical articles
- Newspapers & Gazettes – digitised newspapers
- People & Organisations – identity records
- Websites ­– archived copies of born-digital resources

Trove being Trove, this distinction is not always clear cut. While newspapers and periodical articles have their own dedicated categories, the rest of the NLA's digitised content (books, maps, photographs etc) are lumped into the general resource pool. The **Magazines & Newsletters** category *almost* exclusively contains articles from periodicals digitised by the NLA, but if you [search for `NOT "nla.obj"`](https://trove.nla.gov.au/search/category/magazines?keyword=NOT%20%22nla.obj%22) you'll find a small amount of content from other sources – mostly issues of the *Tattersall's Club Magazine*. And while the 'People & Organisations' category only contains identity records minted by the NLA, these records aggregate and disambiguate data from a number of other sources. Nonetheless, the distinction mostly holds, and it's useful to keep in mind when you start exploring how categories actually work in Trove.

+++

## Contexts not collections

The categories that contain a specific type of resource, such as **Newspapers & Gazettes**, are relatively easy to understand – they operate as distinct collections with clear boundaries. But the categories that contain aggregated content are more complicated, and sometimes confusing.

The first thing to note is that individual resources can appear in more than one of these categories. For example, if you search for ["Tasmanian Mineral Chart Series"](https://trove.nla.gov.au/search?keyword=title%3A%22Tasmania%20mineral%20chart%20series%22) you'll be presented with the same set of results in both the **Research & Reports** and **Images, Maps & Artefacts** categories. Why does this happen? The clue is in the formats of the matched resources – all of them are described both as `Map` and `Government publication`. Unsuprisingly, resources with the format `Map` end up in the **Images, Maps & Artefacts** category. But those described as `Government publication` are routed to **Research & Reports**. Rather than choosing between competing categories, Trove adds them to both.

Similarly, a [search for the book *Atlas of Australia with all the gold regions*](https://trove.nla.gov.au/search?keyword=title%3A%22Atlas%20of%20Australia%20with%20all%20the%20gold%20regions%22) returns five results in **Books & Libraries**, with three of those results duplicated in **Images, Maps & Artefacts**. All of them have the format `Book`, but the three in **Images, Maps & Artefacts** also have the format `Map`.

There are many examples where resources have multiple, competing formats: 

- 3,000 resources are both `Book` (Books & Libraries) and `Art work` (Images, Maps & Artefacts)
- 22,000 resources are `Government publication` (Research & Reports) and `Video` (Music, Audio & Video)
- 1,000 resources are `Object` (Images, Maps & Artefacts) and `Unpublished` (Diaries, Letters &  Archives)

These overlaps become even more complex when mixed with Trove's [grouping of works and versions](works-and-versions).

By duplicating results across categories, Trove is trying to make these resources easier to find, and that's good! The problem really is with the *idea* of 'categories'. Until 2020, Trove's categories were called 'zones', but during the initial design process they were referred to as 'collection views'.{cite:p}`cathroDevelopingTrovePolicy2010` The 'collection view' label provides a much clearer indication of the purpose of these top-level groupings – **they're not collections, they're contexts for discovery**.

They key point is that aggregated resources don't really *belong* to a category. You might have noticed that individual work records in both the web interface and the API, don't tell you the category (or categories) that work belongs to. If you have a work record, the only way to find its associated categories is to run a search for it. Categories only make sense when you're searching. They're not buckets of content, they're windows onto a big pool of aggregated resources.

<mark>==Note about the implications of working with data. Using the 'all' option with harvests.==</mark>

+++

## What ends up where?

But how do formats get associated with categories? The following table is included in the [Trove Data Dictionary](https://trove.nla.gov.au/partners/partner-services/contribute/trove-data-dictionary) to help contributors prepare their metadata for ingest. The contents of the `type` field are used to determine categories, with **Books & Libraries** the default destination.

| Category                    | Type                                                         |
| :-------------------------- | :----------------------------------------------------------- |
| Books & Libraries           | archived website, audio book, book, braille, dissertation,  doctorate, ebook, illustrat*, large print, monograph, musical score,  talking book, thesis |
| Diaries, Letters & Archives | archiv*, business record, correspondence, financial record, letter, manuscript, personal papers, scrapbook |
| Research & Reports          | data set, dataset, thesis, theses                            |
| Music, Audio & Video        | audio, audio book, broadcast, broadcast transcript, lecture,  interview, motion picture, moving image, music, oral, radio score, sheet music, sound, speaking, story, talking book, video |
| Images, Maps & Artefacts    | cartoon, chart, diagram, drawing, engraving, etching, flash card,  graph, image, ink, lithograph, object, original art work, painting,  pencil, photograph, postcard, poster, sketch, still image, table,  watercolo* , aerial photograph, atlas, globe |

```{admonition} Confused about types and formats?
Beware that `type` and `format` can have different meanings depending on where you are in Trove! In the web interface, 'Type' is used to distinguish between 'sub categories' such as `Newspaper' and `Gazette`, while 'Format' describes the resource's format. In the API, the format values are in the `type` field, although you use them with the `format` facet. There can also be a separate `format` field in work and version records that contains a physical description. 
```

+++

## Exploring the contents of categories

Use `format` facet.

Main contributors.

+++

## Working notes

Zones were called "collection views" in development. More accurate.

Exploration of overlaps

Contributors per zone (facets, point to more complete data)

Research and repositories

Note that work records don’t tell you what category they’re in (infer from `type`?). Categories manage searches, they’re (mostly) not collections in themselves. **Categories are contexts for discovery.** 

Categories affected by `type`, `format`, and also the grouping of versions into works (eg an article and book with the same name and author might be grouped). Also the source.

Is research the default for IRs?

Newspapers, web archive, and people separate.

Note that you can’t combine facet values etc because of overlaps.

Categories contain a range of formats that aren’t included in the format facet – eg Book in the magazine category. Can illustrate by searching for `NOT format:”Book”`. They’re less obvious in results but still there.

It looks like ‘Book/Illustrated’ for examples doesn’t go into Image. The ones in their seem to have something like ‘Art work’ or ‘map’ included.

Also ‘formats’ are actually ‘types’ in the metadata. The format field includes physical description info. Perhaps confusing.

So that means the `format` facet doesn’t provide a complete list of formats. It also means you might get formats you don’t expect if you harvest from a category (eg books in images)

Oddities:

- https://trove.nla.gov.au/work/36446349 – annual reports of the Royal Society of Tasmania, multiple years as ‘editions’, description is taken from one and used across all. API records contain 2 versions for each edition. 

## Categories





But why does [this work](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F9439997%3Freclevel%3Dfull%26include%3Dworkversions%2Choldings) show up in Research? No mention of data sets or theses, and not held by an IR. Because it’s a ‘Government publication’?

[This record](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F81126945%3Freclevel%3Dfull%26include%3Dworkversions) combines a book with a chapter from the book (held in an IR).

```{code-cell} ipython3

```
