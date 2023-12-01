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

# Extra notes

+++

## Digitised collections

Resources digitised by the NLA and delivered trhough Trove are sometimes grouped into collections. In the **Digitised Newspapers & Gazettes** category, relationships exist between the different parts of a newspaper – titles, issues, pages, and articles – enabling you move from one level to another, and [to access and aggregate data](/newspapers-and-gazettes/data/accessing-data) from the different components. For example, you can [find articles published on a particular page](get-page-identifier-from-search).

These sorts of relationships are not as clearly defined for other types of digitised resources, and little data about these relationships is directly available from the Trove API.



- parts as versions in works
- digitised collections -- with 'Browse this collection' buttons (can be nested)
- most relationships hidden in embedded metadata - multi-volume works, chapters in books, articles in journals, pages etc

But, broadly speaking, relationships between digitised resources are defined in the following ways:

- Using works and versions – the work level record represents the collection, and members of the collection are grouped within the work as versions.
- Using the digitised collection viewer – 



- parts as versions in works
- digitised collections -- with 'Browse this collection' buttons (can be nested)
- most relationships hidden in embedded metadata - multi-volume works, chapters in books, articles in journals, pages etc

## Finding aids

- have their own hierarchical structure (inherited from EAD), see everything on one page
- but if you navigate down you end up in a series of nested collections
- have isPartOf relationships (to multiple levels)

Describe the different ways that 'collections' are described within Trove.

Parent-child relationships in Trove metadata:

- `isPartOf` -- this seems to be used as the basis of the `contribcollection` facet (need to do some more testing of this). Note that these are not necessarily the immediate parent, can have multiple values.
- `series` -- searchable using `series:` index (`series` are a type of `isPartOf` relationship in version metadata)
- some digitised resources use versions as children of works
- finding aids (can use all of the above?)
- `title` facet (overlap with `contribcollection`? Also uses `isPartOf`)
- in embedded metadata

Using NUCs to limit to a contributor

`isPartOf` in version metadata can have multiple values, and each value can have a `type`. Types include: `series`, `publication`. For example:

``` json
 "isPartOf": [
    {
        "value": "Annual report",
        "type": "publication"
    },
    {
        "value": "PP no. 35 of 2012"
    },
    {
        "value": "Parliamentary paper (Australia. Parliament)",
        "type": "series"
    }
],
```
PP no. 35 of 2012 -- doesn't work with series

<https://trove.nla.gov.au/search/category/research?keyword=&l-contribcollection=PP%20no.%2035%20of%202012>

<https://trove.nla.gov.au/search/category/research?keyword=series%3A%22Parliamentary%20paper%20%28Australia.%20Parliament%29%22> - 192,262 results

<https://trove.nla.gov.au/search/category/research?keyword=&l-contribcollection=Parliamentary%20paper%20%28Australia.%20Parliament%29> - 178,088 results

Includes aggegated collections/databases eg Informit -- `contribcollection` facets for journal titles -- so `contribcollection` has more than `title`

+++

Looks like `title` only applies to digitised resources (looks for `type: publication` in `isPartOf`??). `contribcollection` sometimes but not always?? (Compare below and above)

<https://api.trove.nla.gov.au/v3/result?category=all&encoding=json&l-title=Journal%20of%20the%20Soil%20Conservation%20Service%20of%20New%20South%20Wales> -- records in magazine and research

<https://api.trove.nla.gov.au/v3/result?category=all&encoding=json&l-contribcollection=Journal%20of%20the%20Soil%20Conservation%20Service%20of%20New%20South%20Wales> -- only records in book

+++

<https://trove.nla.gov.au/search/category/magazines?keyword=&l-contribcollection=John%20Ryan%20Comic%20Collection%20%28Specific%20issues%29.> -- all of Bulletin and some others are described as part of John Ryan Comic Collection (Specific issues).

Note that facet values have to be exactly equal so leaving the full stop off the example above returns nothing. Indexes can be used for flexible matches.

Sometimes `isPartOf` can include a url:

``` json
"isPartOf": [
    {
        "value": "The bulletin.",
        "url": "https://api.trove.nla.gov.au/v3/work/11500235"
    },
    {
        "value": "John Ryan Comic Collection (Specific issues).",
        "type": "series"
    }
],
```

+++

## Works and versions

### Digitised collections

No individual metadata -- titles, dates in linktext. Not individually searchable. Not individually downloadable via API.



Also duplicates.

PP divided in sections - sections of a publication (eg the title page) grouped with the actual publication

## Research implications

- search
- stats, facet data
- harvesting versions

The challenges

User confusion - noted early on, various changes. Needs to be factored into search strategies.

Aim is to improve search experience

Impact of findability -- might reject work results, or be confused by their inclusion. Gains by grouping, diluted by confusion?

Does it matter? 

Problems of aggregation from multiple sources, no control.

Pulltion of categories, numbers, stats, facets

Data -- counts, stats, and facets

+++

## The reality

That's the theory. The reality is more complex and confusing.



## Implications for research

- records invisible to search
- need to unpack versions from API


Work has metadata extracted from versions.



More problems with non-library type collections

The idea:

