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

# Accessing data from periodicals

````{card}
On this page


```{contents}
:local:
:backlinks: None
```
````

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
# Let's import the libraries we need.
import os
import requests
import pandas as pd
import altair as alt
from myst_nb import glue
from dotenv import load_dotenv
load_dotenv()
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
# Insert your Trove API key
API_KEY = "YOUR API KEY"

# Use api key value from environment variables if it is available
if os.getenv("TROVE_API_KEY"):
    API_KEY = os.getenv("TROVE_API_KEY")
```

+++ {"editable": true, "slideshow": {"slide_type": ""}, "jp-MarkdownHeadingCollapsed": true}

## Understanding identifiers

There are four different types of identifiers used by Trove for periodical titles, issues, pages, and articles – and they all look exactly the same! To confuse matters further, sometimes the different identifiers take you to the same place. For example, these three identifiers, for an issue, page, and article, all deliver you to the front page of *Walkabout*, volume 1, number 2 (2 December 1934).

| type | identifier | final url |
|------|------|------|
| issue | http://nla.gov.au/nla.obj-714041173| https://nla.gov.au/nla.obj-714041173/view?partId=nla.obj-714048365 |
| page | http://nla.gov.au/nla.obj-714048365 | https://nla.gov.au/nla.obj-714041173/view?partId=nla.obj-714048365 |
| article | http://nla.gov.au/nla.obj-753374124 | https://nla.gov.au/nla.obj-714041173/view?sectionId=nla.obj-753374124&partId=nla.obj-714048365 |

You'll notice that the final urls are almost the same with just the parameters changing. What's happening is that the page and article identifiers are redirected to the issue identifier, and then the page and article values are appended as parameters. The `partId` parameter is the page identifier. While the `sectionId` parameter is the article identifier.

The different identifiers can be used to access additional metadata.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Metadata

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Get a list of digitised periodical titles

Finding out which periodicals in Trove have been digitised is not straightforward. There are two basic approaches:

- use the `magazine/titles` API endpoint to retrieve a list of digitised periodical titles
- search for `"nla.obj"` to find digitised items, setting the `format` facet to `Periodical` and the `availability` facet to `y`

These two approaches return [similar, but not identical](periodicals:finding:search-v-api), sets of results. Both have problems and inconsistencies. The best method will probably depend on what you want to do with the data.

(digitised:periodicals:data:titles-api)=
#### Using the `magazine/titles` API endpoint

The `magazine/titles` endpoint was introduced in version 3 of the Trove API. If you send a request to `https://api.trove.nla.gov.au/v3/magazine/titles` you'll get back the first group of 20 periodical titles. You can change the number of records per request to a maximum of 100 by using the `limit` parameter. 

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fmagazine%2Ftitles%3Fencoding%3Djson%26limit%3D100&comment=)

The `total` field of the API response tells you the total number of records. Here's an example.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
import requests

params = {
    "encoding": "json"
}

headers = {"X-API-KEY": API_KEY}

response = requests.get("https://api.trove.nla.gov.au/v3/magazine/titles", headers=headers, params=params)
data = response.json()

