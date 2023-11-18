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

# Overview of oral histories

The National Library of Australia holds over [55,000 hours of oral history and folklore recordings](https://www.nla.gov.au/collections/what-we-collect/oral-history-and-folklore) dating back to the 1950s. This collection is being made available online, and many recordings can now be listened to using [Trove's audio player](https://trove.nla.gov.au/help/navigating/audio-player).

```{contents}
:local:
```

(finding-oral-histories)=
## Finding oral histories

Items from the NLA's oral history collection can be found in Trove's **Music, Audio, & Video** category. If you're only interested in what's available online, the standard approach to finding digitised resources seems to work effectively – [search in **Music, Audio, & Video** category for `"nla.obj"`, with the `availability` facet set to `y`, and the `format` facet set to `Sound/Interview, lecture, talk`](https://trove.nla.gov.au/search/category/music?keyword=%22nla.obj%22&l-format=Sound%2FInterview,%20lecture,%20talk&l-availability=y).

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22nla.obj%22%26category%3Dmusic%26l-format%3DSound%2FInterview%2C+lecture%2C+talk%26l-availability%3Dy%26encoding%3Djson&comment=)

If you're also interested in oral histories that aren't yet online, you can use the `nuc` index instead of `"nla.obj"` to find all oral histories in the NLA collection – [search in the **Music, Audio, & Video** category for `nuc:ANL OR nuc:"ANL:DL"` with the `format` facet set to `Sound/Interview, lecture, talk`](https://trove.nla.gov.au/search/category/music?keyword=nuc%3AANL%20OR%20nuc%3A%22ANL%3ADL%22&l-format=Sound%2FInterview,%20lecture,%20talk).

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3Dnuc%3AANL+OR+nuc%3A%22ANL%3ADL%22%26category%3Dmusic%26l-format%3DSound%2FInterview%2C+lecture%2C+talk%26encoding%3Djson&comment=)

This search will probably return some items that aren't from the NLA's own oral history collection. But the alternatives I've tried miss some oral histories, so I think it's better to be inclusive and weed the results as necessary.

## Licensing of oral histories

If you click through to a digitised copy of an oral history in Trove, you'll be presented with a licence agreement that you'll need to accept before using the recording. The agreement notes:

> You are seeking access to an oral history recording. Oral history is by its nature spoken memory. It is a personal opinion and is not intended to present the final verified or complete narrative of events.
>
> The following end user licence agreement is intended to preserve both the rights of the interviewee as well as protecting the reputation of individuals and the Library. It describes the obligations of anyone who accesses the material in the collection. It is a requirement of use that you comply with these conditions.

You can [download and view](https://nla.gov.au/tarkine/listen/NLA_OralHistory_EULA_June2012.pdf) the full licence agreement as a PDF.

This section of the Trove Data Guide documents methods for accessing data relating to the oral histories which, by their nature, bypass the licence agreement screen. If you're intending to work with the oral histories, I'd strongly suggest you take time to read and consider the licence agreement before proceeding.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
from myst_nb import glue
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## How many oral histories are there?

I've attempted to harvest details of all the NLA's oral histories described in Trove, both online and not online. I've saved the results as a CSV file in [this GitHub repository](https://github.com/GLAM-Workbench/trove-oral-histories-data). Using this data you can explore the shape of the collection.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
import pandas as pd
import altair as alt
import re

df = pd.read_csv("https://raw.githubusercontent.com/GLAM-Workbench/trove-oral-histories-data/main/trove-oral-histories.csv", keep_default_na=False)

df["online_status"] = df.apply(lambda x: "online" if x["fulltext_url"] != "" else "not online", axis=1)
df["online_status"].value_counts().to_frame().reset_index().style.format(thousands=",").hide().hide(axis=1)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## How are the interviews distributed over time?

The `date` field tells you when each interview was recorded.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input, remove-output]
---
df["year"] = df["date"].str.extract(r"\b((?:19|20)\d{2})\b")
years = df.value_counts(["year", "online_status"]).to_frame().reset_index()

chart_online_years = alt.Chart(years).mark_bar(size=4).encode(
    x="year:T",
    y=alt.Y("count:Q"),
    color="online_status",
    tooltip=["online_status", alt.Tooltip("year:T", format="%Y"), "count"]
).properties(width=600)

chart_online_years
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
glue("chart-online-years", chart_online_years, display=False)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{glue:figure} chart-online-years
:name: chart-online-years
Number of oral history records by year and online status
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## How many hours of recordings are available online?

Information about the `duration` of each audio file can be [extracted from the audio player](details-of-available-downloads). Adding the values together gives us a total for all the oral histories online.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
print(f"Hours: {df['duration'].sum() / 60 / 60:,}")
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## How many oral histories have transcripts or summaries you can download?

Many of the oral histories online have [summaries or transcripts that you can download](oral-histories-transcripts).

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
print(f"Summaries: {df['summary'].sum():,}")
print(f"Transcripts: {df['transcript'].sum():,}")
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## What are the oral histories about?

The `subject` field contains standard(ish) subject headings that provide an insight into the topics of oral history interviews.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

Here's the top ten subjects of oral histories that are not online. The formatting of the `--` separators has been normalised, and final fullstops removed.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
def split_and_clean(value):
    values = value.split(" | ")
    return list(set([re.sub(r"(\w)--(\w)", r"\1 -- \2", v).strip(".") for v in values if v]))

df["subject"] = df["subject"].apply(split_and_clean)

subjects = df[["online_status", "subject"]].explode("subject")

subjects.loc[(subjects["online_status"] == "not online")]["subject"].value_counts().to_frame().reset_index()[:10].style.hide()
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

Here's the top ten subjects of oral histories that are *are* online. The formatting of the `--` separators has been normalised, and final fullstops removed.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
subjects.loc[subjects["online_status"] == "online"]["subject"].value_counts().to_frame().reset_index()[:10].style.hide()
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## What collections do the oral histories belong to?

You can use the `isPartOf` field in the record metadata to examine thematic collections within the larger oral history collection. Here's the top twenty `series` values from the `isPartOf` field. The values have been normalised by removing the final full stops.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
df["is_part_of"] = df["is_part_of"].apply(split_and_clean)

series = df["is_part_of"].explode().value_counts().to_frame().reset_index()

# Show series only (not publication)
series.dropna().loc[series["is_part_of"].str.startswith("series")][:20].style.hide()
```

A complete list of series values is available in [this text file](https://github.com/GLAM-Workbench/trove-oral-histories-data/blob/main/trove-oral-history-series.txt). You can use these values with the `series` index to find all the oral histories within a collection. For example, [searching for `series:"Hazel de Berg collection"`](https://trove.nla.gov.au/search/category/music?keyword=series%3A%22Hazel%20de%20Berg%20collection%22&l-format=Sound%2FInterview,%20lecture,%20talk) will find all the interviews in the Hazel de Berg collection.

```{code-cell} ipython3

```
