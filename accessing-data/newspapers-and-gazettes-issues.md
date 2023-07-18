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

# Accessing data about newspaper & gazette issues

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

```{contents}
:local:
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

## Metadata

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Get the number of issues per year for a title

You can use the `newspaper/title` and `gazette/title` endpoints to get the total number of digitised issues per year for a newspaper or gazette title. You just add the `include` parameter and set its value to `years`.

[![Try it!](../images/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitle%2F11%3Fencoding%3Djson%26include%3Dyears)

Here's an example getting the number of issues per year from the *Canberra Times* (whose title identifier is `11`).

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
title_id = "11"
params = {"encoding": "json", "include": "years"}

url = f"https://api.trove.nla.gov.au/v3/newspaper/title/{title_id}"
response = requests.get(url, params=params, headers=headers)
data = response.json()
year_totals = data["year"]

# Show the first 5 values
year_totals[0:5]
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

To find the total number of issues for a title, you just add up all the `issuecount` values.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
# Convert the list of counts by year into a dataframe
df_years = pd.DataFrame(year_totals)

# Add all the issuecount values together
df_years["issuecount"].sum()
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
alt.Chart(df_years).mark_line().encode(
    x="date:T",
    y=alt.Y("issuecount:Q", title="number of issues"),
).properties(width=600)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Details of issues within a date range

You can also use the `newspaper/title` and `gazette/title` endpoints to get some details about individual issues, including their date and identifier. To do this you add the `range` parameter to your request, and set its value to a date range using the format `YYYYMMDD-YYYYMMDD`. For example to find issues published between 1930 and 1935, you'd set the `range` parameter to `19300101-19351231`.

[![Try it!](../images/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitle%2F11%3Fencoding%3Djson%26include%3Dyears%26range%3D19300101-19351231)

You could use the title's `startDate` and `endDate` values to construct the range. However, keep in mind that if a newspaper was published daily over a long period you might be asking for a lot of data in one hit. It might be better to request the data in chunks, such as a year at a time. The GLAM Workbench provides an example of this in the [Harvest information about newspaper issues](https://glam-workbench.net/trove-newspapers/#harvest-information-about-newspaper-issues) notebook.

For years within the requested range, an additional `issue` value will provide a list of available issues published in that year. Each issue will include values for `id`, `date`, and `url`.

Here's an example using the range `19300101-19351231` for the *Canberra Times*.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
params = {"encoding": "json", "include": "years", "range": "19300101-19351231"}

url = f"https://api.trove.nla.gov.au/v3/newspaper/title/{title_id}"
response = requests.get(url, params=params, headers=headers)
data = response.json()
years = data["year"]

# Let's get issue details for our range
issues = []
for year in years:
    # If the year is in our range it will include an `issue` value
    if "issue" in year:
        # Add this year's issues
        issues += year["issue"]

# Show the first 5 issues
issues[0:5]
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{note}
You might be wondering where an issue's `url` actually goes to, as there's no issue landing page in Trove. If you try clicking on one of the links, you'll notice that you're redirected from the issue url to a url that points to the first page of that issue. This provides a useful shortcut if you want to assemble a collection of front pages ([see below for details](get-a-list-of-front-page-urls)).
```

+++

## Text

+++

## Images and PDFs

+++ {"editable": true, "slideshow": {"slide_type": ""}}

#### Get an issue as a PDF

````{margin}
```{seealso}
To download all the issues of a newspaper within a specified date range as PDFs see the GLAM Workbench notebook [Harvest the issues of a newspaper as PDFs](https://glam-workbench.net/trove-newspapers/#harvest-the-issues-of-a-newspaper-as-pdfs).
```
````

You can download a newspaper or gazette issue as a PDF from the web interface.

- click on the **Download** tab
- select 'Issue' from the dropdown list
- when PDF generation is complete, click on the **View PDF** button

Downloading issue PDFs automatically using code is a bit more complicated. There are three steps:

- ask for a PDF to be generated for a particular issue ID
- ping Trove at regular intervals to check whether the PDF is ready
- once the PDF is ready, download it

See [How to get a newspaper issue or article as a PDF](../how-to/get-newspaper-issue-article-pdfs) for a full example.

```{code-cell} ipython3

```
