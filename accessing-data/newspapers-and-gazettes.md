---
jupytext:
  formats: ipynb,md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.14.6
kernelspec:
  display_name: Python 3 (ipykernel)
  language: python
  name: python3
---

+++ {"editable": true, "slideshow": {"slide_type": ""}}

# Newspapers and gazettes

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

<mark>==Note here about the structure of digitised newspapers -- titles, issues, pages, and articles. With articles the main entry point.==</mark>

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
import os

import altair as alt
import pandas as pd
import requests
from dotenv import load_dotenv
from myst_nb import glue
from IPython.display import HTML

load_dotenv()
YOUR_API_KEY = os.getenv("TROVE_API_KEY")
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

##  Getting metadata

### Newspaper & gazette titles

'Titles' in this context refers to the names of the publications whose articles are digitised in Trove. For example: *Canberra Times*, *Sydney Morning Herald*, or *Commonwealth of Australia Gazette*.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

#### Get a list of newspaper & gazette titles

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

```{warning}
The `newspaper/titles` endpoint currently returns all the gazette titles as well as all the newspaper titles! This seems to be a bug and will hopefully be fixed. To obtain a list containing *just* newspapers, you need to subtract the list of gazettes from the list of newspapers. See the [GLAM Workbench](https://glam-workbench.net/trove-newspapers/#get-a-list-of-trove-newspapers-that-doesnt-include-government-gazettes) for an example.
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

#### How many newspaper titles are there?

The responses you get back from the `newspaper/titles` or `gazette/titles` endpoints includes a `total` value that tells you the number of titles matching your request. Reusing the data from the request above, we can get the total number of newspaper titles like this:

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
data["total"]
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

However, as noted above, the `newspaper/titles` endpoint currently includes gazette titles as well. So to find the number of **newspapers** you'd need to subtract the number of **gazettes** from the total supplied by the `newspaper/titles` endpoint. Here's a [complete example](../how-to/newspaper-titles-totals).

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
newspapers_df = pd.DataFrame(newspapers)
chart = (
    alt.Chart(newspapers_df)
    .mark_bar()
    .encode(
        x="state:N",
        y=alt.Y("count():Q", title="number of titles"),
        color=alt.Color("state:N", legend=None),
    )
    .properties(width=150)
)
glue("titles-by-state-chart", chart)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

#### Get a list of newspaper titles from a particular state

`````{margin}
````{admonition} Newspapers by state
:class: note
```{glue:} titles-by-state-chart
```
````
`````

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

Here's an example showing how to get only newspapers published in Victoria.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
# Add the state parameter and set it to 'vic' to get titles from Victoria
params = {"encoding": "json", "state": "vic"}

response = requests.get(
    "https://api.trove.nla.gov.au/v3/newspaper/titles", params=params, headers=headers
)

data = response.json()
newspapers = data["newspaper"]

# Display the first title in the list
newspapers[0]
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{warning}
The `state` value of some titles is 'International', but the API won't accept 'international' as a value for the `state` parameter – adding `&state=international` to a request results in a nasty `400` error.

To get a list of just the international titles, you'd need to get the full list and then filter the results based on the `state` field. [Here's an example](../how-to/international-newspaper-titles).
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

#### Get details of a single newspaper or gazette title

+++ {"editable": true, "slideshow": {"slide_type": ""}}

To retrieve information about an individual title, use the `newspaper/title` or `gazette/title` endpoints with a title identifier.

You can find a title's identifier in the Trove web interface. Go to the [Digitised Newspapers and Gazettes in Trove](https://trove.nla.gov.au/newspaper/about) and select a title to view more information about it. The title's `id` is the number at the end of the url of the information page. For example, the [page about the Canberra Times](https://trove.nla.gov.au/newspaper/title/11) has the url `https://trove.nla.gov.au/newspaper/title/11`, so the title's `id` is `11`.

If you're working with article records from the API, you can find the title identifier in the `title["id"]` field.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
title_id = "11"
url = f"https://api.trove.nla.gov.au/v3/newspaper/title/{title_id}"
response = requests.get(url, params=params, headers=headers)
data = response.json()
data
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Issues

#### Get the number of issues per year for a title

You can use the `newspaper/title` and `gazette/title` endpoints to get the total number of digitised issues per year for a newspaper or gazette title. You just add the `include` parameter and set its value to `years`.

