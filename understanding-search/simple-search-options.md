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

# 'Simple' search options

````{card} On this page
Learn about constructing searches in Trove, including the use of indexes and facets. Includes a variety of tips and tricks, focusing on undocumented or potentially confusing aspects of the Trove search system.

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

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Simple search isn't!

The Trove web interface distinguishes between 'Advanced' and 'Simple' search. This is a bit misleading as you can construct complex queries using either. 'Advanced' search really just adds a structured interface over the 'Simple' search options. This Guide focuses on using 'Simple' search because it gives you more control, exposes more of the workings of the search index, and its queries can be easily translated to work with the Trove API.

See [Constructing a complex search query](https://trove.nla.gov.au/help/searching/constructing-complex-search-query) in the Trove help system for an introduction to:

- boolean searches (use `AND`, `OR`, and `NOT` to combine search terms)
- phrase searches
- proximity searches (specify the number of words that can appear between search terms)
- some of the available indexes

It can also be useful to poke around the [Solr query parser documentation](https://solr.apache.org/guide/8_11/the-standard-query-parser.html). Solr is the indexing software used by Trove, so many of the query formats described will work in Trove. 

Below you'll find information on some of the undocumented and potentially confusing aspects of Trove search.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(search:simple:defuzzify)=
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

glue("q_or", get_total('australia OR unlimited'))
glue("q_and", get_total('australia unlimited'))
glue("q_phrase", get_total('"australia unlimited"'))
glue("q_text", get_total('text:"australia unlimited"'))
glue("q_zero", get_total('"australia unlimited"~0'))
glue("q_text_zero", get_total('text:"australia unlimited"~0'))
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
* - `australia OR unlimited`
  - {glue:text}`q_or:,`
  - 
* - `australia unlimited`
  - {glue:text}`q_and:,`
  - Same as australia AND unlimited
* - `"australia unlimited"`
  - {glue:text}`q_phrase:,`
  - Search for phrase (with stemming)
* - `text:"australia unlimited"`
  - {glue:text}`q_text:,`
  - Search for phrase (no stemming & ignores tags/comments)
* - `"australia unlimited"~0`
  - {glue:text}`q_zero:,`
  - Search for phrase (with stemming, no extra words)
* - `text:"australia unlimited"~0`
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
  - {glue:text}`text_ise:,`
  - No stemming
* - `text:naturalization`
  - {glue:text}`text_ize:,`
  - No stemming

```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(search:simple:proximity)=
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

(search:simple:indexes)=
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

````{margin}
```{seealso}
Using the `series` index you can explore the way Trove resources are [grouped into collections](collections-ispartof).
```
````

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

Unlike regular searches. stemming is not applied by default to index searches. If you want to use stemming, there are separate stemmed indexes for creator, subject, and title: `s_creator`, `s_subject`, and `s_title`.

There's some overlap between indexes and facets. For example, there's a `format` index and a `format` facet that both let you limit your search by format. However, indexes and facets behave differently – facets expect exact matches, while indexes are much more flexible. Also, you can use the `NOT` operator with indexes to exclude particular values. For example, to exclude books from your search you could add `NOT format:Book` to your query. There's no way of doing this with facets.

````{margin}
```{seealso}
The [Today's News Yesterday](https://glam-workbench.net/trove-newspapers/#todays-news-yesterday) notebook in the GLAM Workbench provides an example of using `date` and `firstpageseq` to get the front pages of newspapers.
```
````

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

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(search:simple:facets)=
## Using facets

````{margin}
```{seealso}
The display of facets in the web interface isn't always accurate. In particular, it seems that [some `format` values are being hidden](distribution-categories-formats) to simplify the user experience.
```
````

Facets are a set of pre-determined values you can use to set limits on your search resuls. They allow you to take slices of your results.

In the web interface, facets appear as a set of check boxes next to the list of results. You just click the box next to a facet value to apply it to your search. You can only select one facet value at a time.

```{figure} /images/web-facets.png
:width: 200px

Display of facets in the web interface
```

Facets vary by category, but [a complete list](https://trove.nla.gov.au/about/create-something/using-api/v3/api-technical-guide#facetValues) is available in the API technical documentation.

````{margin}
```{seealso}
See the Newspapers and Gazettes section of the guide for [more information on using the `title` facet](newspaper-titles-aggregate-facet).
```
````

To use facets to limit the results of your API query, you add a `l-[FACET NAME]` parameter and set to your desired value. For example, to limit a search of newspaper articles to those published in the *Sydney Morning Herald*, you add the `l-title` parameter and set it to `35` (the title identifier for the SMH).

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3F%26category%3Dnewspaper%26encoding%3Djson%26l-title%3D35&comment=)

When you use the API you can apply multiple facet values. However, facet fields don't all behave the same way when you select multiple values. In some cases, you'll get back the *sum* of the requested slices, but in most you'll only get the *intersection* of the slices.

For example, if you use the `state` facet to request newspaper articles from both Victoria and NSW, you get back articles from either Victoria or NSW.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
def get_total_facets(facet="state", values=[]):
    params = {
        "category": "newspaper",
        "encoding": "json",
        "n": 0
    }
    params[f"l-{facet}"] = values
    headers = {"X-API-KEY": YOUR_API_KEY}
    response = response = requests.get(
            "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
        )
    data = response.json()
    return data["category"][0]["records"]["total"]
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
glue("facet_state_vic", get_total_facets("state", ["Victoria"]))
glue("facet_state_nsw", get_total_facets("state", ["New South Wales"]))
glue("facet_state_both", get_total_facets("state", ["Victoria", "New South Wales"]))
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{list-table} Results for state facet combinations
:header-rows: 1
:name: table-state-facet
* - Facet
  - Results
* - `l-state=Victoria`
  - {glue:text}`facet_state_vic:,`
* - `l-state=New South Wales`
  - {glue:text}`facet_state_nsw:,`
* - `l-state=Victoria&l-state=New South Wales`
  - {glue:text}`facet_state_both:,`

```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

On the other hand, if you use the `category` facet to request articles in the `Article` and `Advertising` category, you'll only get articles that are in both categories.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
glue("facet_cat_article", get_total_facets("category", ["Article"]))
glue("facet_cat_advertising", get_total_facets("category", ["Advertising"]))
glue("facet_cat_both", get_total_facets("category", ["Article", "Advertising"]))
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

:::{list-table} Results for `category` facet combinations
:header-rows: 1
:name: table-cat-facet
* - Facet
  - Results
* - `l-category=Article`
  - {glue:text}`facet_cat_article:,`
* - `l-category=Advertising`
  - {glue:text}`facet_cat_advertising:,`
* - `l-category=Article&l-category=Advertising`
  - {glue:text}`facet_cat_both:,`

:::

```{admonition} User added categories
:class: warning

You might be thinking that the final result above should be zero, as newspaper articles are assigned to a single category – how can an article be in both the `Article` and `Advertising` categories? The answer is that Trove users can add extra categories to articles, and these user-added values are included in the facet counts. There doesn't seem to be any way to exclude these values, so it's something else to keep in mind if you're working with the data!
```

```{code-cell} ipython3

```
