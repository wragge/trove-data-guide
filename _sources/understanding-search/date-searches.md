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

<mark>==Explain dates in people category==</mark>

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

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Using date facets

+++

There are three facets you can use to limit search results by date: `decade`, `year`, and `month`. The `month` facet is only available in the *Newspapers & Gazettes* category.

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

In some cases these facets need to be used in combination. You can only apply the `l-year` facet in the *Newspapers & Gazettes* category if you've already set `l-decade`. Similarly, you can only apply the `l-month` facet if you've already set `l-year` and `l-decade`.

For example, to search for newspaper articles published in 1914 you'd set `l-decade` to `191` and `l-year` to `1914`.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dnewspaper%26l-decade%3D191%26l-year%3D1914%26encoding%3Djson&comment=)

To search for books published in 1914 using the API you can just set `l-year` to `1914`.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dbook%26l-year%3D1914%26encoding%3Djson&comment=)

```{warning}
Keep in mind that the web interface works a bit differently than the API. It seems you need to use `l-decade` and `l-year` together in *all categories* when using the web interface, not just the newspapers. This is only really an issue if you're manually constructing search urls.

Also, in those cases where you do need `l-decade` and `l-year` together, leaving out `l-decade` returns results without any date limits, rather than no results at all. This means it can look like the facet is working when it's actually not.
```

+++

(using-the-date-index)=
### Using the date index

If you want to search for a range of dates you can use the `date` index. Queries using the `date` index look something like this: `date:[STARTDATE TO ENDDATE]`. For example, to include records from 1914 to 1918 (inclusive) in your search, you'd use `date:[1914 TO 1918]`. You can add date index queries to the search box in the web interface, or include them in the `q` parameter of an API request.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3Ddate%3A%5B1914+TO+1918%5D%26category%3Dnewspaper%26encoding%3Djson&comment=)

To set `STARTDATE` or `ENDDATE` to the limit of the available date range, use a value of `*` (an asterisk). For example, to search for records published in 1900 or earlier, you'd use `date:[* TO 1900]`.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3Ddate%3A%5B*+TO+1900%5D%26category%3Dnewspaper%26encoding%3Djson&comment=)

To search for results from a single year, you can set `STARTDATE` and `ENDDATE` to the same value, for example, `date:[1914 TO 1914]`. This is the same as setting the `l-year` facet to `1914`.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3Ddate%3A%5B1914+TO+1914%5D%26category%3Dnewspaper%26encoding%3Djson&comment=)

In the *Newspapers & Gazettes* category, the values of `STARTDATE` and `ENDDATE` can be days, rather than years. But there are a few tricks. To specify a day, you need to provide a full ISO-formatted date, complete with time and timezone, even though the time component is ignored. For example: `1901-01-01T00:00:00Z`.

Also, when you use days rather than years, the date range is **not** inclusive. **You have to set `STARTDATE` to the day before the one you you want.** For example:

- `date[1914 TO 1914]` – returns results from 1914 (range is inclusive)
- `date[1914-01-01T00:00:00Z TO 1914-01-01T00:00:00Z]` – returns zero results (range is not inclusive)
- `date[1913-12-31T00:00:00Z TO 1914-01-01T00:00:00Z]` – returns results from 1 January 1914
- `date[1913-12-30T00:00:00Z TO 1914-01-01T00:00:00Z]` – returns results from 31 December 1913 to 1 January 1914

This means that if you want to search for newspaper or gazette articles from a *specific day*, you need to set the the `STARTDATE` value to the day before the one you want. For example, to find articles published on 2 November 1944, the `STARTDATE` would be `1944-11-01T00:00:00Z` and the full query would be `date:[1944-11-01T00:00:00Z TO 1944-11-02T00:00:00Z]`.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3Ddate%3A%5B1944-11-01T00%3A00%3A00Z+TO+1944-11-02T00%3A00%3A00Z%5D%26category%3Dnewspaper%26encoding%3Djson&comment=)

We can do a little test of this behaviour by trying different `date` queries and using the `year` facet to check the range of our results.

```{code-cell} ipython3
import requests

def get_year_facets(start_date, end_date):
    params = {
        "q": f"date:[{start_date} TO {end_date}]", 
        "category": "newspaper",
        "facet": "year",
        "encoding": "json",
        "n": 0
    }
    
    # Supply API key using headers
    headers = {"X-API-KEY": YOUR_API_KEY}
    
    response = requests.get(
        "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
    )
    
    data = response.json()
    try:
        facets = data["category"][0]["facets"]["facet"][0]["term"]
    except KeyError:
        facets = []

    years = [f["search"] for f in facets]
    return years
```

If the start and end dates are the same there are no results.

```{code-cell} ipython3
get_year_facets("1914-01-01T00:00:00Z", "1914-01-01T00:00:00Z")
```

To get results from 1 January 1914 we set the start date to the 31 December 1913. Note that despite the start date being in 1913, there are only results from 1914.

```{code-cell} ipython3
get_year_facets("1913-12-31T00:00:00Z", "1914-01-01T00:00:00Z")
```

Setting the start date back another day means we get results from both 1913 and 1914.

```{code-cell} ipython3
get_year_facets("1913-12-30T00:00:00Z", "1914-01-01T00:00:00Z")
```

If you're developing an automated process that searches for newspaper articles from a list of dates, you'll need to find some way of reliably subtracting a day from the date you want (dates are always more complicated than you expect). Here's one approach:

```{code-cell} ipython3
from datetime import datetime, timedelta

desired_date = "1944-12-01"

# Convert the date string to a datetime object
desired_datetime = datetime.fromisoformat(desired_date)

# Subtract a day from the datetime
start_datetime = desired_datetime - timedelta(days=1)

# Format the start date
start_date = f"{start_datetime.isoformat()}Z"
print(start_date)
```

## Works, versions, and dates

Date searches can produce odd results when you're working with aggregated content (as in the *Books & Libraries* category). What do you think happens if you set the `l-decade` facet to `200` (ie 2000 to 2009) and the `l-year` facet to `1900`? In the *Newspapers & Gazettes* category you get no results, as you would expect. But in *Books & Libraries* you get more than a million results!

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dbook%26l-decade%3D200%26l-year%3D1900%26encoding%3Djson&comment=)

How is this possible? How can both facet values be true? The answer lies in the way [versions of publications are grouped together as works](/what-is-trove/works-and-versions). If there are multiple versions of a work with different publication dates, the date of the work in Trove will be a range encompassing all the version dates. For example, a work that has versions published in `1900` and `2022` will have an `issued` value of `1900-2022`. Because Trove searches for works rather than versions, a search for any date within the `issued` date range will return the work. So the same work can be published between 2000 and 2009, and also in 1900.

But what if you want to find a version published on a specific date? The Trove web interface has an option to filter a work's 'editions' (aka versions) by date. If you're using the API, you'll first have to requests details of all versions by setting the `include` parameter to `workversions`. Then you'll need to loop through all the versions, checking their individual `issued` dates.

<mark>==Include some example code?==</mark>

```{code-cell} ipython3

```
