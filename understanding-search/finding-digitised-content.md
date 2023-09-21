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

There are a few different approaches to finding digitised content, but they all have potential problems. While I highlight what I think is the most reliable option, it's really a matter of working out what will best meet your research needs.

+++

### Search for records including `nla.obj`

All of the digitised resources in Trove (except for *Newspapers & Gazettes*) have NLA identifiers of the form `nla.obj-[NUMBER]`. So a search for `"nla.obj"` should return all digitised resources. Here's the results of running this search across all categories:

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
params = {"q": '"nla.obj"', "category": "all", "encoding": "json", "n": 0}

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

+++ {"editable": true, "slideshow": {"slide_type": ""}}

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22nla.obj%22%26category%3Dall%26encoding%3Djson%26n%3D0&comment=)

The problem with this approach is that includes a certain amount of 'noise'. For example, there are no digitised resources in the `people` and `list` categories, and the `newspaper` category uses different identifiers. Any matches in these categories are probably because digitised items are referenced within records or user annotations.

You might also wonder about the large number of results in the *Books & Libraries* category – are there really that many digitised books? Probably not. If you look closer at the [results for the *Book & Libraries* category](https://trove.nla.gov.au/search/category/books?keyword=%22nla.obj%22) you'll see that most of the works are 'Not available online'. Digging deeper, it seems that some of these have been digitised by the NLA, but the digitised version has not been published online. These records include a note saying something like 'Digital master available ; National Library of Australia' with a `nla.obj` identifier. However, the majority of the 'not online' records are actually empty – ghostly remnants of some past processing failure.

If your aim is to harvest details of all the NLA digitised works that are available online, you'll probably want to exclude all the 'not online' records. One way to do this is to set the `l-availability` facet to `y`. Here's how that affects the number of results:

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
params = {
    "q": '"nla.obj"',
    "category": "all",
    "l-availability": "y",
    "encoding": "json",
    "n": 0,
}

headers = {"X-API-KEY": YOUR_API_KEY}
totals = []

response = requests.get(
    "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
)
data = response.json()
for cat in data["category"]:
    total = cat["records"]["total"]
    if total:
        totals.append({"category": cat["code"], "total": total})

pd.DataFrame(totals).style.format(thousands=",").hide()
```

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22nla.obj%22%26category%3Dall%26l-availability%3Dy%26encoding%3Djson%26n%3D0&comment=)

Another potential problem is that a search for `"nla.obj"` returns digitised resources as well as born digital works submitted through the National E-Deposit scheme (NED). Some of the NED resources can only be viewed onsite at a participating library, so they're not really online. To exclude these from your results you can set `l-availability` to `y/f` (free access):

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
params = {
    "q": '"nla.obj"',
    "category": "all",
    "l-availability": "y/f",
    "encoding": "json",
    "n": 0,
}

headers = {"X-API-KEY": YOUR_API_KEY}
totals = []

response = requests.get(
    "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
)
data = response.json()
for cat in data["category"]:
    total = cat["records"]["total"]
    if total:
        totals.append({"category": cat["code"], "total": total})

pd.DataFrame(totals).style.format(thousands=",").hide()
```

While other NED resources are freely accessible, most are only available as PDFs or in an e-book format. If you're collecting data about digitised works from which you plan to harvest images or text, then you might want to exclude *all* NED resources. The NED collection has its own NUC identifier, so you can exclude it from your search by adding `NOT nuc:"ANL:NED"` to the simple search box, or to the `q` parameter in an API request.

```{warning}
Trove's grouping of versions into works can cause unexpected results. It's possible that by excluding all NED resources, you might lose some of the NLA's digitised works. This could happen if there were multiple versions of a single work, including one that has been digitised, and another that has been submitted via the National E-Deposit service. In this case, setting `NOT nuc:"ANL:NED"` would exclude the work and *all* its versions from your results. 
```

**So what's the best approach?** I'd suggest starting broad by using the query `"nla.obj"` and setting `l-availability` to `y`. This gives your best chance of finding all online digitised resources. If this is generating too much noise, you can add further limits – though be aware of unintended consequences!

If you're using the API to create a dataset of digitised resources, you can inspect metadata records after you've downloaded them to decide whether or not to add them to your dataset. This gives you more fine-grained control than you can get by tweaking the search parameters. For example, if an item has been digitised and published online, the `identifiers` field in the metadata should include a url containing 'nla.obj' with the `linktype` of `fulltext`. <mark>==Link to accessing data section for more?==</mark>

+++

## Other options

There are a few other ways of finding digitised content, but they're not as reliable as searching for "nla.obj". There's no public documentation about how these indexes are created, so it's difficult to interpret the results they return. But they might be useful in some circumstances.

### Limit results to the 'Trove Digital Library'

In the Advanced Search form for the *Books & Libraries*, *Research & Reports*, *Images, Maps & Artefacts*, *Diaries, Letters & Archives*, and *Music, Audio & Video* categories, there's an option to limit the source of the records in your results by selecting from a list of 'Organisations'. Hidden away in this list is the 'Trove Digital Library'. Unfortunately, selecting 'Trove Digital Library' in Advanced Search doesn't work at the moment because of a bug in the web interface, but once you know it exists you can manually add it to your searches.

```{figure} /images/advanced_search_orgs.png
:name: advanced-search-orgs
:width: 600
Selecting 'Trove Digital Library' in the Advanced Search form – note the NUC identifier in brackets
```

Like other contributing organisations, the 'Trove Digital Library' has it's own NUC identifier: `ANL:DL`. You can use this to limit your search by adding `nuc:"ANL:DL"` to the simple search box in the web interface, or to the `q` parameter in an API request.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3Dnuc%3A%22ANL%3ADL%22%26category%3Dall%26encoding%3Djson%26n%3D0&comment=)

The results look ok, but the problem is that some digitised publications aren't included in the 'Trove Digital Library' – here's [some examples](https://trove.nla.gov.au/search/category/books?keyword=%22nla.obj%22%20NOT%20nuc%3A%22ANL%3ADL%22%20NOT%20nuc%3A%22ANL%3ANED%22&l-availability=y%2Ff) from the *Books & Libraries* category. It's not clear why this is, and what a search for `nuc:"ANL:DL"` actually includes (or excludes).

+++

### `fullTextInd:y`

The Trove documentation states that by adding `fullTextInd:y` to your query you can:

> find digitised or born digital items that include full text, particularly digitised books & journal articles

It's not obvious from this description, but this includes much more than just NLA digitised resources and publications submitted through NED. Using `fullTextInd:y` without other filters will return a wide range of content aggregated from multiple sources, including full-text publications that require authentication to access. Many of these will be in PDF format. It's not a reliable way of finding digitised items with downloadable text.

Furthermore, `fullTextInd:y` doesn't seem to consistently applied to NLA's own digitised resources. For example, it seems to exclude a number of periodicals with digitised issues. Compare this search for *Platt's Almanac* [with](https://trove.nla.gov.au/search/category/books?keyword=%22Platt%27s%20almanac,%20diary,%20and%20South%20Australian%20directory%22%20fullTextInd%3Ay) and [without](https://trove.nla.gov.au/search/category/books?keyword=%22Platt%27s%20almanac,%20diary,%20and%20South%20Australian%20directory%22&l-availability=y) `fullTextInd:y`.

Adding `fullTextInd:y` does seem to exclude NLA digitised resources that have no OCRd text. This might be useful in combination with a "nla.obj" search, but again there might be unintended consequences.

### `has:correctabletext`

Adding `has:correctabletext` to your query limits the results to works that have OCRd text you can correct in the Trove web interface.

If the text content of a resource is 'correctable' then you'd expect it to be an NLA digitised item with OCRd text you can download. So adding `has:correctabletext` to your query *should* limit the results to digitised items with downloadable text. This seems to be the case (though watch out for more ghost records), but again it's not clear what you are excluding – is every item with OCRd text correctable? 

### `imageInd`

Adding `imageInd:thumbnail` to your query limits results to works that have a thumbnail image.

Both `fullTextInd:y` and `has:correctabletext` filter records based on whether they have accessible text. But there are many digitised resources that either contain no text at all, or have no text that can be extracted by OCR. Adding `imageInd:thumbnail` to your search can help find these items. However, like `fullTextInd` this index is applied to aggregated collections as well as digitised resources, so your results can include all sorts of content, from book covers to pictures of politicians. There's also no guarantee that an item with a thumbnail will provide a larger image for download.

```{code-cell} ipython3

```
