---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.15.2
kernelspec:
  display_name: Python 3 (ipykernel)
  language: python
  name: python3
---

+++ {"editable": true, "slideshow": {"slide_type": ""}}

# Collections within collections

+++

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

+++

## isPartOf

## Digitised collections

- parts as versions in works
- digitised collections -- with 'Browse this collection' buttons (can be nested)
- most relationships hidden in embedded metadata - multi-volume works, chapters in books, articles in journals, pages etc

## Finding aids

- have their own hierarchical structure (inherited from EAD), see everything on one page
- but if you navigate down you end up in a series of nested collections
- have isPartOf relationships (to multiple levels)

Describe the different ways that 'collections' are described within Trove.

Parent-child relationships in Trove metadata:

- `isPartOf` -- this seems to be used as the basis of the `contribcollection` facet (need to do some more testing of this). Note that these are not necessarily the immediate parent, can have multiple values.
- `series` -- searchable using `series:` index (`series` are a type of `isPartOf` relationship in version metadata)
- some digitised resources use versions as children of works
- finding aids (can use all of the above?)
- `title` facet (overlap with `contribcollection`? Also uses `isPartOf`)
- in embedded metadata

Using NUCs to limit to a contributor

`isPartOf` in version metadata can have multiple values, and each value can have a `type`. Types include: `series`, `publication`. For example:

``` json
 "isPartOf": [
    {
        "value": "Annual report",
        "type": "publication"
    },
    {
        "value": "PP no. 35 of 2012"
    },
    {
        "value": "Parliamentary paper (Australia. Parliament)",
        "type": "series"
    }
],
```
PP no. 35 of 2012 -- doesn't work with series

<https://trove.nla.gov.au/search/category/research?keyword=&l-contribcollection=PP%20no.%2035%20of%202012>

<https://trove.nla.gov.au/search/category/research?keyword=series%3A%22Parliamentary%20paper%20%28Australia.%20Parliament%29%22> - 192,262 results

<https://trove.nla.gov.au/search/category/research?keyword=&l-contribcollection=Parliamentary%20paper%20%28Australia.%20Parliament%29> - 178,088 results

Includes aggegated collections/databases eg Informit -- `contribcollection` facets for journal titles -- so `contribcollection` has more than `title`

+++

Looks like `title` only applies to digitised resources (looks for `type: publication` in `isPartOf`??). `contribcollection` sometimes but not always?? (Compare below and above)

<https://api.trove.nla.gov.au/v3/result?category=all&encoding=json&l-title=Journal%20of%20the%20Soil%20Conservation%20Service%20of%20New%20South%20Wales> -- records in magazine and research

<https://api.trove.nla.gov.au/v3/result?category=all&encoding=json&l-contribcollection=Journal%20of%20the%20Soil%20Conservation%20Service%20of%20New%20South%20Wales> -- only records in book

```{code-cell} ipython3
import requests
import pandas as pd
import os

from dotenv import load_dotenv

load_dotenv()
```

```{code-cell} ipython3
YOUR_API_KEY = os.getenv("TROVE_API_KEY")
```

```{code-cell} ipython3
def get_facets(facet):
    params = {
        "category": "magazine",
        "facet": facet,
        "encoding": "json",
        "n": 0
    }
    
    headers = {"X-API-KEY": YOUR_API_KEY}
    
    response = requests.get(
        "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
    )
    data = response.json()
    return data["category"][0]["facets"]["facet"][0]["term"]
```

```{code-cell} ipython3
df_title = pd.DataFrame(get_facets("title"))
```

```{code-cell} ipython3
df_title[:20]
```

```{code-cell} ipython3
df_cc = pd.DataFrame(get_facets("contribcollection"))
```

```{code-cell} ipython3
df_cc[:20]
```

<https://trove.nla.gov.au/search/category/magazines?keyword=&l-contribcollection=John%20Ryan%20Comic%20Collection%20%28Specific%20issues%29.> -- all of Bulletin and some others are described as part of John Ryan Comic Collection (Specific issues).

Note that facet values have to be exactly equal so leaving the full stop off the example above returns nothing. Indexes can be used for flexible matches.

Sometimes `isPartOf` can include a url:

``` json
"isPartOf": [
    {
        "value": "The bulletin.",
        "url": "https://api.trove.nla.gov.au/v3/work/11500235"
    },
    {
        "value": "John Ryan Comic Collection (Specific issues).",
        "type": "series"
    }
],
```

```{code-cell} ipython3

```
