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

+++ {"editable": true, "slideshow": {"slide_type": ""}}

# Trove API introduction

Use the Trove Application Programming Interface (API) to get direct access to Trove data. Just make a request  and get back data in a predictable, structured format that computers can understand.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
import os

import requests
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.getenv("TROVE_API_KEY")
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

+++

## Why use the API?

````{margin}
```{admonition} 19 million records later
:class: seealso

Trove's API makes it possible for you to compile *big* datasets. [This project](https://updates.timsherratt.org/2023/08/08/exploring-the-front.html) downloaded metadata from 19 million articles to explore the way newspaper front pages changed over time.
```
````

The API is not the only way of getting data from Trove, but it's the most flexible, reliable and scalable. You can give it a search query and work your way through the complete set of results, downloading *every* record. By comparison, the Trove web interface displays a maximum of 2,000 results, and even the Bulk Export feature is limited to one million.

The data you get back from the API is in a structured form that can be read and manipulated by computers. This means you can take advantage of a wide range of existing tools and libraries to build reusable pipelines for data analysis and visualisation.

You can use the Trove API to:

- create datasets containing metadata and text
- build new applications to visualise, analyse, or annotate Trove data
- integrate Trove data into existing tools or interfaces

The Trove API allows you to:

- download a complete set of search results (no matter the size)
- control the amount and type of metadata retrieved, including user annotations
- download the full text content of many digitised resources

Limitations:

- no direct, or consistent, method for requesting images

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## API requests, endpoints, and responses

````{margin}
```{seealso}
The [Trove API console](https://troveconsole.herokuapp.com/v3/) provides examples of many different API requests. You can click on the links to view responses, and modify the queries to see what happens! It's a great way to learn what's possible.

For a more structured approach to building an API request you can try [Trove's API v3 interface](https://api.trove.nla.gov.au/v3/index.html), though it can be a bit intimidating for new users.
```
````

API documentation typically includes references to things like *requests*, *endpoints*, and *responses*. Put simply, **requests** are the questions you ask; **endpoints** are the addresses you send your questions to; and **responses** are the answers you get back.

API **requests** are just normal urls. They encode your questions using query parameters. For example, the Trove API uses the `q` parameter for search terms, so including `q=wragge` in your API request will ask Trove to search for resources that include the word 'wragge'.

There are three main types of data you can request from the Trove API:

- search results – a list of results matching a supplied search query
- individual records – a single record retrieved using a unique identifier
- lists of records – a list of system-controlled values, such as newspaper titles or Trove contributors

Each type of data has its own address, or **endpoint**, that you need to include in the request url so that your parameters get sent to the right place. The addresses all share the same base url (the `v3` at the end is the current version of the Trove API):

```http
https://api.trove.nla.gov.au/v3
```

You can ask for a search using the `/result` endpoint, so you just add `/result` to the base url:

```http
https://api.trove.nla.gov.au/v3/result
```

You separate the endpoint from your query using a `?`, so to search for articles including the word 'wragge' in the `newspaper` category you'd use a url like this (click the link to view the results):

<https://api.trove.nla.gov.au/v3/result?q=wragge&category=newspaper>

```{note}
Most of the time you'll be using a software library like [Python Requests](https://requests.readthedocs.io/en/latest/) to construct your API requests, so you don't need to worry about manually formatting the url.
```

API **responses** are highly structured pieces of text with clearly identified labels and values. Don't be intimidated – they're intended to be read by computers rather than humans! The Trove API provides a choice of two response formats: XML and JSON. Both formats include the same data, but while XML uses lots of angle brackets to identify data fields, JSON uses a combination of curly and square brackets, colons and commas. Here's a newspaper article in XML:

```xml
<article id="61389505" url="https://api.trove.nla.gov.au/v3/newspaper/61389505">
    <heading>MR. WRAGGE'S "WRAGGE."</heading>
    <category>Article</category>
    <title id="64">
        <title>
        Clarence and Richmond Examiner (Grafton, NSW : 1889 - 1915)
        </title>
    </title>
    <date>1902-07-15</date>
    <page>4</page>
    <pageSequence>4</pageSequence>
    <relevance score="280.02325439453125">
        <value>very relevant</value>
    </relevance>
    <snippet>
        Mr. Wragge is going to issue a "Wragge." This is the title of his paper to be, as Mr. Wragge, having weathered Sproule, Drake and other extraordinarily named storms on
    </snippet>
    <troveUrl>
        https://.nla.gov.au/nla.news-article61389505?searchTerm=wragge
    </troveUrl>
</article>
```

And in JSON:

```json
{
    "id" : "61389505",
    "url" : "https://api.trove.nla.gov.au/v3/newspaper/61389505",
    "heading" : "MR. WRAGGE'S \"WRAGGE.\"",
    "category" : "Article",
    "title" : {
      "id" : "64",
      "title" : "Clarence and Richmond Examiner (Grafton, NSW : 1889 - 1915)"
    },
    "date" : "1902-07-15",
    "page" : "4",
    "pageSequence" : "4",
    "relevance" : {
      "score" : 280.02325439453125,
      "value" : "very relevant"
    },
    "snippet" : "Mr. Wragge is going to issue a \"Wragge.\" This is the title of his paper to be, as Mr. Wragge, having weathered Sproule, Drake and other extraordinarily named storms on",
    "troveUrl" : "https://.nla.gov.au/nla.news-article61389505?searchTerm=wragge"
}
```

Nowadays, JSON is more widely used for moving data around, so the examples in this guide all use JSON. You can tell the Trove API which format you'd like by adding the `encoding` parameter to your request:

<https://api.trove.nla.gov.au/v3/result?q=wragge&category=newspaper&encoding=json>

```{note}
The default encoding format is XML, so if you don't specify `json` you'll get XML!
```

The actual data fields contained within an API response vary according to your query and the endpoint used. Specific types of responses are discussed further below.

+++

## Authorising your requests with an API key

The Trove API lets you make a limited number of requests without any authorisation. This is handy for quick testing or experimentation, but for most uses you'll need to authorise your requests with an API key. Trove API keys are free and, for non-commercial uses, can be [obtained instantly](https://trove.nla.gov.au/about/create-something/using-api).

There are two ways of adding your key to an API request:

- using the `key` parameter
- adding it to your request's header values

Using the `key` parameter is easy, but can be insecure. If your key was `mySeCReTkEy`, your request url would look like this:

```http
https://api.trove.nla.gov.au/v3/result?q=wragge&category=newspaper&encoding=json&key=mySeCReTkEy
```

A more secure and future-proof method is adding the key to the `X-API-KEY` field in your request's headers. If you're using a library like Python Requests to access the API, it's easy to set header values. See below for a full example.

+++

## A simple API request

````{margin}
```{seealso}
See the [Trove API Introduction](https://glam-workbench.net/trove/) section of the GLAM Workbench for more examples you can run live and experiment with.
```
````

Here's an example of making a simple API request using the Python Requests library. You see many examples like this throughout this guide:

- import the Requests library
- define your query parameters
- add your API key to the request headers
- make the request

```{code-cell} ipython3
# Import the Requests library
import requests

# Define the query parameters
params = {"q": "wragge", "category": "newspaper", "encoding": "json"}

# Add your key to the request headers like this
# headers = {"X-API-KEY": "mySeCReTkEy"}
# Here I'm using a real key that I've already imported as `API_KEY`
headers = {"X-API-KEY": API_KEY}

# Make the request using the endpoint, parameters, and headers,
# saving the response as `response`
response = requests.get(
    "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
)
```

The `response` object contains the JSON-formatted search results. The example below loads the JSON data into a variable called `data`. It then retrieves the total number of results returned by the query, by drilling down through the JSON hierarchy to get to the `data["category"][0]["records"]["total"]` value. Finally it displays the first article record.

```{code-cell} ipython3
# Load the JSON data
data = response.json()

# Get the total number of results
total = data["category"][0]["records"]["total"]
print(f"There are {total:,} results!\n")

# Display the first article
data["category"][0]["records"]["article"][0]
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Endpoints

<mark>==Link where appropriate to sections on specific categories/formats==</mark>

### Search results

- `/result` – search across all categories (except archived websites)

### Individual records

To request an individual record you need to know its numeric identifier. Then you add the identifier to the endpoint url. So to request the record of the newspaper

- `/newspaper/[id]` 
- `/work/[id]`
- `/people/[id]`
- `/list/[id]`
- `/contributor/[id]`
- `/newspaper/title/[id]`
- `/gazette/title/[id]`
- `/magazine/title/[id]`

### Lists of records

- `/newspaper/titles`
- `/gazette/titles`
- `/magazine/titles`
- `/contributor`

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Parameters

<mark>==How much detail do I go into? Do I just point to Trove docs?==</mark>

### `/result` endpoint

```{list-table} Search parameters – all categories
:header-rows: 1
:name: table-search-parameters
* - Parameter
  - Description
  - Possible values
  - Default value
  - Example
* - `q`
  - Search query (basically what you'd put in the search box of the web interface)
  - As well as keywords and boolean operators you can filter results using indexes.
  -
  - 
* - `category`
  - 
  - 
  -
  - 
* - `encoding`
  - 
  - `xml` or `json`
  - `xml`
  - 
* - `n`
  - 
  - 
  - 
  - 
* - `s`
  - 
  - 
  - 
  - 
* - `bulkHarvest`
  - 
  - 
  - 
  - 

```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Translating a web query into an API query

- trove-query-parser for newspapers
- easier with 'simple' search

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## API responses

<mark>==Again how much details is required? Specific info can be provided in the sections about particular categories/formats==</mark>

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Harvesting a complete result set

- Use of `bulkHarvest` parameter
- using `nextStart`
- effect of `category=all`

Provide a basic code pattern for paginating through a result set.

Saving results (ndjson, csv (with flattening) etc)

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```
