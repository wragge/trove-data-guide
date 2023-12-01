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

## Understanding search


+++

## Asking critical questions

+++

Focus here is on the 'simple search' option as the parameters are much the same between the web interface and API, and it's possible to replcate all 'Advanced' search options.

Topics:

- Discovery versus analysis – need to recognise that the aim of the search indexing is to present the user with items that *could be* of relevance, but this fuzziness might limit the usefulness of search results for analysis. Eg: user-added tags and comments are searched by default. Examine relevance ranking.
- 'Simple' search and beyond – all the basics, adjusting the fuzziness of text searches, stemming, boolean operators, indexes etc
- Using facets
- Date searching – might be worth a separate section as there are a few complexities and different ways of achieving the same result
- What are you searching? – leads on to next section on contexts and collections

+++

Search is such a fundamental part of our online lives, we don’t really think about it much. We just type words into the box, click enter, and start wading through the results. But search indexes have biases, they embed politics. They make assumptions about who we are and what we want. This is as true of Trove as any search tool.

Doesn’t tell us what’s not there

Implications for researchers — reading meaning into results. What does it mean if nothing’s there? Examples. Not digitised. Not preserved. In copyright?

Trove is not good at telling you what’s missing.

Working with data — index tuned for discovery rather than analysis. Examples.

Methodology

Technical — knowing the options
Creative and strategic — solving the puzzle
Critical — asking why, looking underneath — difficult, might need lots of data. TDG and GW to help.
Search as a research methodology. Document and share strategies.

What’s missing?
Missing newspaper pages
Which manuscripts are searchable
Which collections are searchable
Digitisation policies
Copyright
Digitised objects
Issues
Relevance ranking
Categories
Works and versions
Duplicates
Collections
Fulltext
Tags and comments

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(search-indexes-firstpageseq)=
## Searching for articles on a specific page

+++ {"editable": true, "slideshow": {"slide_type": ""}}

You can use the `firstpageseq` index to search for articles published on a particular page. For example, include `firstpageseq:1` in your query to find articles on page one. This works in both the web interface's simple search box and the `q` value of the API.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A//api.trove.nla.gov.au/v3/result%3Fq%3Dfirstpageseq%3A1%26category%3Dnewspaper%26encoding%3Djson&comment=)

```{warning}
Some newspapers include supplements that have their own independent pagination. This means, for example, that an issue could contain multiple pages numbered `1`. The `firstpageseq` index searches *both* the main body of the newspaper *and* any supplements, so the results could include articles published on more than one page within an issue. There's no way of searching just in the main body or in supplements, but you can filter the results after you've retrieved them from the API. Article results include fields labelled `page` and `pageSequence`. The `page` field contains just numbers, but if the page comes from a supplement, the `pageSequence` field will include an `S` after the number. You can use this to keep or discard articles from supplements. [](get-page-identifier-from-search) provides an example of filtering results using the `pageSequence` value.
```