print(f"There are currently {data['total']:,} periodical records")
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{warning}
The number of records doesn't neccessarily reflect the number of digitised periodicals. The data currently includes many duplicates as well as Commonwealth Parliamentary Papers. See below for details and workarounds.
```

Here's an example of a periodical record. The `troveUrl` links go directly to the [digital collection viewer](interfaces:digitised-collection-viewer).

```json
{
    "id": "nla.obj-3000083880",
    "title": "Adelaide punch.",
    "publisher": "W.G. Roberts",
    "place": [
        "South Australia"
    ],
    "troveUrl": "https://nla.gov.au/nla.obj-3000083880",
    "startDate": "1868-01-01",
    "endDate": "1884-01-01"
}
```

To harvest details of *all* titles, you need to work your way through the complete dataset by using the `offset` parameter to move each request forward to the next group of titles. So if `limit` is set to `100`, your first request would have an `offset` value of `0`, and your second request would have an `offset` value of `100`. You'd then keep incrementing the `offset` value by 100 until you reach the end of the dataset. Here's a full example.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
import requests

# The maximum number of records at a time is 100
# To page through the complete list use the offset value
params = {
    "encoding": "json",
    "limit": 100,
    "offset": 0
}

headers = {"X-API-KEY": API_KEY}

# Create a list to store the harvested titles in
titles = []
# When we reach the end, this will be set to False
more = True

# Continue until there's no more records
while more:
    # Request the data
    response = requests.get("https://api.trove.nla.gov.au/v3/magazine/titles", params=params, headers=headers)
    data = response.json()
    
    # If there are results there'll be a `magazine` key.
    # We can check this to see if we're at the end of the data.
    if "magazine" in data:
        # Add the titles
        titles += data["magazine"]
        # Update the offset value
        params["offset"] += 100
    # If there's no records we must be at the end of the data
    else:
        more = False

# Display the first two titles
display(titles[0:2])
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

#### Data problems and workarounds

+++ {"editable": true, "slideshow": {"slide_type": ""}}

The `magazine/titles` endpoint data currently includes a significant number of duplicate records. This is easy to demonstrate and repair by converting the harvested titles data into a Pandas dataframe.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

How many records are there?

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
# Convert the harvested data to a dataframe
df_titles = pd.DataFrame(titles)
# Get the number of records
df_titles.shape[0]
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

How many of these are duplicates?

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
# Flatten the place array so we can check for duplicates
df_titles["place"] = df_titles["place"].str.join("")

# Find duplicates
df_titles.loc[df_titles.duplicated()].shape[0]
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

Fortunately, if you know that they're there, the duplicates are easy to remove.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
# Remove duplicate records
df_titles.drop_duplicates(inplace=True)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

How many titles are there now?

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
df_titles.shape[0]
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

There's also some inconsistencies in the fields returned by the `magazine/titles` endpoint. Every record has an `id`, `title`, and `troveUrl` field, but other fields are not always included. Here's the percentage of missing values for each field.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
(df_titles.isnull().sum() / df_titles.shape[0]).to_frame().style.format({0: "{:.2%}"}).hide(axis=1)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

The `place` field has a number of problems. Where there is a value it is returned as an array containing a single string, even when there are multiple places. In other words, the arrays themselves are pointless, and you need to do some extra work to try and recover multiple values from the enclosed strings. There's no reliable delimiter you can use to split the strings, so you'd probably have to do some sort of pattern matching.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

Other problems I've noticed with the data from the `magazine/titles` endpoint include:

- more than half of the records are for Commonwealth Parliamentary Papers so, depending on your needs, you might want to separate these out from the more conventional periodicals
- some of the titles have no issues, so no digitised content is actually available
- some of the title records actually point to a single issue, rather than a collection of issues

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(periodicals:data:title)=
### Get details of an individual periodical title

The `magazine/title` (note the singular `title`) endpoint provides information about individual periodical titles. You can specify the title using either an `nla.obj` identifier or a numeric work identifier. For example, to get details about the [*Journal of Soil Conservation*](https://trove.nla.gov.au/work/10411388) you can either use it's work identifier `10411388`:

`https://api.trove.nla.gov.au/v3/magazine/title/10411388?encoding=json`

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fmagazine%2Ftitle%2F10411388%3Fencoding%3Djson&comment=)

Or you can use it's digital object identifier `nla.obj-740911077`:

`https://api.trove.nla.gov.au/v3/magazine/title/nla.obj-740911077?encoding=json`

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fmagazine%2Ftitle%2Fnla.obj-740911077%3Fencoding%3Djson&comment=)

Both of these requests return exactly the same data:

```json
{
    "id": "nla.obj-740911077",
    "title": "Journal of the Soil Conservation Service of New South Wales.",
    "issn": "0028-6818",
    "publisher": "Govt. Printer",
    "place": [
        "New South Wales"
    ],
    "troveUrl": "https://nla.gov.au/nla.obj-740911077",
    "startDate": "1945-01-01",
    "endDate": "1982-01-01"
}
```

