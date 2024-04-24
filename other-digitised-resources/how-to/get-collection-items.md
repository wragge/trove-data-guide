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

# HOW TO: Get a list of items in a digitised collection

````{card}
On this page


```{contents}
:local:
:backlinks: None
```
````

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Background

The NLA's digitised resources are often presented as 'collections'. A collection could be the volumes in a multi-volume work, the issues of a periodical, a map series, an album of photographs, or a manuscript collection. In the web interface, collections will have a 'Browse this collection' link or button that displays a list of the contents, but getting machine-readable data is not so straightforward. You can use the `magazine/title` API endpoint to get a list of issues from a periodical, but there's no way to get the contents of other types of collections from the Trove API. 

```{figure} /images/trove-image-collection.png
:name: trove-image-collection

Example of a collection of photographs in Trove, <https://nla.gov.au/nla.obj-147116770>
```

One work around is to scrape a list of items from the collection browse window. When you click on the 'Browse this collection' button, your browser fires off a request for a list of items. Details of the first 20 items are returned in an HTML fragment which is displayed in a pop up window. By manually constructing the url for this request you can retrieve the HTML fragment and extract the item identifiers. The url to retrieve the browse list looks like this: 

```
https://nla.gov.au/[PARENT ID]/browse?startIdx=[START]&rows=20&op=c
```

The `[PARENT ID]` is the collection's NLA identifier, for example `nla.obj-150592172`. The url returns 20 results at a time. If there are more than 20 items in the collection you need to make multiple requests, changing the `startIdx` value to work your way through the complete list. For example:

- Retrieve the first 20 items (`startIdx` set to `0`): <https://nla.gov.au/nla.obj-150592172/browse?startIdx=0&rows=20&op=c>
- Retrieve the next 20 items (`startIdx` set to `20`): <https://nla.gov.au/nla.obj-150592172/browse?startIdx=20&rows=20&op=c>

The `op` parameter seems to change the context of the request. With `op` set to `c` you get the members of the collection at your current level in the hierarchy. So if you're looking at a sub-collection, you'll get members of that sub-collection; if you're looking at a book, you'll get the pages in that book. Setting `op` to `s` seems to retrieve the top-level members of the collection.

## A basic example

````{margin}
```{seealso}
A number of GLAM Workbench notebooks, like [Get OCRd text from a digitised journal in Trove](https://glam-workbench.net/trove-journals/get-ocrd-text-from-digitised-journal/) use a version of this code to get lists of issues from periodicals.
```
````

The code below loops through the complete set of items in a collection by updating the `startIdx` value after each request.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
import time

import requests
from bs4 import BeautifulSoup

collection_id = "nla.obj-150592172"

# The initial startIdx value
start = 0
# Number of results per page, used to increment the startIdx value
n = 20

items = []

# If there aren't 20 results on the page then we've reached the end, so continue harvesting until that happens.
while n == 20:
    url = f"https://nla.gov.au/{collection_id}/browse?startIdx={start}&rows=20&op=c"

    # Get the browse page
    response = requests.get(url)

    # Beautifulsoup turns the HTML into an easily navigable structure
    soup = BeautifulSoup(response.text, "html.parser")

    # Find all the divs containing issue details and loop through them
    details = soup.find_all(class_="l-item-info")
    for detail in details:

        # Look for the a tag with class "obj-reference content"
        item_id = detail.find(
            lambda tag: tag.name == "a"
            and tag.get("class") == ["obj-reference", "content"]
        )["href"].strip("/")

        # Save the issue id
        items.append(item_id)

    time.sleep(0.2)
    # Increment the startIdx
    start += n
    # Set n to the number of results on the current page
    n = len(details)
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
len(items)
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
for item in items[:5]:
    print(f"https://nla.gov.au/{item}")
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Handling collections within collections



The code above works fine if the collection is a simple, flat hierarchy with no sub-collections. However, sometimes collections in Trove are more complex. For example, [this collection of photographs](https://nla.gov.au/nla.obj-147116770) includes albums, sketchbooks, and other groups, which are treated as sub-collections with their own child items. To harvest the details of all the items in collections like this you have to recurse your way through all levels of the hierarchy.

This, however, can cause unexpected results. If, for example, you're harvesting a list of issues in a periodical you could end up with the identifiers of every page in every issue! This is because the pages of print publications, like books and periodicals, are treated as if they're members of a collection – they're the children of the book or issue. Recursing through all these sub-collections might be a useful way of retrieving page information, but if you don't want the extra data it'll just slow things down. In any case, [grabbing the issue's embedded metadata](extract-embedded-metadata.ipynb) is probably going to be a more efficient way of getting a list of page identifiers.

The code below harvests items from a collection, including any sub-collections. If you don't want the sub-collections, just set `include_subcollections` to `False`.

Instead of just a list of identifiers, the function returns a list of dictionaries. Each dictionary includes three fields: `item_id`, `item_type` (either `item` or `collection`), and `parent_id`. You can use the `parent_id` to find items within a sub-collection.

````{margin}
```{seealso}
The GLAM Workbench notebook [Download a collection of digitised images](https://glam-workbench.net/trove-images/download-image-collection/) uses this code to find and download all the images in a collection or finding-aid.
```
````

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
import time

import requests
from bs4 import BeautifulSoup


def harvest_collection_items(collection_id, include_subcollections=False):
    # The initial startIdx value
    start = 0
    # Number of results per page, used to increment the startIdx value
    n = 20
    items = []
    # If there aren't 20 results on the page then we've reached the end, so continue harvesting until that happens.
    while n == 20:
        url = f"https://nla.gov.au/{collection_id}/browse?startIdx={start}&rows=20&op=c"
        # Get the browse page
        response = requests.get(url)

        # Beautifulsoup turns the HTML into an easily navigable structure
        soup = BeautifulSoup(response.text, "html.parser")

        # Find all the divs containing issue details and loop through them
        details = soup.find_all(class_="l-item-info")
        for detail in details:
            # Set a default type
            item_type = "item"

            # Look for the a tag with class "obj-reference content"
            item_id = detail.find(
                lambda tag: tag.name == "a"
                and tag.get("class") == ["obj-reference", "content"]
            )["href"].strip("/")

            # Look for a link to 'children', indicating it's a subcollection (or a book or issue with pages)
            has_children = detail.find(
                lambda tag: tag.name == "a" and tag.get("class") == ["obj-reference"]
            )

            # If it has children, harvest items from the subcollection
            if has_children and include_subcollections is True:
                item_type = "collection"
                items += harvest_collection_items(item_id)

            # Save the item
            # The parent_id will enable us to identify items that are in subcollections
            items.append(
                {"item_id": item_id, "item_type": item_type, "parent_id": collection_id}
            )

        time.sleep(0.2)
        # Increment the startIdx
        start += n
        # Set n to the number of results on the current page
        n = len(details)
    return items
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
items = harvest_collection_items("nla.obj-147116770", include_subcollections=True)
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
items[:10]
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```
