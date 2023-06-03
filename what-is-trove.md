---
jupytext:
  formats: ipynb,md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.14.5
kernelspec:
  display_name: Python 3 (ipykernel)
  language: python
  name: python3
---

+++ {"user_expressions": []}

# What is Trove?

```{code-cell} ipython3
:tags: [remove-cell]

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
:tags: [remove-cell]

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
:tags: [remove-cell]

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

+++ {"user_expressions": []}

## Trove is

+++ {"user_expressions": []}

- an aggregation of collection {term}`metadata` from Australian {abbr}`GLAM (Galleries, Libraries, Archives, and Museums)` and research organisations (includes pre-aggregated content through Libraries Australia[^LA] as well as individually harvested collections)
- a repository of digitised content from the NLA and partners, includes:
    - newspapers
    - journals and magazines
    - books
    - ephemera
    - photographs
    - maps
    - manuscripts
- an archive of Australian web content from 1996 onwards
- born-digital publications submitted via the electronic legal deposit scheme (access may be restricted)
- a platform for user engagement via tags, comments, lists, and OCR corrections
- a series of APIs for delivering machine-actionable data

+++ {"user_expressions": []}

## Some basic concepts:

- metadata vs digital objects
- works and versions
- categories and zones
- NLA identifiers

+++ {"user_expressions": []}

[^LA]: Is Libraries Australia even a thing any more or has it been rolled into Trove?
