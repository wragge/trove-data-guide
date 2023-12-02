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

# Accessing data from books

+++



+++

## Metadata

There seem to be a lot of duplicate records -- Libraries Australia and Trove DL (why not merged?)

- work records (via search and `/work/` endpoints)
- embedded metadata
    - pages (number of pages important for text, images, pdf)
    - chapters?
- lists of items in collections

Create datasets

Pre-harvested datasets -- digitised books with OCR

Search and formats/categories

Facets -- eg language? (but usual work/version problems)

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Text

Some in API but not all and limits on length -- don't use!

Once you have number of pages can download --> how to

Pre-harvested datasets

You can get text via the API, but you have to add `include=workversions` then loop through versions, looking in the `description` field for a `value` with `"type": "open_fulltext"`.

I think there are limits on the amount of text you can get from the API -- need to test this.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
import requests
import pandas as pd

df = pd.read_csv("https://raw.githubusercontent.com/GLAM-Workbench/trove-books-data/main/trove-books.csv", keep_default_na=False)

```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
from wordcloud import WordCloud
from io import BytesIO

book = df.loc[(df["text_file"] != "") & (df["pages"] > 50) & (df["language"].str.contains("English"))].sample(1)
nla_id = book["fulltext_url"].iloc[0]
print(nla_id)
pages = book["pages"].iloc[0]

params = {
    "downloadOption": "ocr",
    "firstPage": 0,
    "lastPage": pages - 1
}

response = requests.get(f"{nla_id}/download", params=params)
print(response.url)
#print(response.text)
wc = WordCloud(width=800, height=300)
# just using response.text with wordcloud seems to cause encoding problems
# using BytesIO and response.content seems to work ok
wc.generate(BytesIO(response.content).getvalue().decode('UTF-8'))
wc.to_image()
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Images and PDF

Once you have number of pages can download --> how to

Some allow view but not download: https://nla.gov.au/nla.obj-2490195342/view

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Oddities

This is a collection, but instead of the items in the collection having their own work records, they're versions of the work. This makes it hard to get at the individual items via the API.

https://trove.nla.gov.au/work/12938999/
