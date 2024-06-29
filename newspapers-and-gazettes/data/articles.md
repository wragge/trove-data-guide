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

+++ {"editable": true, "slideshow": {"slide_type": ""}}

# Accessing data about newspaper and gazette articles

+++

![Screenshot of Trove web interface displaying basic article metadata](/images/trove-article-metadata.png)

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{contents}
:local:
:backlinks: None
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

## What are articles?

When you search in Trove's digitised newspapers, you're searching for *articles*. The boundaries of articles are defined as part of the {term}`OCR` process. In most cases they represent a single piece of content with a heading and some text (or an illustration). But sometimes blocks of content are grouped together. Advertisements, for example, are often grouped as a single 'article' headed 'Advertising'. A single article can also be split across multiple pages.

+++

## Article links and connections

Articles exist at the bottom of a hierarchy of newspapers, issues, and pages. Article metadata includes information linking articles to other levels in this hierarchy, but the type and form of these links varies.

(newspaper-article-identifiers)=
### Article identifiers

Every newspaper article in Trove has its own unique identifier. This identifier is used in persistent links to articles on the Trove web site. In the web interface, you can find the identifier under the article's 'Cite' tab, it'll look something like this `http://nla.gov.au/nla.news-article163325648`

```{figure} /images/article-cite.png
:name: article-cite
:width: 300
Example of an article identifier found in the 'Cite' tab.
```

If you follow an article identifier you'll get redirected to a different url that looks like this `https://trove.nla.gov.au/newspaper/article/163325648`. Notice that the number at the end of the identifier and the redirected url are the same, `163325648`. You can use this numeric identifier with the `/newspaper` endpoint of the Trove API to retrieve metadata and full text.

### Articles and newspaper titles

Links to newspaper **titles** are perhaps the most straightforward. Each article is linked to a single newspaper title by the title's unique identifier. An article's metadata record includes a field for `title` that includes both the numeric identifier and the newspaper's masthead. for example:

```json
"title": {
    "id": "101",
    "title": "Western Mail (Perth, WA : 1885 - 1954)"
}
```

You can use the newspaper's `id` to request more information from the `newspaper/titles` API endpoint.

### Articles and issues

