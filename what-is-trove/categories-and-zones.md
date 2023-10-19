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

- Books and libraries
- Diaries, letters and archives
- Images, maps and artefacts
- Magazines and newsletters
- Music, audio and video
- Newspapers and gazettes
- People and organisations
- Research and reports
- Websites

On the surface they seem to based on the format of resources – books in one category, newspapers in another. But it’s a bit more complicated than that. Categories are determined both by the format of a resource and the way data about that resource is managed within Trove. For example, newspaper articles are obviously in the Newspapers category, but part of the reason is that newspaper articles are added, described, and managed within their own separate system.

```{admonition} The mysterious case of the Australian Women's Weekly
:class: tip
Ever wondered why the *Australian Women’s Weekly* is found in the Newspapers category and not with the Magazines? It’s because when the Women’s Weekly was digitised, the only way for Trove to ingest digitised publications was through the newspapers pipeline. Systems for managing magazines, journals, books, images, and other digitised content came later. 
```

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

Books & libraries is the default, then use type.

| Category                    | Type                                                         |
| :-------------------------- | :----------------------------------------------------------- |
| Books & Libraries           | archived website, audio book, book, braille, dissertation,  doctorate, ebook, illustrat*, large print, monograph, musical score,  talking book, thesis |
| Diaries, Letters & Archives | archiv*, business record, correspondence, financial record, letter, manuscript, personal papers, scrapbook |
| Research & Reports          | data set, dataset, thesis, theses                            |
| Music, Audio & Video        | audio, audio book, broadcast, broadcast transcript, lecture,  interview, motion picture, moving image, music, oral, radio score, sheet music, sound, speaking, story, talking book, video |
| Images, Maps & Artefacts    | cartoon, chart, diagram, drawing, engraving, etching, flash card,  graph, image, ink, lithograph, object, original art work, painting,  pencil, photograph, postcard, poster, sketch, still image, table,  watercolo* , aerial photograph, atlas, globe |

– from [Trove Data Dictionary](https://trove.nla.gov.au/partners/partner-services/contribute/trove-data-dictionary)  



But why does [this work](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F9439997%3Freclevel%3Dfull%26include%3Dworkversions%2Choldings) show up in Research? No mention of data sets or theses, and not held by an IR. Because it’s a ‘Government publication’?

[This record](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F81126945%3Freclevel%3Dfull%26include%3Dworkversions) combines a book with a chapter from the book (held in an IR).

```{code-cell} ipython3

```
