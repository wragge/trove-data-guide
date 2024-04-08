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

# Finding digitised periodicals

Trove has a ready-made [list of digitised newspaper titles](https://trove.nla.gov.au/newspaper/about) for you to search and browse. However, there's no comparable list for other types of periodicals. So how do you find out which periodicals have been digitised? Unfortunately there's no simple answer, but here are some possible strategies.

- records describing periodicals are mostly in the **Books & Libraries** category
- records describing articles extracted from periodicals are in the **Magazines & Newsletters** category
- records describing selected periodicals and articles are in the **Research & Reports**

### Search for titles

You can search for periodical titles as you would [other digitised resources](/understanding-search/finding-digitised-content), using `"nla.obj"` as your query, setting the `format` facet to `Periodical`, and the `availability` facet to `y`. However, this will include publications submitted through NED, as well as a large number of Parliamentary Papers, so you might want to add further filters. For example, a [search](https://trove.nla.gov.au/search/category/books?keyword=%22nla.obj%22%20NOT%20series%3A%22Parliamentary%20paper%20%28Australia.%20Parliament%29%22%20NOT%20nuc%3A%22ANL%3ANED%22&l-availability=y&l-format=Periodical) for `"nla.obj" NOT series:"Parliamentary paper (Australia. Parliament)" NOT nuc:"ANL:NED"`, with `format` set to `Periodical` and `availability` set to `y`, currently returns 957 results in the **Books & Libraries** category. Using the API, with `category` set to `all`, there are 1,078 results.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22nla.obj%22+NOT+series%3A%22Parliamentary+paper+%28Australia.+Parliament%29%22+NOT+nuc%3A%22ANL%3ANED%22%26category%3Dall%26l-format%3DPeriodical%26l-availability%3Dy%26encoding%3Djson%26bulkHarvest%3Dtrue&comment=)

These searches return work-level records. As with other 'works' in Trove, the records can combine multiple 'versions' of the periodical, grouping Trove's digitised version with metadata from other sources.

The 'digitised item' link in the work record takes you to the [digital collection viewer](interfaces:digitised-collection-viewer), which brings together all the issues from the periodical that have been digitised and made available through Trove. 

```{figure} /images/home-work-record.png
:name: home-work-record
:width: 600px
Work record for *The Home*, <https://trove.nla.gov.au/work/12397115>
```

Records for most periodical titles can be found in the **Books & Libraries** category, but they can pop up in other categories as well. Strangely enough, there are very few title records in the **Magazines & Newsletters** category. This is because it mostly contains records for *articles* extracted from periodicals, rather than records for the periodicals themselves.

### Search for articles

Another way to explore the range of digitised periodicals available from Trove is to search for articles in the **Magazines & Newsletters** category. Once you've run a search, the **Title** facet will indicate how your results are distributed across the range of available titles. You can also use the **Title** facet to limit your results to a particular periodical.

```{figure} /images/magazine-title-facet.png
:name: magazine-title-facet
:width: 600px
Results of a search in the **Magazines & Newsletters** category showing the **Title** facet
```

The **Read** links in article records opens up the [digitised journal viewer](interfaces:digitised-journal-viewer) to display the page on which the article was published. You can use the navigation links in the viewer to browse up through the hierarchy and view the complete set of issues from that title.

### Using the API

Version 3 of the Trove API introduced the `magazine/titles` endpoint. You can use this endpoint to request basic details of all the digitised periodicals in Trove.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A//api.trove.nla.gov.au/v3/magazine/titles%3Fencoding%3Djson&comment=)

Here's an example of a periodical record. The `nla.obj` links in the data go directly to the [digital collection viewer](interfaces:digitised-collection-viewer).

```json
{
    "id": "nla.obj-3000083880",
    "title": "Adelaide punch.",
    "publisher": "W.G. Roberts",
    "place": [
        "South Australia"
    ],
    "troveUrl": "https://nla.gov.au/nla.obj-3000083880",
    "startDate": "1868-01-01",
    "endDate": "1884-01-01"
}
```

The API currently returns information on 2,504 titles. However, this includes many Parliamentary Papers and several hundred duplicate records.

(periodicals:finding:search-v-api)=
### Search versus API

I've harvested lists of digitised periodicals using both the search strategy described above and the `magazine/titles` endpoint. Once I excluded the Parliamentary Papers, the number of titles returned by both methods was similar, but not the same. For example, the search results included some single issues of periodicals which were treated as standalone publications rather than as members of a collection. On the other hand, the API results include some periodicals whose `format` field doesn't include `Periodical`, as well as some titles that currently have no issues digitised.

This means that there's no straighforward way of determining which periodicals have been digitised. The answer will depend on what you think a periodical is, and what you want to do with the data. Hopefully, some of the problems with the `magazine/titles` endpoint will be fixed over time, so that it will at least provide a consistent, if not complete, answer to the question.
