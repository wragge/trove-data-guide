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

# Collections within collections

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
import requests
import pandas as pd
import os

from dotenv import load_dotenv

load_dotenv()
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
YOUR_API_KEY = os.getenv("TROVE_API_KEY")
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

````{card} On this page
Learn about the different ways Trove creates and represents collections of resources.

```{contents}
:local:
:backlinks: None
```
````

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## A collection of collections

Trove is a collection of collections. Some of those collections are harvested into Trove from collaborating organisations. Other collections, such as the digitised newspapers, are a product of the NLA's own processing pipelines. Within these groups, resources are linked together in a variety of different ways. For example, a newspaper article is part of an issue, a periodical issue is part of a title, a photograph might be part of an album, a book might be part of a series, and a letter might be part of a manuscript collection. These sorts of relationships can help you navigate through the layers of collections, moving from whole to part and back again. 

Unfortunately, Trove doesn't have a standard way of representing these sorts of parent/child relationships. Instead, a variety of metadata fields, facets, hierarchical structures, and interfaces group things in inconsistent and sometimes confusing ways. This means that collections are often fragmented in Trove search results, making it hard to see patterns and connections.

## Trove's categories are not collections!

Trove's top-level categories *look* like collections, but beware! While some categories, like **Newspapers & Gazettes**, have clear cut boundaries, others don't. As I've suggested in the [section on categories and zones](contexts-not-collections), it's best to think of the categories as contexts for discovery rather than collections.

## Works and versions can hide collections

Trove creates many thousands of little collections by trying to [group different versions of the same thing together as 'works'](/what-is-trove/works-and-versions.md). This grouping operates on a couple of levels and results in a hierarchical structure where works contain versions, and versions contain the original metadata records. However, it's [not always successful](muddy-metadata). As well as obvious grouping errors, works sometimes [cram different members of a collection together](not-the-same), as if they're actually the *same thing*. Even more concerning, it seems that works and versions have sometimes been used deliberately to [describe collections of digitised resources](digitised-works-groups). The problem with this is that the members of these collections are difficult to find and use as their individual metadata has either not been recorded or has been munged together as a single 'work'. In effect, **work groupings hide collections**. This is one of the reasons why I recommend unpacking all the versions from works and saving them individually when you're harvesting data.

## Finding collections by contributor

You can explore the different collections harvested into Trove by filtering your search results according to the source of the metadata. Organisations contributing data to Trove are assigned a National Union Catalogue (NUC) identifier. You can find an organisation's NUC by searching the [Australian Libraries Gateway](http://www.nla.gov.au/apps/libraries/index.html), or by looking in the dropdown list of 'Organisations' in Trove's advanced search form (the NUC is in square brackets).

```{figure} /images/nuc-dropdown.png
:name: "nuc-dropdown"
:width: 600px
NUC identifiers are displayed in square brackets
```

```{admonition} Advanced search for NUCs is broken!
:class: warning
While you can use Trove's advanced search to *find* a NUC, you can't reliably use it to search for items using that NUC. There's a longstanding bug that means if you select an organisation whose NUC includes a colon you'll get **no results**. You can fix the broken url by simply putting double quotes around the NUC value, or use one of the methods below.
```

Once you have a NUC you can find records from that organisation by using either the `nuc:` index or the `partnerNuc` facet – as far as I can tell the results are the same. For example, to find records from the ANU's institutional repository you'd [search for `nuc:"ANU:IR"`](https://trove.nla.gov.au/search/category/research?keyword=nuc%3A%22ANU%3AIR%22) (note the double quotes around the NUC value).

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3Dnuc%3A%22ANU%3AIR%22%26category%3Dall%26l-availability%3Dy%26encoding%3Djson%26bulkHarvest%3Dtrue&comment=)

(collections-ispartof)=
## `isPartOf` relationships

Some parent/child relationships in Trove are documented using the Dublin Core `isPartOf` metadata field. This field can appear in records aggregated into Trove from other organisations, as well as in records of digitised resources created by the NLA itself. In the web interface, `isPartOf` values can be displayed under a variety of headings, including 'Appears in', 'Part of', and 'Series'. Here's an example linking an individual oral history interview to an oral history project:

```{figure} /images/part-of-example.png
:name: "part-of-example"
:width: 600px
Example of the way `isPartOf` values are displayed in the Trove web interface
```

Here's how the same record appears in the API:

``` json
"isPartOf": [
    {
        "value": "Australian women scientists oral history project [sound recording].",
        "type": "publication"
    },
    {
        "value": "Australian women scientists oral history project.",
        "type": "series"
    }
],
```

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F245550805%3Fencoding%3Djson%26include%3Dworkversions%2Clinks%2Choldings&comment=)

The value of `isPartOf` is a text string rather than an identifier, so the connections can be a bit fuzzy. Also, a record can have multiple `isPartOf` values linking it to different points in a collection hierarchy – a record might be linked both to its direct parent and the top-level collection record. This means you can't reliably reconstruct a collection from the `isPartOf` values alone. Nonetheless, they can be useful in finding groupings of related resources.

As you can see in the API example above, `isPartOf` values can be qualified by supplying a `type`. The most common types seem to be `series` and `publication`. The [Trove Data Dictionary](https://trove.nla.gov.au/partners/partner-services/contribute/trove-data-dictionary) doesn't explain how the `type` qualifiers are meant to be used, but it seems that `series` generally denotes a collection, while `publication` is a more restricted grouping, such as the title of a parent publication.

To limit your search results to items with a particular `isPartOf` value, you can use either the `series:` index or the `contribcollection` facet, however, they behave slightly differently.

### Use the `contribcollection` facet to filter searches

The `contribcollection` facet seems to match all `isPartOf` values, irrespective of their `type`. However, **the matches must be exact, and are case-sensitive** – searching by `Annual report`, `Annual Report` and `Annual report.` will all produce different results! For example, to find more oral histories from the 'Australian women scientists oral history project' you could add `l-contribcollection=Australian women scientists oral history project.` to your query, but it only returns two results.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dmusic%26l-contribcollection%3DAustralian+women+scientists+oral+history+project.%26encoding%3Djson&comment=)

