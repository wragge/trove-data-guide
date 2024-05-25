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

# Analysing keywords in Trove's digitised newspapers

You want to explore differences in language use across a collection of digitised newspaper articles. The [Australian Text Analytics Platform](https://www.atap.edu.au/) provides a [Keywords Analysis tool](https://github.com/Australian-Text-Analytics-Platform/keywords-analysis) that helps you examine whether particular words are over or under-represented across collections of text. But how do get data from Trove's newspapers to the keyword analysis tool?

+++

- constructing a search
- Using Binder
- Trove Newspaper Harvester
- understanding results
- reshaping results
- Using ATAP
- keyword analysis
- uploading text

+++

## Tools 
`````{grid}
:gutter: 3

````{grid-item-card} Trove Newspaper & Gazette Harvester
:columns: 6

![GLAM Workbench logo](/images/gw-icon.png)

The Trove Newspaper & Gazette Harvester makes it easy to download large quantities of digitised articles from Trove's newspapers and gazettes.

+++
```{button-link} https://glam-workbench.net/trove-harvester/
:color: primary
More info
```
````

````{grid-item-card} KeywordsAnalysis Tool
:columns: 6

![ATAP logo](/images/atap-logo.png)

Use the KeywordsAnalysis tool to analyse words in a collection of corpus and identify whether certain words are over or under-represented in a particular corpus (the study corpus) compared to their representation in other corpus (the reference corpus).

+++
```{button-link} https://github.com/Australian-Text-Analytics-Platform/keywords-analysis/
:color: primary
More info
```
````
`````

+++

## Constructing your search

The first step is constructing a search that will return relevant newspaper articles. This is harder than it seems. Yes, you can just plug keywords into Trove's search interface and get back interesting looking results. But it's important to keep in mind the differing needs of *discovery* versus *analysis*. Your aim here is not to find a few useful articles, but to construct a dataset containing *all* the articles returned by your search query. **Everything.** When you're searching for individual articles you can usually just ignore the fact that there are millions of articles in your search results, as Trove's relevance ranking pushes the most likely candidates to the top. But if you're creating a dataset, you want to be as precise as possible to avoid including unwanted noise.

```{note} Relevance in bulk harvests
Unlike the web interface, when you harvest newspaper articles from the Trove API they're ordered by their identifier, not their relevance. So you can't just get the first few hundred articles and assume you've got the most important stuff. However, the API results do include a relevance score that you can use to filter the dataset *after* you've finished harvesting. This is discussed further below.
```

There are a few ways of making your search more precise:

- [de-fuzzify your results](search:simple:defuzzify) by controlling the precision of text searches
- use [proximity searches](search:simple:proximity) to specify the distance between search terms
- [apply facets](search:simple:facets) to limit your results – in particular you might want to use:
  - `l-category` to specify the type of articles (do you really want to include advertisements?)
  - `l-state` to specify the state in which articles were published
  - `l-wordCount` to limit to articles of a particular length
  - `l-decade` or `l-year` to specify the date span (do you really want everything from 1803 to 2020?)

```{code-cell} ipython3

```
