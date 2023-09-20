---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.14.7
kernelspec:
  display_name: Python 3 (ipykernel)
  language: python
  name: python3
---

# Finding NLA digitised content you can download

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

```{code-cell} ipython3
import os
from datetime import datetime

import pandas as pd
import requests
from dotenv import load_dotenv
from myst_nb import glue

load_dotenv()
YOUR_API_KEY = os.getenv("TROVE_API_KEY")
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
today = datetime.now().strftime("%d %B %Y")

glue("today", today, display=False)
```

Trove provides a platform for the delivery of digitised content from the National Library of Australia and its partners. This digitised content is easy to find in the *Newspapers & gazettes* and *Magazines & newsletters* categories – they're full of it! But it's not so easy to find digitised content in other categories where it's mixed with works aggregated from a range of different sources.

There are a few different approaches to finding digitised content. They all have potential problems, so it's a matter of working out what will best meet your research needs.

### Limit results to the 'Trove Digital Library'

In the Advanced Search form for the *Books & Libraries*, *Research & Reports*, *Images, Maps & Artefacts*, *Diaries, Letters & Archives*, and *Music, Audio & Video* categories, there's an option to limit the source of the records in your results by selecting from a list of 'Organisations'. Hidden away in this list is the 'Trove Digital Library'. Unfortunately, selecting 'Trove Digital Library' in Advanced Search doesn't work at the moment because of a bug in the web interface, but once you know it exists you can manually add it to your searches.

```{figure} /images/advanced_search_orgs.png
:name: advanced-search-orgs
:width: 600
Selecting 'Trove Digital Library' in the Advanced Search form – note the NUC identifier in brackets
```

Like other contributing organisations, the 'Trove Digital Library' has it's own NUC identifier: `ANL:DL`. You can use this to limit your search by adding `nuc:"ANL:DL"` to the simple search box in the web interface, or to the `q` parameter in an API request.

Here's the number of results per category on {glue:text}`today`:

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
params = {"q": 'nuc:"ANL:DL"', "category": "all", "encoding": "json", "n": 0}

headers = {"X-API-KEY": YOUR_API_KEY}
totals_anl_dl = []

response = requests.get(
    "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
)
data = response.json()
for cat in data["category"]:
    total = cat["records"]["total"]
    if total:
        totals_anl_dl.append({"category": cat["code"], "total": total})
df_anl_dl = pd.DataFrame(totals_anl_dl)

df_anl_dl.style.format(thousands=",").hide()
```

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3Dnuc%3A%22ANL%3ADL%22%26category%3Dall%26encoding%3Djson%26n%3D0&comment=)

The results look ok, but the problem is that there are some digitised publications that aren't part of the 'Trove Digital Library' – here's [some examples](https://trove.nla.gov.au/search/category/books?keyword=%22nla.obj%22%20NOT%20nuc%3A%22ANL%3ADL%22%20NOT%20nuc%3A%22ANL%3ANED%22&l-availability=y%2Ff) from the *Books & Libraries* category. It's just not clear what a search for `nuc:"ANL:DL"` actually includes (or excludes).

+++

### Search for records including `nla.obj`

All of the digitised resources in Trove (except for *Newspapers & Gazettes*) have NLA identifiers of the form `nla.obj-[NUMBER]`. So a search for `nla.obj` should return all digitised resources.

```{code-cell} ipython3
params = {"q": 'text:"nla.obj"', "category": "all", "encoding": "json", "n": 0}

headers = {"X-API-KEY": YOUR_API_KEY}
totals_nlaobj = []

response = requests.get(
    "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
)
data = response.json()
for cat in data["category"]:
    total = cat["records"]["total"]
    if total:
        totals_nlaobj.append({"category": cat["code"], "total": total})
df_nlaobj = pd.DataFrame(totals_nlaobj)

