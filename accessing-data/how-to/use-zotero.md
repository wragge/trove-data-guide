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

# HOW TO: Use Zotero to save items

+++



+++

<mark>==If I rewrite the translator to use the API I can expand this section to include other content types==</mark>

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Newspapers

````{margin}
```{seealso}
The GLAM Workbench notebook [Upload Trove newspaper articles to Omeka-S](https://glam-workbench.net/trove-newspapers/#upload-trove-newspaper-articles-to-omeka-s) provides an example of how you can access newspaper article metadata saved with Zotero, or in a Trove list, add additional information, and upload the results to an Omeka exhibition.
```
````

[Zotero](https://www.zotero.org/) includes a 'translator' for Trove that saves article metadata into your own research database. It also downloads a PDF copy of the article, and saves the OCRd text into an attached note. You can [add items](https://www.zotero.org/support/adding_items_to_zotero) by clicking on the Zotero icon in your web browser. The translator extracts metadata from the article web page and citation, rather than the Trove API.

```{warning}
It's not currently possible to save details of multiple newspaper articles from Trove's search results. This is due to changes introduced by Trove's 2020 interface update. Unfortunately, you'll need to add individual articles one by one.
```

Zotero saves the following fields for each newspaper article:

```{list-table} Newspaper and gazette metadata fields extracted by Zotero
:header-rows: 1
:name: zotero-fields
* - Zotero UI
  - Zotero field
  - Value
* - Item Type
  - `type`
  - `newspaperArticle`
* - Title
  - `title`
  - article heading
* - Publication
  - `publicationTitle`
  - newspaper title (location and date range in brackets is removed)
* - Date
  - `date`
  - publication date
* - Place
  - `place`
  - publication state (extracted from newspaper title)
* - Abstract
  - `abstract`
  - first four lines of text, if available (taken from `description` META tag)
* - URL
  - `url`
  - `http://nla.gov.au/nla.news-article[article ID]`
```

Zotero provides many ways to [export data](https://www.zotero.org/support/kb/exporting). Once you've assembled a collection of articles you can export them in a suitable format for additional processing or analysis. Alternatively, you can use the [Zotero API](https://www.zotero.org/support/dev/web_api/v3/start) to access and manipulate the saved data. 

Zotero is a convenient option for creating curated datasets of digitised newspaper articles. Zotero's built-in annotation features enable you to tags and notes to further organise your collection. You can also collaborate on the selection and annotation of articles using shared groups.

For example, Zotero's built-in PDF viewer enables you to select sections of newspaper articles for annotation. You could use this to manually highlight sections of interest in long newspaper articles. The annotations and cropped images could then be retrieved from the Zotero API to create your own custom dataset. See [](/newspapers-and-gazettes/how-to/create-newspaper-articles-dataset) for further ideas.

```{code-cell} ipython3

```
