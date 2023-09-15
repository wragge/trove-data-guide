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

# Accessing data about newspaper & gazette titles

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

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## What's a title?

'Titles' in this context refers to the names and details of the publications whose articles are digitised in Trove's *Newspapers & Gazette's* category. For example: *Canberra Times*, *Sydney Morning Herald*, or *Commonwealth of Australia Gazette*.

+++

(title-links-and-identifiers)=
## Title links and identifiers

Every title in Trove's *Newspapers & Gazette's* category has it's own unique identifier. You can find this identifier in the web interface and by using the Trove API.

You can browse a full list of titles in the web interface. Click on the 🛈 icon next to a title's name to open its landing page.

```{figure} /images/title-browse-link.png
:name: title-browse-link
:width: 500
Click on the 🛈 icon to open a title's landing page
```

If you're viewing an article, you can get to the title's landing page by hovering over the title in the breadcrumbs, and clicking on the 'View title info' link.

```{figure} /images/newspaper-title-link.png
:name: title-article-link
:width: 500
Hover over the breadcrumbs to reveal a link to the title's landing page
```

The identifier is displayed on the title's landing page and has the form: `http://nla.gov.au/nla.news-title1406`. 

```{figure} /images/trove-title-id.png
:name: title-id
:width: 500
The title's identifier is displayed on the landing page
```

If you load the identifier in your web browser, you'll be redirected to the landing page. You'll notice that the numeric part of the identifier is also in the url of the landing page.

You can access identifiers for all titles from the `/newspaper/titles` and `/gazette/titles` endpoints. You can also find them in the `title` field of an article record. For example:

```json
"title": {
    "id": "1406",
    "title": "Daily Advertiser (Geraldton, WA : 1890 - 1893)"
},
```

The `title["id"]` field contains the title's numeric identifier. By appending it to `http://nla.gov.au/nla.news-title` you can create a link to the title's landing page, or by [using it with the `/newspaper/title` endpoint](details-single-title) you can download the title's metadata from the Trove API.

+++

## Title metadata

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Get a list of newspaper & gazette titles

You can get information about newspaper and gazette titles in Trove from these API endpoints:

- `newspaper/titles` – [![Try it!](../images/try-trove-api-console.svg)
](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitles%3Fencoding%3Djson)
- `gazette/titles` – [![Try it!](../images/try-trove-api-console.svg)
](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fgazette%2Ftitles%3Fencoding%3Djson)

The data isn't paginated, so you get all the titles at once. Here's a basic example showing how to get a list of all the titles from the `newspaper/titles` endpoint.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
import requests

# Set encoding parameter to JSON
params = {"encoding": "json"}

# Supply API key using headers
headers = {"X-API-KEY": YOUR_API_KEY}

# Make the request
response = requests.get(
    "https://api.trove.nla.gov.au/v3/newspaper/titles", params=params, headers=headers
)

# Get the JSON data from the response
data = response.json()

# Get the list of newspapers
newspapers = data["newspaper"]

# Display the first title in the list
newspapers[0]
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### How many newspaper titles are there?

The responses you get back from the `newspaper/titles` or `gazette/titles` endpoints includes a `total` value that tells you the number of titles matching your request. Reusing the data from the request above, we can get the total number of newspaper titles like this:

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
data["total"]
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
newspapers_df = pd.DataFrame(newspapers)

alt.renderers.set_embed_options(actions=False)
chart = (
    alt.Chart(newspapers_df)
    .mark_bar()
    .encode(
        x="state:N",
        y=alt.Y("count():Q", title="number of titles"),
        color=alt.Color("state:N", legend=None),
        tooltip=["state:N", alt.Tooltip("count():Q", title="total")],
    )
    .properties(width="container", padding=10)
)
glue("titles_by_state_chart", chart, display=True)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Get a list of newspaper titles from a particular state

````{margin}
```{glue:figure} titles_by_state_chart
:name: titles-by-state
:align: center
Number of newspapers by state. See the [Trove Newspapers Data Dashboard](https://wragge.github.io/trove-newspaper-totals/#Newspaper-titles) for current totals.
```
````

