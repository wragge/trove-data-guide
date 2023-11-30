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

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(search-indexes-firstpageseq)=
## Searching for articles on a specific page

+++ {"editable": true, "slideshow": {"slide_type": ""}}

You can use the `firstpageseq` index to search for articles published on a particular page. For example, include `firstpageseq:1` in your query to find articles on page one. This works in both the web interface's simple search box and the `q` value of the API.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A//api.trove.nla.gov.au/v3/result%3Fq%3Dfirstpageseq%3A1%26category%3Dnewspaper%26encoding%3Djson&comment=)

```{warning}
Some newspapers include supplements that have their own independent pagination. This means, for example, that an issue could contain multiple pages numbered `1`. The `firstpageseq` index searches *both* the main body of the newspaper *and* any supplements, so the results could include articles published on more than one page within an issue. There's no way of searching just in the main body or in supplements, but you can filter the results after you've retrieved them from the API. Article results include fields labelled `page` and `pageSequence`. The `page` field contains just numbers, but if the page comes from a supplement, the `pageSequence` field will include an `S` after the number. You can use this to keep or discard articles from supplements. [](get-page-identifier-from-search) provides an example of filtering results using the `pageSequence` value.
```
