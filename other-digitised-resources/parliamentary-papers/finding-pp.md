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

# Finding Parliamentary Papers in Trove

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Finding Parliamentary Papers in Trove

You can [find NLA digitised resources](/understanding-search/finding-digitised-content) by searching for `"nla.obj"` and selecting the 'Online' facet (if you're using the API set `l-availability` to `y`). To further limit the results to digitised Parliamentary Papers the best option seems to be adding `series:"Parliamentary paper (Australia. Parliament)` to [your search query](https://trove.nla.gov.au/search?keyword=%22nla.obj%22%20series%3A%22Parliamentary%20paper%20%28Australia.%20Parliament%29%22&l-availability=y).

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22nla.obj%22+series%3A%22Parliamentary+paper+%28Australia.+Parliament%29%22%26category%3Dall%26l-availability%3Dy%26encoding%3Djson%26bulkHarvest%3Dtrue&comment=)

The `series` index is generated from the `isPartOf` metadata field, so this query finds resources that are part of the 'Parliamentary paper (Australia. Parliament)' collection. This approach seems to return more Parliamentary Papers and much less noise than other options, such as setting `format` to `Government publication`.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
import os
import time

import altair as alt
import pandas as pd
import requests
from dotenv import load_dotenv
from IPython.display import HTML
from myst_nb import glue
from wordcloud import WordCloud

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

## How many digitised Parliamentary Papers are there in Trove?

Using this query, you can find the total number of work-level records describing digitised Parliamentary Papers in Trove.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
params = {
    "q": '"nla.obj" series:"Parliamentary paper (Australia. Parliament)"',
    "category": "all",  # Get results from all categories
    "l-availability": "y",
    "encoding": "json",
    "n": 0,
    "bulkHarvest": "true",  # This will combine the results from all categories
}

headers = {"X-API-KEY": YOUR_API_KEY}

response = requests.get(
    "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
)
data = response.json()

print(f'There are {data["category"][0]["records"]["total"]:,} work records!')
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

That's a lot of records! But don't assume that the number of work records is the same as the number of digitised publications. If you examine the distribution of records by category and format, you'll see some interesting clusters.

Here's the number of records in each category. Remember that records can be duplicated across categories, so if you add up the category totals it'll be more than the total number calculated above. The table below shows that most of the records are in the *Magazines & Newsletters* category. It also seems that many of them are duplicated in *Research & Reports*.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
params = {
    "q": '"nla.obj" series:"Parliamentary paper (Australia. Parliament)"',
    "category": "all",
    "l-availability": "y",
    "encoding": "json",
    "n": 0,
}

headers = {"X-API-KEY": YOUR_API_KEY}

response = requests.get(
    "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
)
data = response.json()

totals = [
    {"category": c["name"], "total": c["records"]["total"]} for c in data["category"]
]
pd.DataFrame(totals).style.format(thousands=",").hide()
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

Here's the number of records by *format*. Remember that digitised resources can be [merged with other versions into works](/what-is-trove/works-and-versions), resulting in some odd combinations. This table shows that most of the records describing parliamentary papers have the format `Article`. This aligns with the fact that most of the records are in the *Magazines & Newsletters* category which contains articles extracted from digitised periodicals.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
params = {
    "q": '"nla.obj" series:"Parliamentary paper (Australia. Parliament)"',
    "category": "all",
    "l-availability": "y",
    "encoding": "json",
    "n": 0,
    "facet": "format",
    "bulkHarvest": "true",
}

headers = {"X-API-KEY": YOUR_API_KEY}

response = requests.get(
    "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
)
data = response.json()

facets = [
    {"format": f["search"], "total": f["count"]}
    for f in data["category"][0]["facets"]["facet"][0]["term"]
]

pd.DataFrame(facets).style.format(thousands=",").hide()
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

