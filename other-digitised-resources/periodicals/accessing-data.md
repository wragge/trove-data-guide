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

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## What periodicals have been digitised?

Search for ["nla.obj" NOT series:"Parliamentary paper (Australia. Parliament)" NOT nuc:"ANL:NED" and `l-format=Periodical` and `l-availability=y`](https://trove.nla.gov.au/search/category/books?keyword=%22nla.obj%22%20NOT%20series%3A%22Parliamentary%20paper%20%28Australia.%20Parliament%29%22%20NOT%20nuc%3A%22ANL%3ANED%22&l-format=Periodical&l-availability=y) in different categories (mostly B&L) : 968 results

API provides another option

Limits/problems:

- includes parliamentary papers
- hundreds of duplicates
- titles that have had articles extracted from them
- some missing?
- no links to works (some ISSNs)

Differences between the two sources.

No work links from API but can get extra metadata from collection page -- include link to NLA catalogue and MARC data

- Get a list of titles
- Get a list of issues for a title
- Get extra info about issues (number of pages etc)
- Search for articles
- Get text from articles
- Get articles in an issue (from embedded metadata)
- Get text from issue
- Get text from title
- Get covers of title
- Get pages of issue

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Periodical titles

Finding out which periodicals in Trove have been digitised is not straightforward. There are two basic approaches:

- use the `magazine/titles` API endpoint to retrieve a list of digitised periodical titles
- search for `"nla.obj"` to find digitised items, setting the `format` facet to `Periodical` and the `availability` facet to `y`

These two approaches return similar, but not identical, sets of results. Both have problems and inconsistencies. The best method will probably depend on what you want to do with the data.

### Using the `magazine/titles` API endpoint

The `magazine/titles` endpoint was introduced in version 3 of the Trove API. If you send a request to the `magazine/titles` you get back the first group of periodical titles. The maximum number of titles per request is 100, which you can set using the `limit` parameter. 

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fmagazine%2Ftitles%3Fencoding%3Djson%26limit%3D100&comment=)

The `total` field of the API response tells you the total number of records. Here's an example.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
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

#### Harvest all of the records

To harvest details of *all* titles, you need to work your way through the complete dataset by using the `offset` parameter to move each request forward to the next group of titles. So if `limit` is set to `100`, your first request would have an `offset` value of `0`, and your second request would have an `offset` value of `100`. You'd then keep incrementing the `offset` value by 100 until you reach the end of the dataset. Here's a full example.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [hide-input]
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

By converting the list of titles into a dataframe, you can explore the contents.

How many titles are there?

+++ {"editable": true, "slideshow": {"slide_type": ""}}

The metadata available for each title varies. Every entry has an `id`, `title`, and `troveUrl`, and most have a `publisher`, `startDate` and `endDate`. Here's the percentage of missing values for each column.

```{code-cell} ipython3
(df_titles.isnull().sum() / df_titles.shape[0]).to_frame().style.format({0: "{:.2%}"}).hide(axis=1)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

#### Removing duplicates

+++ {"editable": true, "slideshow": {"slide_type": ""}}

Unfortunately the `magazine/titles` endpoint data includes a significant number of duplicate records. Here's some examples.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
df_titles.loc[df_titles.duplicated(["id"], keep=False)].sort_values("id").head(6)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

If you know that they're there, the duplicates are easy to remove.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
df_titles.drop_duplicates(["id"], inplace=True)
```

How many titles are there now?

```{code-cell} ipython3
df_titles.shape[0]
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

#### Removing parliamentary papers

To get a sense of the types of periodicals in the dataset you can look at the titles. You'll see that many of them are just called 'Annual report'.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
display(df_titles["title"].value_counts()[:10].to_frame().style.hide(axis=1))
```

This reflects the fact that many of the periodicals in the `magazine/titles` endpoint data are actually Parliamentary Papers. This may not be what you expect or want. There's no metadata field in the API results that identifies Parliamentary Papers, so there's no easy way to filter them out. The only way to exclude them is to compare the list of periodical titles with a previously-harvested list of Parliamentary Papers. The code below extracts identifiers from a dataset of Parliamentary Papers, and uses them as a filter on the list of titles.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
# Load the Parliamentary Pepers dataset
df_pp = pd.read_csv("https://github.com/GLAM-Workbench/trove-parliamentary-papers-data/raw/main/trove-parliamentary-papers.csv", keep_default_na=False)