df_nlaobj.style.format(thousands=",").hide()
```

The problem with this approach is not that things are missing from the results, but that so much is included. There are significantly more resources in most categories than were returned by the `nuc:"ANL:DL"`, but the appearance of the `people` and `list` categories indicates that this search is pulling in some records that don't describe digitised works.

If you look closer at the [results for the *Book & Libraries* category](https://trove.nla.gov.au/search/category/books?keyword=%22nla.obj%22) you'll see that most of the works are 'Not available online'. That seems weird. Digging deeper, it seems that some of them have been digitised but not made available online. These records include a note saying something like 'Digital master available ; National Library of Australia' with a `nla.obj` identifier. But the majority of the 'not online' records are actually empty – ghostly remnants of some past processing failure.

If your aim is to harvest details of all digitised works in Trove, you'd probably want to exclude the 'not online' records. One way to do this is to set the `l-availability` facet to `y`.

Another potential problem is that a search for `nla.obj` returns born digital works submitted through the National E-Deposit scheme, as well as digitised resources. Some of the NED resources can only be viewed onsite at a participating library. To exclude these from your results you can set `l-availability` to `y/f` (free access).

Other NED resources are freely accessible, but only available as PDFs or in an e-book format. If you're collecting data about digitised resources that you plan to harvest images or text from, then you might want to exclude *all* NED resources. The NED collection has its own NUC identifier, so you can exclude it from your search by adding `NOT nuc:"ANL:NED"` to the simple search box, or to the `q` parameter in an API request.

```{warning}
It's possible that by excluding all NED resources, you might lose some of the NLA's digitised works. This could happen if there were multiple versions of a work, one of which had been digitised, and another that had been submitted via the National E-Deposit service. Setting `NOT nuc:"ANL:NED"` would exclude *all* versions from your results.
```

So what's the best approach? I'd suggest starting with 

Putting this all together, one way of searching for all resources digitised by the NLA would be to use the query `"nla.obj" NOT nuc:"ANL:NED"` and set `l-availability` to `y/f`.

Discovery or analysis?

+++

### Other options

There are a couple of other search indexes that can help identify digitised content:

- `fullTextInd`
- `ImageInd`
- `has:correctabletext`


+++

Still much harder than it should be (except for `magazine` & `newspaper` categories of course).

Various combinations of:

- searching for "nla.obj"
- `nuc:"ANL:DL"` 
- NOT `nuc:"ANL:NED"`?
- `fullTextInd:y` (not just NLA, not always accessible)
- `l-availability` -- to get what's online
- `has:correctabletext`

Need to test these combinations to see what works...

+++

## `fullTextInd:y`

The API Version 2.1 introduction noted that this index allowed you to:

> Locate items that include full text in Trove that you can access directly in the API record,
particularly digitised books and journal articles

However, only journal articles have full text in their API records. Access to full text of other resources is variable. Includes NED, repositories, Google Books, Internet Archive etc. Not clear when/why this index is checked.

Current docs:

> find digitised or born digital items that include full text, particularly digitised books & journal articles

Searches in books:

- [`fullTextInd:y`](https://trove.nla.gov.au/search/category/books?keyword=fullTextInd%3Ay): 2,804,463 results
- [`fullTextInd:y AND has:correctabletext`](https://trove.nla.gov.au/search/category/books?keyword=fullTextInd%3Ay%20AND%20has%3Acorrectabletext): 27,161 results
- [`has:correctabletext`](https://trove.nla.gov.au/search/category/books?keyword=has%3Acorrectabletext): 41,189 results
- [`has:correctabletext NOT fullTextInd:y`](https://trove.nla.gov.au/search/category/books?keyword=has%3Acorrectabletext%20NOT%20fullTextInd%3Ay): 14,028 results (most empty, not online)
- [`has:correctabletext NOT fullTextInd:y` and `l-availablity:n`](https://trove.nla.gov.au/search/category/books?keyword=has%3Acorrectabletext%20NOT%20fullTextInd%3Ay&l-availability=n): 13,905 (all empty)
- [`has:correctabletext NOT fullTextInd:y` and `l-availablity:y`](https://trove.nla.gov.au/search/category/books?keyword=has%3Acorrectabletext%20NOT%20fullTextInd%3Ay&l-availability=y): 123 (these are digitised and could have text)
- [`"nla.obj" NOT nuc:"ANL:NED"` and `l-availablity:y`](https://trove.nla.gov.au/search/category/books?keyword=%22nla.obj%22%20NOT%20nuc%3A%22ANL%3ANED%22&l-availability=y): 39,292
- [`"nla.obj" has:correctabletext`](https://trove.nla.gov.au/search/category/books?keyword=%22nla.obj%22%20has%3Acorrectabletext): 41,189
- [`"nla.obj" fullTextInd:y`](https://trove.nla.gov.au/search/category/books?keyword=%22nla.obj%22%20fullTextInd%3Ay): 57,898 (includes NED content without accessible text)
- [`nuc:"ANL:DL"`](https://trove.nla.gov.au/search/category/books?keyword=nuc%3A%22ANL%3ADL%22): 30,268

So fullTextInd not much use, lots of stuff without accessible text
correctabletext seems pretty good? But not in diary category.
nla.obj plus not NED also ok?
ANL:DL gets some but not all

Does `"nla.obj" NOT nuc:"ANL:NED"` and `l-availability=y` work best across all cats? Need the availability facet because of works that have a "digital master" and an "nla.obj" id but are not online

Some nla.obj have been digitised but not put online

fullTextInd:

- NLA digitised with OCRd text?
- aggregated context with fulltext links?


```{list-table} Finding digitised content
:header-rows: 1
:name: finding-digitised-content
* - Category
  - Query
  - Results
  - Notes
