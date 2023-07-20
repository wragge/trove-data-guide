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

# Accessing data about newspaper and gazette articles

+++

![Screenshot of Trove web interface displaying basic article metadata](../images/trove-article-metadata.png)

+++

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

When you search in Trove's digitised newspapers, you're searching for *articles*. The boundaries of articles are defined as part of the {term}`OCR` process. In most cases they represent a single piece of content with a heading and some text (or an illustration). But sometimes blocks of content are grouped together. Advertisements, for example, are often grouped as a single 'article' headed 'Advertising'. Articles can also be split across multiple pages.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Metadata

Newspaper and gazette article metadata includes basic information such as the article heading, publication date, publication title, and page number. Additional information such as attached tags or comments can be also be retrieved from the Trove API.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

Before you dive straight into to the API documentation, remember that there are ways of getting article metadata from the Trove web interface. Each method has its own limitations, but depending on your needs they might do the job. See:

- [](../how-to/web-interface/use-zotero)
- [](../how-to/web-interface/use-lists)
- [](../how-to/web-interface/use-bulk-export)

See [](../how-to/create-newspaper-articles-dataset.md) for further tips.

+++

Articles are linked to:

- pages via page numbers and page identifiers
- titles via title identifiers
- issues via date

<mark>==Note about different values for pages==</mark>

+++

### Find the total number of newspaper & gazette articles

You can retrieve newspaper and gazette articles using the Trove API's `/result` endpoint, just set the `category` parameter to `newspaper`.

[![Try it!](../images/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dnewspaper%26encoding%3Djson)

If we don't include any search parameters, you get everything! You can use this to find out the number of newspaper and gazette articles in Trove:

```{code-cell} ipython3
import requests

# Set n to 0 because we don't want any records
params = {"category": "newspaper", "n": 0, "encoding": "json"}

# Supply API key using headers
headers = {"X-API-KEY": YOUR_API_KEY}

response = requests.get(
    "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
)

data = response.json()

data
```

Note that the example above doesn't return any articles because it sets the `n` parameter to `0`. The current number of newspaper and gazette articles is in the `total` field.

```{code-cell} ipython3
import datetime

# Get the total number of articles
total = data["category"][0]["records"]["total"]
# And today's date
today = datetime.datetime.now().strftime("%d %B %Y")

# Display the result
print(f"As of {today}, there are {total:,} newspaper & gazette articles in Trove")
```

### Limit your results to either newspaper *or* gazette articles

+++

Use the `artType` facet to limit the results to either newspapers or gazettes:

- `l-artType=newspapers` – [![Try it!](../images/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dnewspaper%26l-artType%3Dnewspapers%26encoding%3Djson)
- or `l-artType=gazette` – [![Try it!](../images/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dnewspaper%26l-artType%3Dgazette%26encoding%3Djson)

Notice that `newspapers` is pluralised, but `gazette` is not.

+++

### Save metadata from a search

+++

````{margin}
```{seealso}
The [trove-query-parser](https://wragge.github.io/trove_query_parser/) Python library makes it easy to translate searches for newspaper articles in Trove's web interface into a form that the API can understand. Just give it the url of a newspaper search and it will generate the set of parameters you'll need to replicate the search using the API.
```
````

+++

Use the `q` parameter to supply search keywords. The query string can be anything you might include in Trove's ['simple' search](../understanding-search/simple-search-options.md) box. Results can also be filtered using a number of facets, such as `category`, `state`, `illustrated`, and `decade`.

<mark>==More detail on constructing searches here or somewhere else?==</mark>

For example, to get the first 100 results of a search for `"clement wragge" AND cyclone`, limited to news articles published in Queensland, you would do something like:

```{code-cell} ipython3
import requests

params = {
    # Search string -- note the use of double quotes to search for a phrase
    "q": '"clement wragge" AND cyclone',
    "category": "newspaper",
    "l-artType": "newspapers",
    # Limit to articles published in Queensland
    "l-state": "Queensland",
    # Limit to news-ish articles
    "l-category": "Article",
    # Return 100 results
    "n": 100,
    "encoding": "json",
}

# Supply API key using headers
headers = {"X-API-KEY": YOUR_API_KEY}

response = requests.get(
    "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
)

data = response.json()
```

[![Try it!](../images/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22clement+wragge%22+AND+cyclone%26category%3Dnewspaper%26artType%3Dnewspapers%26l-category%3DArticle%26l-state%3DQueensland%26n%3D100%26encoding%3Djson)

+++

The list of article records can be found at `data["category"][0]["records"]["article"]`. Here's the first record:

```{code-cell} ipython3
data["category"][0]["records"]["article"][0]
```

To print the titles of the first 10 articles you could do something like:

```{code-cell} ipython3
for article in data["category"][0]["records"]["article"][:10]:
    print(article["heading"])
```

### Include extra fields in the metadata

+++

You can use the `reclevel` and `include` parameters to control the amount of metadata provided about each article. For example:

Setting `reclevel=full` adds the following fields:

- `trovePageUrl` – website url pointing to the page on which the article was published
- `illustrated` – is this article illustrated ("Y" or "N")
- `wordCount` – number of words
- `correctionCount` – number of OCR corrections
- `tagCount` – number of tags attached to this article
- `commentCount` – number of tags attached to this article
- `listCount` – number of lists this article has been added to
- `lastCorrection` – details of last OCR correction, includes date and user name
- `pdf` – link to download a PDF version of the page this article was published on

[![Try it!](../images/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22clement+wragge%22+AND+cyclone%26category%3Dnewspaper%26reclevel%3Dfull%26encoding%3Djson)

+++

````{warning}
Note that while `wordCount`, `correctionCount`, `tagCount`, `commentCount`, and `listCount` are numbers, the API returns them as *strings*. If you want to run any mathematical operations on them, you'll first need to convert them into integers.

```python
word_count = int(article["wordCount"])
```
````

+++

Use the `include` parameter to add details about tags, comments, and lists. For example, setting `include=tags` will add a list of any attached tags to the article metadata:

```json
"tag": [
    {
        "lastupdated": "2017-01-02T02:46:49Z",
        "value": "Meteorologist - Clement Wragge"
    },
    {
        "lastupdated": "2017-01-02T02:46:49Z",
        "value": "Novelist - Marie Corelli"
    }
]
```

[![Try it!](../images/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22clement+wragge%22+AND+cyclone%26category%3Dnewspaper%26reclevel%3Dfull%26include%3Dtags%26include%3Dcomments%26include%3Dlists%26encoding%3Djson#limit-to-articles-with-illustrations)

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Trove Newspaper Harvester

<mark>==Where should this go?==</mark>

- metadata, text, images, PDFs
- no limit
- metadata file captures query details

### Get metadata for an individual article

+++

### Get positional information from OCR

Additional metadata relating OCRd text to its position on a page can be scraped from the Trove web site, see [](../how-to/newspapers/get-ocr-coordinates)

+++

## Text

+++

Newspaper text is segmented by article. The text is generated by OCR, with manual corrections by volunteers.

### API

`include=articletext`

Note: includes html
Note: not the AWW (have to scrape)

Trove Newspaper Harvester (including AWW)

+++

## Images and PDFs

+++ {"editable": true, "slideshow": {"slide_type": ""}}

PDF proxy

Save articles as images

Save just the illustrations as images

Save words as images

```{code-cell} ipython3

```