# The PP dataset contains individual publications (issues), the parent of an issue should be the periodical title.
# Extract and dedupe the ids from the parent field.
pp_ids = list(df_pp.loc[df_pp["parent"] != ""]["parent"].str.split("|").explode().reset_index()["parent"].unique())

# Exclude titles that whose id is in the list of PP parent ids
df_notpp = df_titles.loc[~df_titles["id"].isin(pp_ids)]
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

How many titles are left?

```{code-cell} ipython3
df_notpp.shape[0]
```

#### Data problems

Once you start working with the data from the `magazine/titles` endpoint you might notice other problems, such as:

- some of the entries point to periodical issues, rather than titles (that's why there's multiple entries for *The Newcastle and Maitland Catholic Sentinel* in the list above)
- some of the titles point to

+++

### Get details of an individual title

You can use the `magazine/title` endpoint to retrieve information about an individual periodical title. You can supply either an `nla.obj` identifier or a numeric work identifier. For example, to get details about the [*Journal of Soil Conservation*](https://trove.nla.gov.au/work/10411388) you can either use it's work identifier `10411388`:

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

You might notice that while you can use a periodical's work id to retrieve its API record, the data doesn't actually include a link *back* to the work. This means that there's no simple way to look up additional metadata describing a periodical using this API endpoint. To find a corresponding work record, you have to search for the digital object identifier using the `/result` endpoint. This is not an exact search, and will match the identifier wherever it appears in a record. As a result, it's likely to return multiple results and require some manual checking. Setting the `l-format` parameter to `Periodical` and `l-availability` to `y` should help narrow things down.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22nla.obj-740911077%22%26category%3Dbook%26l-format%3DPeriodical%26l-availability%3Dy%26encoding%3Djson&comment=)

The data returned about individual periodicals using the `magazine/title` endpoint is the same as the data you get back about multiple titles using `magazine/titles`. However, there are a couple of additional parameters you can add to get information about issues from that periodical. These are described below.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Issues

You can use the `magazine/title` API endpoint to retrieve information about issues of a periodical that have been digitised and are available through Trove. As described above, you can get details about an individual periodical using either it's work identifier or `nla.obj` identifier.

### Find the number of issues per year

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

You can also visualise the distribution of issues over time.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
import requests
import altair as alt
import pandas as pd

work_id = "11500235"

params = {
    "include": "years",
    "encoding": "json"
}

headers = {"X-API-KEY": API_KEY}

response = requests.get(f"https://api.trove.nla.gov.au/v3/magazine/title/{work_id}", params=params, headers=headers)
data = response.json()

df_counts = pd.DataFrame(data["year"])

alt.Chart(df_counts).mark_bar().encode(
    x="date:T",
    y="issuecount:Q"
).properties(width=600, title=data["title"])
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

### Get a list of individual issues

You can get details of individual issues from the `magazines/title` API endpoint by setting the `include` parameter to `years` and adding the `range` parameter to specify a date range. The `range` parameter needs to be in the format `YYYYMMDD-YYYYMMDD`. For example, to retrieve details of issues from 1920 to 1950, you'd use a `range` value of `19200101-19501231`.

If the number of issues is fairly small, you can just use dummy dates to set the range well beyond the limits of the periodical, something like `18000101-21001231` for example. That means you'll get everything at once. 

So to get details of all issues in the *Australasian pocket almanack* (`nla.obj-2967431735`) you might request:

`https://api.trove.nla.gov.au/v3/magazine/title/nla.obj-2967431735?encoding=json&include=years&range=18000101-21001231`

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fmagazine%2Ftitle%2Fnla.obj-2967431735%3Fencoding%3Djson%26include%3Dyears%26range%3D18000101-21001231&comment=)

The data will include a list of issues for each year:

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

You can see the data for each issue is pretty minimal, really just an identifier/url and a date. 

Unknown are missing

However, some periodicals have thousands of issues and requesting them all in one hit might cause problems

Problems with API:
- unknown dates
- some issues missing
- some issues are actually sub-collections

### Finding missing issues

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Pages

### Images and PDFs

Page images

### Illustrations

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Articles