You can filter the list of titles by adding the `state` parameter. Possible values for `state` are: 


- `nsw` – [![Try it!](../images/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitles%3Fstate%3Dnsw%26encoding%3Djson)
- `act` – [![Try it!](https://img.shields.io/badge/Try_it!-Trove_API_Console-blue)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitles%3Fstate%3Dact%26encoding%3Djson)
- `qld` – [![Try it!](https://img.shields.io/badge/Try_it!-Trove_API_Console-blue)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitles%3Fstate%3Dqld%26encoding%3Djson)
- `tas` – [![Try it!](https://img.shields.io/badge/Try_it!-Trove_API_Console-blue)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitles%3Fstate%3Dtas%26encoding%3Djson)
- `sa` – [![Try it!](https://img.shields.io/badge/Try_it!-Trove_API_Console-blue)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitles%3Fstate%3Dsa%26encoding%3Djson)
- `nt` – [![Try it!](https://img.shields.io/badge/Try_it!-Trove_API_Console-blue)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitles%3Fstate%3Dnt%26encoding%3Djson)
- `wa` – [![Try it!](https://img.shields.io/badge/Try_it!-Trove_API_Console-blue)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitles%3Fstate%3Dwa%26encoding%3Djson)
- `vic` – [![Try it!](https://img.shields.io/badge/Try_it!-Trove_API_Console-blue)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitles%3Fstate%3Dvic%26encoding%3Djson)
- `national` – [![Try it!](https://img.shields.io/badge/Try_it!-Trove_API_Console-blue)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitles%3Fstate%3Dnational%26encoding%3Djson)
- `international` – [![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitles%3Fstate%3Dinternational%26encoding%3Djson&comment=)

Here's an example showing how to get only newspapers published in Victoria.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
import requests

# Add the state parameter and set it to 'vic' to get titles from Victoria
params = {"encoding": "json", "state": "vic"}

# Supply API key using headers
headers = {"X-API-KEY": YOUR_API_KEY}

response = requests.get(
    "https://api.trove.nla.gov.au/v3/newspaper/titles", params=params, headers=headers
)

data = response.json()
newspapers = data["newspaper"]

# Display the first title in the list
newspapers[0]
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(details-single-title)=
### Get details of a single newspaper or gazette title

+++ {"editable": true, "slideshow": {"slide_type": ""}}

To retrieve information about an individual title, use the `newspaper/title` or `gazette/title` endpoints with a [title identifier](title-links-and-identifiers). To construct the request url, add the title's numeric identifier to the endpoint: 

`https://api.trove.nla.gov.au/v3/newspaper/title/[TITLE ID]`. 

For example, to request metadata about the *Canberra Times* you'd use:

`https://api.trove.nla.gov.au/v3/newspaper/title/11`

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitle%2F11%2F%3Fencoding%3Djson&comment=)

Here's how you'd retrieve metadata describing the *Canberra Times*:

```{code-cell} ipython3
import requests

# Numeric id of the title you want
title_id = "11"

request_url = f"https://api.trove.nla.gov.au/v3/newspaper/title/{title_id}"

# Add the state parameter and set it to 'vic' to get titles from Victoria
params = {"encoding": "json"}

# Supply API key using headers
headers = {"X-API-KEY": YOUR_API_KEY}

# Make the API request
response = requests.get(request_url, params=params, headers=headers)

# Extract the JSON data
data = response.json()

data
```

You can use the `newspaper/title` and `gazette/title` endpoints to get information on what issues of a particular newspaper are available on Trove. By setting the `include` parameter to `years`, you get the [total number of issues per year](title-issues-per-year). 

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitle%2F11%3Finclude%3Dyears%26encoding%3Djson&comment=)

If you want more [information on individual issues](issues-within-a-date-range) you need to set the `range` parameter to a specific date range.

+++

### Aggregate search results by title using the `l-title` facet

You can also explore the characteristics of newspaper titles in Trove by using the API's `/result` endpoint with `category` set to `newspaper`, and `l-title` set to the numeric identifier of a title. For example, to find out how many digitised articles from the *Canberra Times* are available on Trove, you can just make an API request without any search terms:

```{code-cell} ipython3
import requests

# Set the `l-title` parameter to a title's numeric id
params = {"category": "newspaper", "l-title": "11", "encoding": "json"}

# Supply API key using headers
headers = {"X-API-KEY": YOUR_API_KEY}

# Make the API request
response = requests.get(
    "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
)

# Extract the JSON data
data = response.json()

# Find and display the total number of articles
total = data["category"][0]["records"]["total"]

print(f"There are {total:,} articles from the Canberra Times in Trove.")
```

You can use facets such as `decade`, `year`, `category`, and `illustrationType` to examine other characteristics of an individual title.

The GLAM Workbench notebook [Visualise Trove newspaper searches over time](https://glam-workbench.net/trove-newspapers/visualise-searches-over-time/) shows how you can use the `decade` and `year` facets with `l-title` to explore changes in a title over time, and even compare the content of different titles. This chart shows the number of articles containing the term 'worker' in three different newspapers, the *Tribune*, the *Sydney Morning Herald*, and the *Sydney Sun*. 

```{figure} /images/compare-title-queries.png
:name: compare-title-queries

The raw number and proportion of articles containing the term 'worker' by year in the *Tribune*, *Sydney Morning Herald*, and *Sydney Sun*
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Find catalogue entries for newspaper titles

<mark>==Update this section once search and books sections are done==</mark>

- use ISSNs to search in "Books & Libraries"
- note that the `issn` field in API records doesn't always contain ISSNs
- search for `format:Periodical/Newspaper`, add filters such as "nla.gov.au/nla.news" and "trove.nla.gov.au", weed out journals and eDeposit (how many are there?)

+++

## Title text

With the exception of some Government Gazettes which are available as [bulk downloads](/accessing-data/downloadable-datasets), there's no direct way of accessing all the text of a title. You'd need to use the `/result` endpoint to assemble a collection of articles and then aggregate the OCRd text from the individual articles. This could be done [issue by issue](https://glam-workbench.net/trove-harvester/), or by setting the `l-title` facet without a search query, and then [harvesting the complete result set](/how-to/harvest-complete-results).

Depending on the title, this could take a significant amount of time and generate a large amount of data. You might want to use the [Trove Newspaper & Gazette Harvester](https://wragge.github.io/trove-newspaper-harvester/) for a job like this.

+++

## Images and PDFs from titles

There's no direct method for downloading all the images or PDFs from a newspaper title in Trove. However, there are methods for getting issues as PDFs and assembling a collection of front page images.

### Downloading every issues as a PDF

If you have an issue's identifier you can [download it as a PDF](download-issue-as-pdf). You can get a complete list of issue identifiers for a title [from the `/newspaper/title` endpoint](issues-within-a-date-range). So it's possible to work through all the issue identifiers to download every issue of a title as a PDF. This method is documented in the GLAM Workbench notebook [Harvest the issues of a newspaper as PDFs](https://glam-workbench.net/trove-newspapers/#harvest-the-issues-of-a-newspaper-as-pdfs).

### Downloading pages as images or PDFs

To download pages from a newspaper in Trove, you'd need to assemble a collection of [page identifiers](newspaper-page-links). If all you want are the front pages of a newspaper, you can 
[obtain the page identifiers from the issue metadata](get-a-list-of-front-page-urls).

If you want more pages, you'd could try using the `/result` endpoint with the `l-title` facet to download the metadata from every article in a newspaper. You'd also need to set the `reclevel` parameter to `full` to include the page identifiers in the article records. You could then extract the page identifiers from the article records and remove any duplicates. However, there's no guarantee that this method will find every page as it depends on how the articles are indexed.

Once you have assembled a collection of page identifiers you can [download the pages as images or PDFs](download-collection-page-images).
