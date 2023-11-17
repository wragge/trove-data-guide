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

# Overview of Parliamentary Papers

```{contents}
:local:
```

## What are Parliamentary Papers?

Parliamentary Papers are documents presented to the Australian Parliament. Sometimes this is required by law. Other times it's just for information. The [Parliament of Australia website notes](https://www.aph.gov.au/Parliamentary_Business/Chamber_documents/Tabled_Papers/Parliamentary_Papers_series):

> Documents presented include the annual reports of all government agencies, reports of royal commissions and other government inquiries, parliamentary committee reports, and a wide variety of other material.

As well as Trove, Parliamentary Papers can be [found through ParlInfo](https://parlinfo.aph.gov.au/parlInfo/search/summary/summary.w3p;adv=yes;orderBy=customrank;page=0;query=Dataset%3AppSeries;resCount=Default), Parliament's own online database.

Here's a few randomly selected examples:

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
import altair as alt
import pandas as pd
from IPython.display import HTML
from myst_nb import glue
from wordcloud import WordCloud
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-input]
---
df = pd.read_csv(
    "https://github.com/GLAM-Workbench/trove-parliamentary-papers-data/raw/main/trove-parliamentary-papers.csv"
)

random_sample = df.sample(3)[["title", "contributor", "date", "fulltext_url"]]
random_sample["thumbnail"] = random_sample["fulltext_url"].apply(lambda x: f"{x}-t")
random_sample = random_sample[
    ["thumbnail", "title", "contributor", "date", "fulltext_url"]
]


def to_img_tag(path):
    return '<img src="' + path + '" width="50" >'


display(
    HTML(
        random_sample.to_html(
            escape=False,
            formatters={"thumbnail": to_img_tag},
            index=False,
            render_links=True,
        )
    )
)
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
glue("pp-total", df.shape[0], display=False)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## How many Parliamentary Papers are digitised in Trove?

Many Commonwealth Parliamentary Papers have been digitised and made available through Trove. But, because of the way they're arranged and described, it's difficult to know exactly how many there are. I've attempted to harvest details of all the Parliamentary Papers in Trove using a combination of techniques. Based on [this dataset](https://github.com/GLAM-Workbench/trove-parliamentary-papers-data), it seems there are currently {glue:text}`pp-total:,` digitised Parliamentary Papers in Trove. Here are some more statistics from this dataset:

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
df = pd.read_csv(
    "https://github.com/GLAM-Workbench/trove-parliamentary-papers-data/raw/main/trove-parliamentary-papers.csv"
)

stats = [
    ["Number of digitised Parliamentary Papers", df.shape[0]],
    [
        "Number of Parliamentary Papers with OCRd text",
        df.loc[df["text_file"].notnull()].shape[0],
    ],
    ["Total number of pages", df["pages"].sum()],
    ["Median number of pages per publication", df["pages"].median()],
]

stats_df = pd.DataFrame(stats)
stats_df.style.format(thousands=",", precision=0).hide().hide(axis=1).set_properties(
    **{"text-align": "left"}
)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

Most of the Parliamentary Papers in Trove were published before 2013. If you search in ParlInfo for [Parliamentary Papers published before 2013](https://parlinfo.aph.gov.au/parlInfo/search/summary/summary.w3p;adv=yes;orderBy=customrank;page=0;query=(Date%3A%20%3E%3E%2031%2F12%2F2012)%20Dataset%3AppSeries;resCount=Default) the total number of results is 25,853 – close, but not exactly the same. There could be publications missing from Trove, or duplicates in the ParlInfo results.

+++

## When were the Parliamentary Papers published?

The `date` metadata is not always accurate, but it seems good enough to explore the distribution of Trove's Parliamentary Papers over time.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input, remove-output]
---
import altair as alt

df["year"] = df["date"].str.extract(r"\b(\d{4})$")
years = df["year"].value_counts().to_frame().reset_index()

chart_dates = (
    alt.Chart(years)
    .mark_bar(size=3)
    .encode(
        x="year:T", y="count:Q", tooltip=[alt.Tooltip("year:T", format="%Y"), "count:Q"]
    )
    .properties(width="container")
)

display(chart_dates)
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
glue("chart-dates", chart_dates, display=False)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{glue:figure} chart-dates
:name: "pp-overview-chart-dates"

Publication dates of digitised Parliamentary Papers in Trove
```

From the chart above it looks like the earliest Parliamentary Paper pre-dates the Commonwealth Parliament. What is it?

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
df["year"] = df["year"].astype("Int64")
earliest = df.loc[df["year"].idxmin()]
display(
    HTML(
        f"<a href='{earliest['fulltext_url']}'>{earliest['title']} / {earliest['sub_unit']}</a>"
    )
)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Titles and topics of Parliamentary Papers

What are all these Parliamentary Papers about? You can use the `title`, `subject`, and `contributor` fields to explore their content.

Here, for example is a word cloud generated from the `title` field. There's a lot of annual reports, and many of the titles include the abbreviation "PP", so I've excluded the words "report", "annual", "PP", and "AR".

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
from wordcloud import STOPWORDS, WordCloud

# Add to the list of standard stopwords
stopwords = ["report", "annual", "pp", "AR"] + list(STOPWORDS)

titles = " ".join(df["title"].to_list())
wc = WordCloud(stopwords=stopwords, width=800, height=300)
wc.generate(titles).to_image()
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

The `subject` field contains a list of standard(ish) subject headings. Here's the top twenty values:

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
subjects = df["subject"].str.split("|").explode().to_frame()
# Remove trailing full stops
subjects["subject"] = subjects["subject"].str.strip(".")
subjects["subject"].value_counts().to_frame().reset_index()[:20].style.format(
    thousands=","
).hide()
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

The name of the agency that created a particular publication can also give an indication of its content. Here are the top twenty contributing organisations:

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
def clean_contributor(value):
    if cleaned := re.search(r"(.*?) [0-9]+ [0-9a-z\-]+$", str(value)):
        return cleaned.group(1).strip(".")
    else:
        return str(value).strip(".")


import re

contributors = df["contributor"].str.split("|").explode().to_frame()
contributors["cleaned name"] = contributors["contributor"]
contributors["cleaned name"] = contributors["contributor"].apply(clean_contributor)
contributors.dropna()["cleaned name"].value_counts().to_frame().reset_index()[
    :20
].style.format(thousands=",").hide()
```

```{code-cell} ipython3

```