```{admonition} Some articles are grouped as works!
:class: warning

Search results for periodical articles in the **Magazines & Newsletters** category are returned as work-level records. Usually the work records will only contain a single 'version' – the article. However, advertisements are treated differently. You will sometimes come across work records, [like this](https://trove.nla.gov.au/work/232859878), that munge together *all* the advertisements in a specific issue as 'versions'. While this might make your search results more manageable, it will have an impact on the discoverability and analysis of periodical content.
```

### Metadata

`/search` in `magazine` category and `/work` endpoints 


`bibliographicCitation` in article records has structured publication metadata

Advertisements on multiple pages in an issue grouped as a single work record for discovery: https://trove.nla.gov.au/work/232859472?keyword=fullTextInd%3Ay

Can access as separate versions via the API: https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F232859472%3Fencoding%3Djson%26include%3Dall&comment=

Use bibliographicCitation metadata

### Text

Via API


+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Issues

### Metadata

API provides `/magazine/titles` and `/magazine/title/[ID]` endpoints 

Been prodding the new `/magazine/title` endpoint that was added to #Trove API v3. It provides details on periodical titles and issues (other than newspapers). So it's very useful, but also very not...

Of the 2,504 titles, 1,538 point to sets of parliamentary papers. I suppose annual reports count as periodicals, but it would be good to be able to separate them out. In any case I've already got a full harvest of PPs.

Of the 966 left, 114 have no issues. That seems to be either because they're actually issues rather than titles, or they're just brokened. 

Another 124 titles have incomplete lists of issues, either because some of the issues have no date, or they're just brokened.

So as with just about everything involving Trove data, I'll have to develop a series of workarounds to deal with the problems and inconsistences. This is my life now. #TroveDataGuide #GLAM #digitalHumanities

#### Format `periodical` and "nla.obj"

There are 2,500 titles in the title endpoint, but only about 1,000 when you search for `"nla.obj"` & `l-format=periodical`. Is there any way to reconcile? Is it because of PP?

Check by getting ids from title endpoint, then extracting embedded metadata? Will that help?

Get lists of nla.obj ids from both methods and compare -- see what the difference is.

#### `/magazine/titles`

- paginated using `limit` and `offset`

Example record:

``` json
{
    "id": "nla.obj-8423556",
    "title": "\"Coo-ee!\" : the journal of the Bishops Knoll Hospital, Bristol.",
    "publisher": "Partridge & Love Ltd.",
    "troveUrl": "https://nla.gov.au/nla.obj-8423556",
    "startDate": "1916-01-01",
    "endDate": "1917-10-20"
}
```

#### `/magazine/title/[ID]`

- [ID] can either be a nla.obj id or a numeric work id (however the work ids aren't in the returned records)
- Get a list of issues by using `include=years` and `range=YYYYMMDD-YYYYMMDD`
- issues returned grouped by year

Example issue:

``` json
{
    "id": "nla.obj-8447243",
    "date": "1916-11-10",
    "url": "https://nla.gov.au/nla.obj-8447243"
},

Issue id

```{code-cell} ipython3

```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Metadata

### Understanding identifiers

### Titles

### Issues

### Pages

### Articles

+++ {"editable": true, "slideshow": {"slide_type": ""}}

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

You can download OCRd text from periodical issues and pages using the web interface. To automate this process you can mimic the behaviour of the download button. Full details are available in [](../how-to/download-items-text-images.md), but here's a quick summary.

````{margin}
```{seealso}
The [periodical-issues.csv](https://glam-workbench.net/trove-journals/periodicals-data-api/#periodical-issuescsv) dataset in the GLAM Workbench includes a `text_download_url` column which contains the url you need to download all the OCRd text from a single issue. It uses the same pattern as described here.
```
````

To download the complete OCRd text of a single periodical issue you need to know the number of pages in the issue. This can be found by [extracting the metadata](../how-to/extract-embedded-metadata.md) embedded in the issue viewer and getting the length of the `page` list.

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

### Get text from an internal API that provides OCRd text and layout information

When Trove's [digital book & journal viewer](interfaces:digitised-journal-viewer) displays a page, it loads OCR data from an internal API. This data includes both the OCRd text and the position of every block, line, and word of the text. If all you want is the raw text, you're better off using the method above, but if you're interested in the position of the text on the page then you might find this a useful approach.

To request the OCR data all you need is the page identifier

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Images

- download pages as images
- extract illustrations from pages using OCR layout data
