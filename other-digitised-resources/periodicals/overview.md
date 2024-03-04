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

# Overview of periodicals

````{card}
On this page


```{contents}
:local:
```
````

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
from myst_nb import glue
import altair as alt
import pandas as pd
from wordcloud import WordCloud

# CONFIG SO THAT ALTAIR HREFS OPEN IN A NEW TAB

def blank_href():
    return {"usermeta": {"embedOptions": {"loader": {"target": "_blank"}}}}

# register the custom theme under a chosen name
alt.themes.register("blank_href", blank_href)

# enable the newly registered theme
alt.themes.enable("blank_href")
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## What is a periodical?

Periodicals are publications that are issued at regular intervals, like newspapers, magazines, or academic journals. In Trove, newspapers are managed and delivered through a separate system, so this section focuses on other types of digitised periodicals.

Here's some examples of Trove's digitised periodicals:

::::{grid}
:gutter: 3

:::{grid-item-card} *The Bulletin*, 1880–1984
![nla.obj-188284455.jpeg](/images/nla.obj-188284455.jpeg)

[Browse 5,418 issues &gt;](https://nla.gov.au/nla.obj-68375465)
:::

:::{grid-item-card} *The Home*, 1920–1942
![nla.obj-380634657.jpeg](/images/nla.obj-380634657.jpeg)
[Browse 229 issues&gt;](https://nla.gov.au/nla.obj-362409353)
:::

:::{grid-item-card} *Dogs*, 1962–1970
![nla.obj-873894973.jpeg](/images/nla.obj-873894973.jpeg)
[Browse 106 issues &gt;](https://nla.gov.au/nla.obj-760030643)
:::
::::

Sometimes it's not clear whether a publication is a periodical or not. What about annual reports produced by government departments? Or almanacs that are updated each year? As with most things Trove, the boundaries are blurry. What counts as a periodical might depend on your own research interests.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Digitised and born digital periodicals

This section is looking at periodicals that have been digitised by the NLA and its partners and delivered through Trove. In other words, they're periodicals that have been converted from print publications to digital objects by scanning, imaging, and OCR. But there are a growing number of periodicals available through Trove that were *born* digital. These include digital publications (usually PDFs) that are uploaded by publishers under the [National edeposit](https://ned.gov.au/ned/) (NED) scheme. Recent editions of periodicals are likely to arrive in Trove via NED.

Since the 1990s, the Australian Web Archive has sought to preserve online journals through Pandora, its selective archiving program. The contents of the preserved journals are now rolled into the whole of domain web harvest that you can explore through Trove's **Websites** category. But there are also records for individual journal titles in other categories, particularly **Books & Libraries**. 



Web archives: https://trove.nla.gov.au/search/category/books?keyword=%22nla.arc%22&l-format=Periodical

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Finding digitised periodicals

Trove has a ready-made [list of digitised newspaper titles](https://trove.nla.gov.au/newspaper/about) for you to search and browse. However, there's no comparable list for other types of periodicals. So how do you find out which periodicals have been digitised?

### Search for titles

You can search for periodical titles as you would [other digitised resources](/understanding-search/finding-digitised-content), using `"nla.obj"` as your query, setting the `format` facet to `Periodical`, and the `availability` facet to `y`. However, this will include publications submitted through NED, as well as a large number of Parliamentary Papers, so you might want to add further filters. For example, a [search](https://trove.nla.gov.au/search/category/books?keyword=%22nla.obj%22%20NOT%20series%3A%22Parliamentary%20paper%20%28Australia.%20Parliament%29%22%20NOT%20nuc%3A%22ANL%3ANED%22&l-availability=y&l-format=Periodical) for `"nla.obj" NOT series:"Parliamentary paper (Australia. Parliament)" NOT nuc:"ANL:NED"`, with `format` set to `Periodical` and `availability` set to `y`, currently returns 957 results in the **Books & Libraries** category. Using the API, with `category` set to `all`, there are 1,078 results.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22nla.obj%22+NOT+series%3A%22Parliamentary+paper+%28Australia.+Parliament%29%22+NOT+nuc%3A%22ANL%3ANED%22%26category%3Dall%26l-format%3DPeriodical%26l-availability%3Dy%26encoding%3Djson%26bulkHarvest%3Dtrue&comment=)

These searches return work-level records. As with other 'works' in Trove, the records can combine multiple 'versions' of the periodical, grouping Trove's digitised version with metadata from other sources. The 'digitised item' link in the work record takes you to the digital collection viewer, which brings together all the issues from the periodical that have been digitised and made available through Trove. 

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

The **Read** links in article records open up the digitised item viewer to display the page on which the article was published. You can use the navigation links in the viewer to browse up through the hierarchy to view the complete set of issues from that title.

### Using the API

Version 3 of the Trove API introduced the `magazine/titles` endpoint. You can use this endpoint to request basic details of all the digitised periodicals in Trove.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A//api.trove.nla.gov.au/v3/magazine/titles%3Fencoding%3Djson&comment=)

Here's an example of a periodical record. The `nla.obj` links in the data go directly to the digital collection viewer.

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

### Search versus API

I've harvested lists of digitised periodicals using both the search strategy described above and the `magazine/titles` endpoint. Once I excluded the Parliamentary Papers, the number of titles returned by both methods was similar, but not the same. For example, the search results included some single issues of periodicals which were treated as standalone publications rather than as members of a collection. On the other hand, the API results include some periodicals whose `format` field doesn't include `Periodical`.  

### Pre-harvested dataset



+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Finding digitised periodicals



As noted above, the definitional boundaries around periodicals are pretty blurry, and you have to make some decisions about what to include or exclude. I've created a dataset that captures information about digitised periodicals in Trove, but have deliberately excluded Commonwealth Parliamentary Papers. This is because Parliamentary Papers are treated rather inconsistently in Trove – some are 'books', others are 'periodicals'. It made more sense to bring all the Parliamentary Papers together, and treat them separately from periodicals. This also makes it easier to explore the fascinating variety of journals, almanacs, magazines, and newsletters that have been digitised, without wading through innumerable annual reports from government agencies.


````{card}
Search for digitised periodicals
^^^

<iframe width="100%" height="500" src="https://glam-workbench.net/datasette-lite/?url=https://github.com/GLAM-Workbench/trove-periodicals-data/blob/main/periodicals.db&install=datasette-json-html&install=datasette-template-sql&metadata=https://github.com/GLAM-Workbench/trove-periodicals-data/blob/main/metadata.json"></iframe>

+++
[View full screen](https://glam-workbench.net/datasette-lite/?url=https://github.com/GLAM-Workbench/trove-periodicals-data/blob/main/periodicals.db&install=datasette-json-html&install=datasette-template-sql&metadata=https://github.com/GLAM-Workbench/trove-periodicals-data/blob/main/metadata.json)
````

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## How many digitised periodical titles are there?

The calculations and visualisations below are all based on this pre-harvested dataset and exclude Parliamentary Papers. 

Given those qualifications, how many digitised periodicals are there?

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
import pandas as pd

df_titles = pd.read_csv("https://github.com/GLAM-Workbench/trove-periodicals-data/raw/main/periodical-titles.csv", keep_default_na=False)

print(f"There are {df_titles.shape[0]:,} digitised periodicals in Trove.")
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-output, hide-input]
---
from wordcloud import WordCloud

wc = WordCloud()
wc = WordCloud(width=800, height=300).generate("\n".join(df_titles["title"].to_list())).to_image()
wc
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
glue("wc-titles", wc, display=False)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{glue:figure} wc-titles
:name: wc-periodical-titles
Words in the titles of periodicals
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Issues

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
df_issues = pd.read_csv("https://github.com/GLAM-Workbench/trove-periodicals-data/raw/main/periodical-issues.csv", keep_default_na=False)

print(f"There are {df_issues.shape[0]:,} digitised periodical issues in Trove.")
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-output, hide-input]
---
import altair as alt

df_issues["year"] = df_issues["date"].str.slice(0,4)

df_issues_years = df_issues["year"].value_counts().to_frame().reset_index()

# Add a link to the db of issues in Datasette
df_issues_years["db_link"] = df_issues_years["year"].apply(lambda x: f"https://glam-workbench.net/datasette-lite/?url=https://github.com/GLAM-Workbench/trove-periodicals-data/blob/main/periodicals.db&install=datasette-json-html&install=datasette-template-sql&metadata=https://github.com/GLAM-Workbench/trove-periodicals-data/blob/main/metadata.json#/periodicals/issues?date__lte={x}-12-31&date__gte={x}-01-01&_sort=date")

chart_issues_years = alt.Chart(df_issues_years.loc[df_issues_years["year"] > "1800"]).mark_bar(size=2).encode(
    x=alt.X("year:T", title="year of publication"),
    y=alt.Y("count:Q", title="number of issues"),
    tooltip=[alt.Tooltip("year:T", format="%Y"), alt.Tooltip("count:Q", title="issues")],
    href="db_link"
).properties(width=600, height=300, padding=20)

chart_issues_years
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
glue("chart-issues-years", chart_issues_years, display=False)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{glue:figure} chart-issues-years
:name: chart-issues-years
Number of periodical issues by year
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input, remove-output]
---
import altair as alt

df_pages_years = df_issues.groupby("year")["pages"].sum().to_frame().reset_index()

df_issues["year"] = df_issues["date"].str.slice(0,4)

df_issues_years = df_issues["year"].value_counts().to_frame().reset_index()

# Add a link to the db of issues in Datasette
df_issues_years["db_link"] = df_issues_years["year"].apply(lambda x: f"https://glam-workbench.net/datasette-lite/?url=https://github.com/GLAM-Workbench/trove-periodicals-data/blob/main/periodicals.db&install=datasette-json-html&install=datasette-template-sql&metadata=https://github.com/GLAM-Workbench/trove-periodicals-data/blob/main/metadata.json#/periodicals/issues?date__lte={x}-12-31&date__gte={x}-01-01&_sort=date")

chart_pages_years = alt.Chart(df_pages_years.loc[df_pages_years["year"] > "1800"]).mark_bar(size=2).encode(
    x=alt.X("year:T", title="year of publication"),
    y=alt.Y("pages:Q", title="number of pages"),
    tooltip=[alt.Tooltip("year:T", format="%Y"), alt.Tooltip("pages:Q", title="pages", format=",")]
).properties(width=600, height=300, padding=20)

chart_pages_years
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
glue("chart-pages-years", chart_pages_years, display=False)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{glue:figure} chart-pages-years
:name: chart-pages-years
Number of periodical issues by year
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
## Undated issues
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```
