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

# Find the number of newspapers

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
import requests
from dotenv import load_dotenv
import os
import pandas as pd
load_dotenv()
YOUR_API_KEY = os.getenv("TROVE_API_KEY")
```

```{code-cell} ipython3
import requests

params = {"encoding": "json"}
headers = {"X-API-KEY": YOUR_API_KEY}

response = requests.get("https://api.trove.nla.gov.au/v3/newspaper/titles", params=params, headers=headers)
newspapers = response.json()

# Display the first title in the list
newspapers["newspaper"][0]
```

```{code-cell} ipython3
response = requests.get("https://api.trove.nla.gov.au/v3/gazette/titles", params=params, headers=headers)
gazettes = response.json()

# Display the first title in the list
gazettes["newspaper"][0]
```

```{code-cell} ipython3
newspapers_df = pd.DataFrame(newspapers["newspaper"])
gazettes_df = pd.DataFrame(gazettes["newspaper"])

print(f"There seem to be {newspapers_df.shape[0]:,} newspapers and {gazettes_df.shape[0]} gazettes.")

# Filter the newspapers by excluding titles with an id in the gazettes list
newspapers_not_gazettes_df = newspapers_df[~newspapers_df["id"].isin(gazettes_df["id"])]

print(f"But there are actually {newspapers_not_gazettes_df.shape[0]:,} newspapers and {gazettes_df.shape[0]} gazettes.")
```