- a FRBR-ish system, grouping together different versions of the same work (to save you having to wade through hundred of editions of Macbeth

> The FRBR conceptual model is intended to meet the end users’ needs. This data model proposes the creation of bibliographic concepts (“work”, “expression”, “manifestation” and “item”) and a new way to formalise relations between these bibliographic entities.  The so called WEMI-Model (Work, Expression, Manifestation and Item model) tries to identify the core aspects of publications and is the foundation of the FRBR family. 
>
> - Work is defined as the intellectual or artistic content of a distinct creation. It refers to a very abstract idea of a creation e.g. Shakespeare’s Romeo and Juliet and not a specific expression. 
> - Expression is the intellectual or artistic realization of a work. The realization may take the form of text, sound, image, object, movement, etc., or any combination of such forms.
> - Manifestation is the embodiment of an expression of a work. For example a particular edition of a book or a specific music recording. 
> - Item is a single exemplar of a manifestation. Cataloguing is generally done, based on an item directly available to a cataloguer 

-- IFLA, [Functional Requirements for Bibliographic Records (FRBR)](https://www.ifla.org/references/best-practice-for-national-bibliographic-agencies-in-a-digital-age/resource-description-and-standards/bibliographic-control/functional-requirements-the-frbr-family-of-models/functional-requirements-for-bibliographic-records-frbr/)

But Trove trying to group records using metadata it doesn't create or control.

Thw Wiggles - https://trove.nla.gov.au/work/158465667

Groups defined at different levels:

- Libraries Australia
- Trove harvester (aggregated content)
- digitised content 

Mostly ok for published works?

- but theses?

Problems:

- muddy metadata -- multiple (sometimes misleading) formats that don't always align with categories
- grouping together of things which have the same title, but are not the same!
- use for collections of things (inconsistent)
- attempt to use works/versions for hierarchical structures
- search operates at work level
- some duplicates not grouped

Examples:

- Multiple digitised versions & odd version groupings - The famous Mount Morgan gold mine, <https://trove.nla.gov.au/work/12445906> [API](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F12445906%3Fencoding%3Djson%26reclevel%3Dfull%26include%3DworkVersions%2Clinks&comment=) -- one version is parent record, other version combines records
- Versions are distinct items in digitised collection - National Anti-Sweating League of Victoria, <https://trove.nla.gov.au/work/163048354> [API](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F163048354%3Fencoding%3Djson%26reclevel%3Dfull%26include%3DworkVersions%2Clinks&comment=) -- format is Multi-volume book, titles of individual items are only in `linktext` of identifier
- PM Transcripts, eg: https://​trove​.nla​.gov​.au​/work​/195172587 [API](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F195172587%3Fencoding%3Djson%26reclevel%3Dfull%26include%3DworkVersions%2Clinks&comment=) -- lots of John Howards, these all have indexed fulltext, but search only operates at work level, so no way of knowing which version matches your search
- Fraser electorate talks - <https://trove.nla.gov.au/work/195160655> [API](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F195160655%3Fencoding%3Djson%26reclevel%3Dfull%26include%3DworkVersions%2Clinks&comment=)
- "Politics with Paul Bongiorno" (ABC RN) <https://trove.nla.gov.au/work/188217416>
- Collection with individual records for items: https://trove.nla.gov.au/work/19748499 but items have two versions eg: https://trove.nla.gov.au/work/172653701 [API](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F172653701%3Fencoding%3Djson%26reclevel%3Dfull%26include%3DworkVersions%2Clinks&comment=) -- one via Libraries Australia and another via ANL:DL
- Bad groupings: <https://trove.nla.gov.au/work/7857744> <https://trove.nla.gov.au/work/13791197>
- Collection with one item (and 3 versions) <https://trove.nla.gov.au/work/11648908> (also this is in M&N category as well as B&L - 3 records returned)
- Another collection where items are versions and not individually findable: <https://trove.nla.gov.au/work/12938999/>
- Advertising posters (a book!) goes to finding aid: <https://trove.nla.gov.au/work/239465235> (individual items in pictures eg: https://trove.nla.gov.au/work/6115600 -- no ispartof to link to collection / also https://trove.nla.gov.au/work/248470051 where there is a ispartof, but this is a 'photograph')

+++

Problematic version groupings:

- Malcolm Fraser Electorate Talks - <https://trove.nla.gov.au/work/195160655>
- https://trove.nla.gov.au/work/36446349 – annual reports of the Royal Society of Tasmania, multiple years as ‘editions’, description is taken from one and used across all. API records contain 2 versions for each edition.
- [This record](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F81126945%3Freclevel%3Dfull%26include%3Dworkversions) combines a book with a chapter from the book (held in an IR).

+++

May need to unpack versions from works to get a full list of resources for exploration/analysis (eg ABC, Royal Society of Tasmania)

PM Transcripts, eg: <https://trove.nla.gov.au/work/195172587>

+++

Grouping on aggregated metadata, but metadata not good enough


## Implications for data

Invisibility of versions -- need to unpack works

+++ {"jp-MarkdownHeadingCollapsed": true}

## Indexing of full text from aggregated collections

> Description: An account of the resource. Description may include an abstract, a byline or a free-text account of the resource. When the fulltext of an article is available, include it in a description field with the additional attribute type=”fulltext”. Trove will index this text (return the record for a search on a word in the fulltext) but only display the first 200 characters. Users will need to visit your site to view the fulltext. Trove will only index the first 30,000 characters of a description field. -- <https://trove.nla.gov.au/partners/partner-services/contribute/trove-data-dictionary>