[![Try it!](../images/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitle%2F11%3Fencoding%3Djson%26include%3Dyears)

Here's an example getting the number of issues per year from the *Canberra Times*.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
params = {"encoding": "json", "include": "years"}

url = f"https://api.trove.nla.gov.au/v3/newspaper/title/{title_id}"
response = requests.get(url, params=params, headers=headers)
data = response.json()
year_totals = data["year"]

# Show the first 5 values
year_totals[0:5]
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

To find the total number of issues for a title, you just add up all the `issuecount` values.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
# Convert the list of counts by year into a dataframe
df_years = pd.DataFrame(year_totals)

# Add all the issuecount values together
df_years["issuecount"].sum()
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
alt.Chart(df_years).mark_line().encode(
    x="date:T",
    y=alt.Y("issuecount:Q", title="number of issues"),
).properties(width=600)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

#### Details of issues within a date range

You can also use the `newspaper/title` and `gazette/title` endpoints to get some details about individual issues, including their date and identifier. To do this you add the `range` parameter to your request, and set its value to a date range using the format `YYYYMMDD-YYYYMMDD`. For example to find issues published between 1930 and 1935, you'd set the `range` parameter to `19300101-19351231`.

[![Try it!](../images/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitle%2F11%3Fencoding%3Djson%26include%3Dyears%26range%3D19300101-19351231)

You could use the title's `startDate` and `endDate` values to construct the range. However, keep in mind that if a newspaper was published daily over a long period you might be asking for a lot of data in one hit. It might be better to request the data in chunks, such as a year at a time. The GLAM Workbench provides an example of this in the [Harvest information about newspaper issues](https://glam-workbench.net/trove-newspapers/#harvest-information-about-newspaper-issues) notebook.

For years within the requested range, an additional `issue` value will provide a list of available issues published in that year. Each issue will include values for `id`, `date`, and `url`.

Here's an example using the range `19300101-19351231` for the *Canberra Times*.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
params = {"encoding": "json", "include": "years", "range": "19300101-19351231"}

url = f"https://api.trove.nla.gov.au/v3/newspaper/title/{title_id}"
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

# Show the first 5 issues
issues[0:5]
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{note}
You might be wondering where an issue's `url` actually goes to, as there's no issue landing page in Trove. If you try clicking on one of the links, you'll notice that you're redirected from the issue url to a url that points to the first page of that issue. This provides a useful shortcut if you want to assemble a collection of front pages ([see below for details](get-a-list-of-front-page-urls)).
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Pages

There is no direct method for requesting metadata about a newspaper page in Trove. You can, however, get some information about pages from issues and articles.

(get-a-list-of-front-page-urls)=
#### Get a list of front page urls

As described above, you can get information about individual issues from the `newspaper/title` and `gazette/title` endpoints. The issue data includes a `date` and a `url`. If you request the url you are redirected to the first page of that issue. Therefore, by working through each issue, it's possible to get a list of all of the front page urls for a particular newspaper. Here's an example:

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
# We'll use the first 5 values from the list of issues of the Canberra Times downloaded above
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

#### Get a page url for a specific title, date, and page

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
    "encoding": "json"
}

# Make the request
response = requests.get("https://api.trove.nla.gov.au/v3/result", params=params, headers=headers)

# Get the results as JSON
data = response.json()

# Get the `trovePageUrl` value from the first article in the result set
page_identifier = data["category"][0]["records"]["article"][0]["trovePageUrl"]

page_identifier 
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Newspaper & gazette articles

Newspaper and gazette article metadata includes basic information such as the article heading, publication date, publication title, and page number. Additional information such as attached tags or comments can be also be retrieved from the API. 

+++ {"editable": true, "slideshow": {"slide_type": ""}}

#### Save article metadata from the web interface

Before you dive straight into to the API documentation, there are ways of getting article metadata from the Trove web interface. Each method has its own limitations, but depending on your needs they might do the job.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

##### Saving article metadata with Zotero

````{margin}
```{seealso}
The GLAM Workbench notebook [Upload Trove newspaper articles to Omeka-S](https://glam-workbench.net/trove-newspapers/#upload-trove-newspaper-articles-to-omeka-s) provides an example of how you can access newspaper article metadata saved with Zotero, or in a Trove list, add additional information, and upload the results to an Omeka exhibition.
```
````

[Zotero](https://www.zotero.org/) includes a 'translator' for Trove that saves article metadata into your own research database. It also downloads a PDF copy of the article, and saves the OCRd text into an attached note. You can [add items](https://www.zotero.org/support/adding_items_to_zotero) by clicking on the Zotero icon in your web browser.

<mark>==Note that it's not possible to add multiple items after Trove 2020 changes==</mark>

The translator extracts metadata from the article web page, rather than the Trove API. It saves the following fields:

```{list-table} Newspaper and gazette metadata fields extracted by Zotero
:header-rows: 1
:name: zotero-fields
* - Zotero UI
  - Zotero field
  - Value
* - Item Type
  - `type`
  - `newspaperArticle`
* - Title
  - `title`
  - article heading
* - Publication
  - `publicationTitle`
  - newspaper title (location and date range in brackets is removed)
* - Date
  - `date`
  - publication date
* - Place
  - `place`
  - publication state (extracted from newspaper title)
* - Abstract
  - `abstract`
  - first four lines of text, if available (taken from `description` META tag)
* - URL
  - `url`
  - `http://nla.gov.au/nla.news-article[article ID]`
```

Zotero provides many ways to export data. So once you've assembled a collection of articles you could export them in a suitable format for additional processing or analysis. Alternatively, you can use the Zotero API to access and manipulate the saved data.

<mark>==Note about annotating PDFs==</mark>

<mark>==Describe a possible workflow? Eg curation, collaboration, annotation, access via API, further processing etc. A pathway?==</mark>

Zotero is a convenient option for creating curated datasets of digitised newspaper articles. Zotero's built-in annotation features enable you to tags and notes to further organise your collection. You can also collaborate on the selection and annotation of articles using shared groups.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

##### Trove Lists

Another option for creating collections of manually selected newspaper article metadata is Trove's built-in Lists function. 

<mark>==Note about adding mutliple items to Lists. Hacking the url to get more==</mark>

List data can be:

- downloaded from the web interface (though fields are limited)
- accessed through the API

<mark>==Link to Lists section in Accessing Data==</mark>

<mark>==Link toGW notebook to convert lists to CSV==</mark>

+++ {"editable": true, "slideshow": {"slide_type": ""}}

##### Bulk export

<mark>==Include more info once official documentation is available==</mark>

<mark>==Note that there are some differences in fields from the API==</mark>

- metadata only, 1 million article limit

+++ {"editable": true, "slideshow": {"slide_type": ""}}

#### Get metadata from a search for articles using the API

<mark>==Link to full record structure?==</mark>

You can search for newspaper and gazette articles using the Trove API's `/result` endpoint 

<mark>==Links to Understanding Search chapter? Where will the general guide to API searching go?==</mark>

#### Trove Newspaper Harvester

<mark>==Where should this go?==</mark>

- metadata, text, images, PDFs
- no limit
- metadata file captures query details

<mark>==Trove Query Parser to translate web interface searches to API==</mark>

#### Get metadata for an individual article

#### Scraping positional information from page

- article boundaries
- lines
- words (using highlighted search terms)

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Getting text

Newspaper text is segmented by article. The text is generated by OCR, with manual corrections by volunteers.

### Articles

`include=articletext`

Note: includes html
Note: not the AWW (have to scrape)

Trove Newspaper Harvester (including AWW)

### titles, issues, pages

aggregated articles

Trove Newspaper harvester file titles -- how to reaggregate

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Getting images and PDFs

Getting images from newspapers and gazettes is not straightforward, but there are a number of workarounds and hacks you can use.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Issues

### Get an issue as a PDF

````{margin}
```{seealso}
To download all the issues of a newspaper within a specified date range as PDFs see the GLAM Workbench notebook [Harvest the issues of a newspaper as PDFs](https://glam-workbench.net/trove-newspapers/#harvest-the-issues-of-a-newspaper-as-pdfs).
```
````

You can download a newspaper or gazette issue as a PDF from the web interface.

- click on the **Download** tab
- select 'Issue' from the dropdown list
- when PDF generation is complete, click on the **View PDF** button

Downloading issue PDFs automatically using code is a bit more complicated. There are three steps:

- ask for a PDF to be generated for a particular issue ID
- ping Trove at regular intervals to check whether the PDF is ready
- once the PDF is ready, download it

See [How to get a newspaper issue or article as a PDF](../how-to/get-newspaper-issue-article-pdfs) for a full example.

### Pages

````{margin}
```{seealso}
If you want to quickly get a page image from an article url, try the GLAM Workbench's [Download a page image](https://trove-newspaper-apps.uw.r.appspot.com/voila/render/Save-page-image.ipynb) app.
```
````

(download-a-page-image)=
#### Download a page image

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

#### Download a collection of page images

Perhaps you want to download all the front pages of a particular newspaper, or the front page of all newspapers on a particular date. Use one of the methods described above to get a list of page urls. Then loop through the list, extracting the page id, and constructing the image download url for each page. The GLAM Workbench provides an example of this in the [Harvest Australian Women's Weekly covers (or the front pages of any newspaper)](https://glam-workbench.net/trove-newspapers/#harvest-australian-womens-weekly-covers-or-the-front-pages-of-any-newspaper) notebook.

#### Page as PDF

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Articles

PDF proxy

### issues

issues as PDFs
