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

# 'Simple' search options

+++

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

+++

<mark>==Include a note about `firstpageseq` and the fact that this will match pages from supplements as well. So supplements need to be filtered out after harvesting. Also note that not all issues start with page 1.==</mark>

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