* - book
  - [`fullTextInd:y`](https://trove.nla.gov.au/search/category/books?keyword=fullTextInd%3Ay)
  - 2,804,463
  - 
* - book
  - [`has:correctabletext`](https://trove.nla.gov.au/search/category/books?keyword=has%3Acorrectabletext)
  - 41,189
  -
* - book
  - [`"nla.obj"`](https://trove.nla.gov.au/search/category/books?keyword=%22nla.obj%22)
  - 603,141
  - 
* - book
  - [`fullTextInd:y AND has:correctabletext`](https://trove.nla.gov.au/search/category/books?keyword=fullTextInd%3Ay%20AND%20has%3Acorrectabletext)
  - 27,161
  - 
* - image
  - [`fullTextInd:y`](https://trove.nla.gov.au/search/category/images?keyword=fullTextInd%3Ay)
  - 75,950
  - 
* - image
  - [`has:correctabletext`](https://trove.nla.gov.au/search/category/images?keyword=has%3Acorrectabletext)
  - 100
  -
* - image
  - [`"nla.obj"`](https://trove.nla.gov.au/search/category/images?keyword=%22nla.obj%22)
  - 281,890
  - 
* - image
  - [`"nla.obj"` and `l-availability=y`](https://trove.nla.gov.au/search/category/images?keyword=%22nla.obj%22&l-availability=y)
  - 247,356
  - 
```

+++

## Journal articles

Advertisements on multiple pages in an issue grouped as a single work record for discovery: https://trove.nla.gov.au/work/232859472?keyword=fullTextInd%3Ay

Can access as separate versions via the API: https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F232859472%3Fencoding%3Djson%26include%3Dall&comment=

+++

Digitised version doesn't load: https://trove.nla.gov.au/work/6827686/version/266742058

492,000 ghost records: https://trove.nla.gov.au/search/category/books?keyword=%22nla.obj%22%20NOT%20nuc%3A%22ANL%3ANED%22&l-availability=n&l-format=Article%2FOther%20article

```{code-cell} ipython3

```
