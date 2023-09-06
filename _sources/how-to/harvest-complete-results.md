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

# HOW TO: Harvest a complete set of search results using the Trove API

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

+++

See {doc}`/accessing-data/trove-api-intro` for general information about using the Trove API.

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

````{margin}
```{admonition} Do you need to DIY?
:class: seealso

You might not need to write your own harvesting code. If you want to harvest metadata, text, and images from the digitised newspapers, you can use the [Trove Newspaper & Gazette Harvester](https://wragge.github.io/trove-newspaper-harvester/) instead.

If your search has less than one million results and you only want the basic metadata, you can use Trove's built-in [bulk export](bulk-export) option.
```
````

A common task you might want to undertake using the Trove API is to harvest a complete set of search results. This page explains what you need to know to undertake such a harvest, and provides some sample code.

+++

## Using the `bulkHarvest` parameter

If you're harvesting a large result set you need to set the `bulkHarvest` parameter to `true`. Why? By default, Trove returns search results in relevance order. However, assigning consistent relevance scores is tricky in massive collections like Trove, and the scores of individual records can vary between API requests. This means that if you harvest results in relevance order you can sometimes get duplicate records, or miss records completely. Setting `bulkHarvest=true` sorts records by their identifiers, rather than their relevance. This ensures that you get everything.

+++

## Understanding pagination

To harvest a large set of results you need to break it up into manageable chunks – requesting and downloading each chunk in turn. This is known as pagination. There are a couple of query parameters and results fields you need to understand to control the pagination process.

You can set the number of results in each chunk using the `n` parameter. The default is only `20`, so you probably want to increase that to `100` (the maximum allowed).

After you've harvested a chunk of results, your next API request needs to tell Trove *where you are* in the results set. Trove has no memory of your harvest. If you don't tell it where to start from, you'll get the same chunk over and over again. You can set the starting point using the `s` parameter, but what value do you give it?

Search results from the Trove API include a field labelled `nextStart`. These values look like a random collection of letters, numbers, and punctuation, but they are actually tokens that pinpoint your current position within a set of results. To retrieve the next chunk of results from the API, you assign the `nextStart` value from the current chunk to the `s` parameter of your next request. Of course, you'll have no `nextStart` value when you make your first request, so just set `s` to `*` (an asterisk).

For example, your first request sets `s` to `*`:

```
https://api.trove.nla.gov.au/v3/result?q=wragge&category=newspaper&encoding=json&bulkHarvest=true&n=100&s=*
```

The API response includes a `nextStart` value:

```json
"nextStart": "AoEpMTAwMjY2NzIx"
```

Next request sets `s` to the value of `nextStart`:

```
https://api.trove.nla.gov.au/v3/result?q=wragge&category=newspaper&encoding=json&bulkHarvest=true&n=100&s=AoEpMTAwMjY2NzIx
```

And so on until you reach the end of the dataset. You'll know you've reached the end when there's no `nextStart` value in the API response.

+++

## Managing categories

Because of the complexities of sorting and pagination, you're limited in your ability to harvest records from multiple categories – either you select a *single* category, or you get *every* category by setting the `category` parameter to `all`. If you use the `all` option, your results can include a mix of different record types, as different categories use different formats. The record types, grouped by category, are:

- `article` – Newspapers & gazettes
- `work` – Books & libraries; Magazines & newsletters; Images, maps & artefacts; Research & reports; Diaries, letters & archives; Music, audio & video
- `people` – People & organisations
- `list` – Lists

You'll need to take these differences into account as you process the results.

+++

## Handling results

If your aim is to download a complete set of search results, then obviously you need to have some way of saving the responses you get back from the Trove API! How you do this depends on the data you actually want and the form you want it in. For example, if you only wanted to save the titles and dates of newspaper articles, you might just extract them from the JSON responses and save them in a CSV file. There are many possibilities!

The examples below will save the complete JSON item records in a [newline delimited JSON file (NDJSON)](http://ndjson.org/). As the name suggests, NDJSON files have one JSON object per line. It's a convenient and scalable method, as you can simply add each new record to the end of an existing file. You can decide later on what fields you want to extract from the JSON, or simply load the whole dataset into a tool like Pandas.

+++

## Harvesting from a single category

This example harvests all records containing the term 'wragge' from the `magazine` category and saves the results in a file called `results.ndjson`.

````{margin}
```{seealso}
You can find variations on this approach throughout the Trove sections of the [GLAM Workbench](https://glam-workbench.net/). For example [Harvest summary data from Trove lists](https://glam-workbench.net/trove-lists/harvest-summary-data-from-lists/) and [Exploring digitised maps in Trove](https://glam-workbench.net/trove-maps/exploring-digitised-maps/).
```
````

+++

```python
import json
from pathlib import Path

import requests

# Set the query parameters
params = {
    "q": "wragge",
    "category": "magazine",
    "encoding": "json",
    "bulkHarvest": "true",
    "n": 100,
}

# Add your api key to the request headers
headers = {"X-API-KEY": API_KEY}

# Default `s` value
start = "*"

# Open a ndjson file to write the results to
with Path("results.ndjson").open("a") as ndjson_file:
    # Continue until there is no `nextStart` value
    while start:
        # Set `s` value
        params["s"] = start

        # Make the API request
        response = requests.get(
            "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
        )

        # Extract JSON from API response
        data = response.json()

        # Get the list of records
        # Using `get` with [] default here because there is currently an API bug,
        # which can return empty results sets
        records = data["category"][0]["records"].get("work", [])

        # Loop through the records, writing them to the NDJSON file
        for record in records:
            ndjson_file.write(f"{json.dumps(record)}\n")

        # Try to get the `nextStart` value
        try:
            start = data["category"][0]["records"]["nextStart"]

            # If there's no `nextStart` value the harvest is finished
        except KeyError:
            start = None
```

+++

## Harvesting from all categories

This example sets the `category` parameter to `all` to harvest search results from *every* category (except web archives). Different categories deliver their results in different formats, so either you try to normalise these into some standard structure, or you save them into separate files. This example creates a separate NDJSON results file for each of these record types in the search results.

+++

```python
import json
from pathlib import Path

import requests

# Set the query parameters
params = {
    "q": '"clement wragge"',
    "category": "all",
    "encoding": "json",
    "bulkHarvest": "true",
    "n": 100,
}

# Add your api key to the request headers
headers = {"X-API-KEY": API_KEY}

# Default `s` value
start = "*"

# Continue until there is no `nextStart` value
while start:
    # Set `s` value
    params["s"] = start

    # Make the API request
    response = requests.get(
        "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
    )

    # Extract JSON from API response
    data = response.json()

    # All of the different record types are grouped together under 'item'
    # Using `get` with [] default here because there is currently an API bug,
    # which can return empty results sets
    results = data["category"][0]["records"].get("item", [])

    # Loop through the item results
    for result in results:
        
        # Each result is an object (dict) with the record_type as the key
        # and the record data as the value.
        for record_type, record in result.items():
            
            # Append each record to a file according to the record type
            with Path(f"results-{record_type}.ndjson").open("a") as ndjson_file:
                ndjson_file.write(f"{json.dumps(record)}\n")

    # Try to get the `nextStart` value
    try:
        start = data["category"][0]["records"]["nextStart"]

        # If there's no `nextStart` value the harvest is finished
    except KeyError:
        start = None
```

```{code-cell} ipython3

```