There are no direct links from articles to newspaper **issues**. However, articles share a date with their parent issue, so it's possible to use the date to connect them. For example you can use a `date` search to find all the articles in an issue.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{admonition} But what about 'editions'?
:class: note
One problem in trying to link articles with issues is that newspapers often published multiple editions per day. So to identify a specific issue you might need both a date *and* an edition. This is not really possible in Trove, because editions are rarely documented. This is something to keep in mind if, for example, you're trying to match a Trove article with an original paper copy, or trying to track down a pre-Trove reference – a date might not be enough!
```

+++

### Articles and pages

There are two ways in which articles are linked to **pages**. The first is simply by the `page` value, which is a number indicating the sequence of a page within an issue. This *usually* corresponds to the page number printed on the page, however, sometimes issues include separately numbered supplements. You can tell if a page is part of a supplement by looking at the confusingly-named `pageSequence` value – it will typically include an 'S' after the page number. There might also be a `pageLabel` value that provides the number printed on the page within the supplement.

Here's [an advertisement for abstestos cement](https://trove.nla.gov.au/newspaper/article/48076559/) in a 1957 building supplement published as part of the *Australian Women's Weekly*. The article's metadata record includes the following page values:

```json
"page": "82",
"pageSequence": "82 S",
"pageLabel": "2",
```

This means the article is on the 82nd page of the issue, but this page is within a supplement and is numbered '2' on the printed page.

The second way articles are linked to pages is by the page's unique identifier. If you set `reclevel` to `full` when requesting article records from the API, the metadata will include a `trovePageUrl` value, for example:

```json
"trovePageUrl": "https://nla.gov.au/nla.news-page5417618"
```

If you follow the url it will display the page in the Trove web interface, but the numeric part of the url uniquely identifies the page and can be used to do things like downloading an image of a page.

+++

```{admonition} What happens when articles are split over multiple pages?
:class: note
The `page` value in an article's metadata is only ever a single number. If an article is split over multiple pages, then the `page` value will indicate the page on which the article *begins*. The metadata doesn't include the numbers of any subsequent pages. You can, however, find out whether an article is split across pages by looking at the `pdf` field. This field contains a list of links to page PDFs. The number of links will tell you the number of pages the article appears on. (But note that the `pdf` field seems to be missing from *Australian Women's Weekly* articles.) The PDF links also include the numeric identifiers for each page.
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(newspapers:articles:metadata)=
## Article metadata

The {term}`metadata` associated with newspaper and gazette articles in Trove includes the basic information you'd expect to put in a citation, like the article's headline, publication date, newspaper, and page number. Additional fields are added by the OCR and data ingestion processes, such as internal links, the number of words, and the article category. User activity also adds data relating to tags, comments, lists, and corrections.

+++

### Individual articles

To access metadata relating to an individual article you need the [article's numeric identifier](newspaper-article-identifiers). You can then construct an API request url by adding the identifier to the `/newspaper/` endpoint. For example, if the article identifier was `61389505`, the API request url would be: 

`https://api.trove.nla.gov.au/v3/newspaper/61389505` 

You can add additional parameters to the url if, for example, you want the metadata in JSON format.

`https://api.trove.nla.gov.au/v3/newspaper/61389505?encoding=json` 

Here's the metadata returned by this request:

```json
{
    "id": "61389505",
    "url": "https://api.trove.nla.gov.au/v3/newspaper/61389505",
    "heading": "MR. WRAGGE'S \"WRAGGE.\"",
    "category": "Article",
    "title": {
        "id": "64",
        "title": "Clarence and Richmond Examiner (Grafton, NSW : 1889 - 1915)"
    },
    "date": "1902-07-15",
    "page": "4",
    "pageSequence": "4",
    "troveUrl": "https://.nla.gov.au/nla.news-article61389505"
}
```

+++

### Search results

You can search for newspaper and gazette articles using the Trove API's `/result` endpoint, just set the `category` parameter to `newspaper`.

+++

```{admonition} Don't get your categories mixed up!
:class: note
The term `category` is used in two completely different contexts in Trove. It's used to describe the top-level groupings of resources, such as 'Newspapers & Gazettes', 'Books & Libraries', and 'Magazines & Newsletters'. But it's also used to describe different types of newspaper and gazette articles, such as 'Article', 'Advertising', and 'Family Notices'.
```

+++

To limit search results to either newspapers or gazettes use the `artType` facet :

- `l-artType=newspapers` – [![Try it!](/images/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dnewspaper%26l-artType%3Dnewspapers%26encoding%3Djson)
- or `l-artType=gazette` – [![Try it!](/images/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dnewspaper%26l-artType%3Dgazette%26encoding%3Djson)

Notice that `newspapers` is pluralised, but `gazette` is not.

+++

````{margin}
```{seealso}
The [trove-query-parser](https://wragge.github.io/trove_query_parser/) Python library makes it easy to translate searches for newspaper articles in Trove's web interface into a form that the API can understand. Just give it the url of a newspaper search and it will generate the set of parameters you'll need to replicate the search using the API.
```
````

+++ {"editable": true, "slideshow": {"slide_type": ""}}

You can use the `q` parameter to supply search keywords. The query string can be anything you might include in Trove's ['simple' search](/understanding-search/simple-search-options) box. Results can also be filtered using a number of facets, such as `category`, `state`, `illustrated`, and `decade`.

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

[![Try it!](/images/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22clement+wragge%22+AND+cyclone%26category%3Dnewspaper%26artType%3Dnewspapers%26l-category%3DArticle%26l-state%3DQueensland%26n%3D100%26encoding%3Djson)

+++

The list of article records can be found at `data["category"][0]["records"]["article"]`. Here's the first record:

```{code-cell} ipython3
data["category"][0]["records"]["article"][0]
```

You can request a maximum of 100 records with a single API request. To download metadata from *all* the articles in a set of search results you need to make multiple requests. See [](/accessing-data/how-to/harvest-complete-results) for examples of how to do this.

+++

### Add extra metadata fields

+++

You can use the `reclevel` and `include` parameters with either the `/newspaper` or `/result` endpoints to control the amount of metadata provided about each article. For example:

Setting `reclevel=full` adds the following fields:

- `trovePageUrl` – website url pointing to the page on which the article was published
- `illustrated` – is this article illustrated ("Y" or "N")
- `wordCount` – number of words
- `correctionCount` – number of OCR corrections
- `tagCount` – number of tags attached to this article
- `commentCount` – number of tags attached to this article
- `listCount` – number of lists this article has been added to
- `lastCorrection` – details of last OCR correction, includes date and user name
- `pdf` – link(s) to download a PDF version of the page (or pages) this article was published on

[![Try it!](/images/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22clement+wragge%22+AND+cyclone%26category%3Dnewspaper%26reclevel%3Dfull%26encoding%3Djson)

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

[![Try it!](/images/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22clement+wragge%22+AND+cyclone%26category%3Dnewspaper%26reclevel%3Dfull%26include%3Dtags%26include%3Dcomments%26include%3Dlists%26encoding%3Djson#limit-to-articles-with-illustrations)

+++

### Find the total number of articles in a search

You can also access metadata *about* a search. API search results include a `total` value that tells you the number of articles matching your query. If we don't include any search parameters, we can use this to find out the number of newspaper and gazette articles in the whole of Trove!

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

Note that the example above doesn't return any articles because it sets the `n` parameter to `0`. 

The current number of newspaper and gazette articles is in the `total` field.

```{code-cell} ipython3
import datetime

# Get the total number of articles
total = data["category"][0]["records"]["total"]
# And today's date
today = datetime.datetime.now().strftime("%d %B %Y")

# Display the result
print(f"As of {today}, there are {total:,} newspaper & gazette articles in Trove")
```

### Using facets to get aggregate data about articles

````{margin}
```{admonition} Create big pictures with QueryPic
:class: seealso

[QueryPic](https://glam-workbench.net/trove-newspapers/querypic/) visualises Trove newspaper search results, showing the number of matching articles per year. It does this by retrieving data from the `decade` and `year` facets.

<iframe width="80%" src="https://www.youtube.com/embed/vdyKNowv9gw?si=DoWEYE5oV1K662Jc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
```
````

[Search facets](/understanding-search/facets) are another source of useful metadata. Using them, you can slice a results set in different ways to reveal large-scale patterns. Facets available in the `newspaper` category include:

- `decade`, `year`, & `month`
- `title`
- `category`
- `state`
- `illustrationType`

```{admonition} Date facet tricks
:class: note

The date facets, `decade`, `year`, & `month`, are interdependent. To get data from the `year` facet, you first need to limit the query to a specific decade using the `l-decade` parameter. In other words, you can only get one decade's worth of `year` values at a time. Similarly, to get `month` values, you have to use the `l-year` parameter to limit results to a particular year.

To retrieve data for *every* year, you need to loop through all the decades, gathering the `year` values for each decade in turn, then combining the results. There are examples of this in the GLAM Workbench notebook [Visualise Trove newspaper searches over time](https://glam-workbench.net/trove-newspapers/visualise-searches-over-time/).
```

To retrieve facet data from a search, just add the `facet` parameter. For example, adding `facet=state` to your request will break down the number of results by the place of publication. If you don't provide any search terms, you can find the number of articles from each state across the whole of Trove's newspapers.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dall%26facet%3Dformat%26n%3D0%26encoding%3Djson&comment=)

```{code-cell} ipython3
import pandas as pd
import requests

# Set n to 0 because we don't want any records
params = {"category": "newspaper", "n": 0, "encoding": "json", "facet": "state"}

# Supply API key using headers
headers = {"X-API-KEY": YOUR_API_KEY}

response = requests.get(
    "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
)

data = response.json()

# Perhaps the trickiest thing is actually getting to where the facet terms are
facets = data["category"][0]["facets"]["facet"][0]["term"]

# Get the facet label and count from each facet
facet_counts = [{"state": f["search"], "total_articles": f["count"]} for f in facets]

# Use Pandas to display the results in a table
pd.DataFrame(facet_counts).sort_values("state").style.format(thousands=",").hide()
```

You can also combine facets to analyse results from multiple perspectives. For example, perhaps you'd like to find out how the numbers of different illustration types varies over time. One way of doing this would be loop through a series of nested queries.

- first loop through the different illustration types ("Cartoon", "Graph", "Illustration", "Map", "Photo"), setting them as the value of the `l-illustrationType` parameter
- then loop through the desired decades (eg "180" to "202") setting them as the value of the `l-decade` parameter
- for each combination of the above, set the `facet` parameter to `year`
- collect the facet results by `illustrationType` and `year`

A further enhancement would be to harvest the *total* number of articles for each year, so that you could calculate the proportion of articles each year containing each illustration type.

There's a full example of this in the GLAM Workbench notebook [Visualise Trove newspaper searches over time](https://glam-workbench.net/trove-newspapers/visualise-searches-over-time/). 

Here's a visualisation of the results. The first chart shows the raw number of each illustration type, while the second displays them as a proportion of the total number of articles per year. You can see that the proportion of articles containing photographs increases steadily from the 1920s!

```{figure} /images/newspaper-illustration-types.svg
:name: newspaper-illustration-types-over-time
Visualisation of the numbers of different illustration types in Trove newspaper articles over time.
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(newspapers:articles:positional-ocr)=
### Get positional information from OCR

The OCR process generates some article metadata that is not available through the Trove API. As well as extracting text from the page images, the OCR process captures positional information that relates blocks of text to their location within the original image.

Some of this positional information can be scraped from the Trove web site, enabling you to locate individual lines of text, and, by combining their coordinates, draw a bounding box around a complete article. This method is explained in [](/newspapers-and-gazettes/how-to/get-ocr-coordinates).

```{figure} /images/article-coords-example.jpg
:name: newspaper-article-coords
:width: 400
Example of a bounding box around an article, created by scraping positional information from the Trove web site.
```

You can use this positional information to [extract images of articles](articles-as-images), or even [individual words](words-as-images), as explained below.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(newspapers:data:articles:text)=
## Article text

+++

Trove provides the full text of articles for download. This makes it possible to use natural language processing and other computational methods to analyse the contents of newspapers.

There are actually three sources of newspaper article text:

- the title and first four lines of articles (except for advertisements) are transcribed by human operators as part of the ingest process
- the full text of articles is extracted from the page image using optical character recognition (OCR)
- the OCRd text is corrected by Trove users

The article title displayed in the web interface and available from the `heading` field in API results is the manually transcribed version, while the full text download is the OCRd text with any user corrections. That's why there can be differences between the two.

### Including article text in API results

````{margin}
```{admonition} The Trove Newspaper & Gazette Harvester makes it easy!
:class: seealso

If you want to harvest newspaper article metadata, full text, and even images and PDFS, the [Trove Newspaper & Gazette Harvester](https://wragge.github.io/trove-newspaper-harvester/) can help. It incorporates many of the workarounds mentioned in this section, stripping tags from the OCRd text, scraping text from the Australian Women's Weekly, cropping article images from pages, and downloading PDFs. You can use it as a Python library, a command-line tool, or run it as a [simple web app](https://glam-workbench.net/trove-harvester/harvester-web-app/) through the GLAM Workbench.

```
````

The transcribed article title is available in the `heading` field of the API results. There's no direct way to access the transcribed text from first four lines of articles. However, if you access articles via the `/result` endpoint without supplying any search terms, the `snippet` field should display the transcribed text. 

To include the full OCRd/corrected text in API results you just need to set the `include` parameter to `articleText`.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2F217926119%3Fencoding%3Djson%26include%3DarticleText&comment=)

The full text will be available in the `articleText` field of the API response. This works with both single articles from the `/newspaper` endpoint and search results from the `/result` endpoint.

However, the full text that's provided by the API is actually an HTML fragment, containing `<p>` and `<span>` tags. The `<span>` tags identify line breaks within the text. Depending on what you want to do with the text, you might need to strip out all the tags, and/or replace the `</span>` tags with a simple line break character (`\n`). If you don't want to fiddle around with regular expressions, you could use something like the [html2text](https://pypi.org/project/html2text/) Python package to do the job.

```{admonition} But what about the Australian Women's Weekly?
:class: note
Unfortunately, adding `include=articleText` doesn't work with the Australian Women's Weekly as a decision was made early on to exclude AWW text from the API results. If you want the full text of AWW articles you need to scrape it from the web page. The good news is that the [Trove Newspaper and Gazette Harvester](https://wragge.github.io/trove-newspaper-harvester/) will do this for you automatically!
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(newspapers:articles:images)=
## Images and PDFs of articles

While you can download article images (embedded in an HTML page) and PDFs from the Trove web interface, there's no direct mechanism for accessing them via the API. This makes it difficult to automate downloads, assemble image datasets, and build image processing pipelines. Fortunately, there are a few handy workarounds you can use.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Downloading article PDFs

Getting PDFs of full newspaper pages is easy. If you set the `reclevel` parameter to `full` in your API request, the response will include a `pdf` field with direct links to download the PDFs of all pages on which the article appeared.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2F217926119%3Fencoding%3Djson%26reclevel%3Dfull&comment=)

But what if you don't want the complete page? Unfortunately, it's not just a matter of finding the right url. If you peek behind the web interface to see what happens when you click the download button, you'll see that it's a multi-step process. First the interface sends off a request to generate the article PDF and gets back a token. It then uses that token to check with the Trove backend to see when the PDF generation is finished. When the backend signals the PDF is ready, the interface uses the token to download it. Complicated huh?

If you want to automate the download of article PDFs, you'll need to reproduce these steps. There's an example of how to do this with Python in [](/newspapers-and-gazettes/how-to/get-newspaper-issue-article-pdfs).

(articles-as-images)=
### Save articles as images

````{margin}
```{seealso} 
If you have a small number of articles you want to save as images, use the [Save Trove newspaper article as image web app](https://glam-workbench.net/trove-newspapers/Save-Trove-newspaper-article-as-image-app/) in the GLAM Workbench.

If you need an automated method for downloading images of newspaper articles, have a look at the [trove-newspaper-images](https://wragge.github.io/trove_newspaper_images/) Python package. You can use it as a library or a command-line tool. Just give it a newspaper article identifier, and it downloads a high-res image. It's also built-in to the [Trove Newspaper & Gazette Harvester](https://wragge.github.io/trove-newspaper-harvester/).
```
````

The 'images' of articles you download from the web interface are actually HTML pages with embedded images. The embedded images themselves are often sliced up to fit on a page, and there's no straightforward way of putting them back together. This means there's no point trying to download images by duplicating what the web interface does. Fortunately, there's an alternative.

As described above, it's possible [to extract the positional coordinates](newspapers:articles:positional-ocr) of an article from the web interface. It's also possible to [download a high-resolution image of a page](download-a-page-image). By putting the two together you can crop an article image from the full page. This [method is fully documented](https://glam-workbench.net/trove-newspapers/Save-Trove-newspaper-article-as-image/) in the GLAM Workbench.

<!--
(illustrations-as-images)=
### Save article illustrations as images

<mark>==I should probably add a GW notebook for this -- some of the necessary code is in the save a thumbnail nb==</mark>

-->

(words-as-images)=
### Save words as images

By using a variation on the method described above, you can even save images of individual words! As explained in [](/newspapers-and-gazettes/how-to/get-ocr-coordinates), the secret is to modify an article's url and set the `searchTerm` parameter to the word you want to save. This will highlight the word wherever it appears in the article. You can then scrape the coordinates of the highlighted words, and crop them from the full page image. This method is used in the GLAM Workbench notebook [Create 'scissors and paste' messages from Trove newspaper articles](https://glam-workbench.net/trove-newspapers/trove-newspapers-scissors-and-paste/) to generate images like this!

![Scissors and paste style message created from snipped words: "Help trapped inside Trove cannot escape."](/images/trapped-trove.jpg)

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```