```{admonition} One way traffic!
:class: info
You might notice that while you can use a periodical's work id to retrieve its API record, the data doesn't actually include a link *back* to the work. This means that there's no simple way to look up additional metadata describing a periodical using this API endpoint. To find a corresponding work record, you have to search for the digital object identifier using the `/result` endpoint. This is not an exact search, and will match the identifier wherever it appears in a record. As a result, it's likely to return multiple results and require some manual checking. Setting the `l-format` parameter to `Periodical` and `l-availability` to `y` should help narrow things down.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22nla.obj-740911077%22%26category%3Dbook%26l-format%3DPeriodical%26l-availability%3Dy%26encoding%3Djson&comment=)
```

The data returned about individual periodicals using the `magazine/title` endpoint is the same as the data you get back about multiple titles using `magazine/titles`. However, there are a couple of additional parameters you can add to get information about issues from a periodical.

- set `include` to `years` to get the number of issues per year
- set `include` to `years` and `range` to a date range to get a list of digitised issues within the date range

See below for examples showing these parameters in use.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Find the number of issues per year

You can use the `magazine/title` API endpoint to retrieve information about issues of a periodical that have been digitised and are available through Trove. As [described above](periodicals:data:title), you can get details about an individual periodical using either it's work identifier or `nla.obj` identifier.

You can find the number of digitised issues per year by setting the `include` parameter to `years`. The data returned will include a list of years for which digitised issues are available, and the number of issues available each year. For example, to get issue counts from the *Australasian pocket almanack* (`nla.obj-2967431735`), you'd request:

`https://api.trove.nla.gov.au/v3/magazine/title/nla.obj-2967431735?encoding=json&include=years`

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fmagazine%2Ftitle%2Fnla.obj-2967431735%3Fencoding%3Djson%26include%3Dyears&comment=)

Here's the data returned:

```json
{
    "id": "nla.obj-2967431735",
    "title": "Australasian pocket almanack : for the year of Our Lord ...",
    "publisher": "Compiled and printed by Robert Howe",
    "place": [
        "Australasia"
    ],
    "troveUrl": "https://nla.gov.au/nla.obj-2967431735",
    "startDate": "1822-01-01",
    "endDate": "1826-01-01",
    "year": [
        {
            "date": "1822",
            "issuecount": 1
        },
        {
            "date": "1823",
            "issuecount": 1
        },
        {
            "date": "1824",
            "issuecount": 1
        },
        {
            "date": "1825",
            "issuecount": 1
        },
        {
            "date": "1826",
            "issuecount": 1
        }
    ]
}
```

It's important to note that the `startDate` and `endDate` values don't necessarily match the range of years returned. I'm assuming that `startDate` and `endDate` are based on the available bibliographic data, while the list of years is generated from the issues that have actually been digitised. If any issues are undated, the list of years will include a value with the `date` set to `unknown`.

Using this data you can calculate the range of available years and the total number of issues available.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
import requests

obj_id = "nla.obj-740911077"

params = {
    "include": "years",
    "encoding": "json"
}

headers = {"X-API-KEY": API_KEY}

response = requests.get(f"https://api.trove.nla.gov.au/v3/magazine/title/{obj_id}", params=params, headers=headers)
data = response.json()
print(data["title"])

years = [y["date"] for y in data["year"]]
years = sorted(years)
print(f"First year: {years[0]}")
print(f"Last year: {years[-1]}")

issue_count = 0
for year in data["year"]:
    issue_count += year["issuecount"]
print(f"Total issues: {issue_count}")
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Get a list of individual issues

You can get details of individual issues from the `magazines/title` API endpoint by setting the `include` parameter to `years` and adding the `range` parameter to specify a date range. The `range` parameter needs to be in the format `YYYYMMDD-YYYYMMDD`. For example, to retrieve details of issues from 1920 to 1950, you'd use a `range` value of `19200101-19501231`.

If the number of issues is fairly small, you can just use dummy dates to set the range well beyond the limits of the periodical, something like `18000101-21001231` for example. That means you'll get everything at once. 

So to get details of all issues in the *Australasian pocket almanack* (`nla.obj-2967431735`) you might request:

`https://api.trove.nla.gov.au/v3/magazine/title/nla.obj-2967431735?encoding=json&include=years&range=18000101-21001231`

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fmagazine%2Ftitle%2Fnla.obj-2967431735%3Fencoding%3Djson%26include%3Dyears%26range%3D18000101-21001231&comment=)

There are, however, some titles with thousands of issues, so you'll probably want to use `range` to divide the data into manageable chunks. For example, the `get_periodical_issues()` function in the GLAM Workbench notebook [Get details of periodicals from the `/magazine/titles` API endpoint](https://glam-workbench.net/trove-journals/periodicals-from-api/) automatically harvests the data in 10 year chunks if there are more than 500 issues in total.

The data includes a list of issues for each year:

```json
{
    "id": "nla.obj-2967431735",
    "title": "Australasian pocket almanack : for the year of Our Lord ...",
    "publisher": "Compiled and printed by Robert Howe",
    "place": [
        "Australasia"
    ],
    "troveUrl": "https://nla.gov.au/nla.obj-2967431735",
    "startDate": "1822-01-01",
    "endDate": "1826-01-01",
    "year": [
        {
            "date": "1822",
            "issuecount": 1,
            "issue": [
                {
                    "id": "nla.obj-2967947168",
                    "date": "1822-01-01",
                    "url": "https://nla.gov.au/nla.obj-2967947168"
                }
            ]
        },
        {
            "date": "1823",
            "issuecount": 1,
            "issue": [
                {
                    "id": "nla.obj-2977982467",
                    "date": "1823-01-01",
                    "url": "https://nla.gov.au/nla.obj-2977982467"
                }
            ]
        },
        {
            "date": "1824",
            "issuecount": 1,
            "issue": [
                {
                    "id": "nla.obj-2969887983",
                    "date": "1824-01-01",
                    "url": "https://nla.gov.au/nla.obj-2969887983"
                }
            ]
        },
        {
            "date": "1825",
            "issuecount": 1,
            "issue": [
                {
                    "id": "nla.obj-2967965114",
                    "date": "1825-01-01",
                    "url": "https://nla.gov.au/nla.obj-2967965114"
                }
            ]
        },
        {
            "date": "1826",
            "issuecount": 1,
            "issue": [
                {
                    "id": "nla.obj-2967986225",
                    "date": "1826-01-01",
                    "url": "https://nla.gov.au/nla.obj-2967986225"
                }
            ]
        }
    ]
}
```

The metadata available for each issue is fairly minimal, just an identifier/url and a date. The url will open the issue in the [book and journal viewer](interfaces:digitised-journal-viewer). You can [extract additional metadata](/other-digitised-resources/how-to/extract-embedded-metadata) from the viewer, including lists of pages and articles.

#### Data problems and workarounds

There's currently a bug in the API that means that details of periodical issues without a date will be missing from the results. It tells you the undated issues exist, but doesn't include identifiers or links.

```json
"year": [
    {
        "date": "unknown",
        "issuecount": 2
    }
]
```

The only real workaround is to [harvest issue details from the collection viewer](/other-digitised-resources/how-to/get-collection-items).

Other problems I've noticed with the data from the `magazine/titles` endpoint include:

- some issues are missing
- some issue urls actually go to sub-collections containing issues

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Getting a list of pages in an issue

If you have an issue's `nla.obj` identifier you can [get a list of page identifiers](digitised:howto:embedded:pages) from the metadata embedded in the [book and journal viewer](interfaces:digitised-journal-viewer). The page identifiers can then be used to [download images of digitised pages](download-high-res-images) and [access OCR layout data](/other-digitised-resources/how-to/get-ocr-layout-data).

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Getting a list of articles in an issue

If you have an issue's `nla.obj` identifier you can [get a list of articles](digitised:howto:embedded:articles) in that issue (digitised:howto:embedded:articles) from the metadata embedded in the [book and journal viewer](interfaces:digitised-journal-viewer).

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Searching for articles

To find periodical articles related to a particular topic, you can search using keywords and facets in the *Magazines & Newsletters* category.