But why are Parliamentary Papers described as 'articles'? If you look at [the results in the **Magazines & Newsletters** category](https://trove.nla.gov.au/search/category/magazines?keyword=%22nla.obj%22%20series%3A%22Parliamentary%20paper%20%28Australia.%20Parliament%29%22&l-availability=y), you'll see that the records describe *sections* of Parliamentary Papers, not complete publications. In other words, **the Parliamentary Papers are being treated like issues of a periodical** – the contents of each paper is being split up into sections (like articles in a journal), and a record is being created for each individual section.

As a result, most of the search results for Parliamentary Papers point to *parts* of publications, rather than to complete, individual Parliamentary Papers. The total number of Parliamentary Papers will be considerably less than the total number of work-level records displayed above. 

How then can you limit the search to only show complete Parliamentary Papers and exclude the 'articles'? I don't think you can. If you add `NOT format:Article` to your search you'll exclude reports with the format `Article/Report`, and probably lose other publications that are grouped with `Article` records. You could just ignore the **Magazines & Newsletters** category, but many of the 'articles' are also in **Research & Reports** where they're mixed with other publication formats. There's no way to drop the 'articles' without losing other, more relevant, records.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## How are Parliamentary Papers arranged and described?

The splitting of Parliamentary Papers also generates some odd-looking 'articles', such as contents pages and appendices. When combined with the [grouping of versions into works](/what-is-trove/works-and-versions), this can have some unfortunate consequences. For example, [here's a record](https://trove.nla.gov.au/work/237938382) where the 'Table of contents' sections of different Parliamentary Papers have been grouped as a single work!

Not all of the Parliamentary Papers are split into 'articles'. Sometimes they are only described as single, standalone works. This [report by the Australian Science and Technology Council on 'Marine sciences and technologies in Australia'](https://trove.nla.gov.au/work/9710970) is treated like a book, and is linked to a single digitised resource. If you [search for its NLA identifier](https://trove.nla.gov.au/search?keyword=%22nla.obj-1459420424%22) you won't find any child articles.

Sometimes individual Parliamentary Papers are not described at all. While attempting to harvest a full list of Parliamentary Papers, I noticed that I couldn't find the parent publications of some 'articles'. These publications are digitised and accessible, but they don't turn up in Trove's search results. The only way to find them, in either the web interface or API, is to navigate upwards from an 'article'.

In many cases, individual Parliamentary Papers are grouped together, like the issues of a periodical. An example of this might be all the annual reports of a particular government agency. Trove represents collections of resources in [a number of different ways](/what-is-trove/collections). Groups of Parliamentary Papers are generally created as collections within the digitised item viewer. For example, the work record for [Report of the Senate Select Committee on Superannuation](https://trove.nla.gov.au/work/22095680) links to a page with a **Browse this collection** button. Clicking on the button displays details of 28 different reports published between 1992 and 2001.

In this case, both the collection and the individual reports within it have their own separate work records. So the digitised version of the 1993 report on the *Super Complaints Tribunal* can be accessed directly from [this work record](https://trove.nla.gov.au/work/237349942), or by using the **Browse this collection** page.

However, there are other examples where there are only work records for the collection, not the individual reports. This means you can only find and access the reports from the collection page, or in disaggregated form as separate articles.

The quality of the metadata also varies. The report on the *Super Complaints Tribunal*, for example, actually has the title 'PP no. 388 of 1993, Report no. 10', and so won't be returned by a title search for 'super complaints tribunal'. Added to that, there are a large number of duplicate records. The marine sciences report has two work records with different titles.

**All of this means that search results in the Parliamentary Papers are a mix of different types of things – collections, publications, articles, and duplicates – and it can be difficult to figure out what it is that you're actually searching, or how to limit your results to type of resource you want.**

If you're using the web interface, this means that you'll have to spend some time working through your search results – digging into collection groupings, navigating between articles and issues, discarding duplicates, and managing missing metadata. If you're using the API to create datasets of Parliamentary Papers, you'll need to combine a number of approaches to make sure your dataset is as complete as possible.
