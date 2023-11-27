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

# 'Simple' search options

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
from myst_nb import glue
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

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

+++

<mark>==Include a note about `firstpageseq` and the fact that this will match pages from supplements as well. So supplements need to be filtered out after harvesting. Also note that not all issues start with page 1.==</mark>

+++

## Simple search isn't!

+++

## Constructing queries

Just point to docs

## De-fuzzify




```{code-cell} ipython3
import requests



def get_total(query):
    params = {
        "q": query,
        "category": "newspaper",
        "encoding": "json",
        "n": 0
    }
    headers = {"X-API-KEY": YOUR_API_KEY}
    response = response = requests.get(
            "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
        )
    data = response.json()
    return data["category"][0]["records"]["total"]

glue("wq", get_total("hobart"))
glue("wq_wild", get_total("hobart*"))
glue("wq_text", get_total("text:hobart"))
glue("wq_title", get_total("title:hobart"))

glue("q_or", get_total('white OR australia'))
glue("q_and", get_total('white australia'))
glue("q_phrase", get_total('"white australia"'))
glue("q_text", get_total('text:"white australia"'))
glue("q_zero", get_total('"white australia"'))
glue("q_text_zero", get_total('text:"white australia"~0'))
```

```{list-table} De-fuzzify newspaper keyword searches
:header-rows: 1
:name: table-defuzzify-keyword
* - Query
  - Results
  - Explanation
* - `hobart`
  - {glue:text}`wq:,`
  - Searches article text, tags & comments (some fuzziness, terms are stemmed)
* - `hobart*`
  - {glue:text}`wq_wild:,`
  - Searches article text, tags & comments (more fuzziness, wildcard matches zero or more characters)
* - `"text:hobart"`
  - {glue:text}`wq_text:,`
  - Searches article text only (exact match, ignores tags & comments)
* - `"title:hobart"`
  - {glue:text}`wq_title:,`
  - Searches headlines only

```

```{list-table} De-fuzzify newspaper phrase searches
:header-rows: 1
:name: table-defuzzify-phrases
* - Query
  - Results
  - Explanation
* - `white OR australia`
  - {glue:text}`q_or:,`
  - 
* - `white australia`
  - {glue:text}`q_and:,`
  - Same as white AND australia
* - `"white australia"`
  - {glue:text}`q_phrase:,`
  - Search for phrase (with stemming)
* - `text:"white australia"`
  - {glue:text}`q_text:,`
  - Search for phrase (no stemming & ignores tags/comments)
* - `"white australia"~0`
  - {glue:text}`q_zero:,`
  - Search for phrase (with stemming, no extra words)
* - `text:"white australia"~0`
  - {glue:text}`q_text_zero:,`
  - Search for exact phrase (no extra words, no stemming, ignore tags/comments)

```

+++

## Using indexes

Can use NOT (eg with formats)

## Using facets

+++

## Available indexes

```{list-table} Available search indexes
:header-rows: 1
:name: table-available-search indexes
* - Index
  - Description
  - Example
  - Notes
* - `date`
  - Search for articles within a given date range
  - Example
  - Notes
* - `firstpageseq`
  - Search for a specific page number
  - `firstpageseq:2` – find articles published on page two
  - Results combine newspaper body and separately-numbered supplements, so searches can return articles from multiple pages
```

Note that `fullTextInd` can be misleading and inaccurate -- doesn't always link to fulltext version, text not always available. Can be restricted (eg NED publications) or from a contributor where fulltext links are sometimes wrong. Need to combine with something like "nla.obj", and exclude NED, to find digitised resources reliably.

<mark>==`series:`? Seems to work. Is it different to `contribcollection`?==</mark>

Difference between `format:Book` and `l-format=Book`. Index search seems to search within the format value -- so `Book` matches `Book chapter`?

Note differences in using "" and () in index/field queries

+++

(search-indexes-firstpageseq)=
## Searching for articles on a specific page

+++

You can use the `firstpageseq` index to search for articles published on a particular page. For example, include `firstpageseq:1` in your query to find articles on page one. This works in both the web interface's simple search box and the `q` value of the API.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A//api.trove.nla.gov.au/v3/result%3Fq%3Dfirstpageseq%3A1%26category%3Dnewspaper%26encoding%3Djson&comment=)

```{warning}
Some newspapers include supplements that have their own independent pagination. This means, for example, that an issue could contain multiple pages numbered `1`. The `firstpageseq` index searches *both* the main body of the newspaper *and* any supplements, so the results could include articles published on more than one page within an issue. There's no way of searching just in the main body or in supplements, but you can filter the results after you've retrieved them from the API. Article results include fields labelled `page` and `pageSequence`. The `page` field contains just numbers, but if the page comes from a supplement, the `pageSequence` field will include an `S` after the number. You can use this to keep or discard articles from supplements. [](get-page-identifier-from-search) provides an example of filtering results using the `pageSequence` value.
```

+++

## Searching for articles within a given date range

```{code-cell} ipython3

```