However, it's important to note that periodical articles (unlike newspaper articles) are returned as work-level records. *Usually* the work records will only contain a single 'version' – the article itself – but not always. Advertisements, in particular, seem to be treated differently. You will sometimes come across work records, [like this](https://trove.nla.gov.au/work/232859878), that munge together *all* the advertisements in a specific issue as 'versions'.

And it's not just advertisements. Here's [a work record](https://trove.nla.gov.au/work/10431978) that combines reports on Korea from 13 *different* issues of *Current Notes*.

These sorts of article groupings might make your search results more readable, but they make the articles themselves less discoverable. If your search on a topic related to Korea returns the group from *Current Notes*, how do you know which of the 13 reports actually matched your query? You would need to manually search each issue, or download the article texts and run your own search process.

Another odd feature of periodical article search results is that key metadata, such as the issue date and page number, is only included in the version record, not in the top-level work record. Similarly, OCRd text of articles is [buried down in the description field of the version records](digitised:periodicals:data:text-articles-api). Here's an example of the metadata only available at version level:

```json
"isPartOf": [
    {
        "value": "Current notes on international affairs.",
        "type": "publication"
    },
    {
        "value": "Vol. 30 No. 4 (April 1959)"
    }
],
"bibliographicCitation": [
    {
        "value": "36",
        "type": "pagination"
    },
    {
        "value": "1959-04-30",
        "type": "dateIssued"
    },
    {
        "value": "4",
        "type": "issue"
    },
    {
        "value": "30",
        "type": "volume"
    },
    {
        "value": "aca",
        "type": "placeOfPub"
    },
    {
        "value": "0011-3751",
        "type": "issn"
    }
],
```

All of this means that if you're assembling a dataset of periodical articles from a search using the `/result` endpoint of the Trove API, you need to *always* set the `include` parameter to `workVersions`. If you don't, you'll miss important metadata, won't have access to the OCRd text, and could overlook grouped articles.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(digitised:periodicals:data:text)=
## Text

````{margin}
```{seealso}
The GLAM Workbench includes a [pre-harvested collection of OCRd text](https://glam-workbench.net/trove-journals/ocrd-text-all-journals/) from all the digitised periodicals in Trove. You can also download pre-harvested OCRd text for individual periodical titles using the `download_text` link in the [periodical-titles.csv](https://glam-workbench.net/trove-journals/periodicals-data-api/#periodical-titlescsv) dataset or in [Datasette-Lite](https://glam-workbench.net/datasette-lite/?url=https://github.com/GLAM-Workbench/trove-periodicals-data/blob/main/periodicals.db&install=datasette-json-html&install=datasette-template-sql&metadata=https://github.com/GLAM-Workbench/trove-periodicals-data/blob/main/metadata.json).
```
````

There are three ways of getting OCRd text from periodicals:

- in article records from the Trove API
- downloaded from pages and issues
- from an internal API that provides OCRd text and layout information

(digitised:periodicals:data:text-articles-api)=
### Get article text from the Trove API

You can get the OCRd text of articles in the *Magazines & Newsletters* category using the Trove API, but there's a couple of tricks. 

The OCRd text is only included in *version* records rather than the parent *work* records. But, by default, the API only returns the *work* level records. To include the OCRd text you need to ask the API to add the versions by setting the `include` parameter to `workVersions` when constructing your request.

This works when using the `/result` endpoint to search for articles,

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3Dweather%26category%3Dmagazine%26encoding%3Djson%26include%3Dworkversions&comment=)

or when requesting a single article using the `/work` endpoint.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F234127605%3Finclude%3DworkVersions%26encoding%3Djson&comment=)

The OCRd text is included in the version's `description` field, but not every `description` contains OCRd text. You need to look for a `description` that has a `type` equal to `open_fulltext`, and then retrieve the text from the `value` subfield.

Here's an example of a version's `description` field containing OCRd text. Note the `type` and `value` subfields.

``` json
    "description": [
        {
            "value": "In the year 1896 there will be four Eclipses — two of the Sun, and two of the Moon.",
            "type": "open_fulltext"
         }
    ],
```

The description field can contain multiple entries, and you can't assume that all of them will include these subfields, so you need to do some checking until you find the OCRd text. Something like this should work:

```python
# Loop through all the values in the description field
for description in version.get("description", []):
    # Check that the description has a `type` subfield set to "open_fulltext"
    if description.get("type") == "open_fulltext":
        # Get the OCRd text from the `value` subfield
        text = description.get("value", "")
        break
```

To complicate things further, some article records contain multiple versions. These are usually groups of advertisements from a single issue, but each advertisement will have its own OCRd text. To get all of the OCRd text from the record, you'd need to loop through all the grouped versions, extracting the OCRd text from each in turn.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Download OCRd text from pages and issues

You can download OCRd text from periodical issues and pages using the web interface. To automate this process you can mimic the behaviour of the download button. Full details are available in [](/other-digitised-resources/how-to/download-items-text-images), but here's a quick summary.

````{margin}
```{seealso}
The [periodical-issues.csv](https://glam-workbench.net/trove-journals/periodicals-data-api/#periodical-issuescsv) dataset in the GLAM Workbench includes a `text_download_url` column which contains the url you need to download all the OCRd text from a single issue. It uses the same pattern as described here.
```
````

To download the complete OCRd text of a single periodical issue you need to know the number of pages in the issue. This can be found by [extracting the metadata](/other-digitised-resources/how-to/extract-embedded-metadata) embedded in the issue viewer and getting the length of the `page` list.

You can then construct a url to download the OCRd text using the issue identifier and the total number of pages:

`https://nla.gov.au/[ISSUE ID]/download?downloadOption=ocr&firstPage=0&lastPage=[TOTAL PAGES - 1]`

