---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.14.6
kernelspec:
  display_name: Python 3 (ipykernel)
  language: python
  name: python3
---

+++ {"editable": true, "slideshow": {"slide_type": ""}}

# Get a list of 'International' newspapers and gazettes

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
import requests
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [remove-cell]
---
import os
from dotenv import load_dotenv
from myst_nb import glue

load_dotenv()
YOUR_API_KEY = os.getenv("TROVE_API_KEY")
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
# Set encoding parameter to JSON
params = {"encoding": "json"}

# Supply API key using headers
headers = {"X-API-KEY": YOUR_API_KEY}

# Make the request
response = requests.get(
    "https://api.trove.nla.gov.au/v3/newspaper/titles", params=params, headers=headers
)

# Get the JSON data from the response
data = response.json()

# Get the list of newspapers
newspapers = data["newspaper"]
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
international_newspapers = [n for n in newspapers if n["state"] == "International"]

international_newspapers
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```
