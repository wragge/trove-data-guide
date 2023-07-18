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

# Accessing data about newspaper & gazette pages

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

```{contents}
:local:
```

```{code-cell} ipython3
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

<mark>==Include something about the different ways pages are represented -- as images with identifiers, as consecutive numbers in navigation, and as labels.==</mark>

There is no direct method for requesting metadata about a newspaper page in Trove. You can, however, get some information about pages from issues and articles.

(get-a-list-of-front-page-urls)=
### Get a list of front page urls

As described below, you can get information about individual issues from the `newspaper/title` and `gazette/title` endpoints. The issue data includes a `date` and a `url`. If you request the url you are redirected to the first page of that issue. Therefore, by working through each issue, it's possible to get a list of all of the front page urls for a particular newspaper. Here's an example:

```{code-cell} ipython3
import requests

params = {"encoding": "json", "include": "years", "range": "19300101-19351231"}

# Supply API key using headers
headers = {"X-API-KEY": YOUR_API_KEY}

url = f"https://api.trove.nla.gov.au/v3/newspaper/title/11"
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
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
# We'll use the first 5 values from a list of issues of the Canberra Times (see below for details)
for issue in issues[:5]:
    # This request is getting a web page, so no params or headers required
    response = requests.get(issue["url"])

    # The request has been redirected to the first page of the issue.
    # We can get the new redirected url from the response object.
    page_url = response.url

    print(f"{issue['date']}: page 1, {page_url}")
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

The number at the end of the page url uniquely identifies that page. It can be used to download an image of the page ([see below](download-a-page-image)). While this method is a bit inefficient, forcing us to fire off a request for every issue, it does enable us to link three important pieces of page metadata – the date, the page number, and the page identifier.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Get a page url for a specific title, date, and page

````{margin}
```{seealso}
The [Today's News Yesterday](https://glam-workbench.net/trove-newspapers/#todays-news-yesterday) notebook in the GLAM Workbench provides an example of using `date` and `firstpageseq` to get a particular page.
```
````

You can also get page identifiers from a search for newspaper articles using the `/result` endpoint. To find the identifier for a particular page in a particular issue, you need to specify the title (the newspaper name), the publication date, and the page number.

First you need to tell the Trove API you want to search for newspaper articles. You do this by setting the `category` parameter to `newspaper`.

The title is set using the `l-title` parameter. As noted above, the identifier for the *Canberra Times* is `11`, so to limit your search to the *Canberra Times* you'd set `l-title=11`.

The date is set using the `date` index within the `q` (query) parameter. You use the `date` index by supplying a date range. If you want a single day, the first date in the range should be the day **before** the date you want. The dates need to be in ISO format – `YYYY-MM-DDT00:00:00Z`. For example, if we wanted a page from 2 November 1942, we'd set the `q` parameter to `date:[1942-11-01T00:00:00Z TO 1942-11-02T00:00:00Z]`.

To request a specific page number, you use the `firstpageseq` index in the `q` parameter. To find page 3, you'd add `firstpageseq:3` to the value for `q`.

Finally, you need to add `reclevel=full` to the request. This asks for additional metadata about the article, including the url of the page. You can also add `n=1` to the request if you want. This sets the number of articles required. In this case we only need one.

So, in summary, if we wanted the identifier of page 3 of the *Canberra Times* from 2 November 1942, your request would include the following parameters:

- `category=newspaper`
- `l-title=11`
- `q=date:[1942-11-01T00:00:00Z TO 1942-11-02T00:00:00Z] firstpageseq:3`
- `reclevel=full`
- `n=1`

[![Try it!](../images/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3Ddate%3A%5B1942-11-01T00%3A00%3A00Z+TO+1942-11-02T00%3A00%3A00Z%5D+firstpageseq%3A3%26category%3Dnewspaper%26l-title%3D11%26reclevel%3Dfull%26n%3D1%26encoding%3Djson)

More detail about using the `/result` endpoint to get information about articles is included below.

The article metadata returned by this search will include a value for `trovePageUrl`, for example: `https://nla.gov.au/nla.news-page682904`. You could use this identifier to retrieve an image of the page using the [method described below](download-a-page-image). Here's a full example:

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
# Search parameters
params = {
    "q": "date:[1942-11-01T00:00:00Z TO 1942-11-02T00:00:00Z] firstPageSeq:3",
    "category": "newspaper",
    "l-title": "11",
    "reclevel": "full",
    "n": 1,
    "encoding": "json",
}

# Make the request
response = requests.get(
    "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
)

# Get the results as JSON
data = response.json()

# Get the `trovePageUrl` value from the first article in the result set
page_identifier = data["category"][0]["records"]["article"][0]["trovePageUrl"]

page_identifier
```

## Page text

+++

aggregated articles

Trove Newspaper harvester file titles -- how to reaggregate

+++

## Page images and PDFs

+++

````{margin}
```{seealso}
If you want to quickly get a page image from an article url, try the GLAM Workbench's [Download a page image](https://trove-newspaper-apps.uw.r.appspot.com/voila/render/Save-page-image.ipynb) app.
```
````

(download-a-page-image)=
### Download a page image

Once you know the secret formula, getting page images is easy. You can download a page image using a url like this:

```html
https://trove.nla.gov.au/ndp/imageservice/nla.news-page[PAGE ID]/level[ZOOM LEVEL]
```

Where `[PAGE ID]` is the page's numeric identifier, and `[ZOOM LEVEL]` is a number between 1 and 7, corresponding to the zoom levels in the web interface. The higher the zoom level, the larger the image. As a rough guide:

- level `1` gives an image around 900 x 1200 px (500kb)
- level `4` gives an image around 2700 x 3500 px (3mb)
- level `7` gives an image around 6100 x 7800 px (7mb)

For example, this url loads the image for the page with the id `517916`: <https://trove.nla.gov.au/ndp/imageservice/nla.news-page517916/level4>

But where do you get the page identifiers from?

- If you're viewing an article in the web interface, click on the 'Cite' tab to display the full page identifier. Just copy the number at the end of the url.
- If you're working with article records from the API, make sure you include the `reclevel` parameter with a value of `full`. The article records will then include a `trovePageUrl` value. Just copy the number at the end of the url.

### Download a collection of page images

Perhaps you want to download all the front pages of a particular newspaper, or the front page of all newspapers on a particular date. Use one of the methods described above to get a list of page urls. Then loop through the list, extracting the page id, and constructing the image download url for each page. The GLAM Workbench provides an example of this in the [Harvest Australian Women's Weekly covers (or the front pages of any newspaper)](https://glam-workbench.net/trove-newspapers/#harvest-australian-womens-weekly-covers-or-the-front-pages-of-any-newspaper) notebook.

### Page as PDF

```{code-cell} ipython3

```
