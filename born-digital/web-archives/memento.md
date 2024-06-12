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

# Timegates, Timemaps, and Mementos

The NLA has frequently said that the Australian Web Archive has no API. This is not strictly true. You can't retrieve search results from the AWA in a machine-readable form as you can with other Trove categories. But the software used by the AWA supports the [Memento protocol](https://datatracker.ietf.org/doc/html/rfc7089) and allows requests for certain types of machine-readable information. It's just baked in to the system.

In particular, the AWA supports two Memento-compliant API requests:

- Timegates – request the capture of a url closest to a specific date
- Timemaps – get a list of all the captures of a url

+++

## Timegates


```{code-cell} ipython3
import requests

awa_url = "https://web.archive.org.au/awa"
target_url = "http://ardc.edu.au"

response = requests.head(f"{awa_url}/{target_url}/")
#  Requests automatically parses the Link values
response.links
```

The `Link` parameter contains the Memento information. You can see that it's actually providing information on four types of link:

* the `original` url (ie the url that was archived) – `<http://nla.gov.au/>`
* the `timegate` for the harvested url (which us what we just used) – `<https://web.archive.org.au/awa/http://nla.gov.au/>`
* the `timemap` for the harvested url (we'll look at this below) – `<https://web.archive.org.au/awa/timemap/link/http://nla.gov.au/>`
* the `memento` – `<https://web.archive.org.au/awa/20100205144227mp_/http://nla.gov.au/>`

The `memento` link is the capture closest in time to the date we requested. In this case there's only about a month's difference, but of course this will depend on how frequently a url is captured. 

```{code-cell} ipython3
response = requests.head(
    "https://web.archive.org.au/awa/http://nla.gov.au/",
    headers={"Accept-Datetime": "Fri, 01 Jan 2010 01:00:00 GMT"},
)
response.links
```

## Timemap
