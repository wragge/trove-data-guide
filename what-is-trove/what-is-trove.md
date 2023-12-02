---
jupytext:
  formats: ipynb,md:myst
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

+++ {"user_expressions": [], "editable": true, "slideshow": {"slide_type": ""}}

# What is Trove?



+++

```{admonition} Points to remember
:class: key-points

These are the important things...
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
from dotenv import load_dotenv
from myst_nb import glue
from requests_cache import CachedSession

s = CachedSession(expire_after=60 * 60 * 24)

load_dotenv()
TROVE_API_KEY = os.getenv("TROVE_API_KEY")
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
params = {"category": "newspaper", "n": 0}

headers = {"X-API-KEY": TROVE_API_KEY, "Accept": "application/json"}

response = s.get(
    "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
)
data = response.json()
total_newspapers = data["category"][0]["records"]["total"]
glue("total_newspapers", total_newspapers)
glue("today", datetime.datetime.now().strftime("%-d %b %Y"))
```

```{code-cell} ipython3
:tags: [remove-cell]

params = {"category": "all", "n": 0}

response = s.get(
    "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
)
data = response.json()
categories = []
for category in data["category"]:
    categories.append({"name": category["name"], "total": category["records"]["total"]})
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
df = pd.DataFrame(categories)
chart = (
    alt.Chart(df)
    .mark_bar()
    .encode(
        x=alt.X("name:N", axis=alt.Axis(title=None)),
        y=alt.Y("total:Q", axis=alt.Axis(title=None, format="~s")),
        color=alt.Color("name:N", legend=None),
    )
)
glue("categories-chart-narrow", chart.properties(width=150, height=250))
glue("categories-chart", chart.properties(width=600, height=250))
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{tableofcontents}
```
