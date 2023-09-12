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

+++ {"editable": true, "slideshow": {"slide_type": ""}}

# Date searches

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
import datetime
import os

import altair as alt
import pandas as pd
import requests
from dotenv import load_dotenv
from IPython.display import HTML, JSON
from myst_nb import glue

load_dotenv()
YOUR_API_KEY = os.getenv("TROVE_API_KEY")
```

You can limit your Trove searches by date in a number of ways. These options vary across categories and can cause confusion. This section will attempt to document the possibilities and problems.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Accuracy and consistency of metadata

<mark>==I suspect this section might get moved to the contexts section later on. Also need to note that the facets in the book zone don't display dates past today, even though they are there. I think this is an attempt to clean up the interface, but just hides the problem rather than fixing it.==</mark>

Trove's aggregated metadata can include errors, either because of data entry problems or formatting inconsistencies. Problems with dates can seem more obvious than other types of metadata because we expect them to fall within a specific range – it's unlikely Australian libraries will hold books from the year 9000! You can use the `decade` facet to reveal some of these problems.

Here, for example, is the distribution by decade of works in the 'Research & reports' category. Most publications are dated between 1800 and 2100, as you would expect, but there are more than a hundred in the first century, and even an outlier in the 9000s.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
params = {
    "category": "research",
    "facet": "decade",
    "encoding": "json",
}

# Supply API key using headers
headers = {"X-API-KEY": YOUR_API_KEY}

response = requests.get(
    "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
)

data = response.json()

# Perhaps the trickiest thing is actually getting to where the facet terms are
facets = data["category"][0]["facets"]["facet"][0]["term"]

# Get the facet label and count from each facet
research_facet_counts = [{"decade": int(f["search"]) * 10, "total_works": f["count"]} for f in facets]
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
research_chart = alt.Chart(pd.DataFrame(research_facet_counts)).mark_bar().encode(
    x=alt.X("decade:Q", title="decade (binned by century)").bin(step=100).axis(format="c"),
    y=alt.Y("total_works:Q", title="number of works (log scale)").scale(type="log")
).properties(width=500, height=250)

glue("research_decade_chart", research_chart, display=False)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{glue:figure} research_decade_chart
:name: research-decades-chart
:figwidth: 600px
Distribution of publication dates of works in the 'Research & reports' category
```

But not all unexpected dates are errors. The 'Research & reports' category currently contains [759 works dated 2085](https://trove.nla.gov.au/search/category/research?keyword=&l-decade=208&l-year=2085). It looks wrong, but if you examine the records you'll see that these are datasets that include *future projections* for species distributions. The date is accurate, it's just that the contents date has become confused with the publication date.

You'd expect the dates assigned to digitised content to be reliable, and generally this is the case. There seem to be few, if any, date problems in the digitised newspapers. The digitised content in the 'Magazines & newsletters' category, however, does seem to have a few data entry errors.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
params = {
    "category": "magazine",
    "facet": "decade",
    "encoding": "json",
}

# Supply API key using headers
headers = {"X-API-KEY": YOUR_API_KEY}

response = requests.get(
    "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
)

data = response.json()

# Perhaps the trickiest thing is actually getting to where the facet terms are
facets = data["category"][0]["facets"]["facet"][0]["term"]

# Get the facet label and count from each facet
magazine_facet_counts = [{"decade": int(f["search"]) * 10, "total_works": f["count"]} for f in facets]
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
magazine_chart = alt.Chart(pd.DataFrame(magazine_facet_counts)).mark_bar().encode(
    x=alt.X("decade:Q", title="decade (binned by century)").bin(step=100).axis(format="c"),
    y=alt.Y("total_works:Q", title="number of works (log scale)").scale(type="log")
).properties(width=500, height=250)

glue("magazine_decade_chart", magazine_chart, display=False)
```

```{glue:figure} magazine_decade_chart
:name: magazine-decades-chart
:figwidth: 600px
Distribution of publication dates of works in the 'Magazines & newsletters' category
```

+++

## Works versions and date ranges

Grouping of works/versions -- can filter in web interface. In API need to get workVersions and look at separate issued dates.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Date facets

+++

There are three facets you can use to limit search results by date.

```{list-table} Date facets
:header-rows: 1
:name: table-available-search indexes
* - Facet
  - Description
  - Example
  - Categories
* - `l-decade`
  - Limit results to a specific decade
  - `l-decade=190`
  - Applicable to all categories except Websites and Lists
* - `l-year`
  - Limit results to a specific year
  - `l-decade=1901`
  - Applicable to all categories except Websites and Lists
* - `l-month`
  - Limit results to a specific month
  - `l-month=11`
  - Applicable only to Newspapers & Gazettes category
```

```{admonition} Using date facets in newspapers and gazettes
:class: note
You can only apply the `l-year` facet in the Newspapers & Gazettes category if you've already set `l-decade`. Similarly, you can only apply the `l-month` facet if you've already set `l-year` and `l-decade`.
```

For example, to search for newspaper articles published in 1914 you'd set `l-decade` to `191` and `l-year` to `1914`.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dnewspaper%26l-decade%3D191%26l-year%3D1914%26encoding%3Djson&comment=)

To search for books published in 1914 using the API you can just set `l-year` to `1914`.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dbook%26l-year%3D1914%26encoding%3Djson&comment=)

```{warning}
Keep in mind that the web interface works a bit differently than the API. It seems you need to use `l-decade` and `l-year` together in *all categories* when using the web interface, not just the newspapers. This is only really an issue if you're manually constructing search urls.

Also, in those cases where you do need `l-decade` and `l-year` together, leaving out `l-decade` returns results without any date limits, rather than no results at all. This means it can look like the facet is working when it's actually not.
```

+++
