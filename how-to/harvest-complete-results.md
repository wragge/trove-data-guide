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

# Harvest a complete set of search results using the API

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

A common task you might want to undertake using the Trove API is to harvest a complete set of search results. 

+++

## Using the `bulkHarvest` parameter

If you're harvesting a large result set you need to set the `bulkHarvest` parameter to `true`. Why? By default, Trove returns search results in relevance order. However, assigning consistent relevance scores is tricky in massive collections like Trove, and the scores of individual records can vary between API requests. This means that if you harvest results in relevance order you can sometimes get duplicate records, or miss records completely. Setting `bulkHarvest=true` sorts records by their identifiers, rather than their relevance. This ensures that you get everything.

+++

## Understanding pagination

To harvest a large set of results you need to break it up into manageable chunks – requesting and downloading each chunk in turn. This is known as pagination. There are a couple of query parameters and results fields you need to understand to control the pagination process.

You can set the number of results in each chunk using the `n` parameter. The default is only `20`, so you probably want to increase that to `100`.

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

## Handling results

If your aim is to download a complete set of search results, then obviously you need to have some way of saving the responses you get back from the Trove API! How you do this depends on the data you actually want and the form you want it in. For example, if you only wanted to save the titles and dates of newspaper articles, you might just extract them from the JSON responses and save them in a CSV file. There are many possibilities!

This example will save the complete JSON item records in a newline delimited JSON file (NDJSON). As the name suggests, NDJSON files have one JSON object per line. It's a convenient and scalable method as you can simply add each new record to the end of an existing file. You can decide later on what fields you want to extract from the JSON, or simply load the whole dataset into a tool like Pandas.

+++

## Full example

```{code-cell} ipython3
from pathlib import Path
import json
import requests

params = {
    "q": "wragge",
    "category": "magazine",
    "encoding": "json",
    "bulkHarvest": "true",
    "n": 100,
}

headers = {"X-API-KEY": API_KEY}

start = "*"

with Path("results.ndjson").open("a") as ndjson_file:
    while start:
        params["s"] = start
        response = requests.get(
            "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
        )
        data = response.json()
        records = data["category"][0]["records"].get("work", [])
        for record in records:
            ndjson_file.write(f"{json.dumps(record)}\n")
        try:
            start = data["category"][0]["records"]["nextStart"]
        except KeyError:
            start = None
    
```

```{code-cell} ipython3

```