If you remove the trailing full stop from the collection name, you'll find another 22!

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dmusic%26l-contribcollection%3DAustralian+women+scientists+oral+history+project%26encoding%3Djson&comment=)

:::{admonition} Using `contribcollection` in the web interface
:class: "note"

The `contribcollection` facet is not displayed in the web interface, so you can't just check a box to filter results. To use it you'll need to manually edit the search url adding `&l-contribcollection=[YOUR IS_PART_OF VALUE]`.
:::

Inconsistencies in the metadata, such as trailing full stops, and the unforgiving nature of the `contribcollection` facet makes it tricky to use. You need to know the exact `isPartOf` value in advance, and be prepared to make multiple queries to capture any variations.

To complicate matters further, the `title` facet used in the **Magazines & Newsletters** category also works with values from the `isPartOf` field. It seems to return a subset of the results you get from `contribcollection`, perhaps because it's only using `isPartOf` values which have `type` set to `publication`. It's also case-sensitive, and expects exact matches, but it looks like trailing full stops have been removed.

(collections-ispartof-series)=
### Search the `isPartOf` field using the `series` index

````{margin}
```{seealso}
The `isPartOf` field is useful in identifying sub-collections of digitised resources such as [Parliamentary Papers](/other-digitised-resources/parliamentary-papers/finding-pp).
```
````

You can use the `series` index to search `isPartOf` values. It seems to only match records where the `isPartOf` type is `series`, but you can it's much more flexible than the `contribcollection` facet as it accepts partial matches and is case-insensitive. For example, a [search for `series:"Australian women scientists oral history project"`](https://trove.nla.gov.au/search/category/music?keyword=series%3A%22Australian%20women%20scientists%20oral%20history%20project%22) returns 25 results – no need to worry about trailing full stops!

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3Dseries%3A%22Australian+women+scientists+oral+history+project%22%26category%3Dmusic%26encoding%3Djson&comment=)

Because it accepts partial matches, you can use the `series` index to search for items from collections that include certain keywords. For example, there's a lots of separate ephemera collections from the NLA in Trove, to find items from all of them you can [search for `series:ephemera`](https://trove.nla.gov.au/?keyword=series%3Aephemera).

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3Dseries%3Aephemera%26category%3Dall%26encoding%3Djson%26include%3Dworkversions%26bulkHarvest%3Dtrue&comment=)

This lets you poke around to see what collections are available, rather than having to know the `isPartOf` value in advance.

### Harvesting all `isPartOf` values

````{margin}
```{seealso}
Here's a [pre-harvested dataset](oral-histories-downloadable-data) of oral history records, and a [complete list of series values](https://github.com/GLAM-Workbench/trove-oral-histories-data/blob/main/trove-oral-history-series.txt) from the `isPartOf` field.
```
````

Your ability to find the range of available `isPartOf` values using standard search queries is limited. Using the API you can set `facet` to `contribcollection` to get a list of the 100 most common `isPartOf` values related to your search. For example, to find a list of the NLA's oral history collections you can search for `nuc:ANL` in the `music` category, set the `format` facet to `Sound/Interview, lecture, talk`, and `facet` to `contribcollection`.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
import requests
import pandas as pd

params = {
    "q": "nuc:ANL",
    "category": "music",
    "l-format": "Sound/Interview, lecture, talk",
    "facet": "contribcollection",
    "encoding": "json",
    "n": 0
}

headers = {"X-API-KEY": YOUR_API_KEY}

response = requests.get(
        "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
    )
data = response.json()

facets = data["category"][0]["facets"]["facet"][0]["term"]

# Display the top ten values
df = pd.DataFrame(facets)
df[["display", "count"]][:10].style.hide()
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

To get a complete list of collections you'd need to harvest the `isPartOf` values from the full results set using the API. A method for doing this is described in [](/other-digitised-resources/how-to/harvest-digitised-resources).

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Digitised collections

Resources digitised by the NLA and delivered through Trove are sometimes grouped into collections. In the **Digitised Newspapers & Gazettes** category, relationships exist between the different parts of a newspaper – titles, issues, pages, and articles – enabling you move from one level to another, and [to access and aggregate data](/newspapers-and-gazettes/data/accessing-data) from the different components. For example, you can [find articles published on a particular page](get-page-identifier-from-search).

These sorts of relationships are not as clearly defined for other types of digitised resources, and little data about them is directly available from the Trove API. The [Other digitised resources](/other-digitised-resources/index) section describes in detail the issues and possible workarounds for different content types.

## Finding aids

````{margin}
```{seealso}
See the [Trove unpublished works (diaries, letters, and archives)](https://glam-workbench.net/trove-unpublished/) section of the GLAM Workbench for examples of finding and extracting data from finding aids.
```
````

Finding aids have their own in-built hierarchical structure of collections, series, sub-series, and items. They're mostly used in describing manuscript collections, but some of the NLA's photograph and ephemera collections are also described using finding aids.

Finding aids are created using the [Encoded Archival Description (EAD)](https://www.loc.gov/ead/) standard. The original EAD hierarchy is presented as a nested list in Trove. Links from the list go to the digitised item viewer.
