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

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Simple search isn't!

The Trove web interface distinguishes between 'Advanced' and 'Simple' search. This is a bit misleading as you can construct complex queries using either. 'Advanced' search really just adds a structured interface over the 'Simple' search options. This Guide focuses on using 'Simple' search because it gives you more control, exposes more of the workings of the search index, and its queries can be easily translated to work with the Trove API.

See [Constructing a complex search query](https://trove.nla.gov.au/help/searching/constructing-complex-search-query) in the Trove help system for an introduction to:

- boolean searches (use `AND`, `OR`, and `NOT` to combine search terms)
- phrase searches
- proximity searches (specify the number of words that can appear between search terms)
- some of the available indexes

Below you'll find information on some of the undocumented and potentially confusing aspects of Trove search.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## De-fuzzify your searches

By default, Trove adds a bit of fuzziness to your searches to try and ensure you get back some useful results. This includes:

- stemming of your search terms (this reduces words to their base form, for example `computer` becomes `comput` matching 'compute', 'computer', 'computing' etc)
- allowing extra words in phrases (this is to match across line breaks where words are hyphenated)
- searching both full text (where available) and user-generated tags and comments

It's possible to modify some of these settings by changing the format of your query. Here are some examples using a single search term:

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
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

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{list-table} De-fuzzify keyword searches
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
* - `text:hobart`
  - {glue:text}`wq_text:,`
  - Searches article text only (exact match, ignores tags & comments)
* - `title:hobart`
  - {glue:text}`wq_title:,`
  - Searches headlines only

```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

Similarly you can adjust the fuzziness of phrase searches.

```{list-table} De-fuzzify phrase searches
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

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Stemming oddities

As noted above, Trove stems your search terms, trimming them back to their base form. It seems that Trove uses the Porter stemming algorithm. If you'd to see how stemming affects your query, you can use this [online tool](http://text-processing.com/demo/stem/) to test the results of the Porter algorithm.

I've noticed some oddities in handling `-ise` and `-ize` suffixes. For example:

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
glue("stem_ize", get_total("naturalization"))
glue("stem_ise", get_total("naturalisation"))
glue("text_ize", get_total("text:naturalization"))
glue("text_ise", get_total("text:naturalisation"))
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{list-table} Stemming variations
:header-rows: 1
:name: table-stemming-oddities
* - Query
  - Results
  - Explanation
* - `naturalisation`
  - {glue:text}`stem_ise:,`
  - Stemmed to 'naturalis'
* - `naturalization`
  - {glue:text}`stem_ize:,`
  - Stemmed to 'natur'
* - `text:naturalisation`
  - {glue:text}`stem_ise:,`
  - No stemming
* - `text:naturalization`
  - {glue:text}`stem_ize:,`
  - No stemming

```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Proximity searches

The defuzzify examples above use the proximity modifier (`~`) to remove extra words from a query, but you can also use it to set a maximum distance between search terms. One thing to note is that the order of the search terms makes a difference to your results, as reversing the order of your terms counts as a 'word'. For example:

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
glue("prox_none", get_total("chinese tasmania"))
glue("prox_10", get_total('"chinese tasmania"~10'))
glue("prox_10_reverse", get_total('"tasmania chinese"~10'))
glue("prox_both", get_total('"tasmania chinese"~10 OR "chinese tasmania"~10'))
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{list-table} Using proximity modifiers
:header-rows: 1
:name: table-proximity-modifiers
* - Query
  - Results
  - Explanation
* - `chinese tasmania`
  - {glue:text}`prox_none:,`
  - articles contain both terms
* - `"chinese tasmania"~10`
  - {glue:text}`prox_10:,`
  - articles where 'tasmania' is within 10 words of 'chinese'
* - `"tasmania chinese"~10`
  - {glue:text}`prox_10_reverse:,`
  - terms in reverse order are matched, but reversing counts towards the word distance so results can differ
* - `"tasmania chinese"~10 OR "chinese tasmania"~10`
  - {glue:text}`prox_both:,`
  - 10 word distance in either direction

```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Using indexes

When you enter queries in the simple search box, or by using the `q` parameter in an API request, you're searching across most metadata fields and any available full text. To control where and what you're searching, you can specify the index you want Trove to use. For example, the query `title:wragge` will search only the `title` field for the term `wragge`.

Other indexes mentioned in [Trove's help documentation](https://trove.nla.gov.au/help/searching/constructing-complex-search-query) are:

- `subject`
- `creator`
- `issn`
- `isbn`
- `nuc`
- `publictag`

A [more complete list of available indexes](https://trove.nla.gov.au/about/create-something/using-api/v3/api-technical-guide#list-of-supported-indexes) is provided in the API technical documentation.

Undocumented indexes include:

```{list-table} Undocumented search indexes
:header-rows: 1
:name: table-undocumented-search-indexes
* - Index
  - Description
  - Example
* - `series`
  - [Search for resources that are part of a collection](collections-ispartof-series)
  - `series:"Parliamentary paper (Australia. Parliament)` – find Parliamentary Papers
* - `firstpageseq`
  - Search for newspaper articles published on a specific page
  - `firstpageseq:2` – find articles published on page two
```

You can use many of the standard search operators with index queries. For example:

```{list-table} Using search operators with indexes
:header-rows: 1
:name: table-index-operators
* - Query
  - Explanation
* - `subject:history`
  - Search for a keyword in the `subject` index
* - `subject:(history weather)`
  - Search for multiple keywords in the `subject` index
* - `subject:(history NOT australia)`
  - Search using boolean operators in `subject` index
* - `subject:"Australian history"`
  - Search for a phrase in the `subject` index
```

There's some overlap between indexes and facets. For example, there's a `format` index and a `format` facet that both let you limit your search by format. However, indexes and facets behave differently – facets expect exact matches, while indexes are much more flexible. Also, you can use the `NOT` operator with indexes to exclude particular values. For example, to exclude books from your search you could add `NOT format:Book` to your query. There's no way of doing this with facets.

Some indexes such as `date` and `lastupdated` expect a range of dates. Depending on the index and the category, the date values are either years or complete ISO formatted datetimes. For example:

```{list-table} Using the date index
:header-rows: 1
:name: table-date-index
* - Query
  - Explanation
* - `date:[1901 TO 1904]`
  - 1 January 1901 to 31 December 1904
* - `date:[* TO 1904]` 	
  - before 31 December 1904
* - `date:[1904 TO 1904]`
  - 1 January 1904 to 31 December 1904
* - `date:[1942-10-31T00:00:00Z TO 1942-11-30T00:00:00Z]`
  - 1 November 1942 to 31 November 1942 (newspapers only – dates need timezones, first date in range ignored)
* - `date:[1942-11-09T00:00:00Z TO 1942-11-10T00:00:00Z]`
  - 10 November 1942 (newspapers only – dates need timezones, first date in range ignored)
```

For more information see [](date-searches)

+++

## Using facets

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
