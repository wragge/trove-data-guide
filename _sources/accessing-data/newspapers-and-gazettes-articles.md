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

![Screenshot of Trove web interface displaying basic article metadata](../images/trove-article-metadata.png)

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Article metadata

Newspaper and gazette article metadata includes basic information such as the article heading, publication date, publication title, and page number. Additional information such as attached tags or comments can be also be retrieved from the Trove API.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Save article metadata from the web interface

Before you dive straight into to the API documentation, remember that there are ways of getting article metadata from the Trove web interface. Each method has its own limitations, but depending on your needs they might do the job. See [](../how-to/create-newspaper-articles-dataset.md) for further tips.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

#### Saving article metadata with Zotero

````{margin}
```{seealso}
The GLAM Workbench notebook [Upload Trove newspaper articles to Omeka-S](https://glam-workbench.net/trove-newspapers/#upload-trove-newspaper-articles-to-omeka-s) provides an example of how you can access newspaper article metadata saved with Zotero, or in a Trove list, add additional information, and upload the results to an Omeka exhibition.
```
````

[Zotero](https://www.zotero.org/) includes a 'translator' for Trove that saves article metadata into your own research database. It also downloads a PDF copy of the article, and saves the OCRd text into an attached note. You can [add items](https://www.zotero.org/support/adding_items_to_zotero) by clicking on the Zotero icon in your web browser. The translator extracts metadata from the article web page and citation, rather than the Trove API.

```{warning}
It's not currently possible to save details of multiple newspaper articles from Trove's search results. This is due to changes introduced by Trove's 2020 interface update. Unfortunately, you'll need to add individual articles one by one.
```

Zotero saves the following fields for each newspaper article:

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

Zotero provides many ways to [export data](https://www.zotero.org/support/kb/exporting). Once you've assembled a collection of articles you can export them in a suitable format for additional processing or analysis. Alternatively, you can use the [Zotero API](https://www.zotero.org/support/dev/web_api/v3/start) to access and manipulate the saved data. 

Zotero is a convenient option for creating curated datasets of digitised newspaper articles. Zotero's built-in annotation features enable you to tags and notes to further organise your collection. You can also collaborate on the selection and annotation of articles using shared groups.

For example, Zotero's built-in PDF viewer enables you to select sections of newspaper articles for annotation. You could use this to manually highlight sections of interest in long newspaper articles. The annotations and cropped images could then be retrieved from the Zotero API to create your own custom dataset. See [](../how-to/create-newspaper-articles-dataset.md) for further ideas.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

#### Trove Lists

````{margin}
```{seealso}
The GLAM Workbench notebook [Convert a Trove list into a CSV file](https://glam-workbench.net/trove-lists/convert-a-trove-list-into-a-csv-file/) shows you how to save the full details of newspaper articles in a Trove list as a CSV file. You can also save the articles as PDFs and images, and download the OCRd text.
```
````
Another option for creating collections of manually selected newspaper article metadata is Trove's built-in Lists function. 

<mark>==Note about adding mutliple items to Lists. Hacking the url to get more==</mark>

See the [Trove Lists](./trove-lists) section for information on saving lists metadata.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

#### Bulk export

<mark>==Include more info once official documentation is available==</mark>

<mark>==Note that there are some differences in fields from the API==</mark>

- metadata only, 1 million article limit

+++

### Get metadata from a search for articles using the API

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

Use the `artType` facet to limit the results to either newspapers or gazettes:

- `l-artType=newspapers` – [![Try it!](../images/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dnewspaper%26l-artType%3Dnewspapers%26encoding%3Djson)
- or `l-artType=gazette` – [![Try it!](../images/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dnewspaper%26l-artType%3Dgazette%26encoding%3Djson)

Notice that `newspapers` is pluralised, but `gazette` is not.

+++

````{margin}
```{seealso}
The [trove-query-parser](https://wragge.github.io/trove_query_parser/) Python library makes it easy to translate searches for newspaper articles in Trove's web interface into a form that the API can understand. Just give it the url of a newspaper search and it will generate the set of parameters you'll need to replicate the search using the API.
```
````

+++

Use the `q` parameter to supply search keywords. The query string can be anything you might include in Trove's ['simple' search](../understanding-search/simple-search-options.md) box. Results can be filtered using a number of facets, such as `category`, `state`, `illustrated`, and `decade`.

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

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Scraping positional information from the web site

The OCR process not only extracts text from an image, it generates coordinates that document the position of each piece of text within the parent image. You could use this information to crop an image of the OCRd text out of the parent image. In the case of digitised newspapers, this sort of positional information could help you explore the layout and contents of newspaper pages and how this changes over time.

No positional information is available from the Trove API, however, there is some embedded within the web site. If you view the source of a newspaper article's web page, you'll find a number of `<input>` tags like this:

```html
<input id="l1.0.0" class="edit" type="text" aria-label="Line 1.0.0" data-x="2905" data-y="573" data-w="844" data-h="43" value="Mr. Wragge is going to issue a &quot;Wragge.&quot;" />
```

The `value` attribute of the tag includes the text of a single line. The `data` attributes provide the positional coordinates of that line:

- `data-x`: horizontal offset of the top left corner of a box surrounding the line (in pixels)
- `data-y`: vertical offset of the top left corner of a box surrounding the line (in pixels)
- `data-w`: the width of a box surrounding the line (in pixels)
- `data-h`: the height of a box surrounding the line (in pixels)

Individual lines are aggregated into blocks of content labelled as `zones` within the HTML. The position of each zone is also recorded:

```html
<div class="zone onPage readMode" data-page-id="5417618" data-x="2889" data-y="487" data-w="862" data-h="89" data-rotation="-1" style="display: none;">
```

Zones can also contain illustrations:

```html
<div class="illustration help-region onPage" data-x="4455" data-y="677" data-w="706" data-h="1031" data-caption="none" data-type="Cartoon" data-id="8281319" data-part="134576145" >
```

```{note}
The pixel values are absolute, so they relate to a page image at a specific resolution. This resolution is the highest available from the Trove web interface, with a zoom level of `7`. See below for [information on saving page images](download-a-page-image).
```

````{margin}
```{seealso}
For a full working example of this, see the GLAM Workbench notebook [Get the page coordinates of a digitised newspaper article from Trove](https://glam-workbench.net/trove-newspapers/#get-the-page-coordinates-of-a-digitised-newspaper-article-from-trove)
```
````

To get the coordinates of a box containing an entire article, you can add up the boxes for each zone. For example, assuming you have the zones in a list you could try:

```python
left = 10000
right = 0
top = 10000
bottom = 0
for zone in zones:
    if int(zone["data-y"]) < top:
        top = int(zone["data-y"])
    if int(zone["data-x"]) < left:
        left = int(zone["data-x"])
    if (int(zone["data-x"]) + int(zone["data-w"])) > right:
        right = int(zone["data-x"]) + int(zone["data-w"])
    if (int(zone["data-y"]) + int(zone["data-h"])) > bottom:
        bottom = int(zone["data-y"]) + int(zone["data-h"])
```

We can use this information to extract the image of an individual article or illustration from a page image. See below for details.

With an extra little trick you can even get the coordinates of an individual word. This information is not ordinarily contained within the HTML, *but* if you search for a particular word, that word is highlighted and its coordinates included in the HTML. Here's a line of text with a highlighted word:

```html
<div class="read"><span class="highlightedTerm" data-x="4458" data-y="1949" data-w="129" data-h="32">Wragge,</span> the Government Meteorologist of</div>
```

You can see that the `<span>` element includes the same set of `data` attributes defining a box around the highlighted word.

In theory, you could write some code that gets the positions of every word in an article by looping through the words, adding each one to the page url's `searchTerm` parameter so that it's highlighted, then grabbing the coordinates from the `<span>`. It would be rather inefficient though.

As described below, you can use this information to save images of individual words.

+++

## Article text

+++

Newspaper text is segmented by article. The text is generated by OCR, with manual corrections by volunteers.

### API

`include=articletext`

Note: includes html
Note: not the AWW (have to scrape)

Trove Newspaper Harvester (including AWW)

+++

## Article images

+++ {"editable": true, "slideshow": {"slide_type": ""}}

PDF proxy

Save articles as images

Save just the illustrations as images

Save words as images

```{code-cell} ipython3

```
