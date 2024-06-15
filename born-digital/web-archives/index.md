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

# Web archives

+++

How to:

- get a capture near a date
- get a list of captures (timemap or cdx)
- get captures from a domain
- get the original html

```{code-cell} ipython3
import pandas as pd
df = pd.read_csv("https://raw.githubusercontent.com/GLAM-Workbench/trove-web-archives-titles/main/pandora-titles.csv")
```

```{code-cell} ipython3
df.head()
```

```{code-cell} ipython3
df["domain"] = df["surt"].str.extract(r"(.*?)\)")
df["domain"] = df["domain"].dropna().apply(lambda x: ".".join(reversed(x.split(","))))
```

```{code-cell} ipython3
df["domain"].value_counts()[:50]
```

Look at harvested titles - domains etc (using surts)git

```{code-cell} ipython3
df
```

```{code-cell} ipython3
from wordcloud import WordCloud

text = "\n".join(df["name"].to_list())
```

```{code-cell} ipython3
wc = WordCloud(width=800, height=500).generate(text)
wc.to_image()
```

```{code-cell} ipython3
df.loc[(df["name"].str.contains("COVID")) | (df["name"].str.contains("coronavirus"))]
```

```{code-cell} ipython3
yt = df.loc[df["domain"].isin(["youtu.be", "youtube.com"])]
text = "\n".join(yt["name"].to_list())
```

```{code-cell} ipython3
wc = WordCloud(width=800, height=500).generate(text)
wc.to_image()
```

```{code-cell} ipython3
tw = df.loc[(df["domain"].str.contains("twitter")) | (df["domain"].str.contains("nitter"))]
text = "\n".join(tw["name"].to_list())
wc = WordCloud(width=800, height=500).generate(text)
wc.to_image()
```

```{code-cell} ipython3
tw
```

```{code-cell} ipython3

```
