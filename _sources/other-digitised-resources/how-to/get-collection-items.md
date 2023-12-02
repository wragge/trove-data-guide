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

# HOW TO: Get a list of items in a digitised collection

+++ {"editable": true, "slideshow": {"slide_type": ""}}



+++

The NLA's digitised resources are often presented as 'collections'. A collection could be the volumes in a multi-volume work, the issues of a periodical, a map series, an album of photographs, or a manuscript collection. In the web interface, collections will have a 'Browse this collection' link or button that displays a list of the contents, but getting machine-readable data is not so straightforward. You can use the `magazine/title` API endpoint to get a list of issues from a periodical, but there's no way to get the contents of other types of collections from the Trove API. 

<mark>==Insert screencap==</mark>

One work around is to scrape a list of items from the collection browse window. When you click on the 'Browse this collection' button, your browser fires off a request for a list of items. Details of the first 20 items are returned in an HTML fragment which is displayed in a pop up window. By manually constructing the url for this request you can retrieve the HTML fragment and extract the item identifiers. The url to retrieve the browse list looks like this: 

```
https://nla.gov.au/[PARENT ID]/browse?startIdx=[START]&rows=20&op=c
```

The `[PARENT ID]` is the collection's NLA identifier, for example `nla.obj-150592172`. The url returns 20 results at a time. If there are more than 20 items in the collection you need to make multiple requests, changing the `startIdx` value to work your way through the complete list. For example:

- Retrieve the first 20 items (`startIdx` set to `0`): <https://nla.gov.au/nla.obj-150592172/browse?startIdx=0&rows=20&op=c>
- Retrieve the next 20 items (`startIdx` set to `20`): <https://nla.gov.au/nla.obj-150592172/browse?startIdx=20&rows=20&op=c>

The code below loops through the complete set of items by updating the `startIdx` value after each request.

```{code-cell} ipython3
import time

import requests
from bs4 import BeautifulSoup
```

```{code-cell} ipython3
parent_id = "nla.obj-150592172"

start_url = "https://nla.gov.au/{}/browse?startIdx={}&rows=20&op=c"
# The initial startIdx value
start = 0
# Number of results per page, used to increment the startIdx value
n = 20
parts = []
# If there aren't 20 results on the page then we've reached the end, so continue harvesting until that happens.
while n == 20:
    # Get the browse page
    response = requests.get(start_url.format(parent_id, start))
    # Beautifulsoup turns the HTML into an easily navigable structure
    soup = BeautifulSoup(response.text, "html.parser")
    # Find all the divs containing issue details and loop through them
    details = soup.find_all(class_="l-item-info")
    for detail in details:
        # The format of the items can vary, first we'll look for a link on a title
        # but if there's no title we'll just get the first link
        title = detail.find("h3")
        if title:
            issue_id = title.parent["href"].strip("/")
        else:
            issue_id = detail.find("a")["href"].strip("/")
        # Save the issue id
        parts.append(issue_id)
    time.sleep(0.2)
    # Increment the startIdx
    start += n
    # Set n to the number of results on the current page
    n = len(details)
```

```{code-cell} ipython3
len(parts)
```

```{code-cell} ipython3
for item in parts[:5]:
    print(f"https://nla.gov.au/{item}")
```

<mark>==Extract extra info where available, eg titles, dates?==</mark>

```{code-cell} ipython3

```
