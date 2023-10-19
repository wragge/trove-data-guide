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

# HOW TO: Get a newspaper issue or article as a PDF

You can download PDFs of newspaper and gazette articles, pages, and issues from Trove's web interface – it's just a matter of clicking a button. But downloading PDFs using computational methods is not so straightforward. When you click on the buttons in the web interface, you don't download the PDF from a fixed url. There's a bit of Javascript code behind the button that asks for for the PDF to be compiled, then alerts the user when it's ready. To automate the download process, you need to reproduce these steps in your code. This how-to provides an example of how this can be done using Python.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{admonition} But what about pages?
:class: note
Newspaper and gazette *pages* are treated slightly differently to articles and issues. If you know the page identifier, you can construct a url that will download that page as a PDF without any waiting!
```

```{code-cell} ipython3
import time
from pathlib import Path

import requests
from requests.exceptions import HTTPError
```

```{code-cell} ipython3
def ping_pdf(ping_url):
    """
    Check to see if a PDF is ready for download.
    If a 200 status code is received, return True.
    """
    ready = False
    try:
        response = requests.get(ping_url, timeout=30)
        response.raise_for_status()
    except HTTPError:
        if response.status_code == 423:
            ready = False
        else:
            raise
    else:
        ready = True
    return ready


def get_pdf_url(id, pdf_type, zoom=4):
    """
    Download the PDF version of an issue.
    These can take a while to generate, so we need to ping the server to see if it's ready before we download.
    """
    pdf_url = None

    base_url = f"https://trove.nla.gov.au/newspaper/rendition/nla.news-{pdf_type}{id}"

    if pdf_type == "article":
        prep_url = f"{base_url}/level/{zoom}/prep"
        base_url += f".{zoom}"
    else:
        prep_url = f"{base_url}/prep"

    # Ask for the PDF to be created, this returns a plain text hash that we use in later requests
    response = requests.get(prep_url)

    # Get the hash
    prep_id = response.text

    # Url to check if the PDF is ready
    ping_url = f"{base_url}.ping?followup={prep_id}"
    tries = 0
    ready = False

    # Give some time to generate pdf
    time.sleep(2)

    # Are you ready yet?
    while ready is False and tries < 5:
        ready = ping_pdf(ping_url)
        if not ready:
            tries += 1
            time.sleep(2)

            # Download if ready
    if ready:
        pdf_url = f"{base_url}.pdf?followup={prep_id}"
    return pdf_url
```

## Get a PDF of an issue

```{code-cell} ipython3
# Set issue id -- in practice, this would probably be in a loop, accessing a list of issues
issue_id = "424530"

# Get the PDF url
pdf_url = get_pdf_url(issue_id, "issue")

# Download and save the PDF
response = requests.get(pdf_url)
Path(f"issue-{issue_id}.pdf").write_bytes(response.content)
```

## Get a PDF of an article

```{code-cell} ipython3
# Set article id -- in practice, this would probably be in a loop, accessing a list of articles
article_id = "61389505"

# Get the PDF url
pdf_url = get_pdf_url(article_id, "article")

# Download and save the PDF
response = requests.get(pdf_url)
Path(f"article-{article_id}.pdf").write_bytes(response.content)
```
