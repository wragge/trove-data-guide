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

# Digitised books

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
import pandas as pd
import altair as alt
from IPython.display import HTML
alt.data_transformers.disable_max_rows()
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
df = pd.read_csv("https://raw.githubusercontent.com/GLAM-Workbench/trove-books-data/main/trove-books.csv", keep_default_na=False)
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
df.shape
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
df.loc[df["text_file"] != ""].shape
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
df["rights"].str.split(" | ", regex=False).explode().value_counts()
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
languages = df["language"].str.split(" | ", regex=False).explode()
languages.value_counts()[:10]
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
languages.nunique()
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
language_counts = languages.value_counts().to_dict()
del(language_counts["English"])
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
from wordcloud import WordCloud

wc = WordCloud(width=800, height=400)
wc.generate_from_frequencies(language_counts)
wc.to_image()
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
df["pages"]
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
df["year"] = df["date"].str.extract(r"\b((?:16|17|18|19|20)\d{2})\b")
year_counts = df["year"].value_counts().to_frame().reset_index()
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
alt.Chart(year_counts).mark_bar(size=1).encode(
    x="year:T",
    y="count:Q"
).properties(width=800, height=200)
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
alt.Chart(df).mark_bar().encode(
    x=alt.X("pages:Q").bin(),
    y="count()"
).properties(width=800, height=200)
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
df.loc[df["pages"].idxmax()]
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
import re


def split_and_clean(value):
    values = value.split("|")
    return list(
        set([re.sub(r"(\w)--(\w)", r"\1 -- \2", v).strip().strip(".") for v in values if v])
    )


df["subjects"] = df["subject"].apply(split_and_clean)

subjects = df["subjects"].explode().to_frame()
# Remove trailing full stops
#subjects["subject"] = subjects["subject"].str.strip(".")
subjects["subjects"].value_counts().to_frame().reset_index()[:20].style.format(
    thousands=","
).hide()
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
random_sample = df.loc[df["subject"].str.contains("Menus")].sample(5)[["title", "contributor", "date", "fulltext_url"]]
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
---

```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```
