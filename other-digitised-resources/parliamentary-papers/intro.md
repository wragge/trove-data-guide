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

# Parliamentary Papers

The NLA has digitised a large collection of reports and papers presented to the Commonwealth Parliament. 

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
import os
import time

import altair as alt
import pandas as pd
import requests
from dotenv import load_dotenv
from myst_nb import glue

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

## Finding Parliamentary Papers

As documented in [](/understanding-search/finding-digitised-content), you can find NLA digitised resources by searching for `"nla.obj"` and selecting the 'Online' facet (if you're using the API set `l-availability` to `y`). To further limit the results to Parliamentary Papers there are a couple of possibilities:

- Use the 'Format' facet to select `Government publication` (in the API set `l-format` to `Government publication` – this will return many Parliamentary Papers, but it will also include other digitised resources (such as maps) that have been created by government agencies.
- Add `series:"Parliamentary paper (Australia. Parliament)` to your search query – this searches the `isPartOf` field and seems to return more Parliamentary Papers and much less noise.

Using the latter method, you can find the total number of work-level records describing digitised Parliamentary Papers in Trove.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
params = {
    "q": '"nla.obj" series:"Parliamentary paper (Australia. Parliament)"',
    "category": "all", # Get results from all categories
    "l-availability": "y",
    "encoding": "json",
    "n": 0,
    "bulkHarvest": "true" # This will combine the results from all categories
}

headers = {"X-API-KEY": YOUR_API_KEY}

response = requests.get(
    "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
)
data = response.json()

print(f'There are {data["category"][0]["records"]["total"]:,} work records!')
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

That's a lot of records! But before you take that number at face value, it's worth examining how those records are distributed across categories and formats.

Here's the number of records in each category. Remember that records can be duplicated across categories, so if you add up the category totals it'll be more than the total number calculated above.

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
    "n": 0
}

headers = {"X-API-KEY": YOUR_API_KEY}

response = requests.get(
    "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
)
data = response.json()

totals = [{"category": c["code"], "total": c["records"]["total"]} for c in data["category"]]
pd.DataFrame(totals).style.format(thousands=",").hide()
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

And here's the number of records by format. Remember that digitised resources can be [merged with other versions into works](what-is-trove/works-and-versions), resulting in an odd mix of formats.

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
    "bulkHarvest": "true"
}

headers = {"X-API-KEY": YOUR_API_KEY}

response = requests.get(
    "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
)
data = response.json()

facets = [{"format": f["search"], "total": f["count"]} for f in data["category"][0]["facets"]["facet"][0]["term"]]

pd.DataFrame(facets).style.format(thousands=",").hide()
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

From the tables above, it seems that most of the records relating to Parliamentary Papers describe resources in `Article` format and can be found in the **Magazines & Newsletters** category. It also looks like many of these records are duplicated in **Research & Reports**.

This seems a bit odd. Why would Parliamentary Papers be described as 'articles'? If you look at the results in the **Magazines & Newsletters** category, you'll see that the records describe *sections* of Parliamentary Papers, not complete publications. In other words, **the Parliamentary Papers are being treated like issues of a periodical** – the contents of each paper is being split up into sections, and a record is being created for each individual section.

This generates some odd 'articles', like contents pages and appendices. When combined with the grouping of versions into works, it can also have some unfortunate consequences. For example, [here's a record](https://trove.nla.gov.au/work/237938382) where the 'Table of contents' sections of different Parliamentary Papers have been grouped as a single work. 

It also explains why there are so many records! The total number of Parliamentary Papers will be considerably less than the total number of work-level records.

How then do we limit the search to only show complete Parliamentary Papers and exclude the 'articles'? I don't think you can. If you add `NOT format:Article` to your search you'll exclude reports with the format `Article/Report`, and probably lose other publications that are grouped with `Article` records. You could just ignore the **Magazines & Newsletters** category, but many of the 'articles' are also in **Research & Reports** where they're mixed with other publication formats. There's no way to drop the 'articles' without losing other, more relevant, records.

To create a dataset that only contains details of complete Parliamentary Papers, you need to harvest metadata from the search above, and then inspect the details of each record to exclude the ones you don't want. This is further complicated by the different ways Parliamentary Papers are grouped and described in Trove.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Grouping and describing Parliamentary Papers

The way digitised Parliamentary Papers are grouped and described in Trove is inconsistent and sometimes confusing.

As noted above, individual Parliamentary Papers are often treated as issues of a periodical. But not always. Sometimes they are described as standalone works. This [report by the Australian Science and Technology Council on 'Marine sciences and technologies in Australia'](https://trove.nla.gov.au/work/9710970?) is treated like a book, and is linked to a single digitised resource. It might have been grouped with a [follow-up report from the next year](https://trove.nla.gov.au/work/9988298), but it doesn't really matter as they're both easily discoverable.

[](/what-is-trove/collections) outlines the different ways Trove tries to represent collections of resources. Where Parliamentary Papers are grouped together as 'issues', they're generally created as collections within the digitised item viewer. For example, the work record for [Report of the Senate Select Committee on Superannuation](https://trove.nla.gov.au/work/22095680) links to a page with a **Browse this collection** button. Clicking on the button displays details of 28 different reports published between 1992 and 2001.

In this case, both the collection and the individual reports within it have their own separate work records. So the digitised version of the 1993 report on the *Super Complaints Tribunal* can be accessed directly from [this work record](https://trove.nla.gov.au/work/237349942), or by using the **Browse this collection** page.

However, there are other examples where there are only work records for the collection, not the individual reports. This means you can only find and access the reports from the collection page, or in disaggregated form as separate articles.

All of this means that search results in the Parliamentary Papers are a mix of different types of things – collections, publications, and articles – and it can be difficult to figure out what it is that you're actually searching.

The quality of the metadata also varies. The report on the *Super Complaints Tribunal*, for example, actually has the title 'PP no. 388 of 1993, Report no. 10', and so won't be returned by a title search for 'super complaints tribunal'. Added to that, there are a large number of duplicate records. 

## Research implications

Search - can't assume everything will be in results, drill down through collections

API 

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Overview of Parliamentary Papers

Using harvested dataset -- visualise by year etc.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Problems


Reports grouped as collections

Duplicates

Records for articles not issues

Lots of articles from reports -- hard to exclude, 'Report' is a child of 'Article'

- most records 'Article'
- most articles in both research and magazine

Are the entries that point to sections only in magazine?

----

Individual publications -- eg: https://trove.nla.gov.au/work/9988298 (format Article, Government publication), similar report not grouped into collection https://trove.nla.gov.au/work/9710970; https://trove.nla.gov.au/work/10010110

Versions of works: https://api.trove.nla.gov.au/v3/work/11860613?encoding=json&include=workversions,links

Collections (ie of annual reports over time)

- some have work records for individual parts eg: collection - https://trove.nla.gov.au/work/22095680 and part - https://trove.nla.gov.au/work/237581960 and duplicate of part - https://trove.nla.gov.au/work/10005796
- some don't have individual records eg: https://trove.nla.gov.au/work/10055730

Sections of individual reports (or issues), treated like journal articles, can look like issues

Difficult to distinguish between these and find way to full digitised publication. GW approach -- testing for pages, testing for text.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

Use harvested data set.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```