Note that the `lastPage` parameter is set to the total number of pages, minus one. This is because page numbering starts at zero. For example, [this issue](https://nla.gov.au/nla.obj-326379450) of *Pacific Islands Monthly* contains 164 pages, so the url to download the complete OCRd text would be:

<a href="https://nla.gov.au/nla.obj-326379450/download?downloadOption=ocr&firstPage=0&lastPage=163">https://nla.gov.au/nla.obj-326379450/download?downloadOption=ocr&firstPage=0&lastPage=163</a>

````{margin}
```{seealso}
The GLAM Workbench includes notebooks that demonstrate how you can combine this method with other processing steps to [Get OCRd text from a digitised journal in Trove](https://glam-workbench.net/trove-journals/get-ocrd-text-from-digitised-journal/) and [Download the OCRd text for ALL the digitised journals in Trove!](https://glam-workbench.net/trove-journals/get-ocrd-text-from-all-journals/)
```
````

You can use the same url pattern to download OCRd text from any range of pages. For example, to download text from the first five pages of an issue, you'd set `firstPage` to `0` and `lastPage` to `4`. To download text from page two, you'd set both `firstPage` and `lastPage` to `1`. 

```{warning}
Keep in mind that the page numbers printed in the periodical don't necessarily correspond to the page numbers in Trove's [digital journal viewer](interfaces:digitised-journal-viewer). 
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Get text and positional information from OCR data

When Trove's [digital book & journal viewer](interfaces:digitised-journal-viewer) displays a page, it loads OCR data from an internal API. This data includes both the OCRd text and the position of every block, line, and word of the text. If all you want is the raw text, you're better off using the method above, but if you're interested in the position of the text on the page then you you can download and parse the OCR data. See [](/other-digitised-resources/how-to/get-ocr-layout-data) for full details.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(digitised:periodicals:data:images)=
## Images

There are two types of images you can obtain from periodicals:

- complete page images
- images of illustrations cropped from pages using OCR data

### Download a range of pages from an issue

````{margin}
```{seealso}
The GLAM Workbench notebook [Get covers (or any other pages) from a digitised journal in Trove](https://glam-workbench.net/trove-journals/get-covers-from-digitised-journal/) uses this method to download all the cover images from a periodical.
```
````

You can download page images from periodical issues using the web interface. To automate this process you can mimic the behaviour of the download button. Full details are available in [](/other-digitised-resources/how-to/download-items-text-images), but here's a quick summary.

To download all the page images from a single periodical issue you need to know the number of pages in the issue. This can be found by [extracting the metadata](/other-digitised-resources/how-to/extract-embedded-metadata) embedded in the issue viewer and getting the length of the `page` list.

You can then construct a url to download the page images using the issue identifier and the total number of pages:

`https://nla.gov.au/[ISSUE ID]/download?downloadOption=zip&firstPage=0&lastPage=[TOTAL PAGES - 1]`

Note that the `lastPage` parameter is set to the total number of pages, minus one. This is because page numbering starts at zero. Note also that `downloadOption` is set to `zip` because the page images are zipped up into a single file for download. Once you've downloaded the file, you'll need to unzip it to access the images.

You can use the same method to download the covers (or any other range of pages) from a collection of issues. To get the covers set `firstPage` to `0` and `lastPage` to `1`.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Download issue thumbnails

To download a thumbnail image of the first page of an issue, just add `-t` to the the issue identifier, eg:

[https://nla.gov.au/nla.obj-714041173-t](https://nla.gov.au/nla.obj-714041173-t)

The example below loads a list of periodical issues from [this dataset](https://glam-workbench.net/trove-journals/periodicals-data-api/), selects a random sample of 100 issues from [*Everyones*](https://nla.gov.au/nla.obj-522690001), and displays the issue thumbnails.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
import requests
from pathlib import Path
import ipyplot

# Load issues dataset
df_issues = pd.read_csv(
    "https://github.com/GLAM-Workbench/trove-periodicals-data/raw/main/periodical-issues.csv",
    keep_default_na=False,
)

# Filter issues to Everyones, select a random sample of 100, and sort by date
sample_issues = df_issues.loc[df_issues["title_id"] == "nla.obj-522690001"].sample(100).sort_values("date")

# Uncomment these lines to save images locally
# for image in sample_issues.itertuples():
#    url = f"https://nla.gov.au/{image.id}-t"
#    response = requests.get(url)
#    Path(f"{image.id}-thumbnail.jpg").write_bytes(response.content)

# Generate a list of thumbnail urls
images = [f"https://nla.gov.au/{i.id}-t" for i in sample_issues.itertuples()]

# Display the thumbnails
ipyplot.plot_images(images, max_images=100, img_width=50, show_url=False)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Download a page image using its identifier

If you have a page identifier you can download a high-resolution image of the page simply by adding `/image` to the identifier url. Full details [are available here](download-high-res-images), but here's a quick example.

This identifier [nla.obj-714047007](http://nla.gov.au/nla.obj-714047007) points to a page in *Walkabout*. To download the page, you construct a url that looks like this:

`http://nla.gov.au/nla.obj-714047007/image`

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-output]
---
from IPython.display import Image
from pathlib import Path

page_id = "nla.obj-714047007"

# Construct the image url
image_url = f"https://nla.gov.au/{page_id}/image"

# Request the image
response = requests.get(image_url)

# Save the image to your local system
Path(f"{page_id}.jpg").write_bytes(response.content)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{figure} nla.obj-714047007.jpg
:width: 500px
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Save illustrations from pages using OCR layout data

````{margin}
```{seealso}
The GLAM Workbench notebook [Harvest illustrations from periodicals](https://glam-workbench.net/trove-journals/harvest-illustrations-from-periodicals/) demonstrates in detail how to use the OCR positional data to crop illustrations from the pages of periodicals. You can use it to harvest illustrations from articles, pages, issues, or a search in the *Magazines & Newsletters* category.
```
````

When Trove's [digital book & journal viewer](interfaces:digitised-journal-viewer) displays a periodical page, it loads OCR data from an internal API. As well as providing information about the position and content of text objects, this data includes the coordinates of any illustrations on the page. Using these coordinates you can crop and save illustrations from a page image. The full method is described in [](other-digitised:ocr-data:crop-images).

Here's a [collection of cat photos](https://www.dropbox.com/scl/fo/60imdoyf4ss2b6vh01q1w/h?rlkey=zuwbjaqnmr7qvkuinovdu5ot0&dl=0) harvested from a search for `cat` or `kitten` in the titles of periodical articles.

```{figure} /images/cat-collection.png
```
