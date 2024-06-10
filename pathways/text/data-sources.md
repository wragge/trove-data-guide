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

# Data sources

````{card}
This page describes options for obtaining text from Trove.

```{contents}
:local:
:backlinks: None
```
````

+++

## Documentation

These sections of the Trove Data Guide explain how to access text from different parts of Trove:

- OCRd text from digitised newspapers
  - [Articles](newspapers:data:articles:text)
  - [Pages](newspapers:data:pages:text)
  - [Issues](issue-text)
  - [Titles](newspapers:data:titles:text)
- [OCRd text from digitised periodicals](digitised:periodicals:data:text)
- [Transcripts and summaries from oral histories](oral-histories-transcripts)

## Pre-harvested datasets

The GLAM Workbench provides a number of datasets containing OCRd text harvested from Trove.

`````{grid}
:gutter: 3

````{grid-item-card} OCRd text from Trove books and ephemera
:columns: 6

A harvest of 26,762 files of OCRd text from digitised books and ephemera in Trove. 

+++
```{button-link} https://glam-workbench.net/trove-books/ocrd-text-from-trove-books/
:color: primary
More info
```
````
````{grid-item-card} OCRd text from Trove digitised journals
:columns: 6

This dataset contains OCRd text and metadata harvested from digitised periodicals in Trove.

+++
```{button-link} https://glam-workbench.net/trove-journals/ocrd-text-all-journals/
:color: primary
More info
```
````
````{grid-item-card} Press releases relating to refugees
:columns: 6

This dataset contains metadata and full text of items from the Parliamentary Library's press releases collection that include the term 'refugees' (or a number of related terms).

+++
```{button-link} https://glam-workbench.net/trove-government/trove-parliament-press-releases-refugees/
:color: primary
More info
```
````
````{grid-item-card} Press releases relating to COVID
:columns: 6

This dataset contains metadata and full text of items from the Parliamentary Library's press releases collection that include the term 'covid' or 'coronavirus'.

+++
```{button-link} https://glam-workbench.net/trove-government/trove-parliament-press-releases-covid/
:color: primary
More info
```
````
`````

## Creating datasets

These tools and examples can help you create your own collections of text from Trove.

### GLAM Workbench notebooks

These tools and examples can help you create your own collections of place data from Trove.

[Trove Newspaper Harvester](https://glam-workbench.net/trove-harvester/)
: The Trove Newspaper & Gazette Harvester makes it easy to download large quantities of digitised articles from Trove's newspapers and gazettes. 

[Get OCRd text from a digitised journal in Trove](https://glam-workbench.net/trove-journals/get-ocrd-text-from-digitised-journal/)
: Many of the digitised periodicals available in Trove make OCRd text available for download. This notebook helps you download all the OCRd text from a single periodical – one text file for each issue.

[Download summaries and transcripts from oral histories](https://glam-workbench.net/trove-music/download-transcripts/)
: If oral histories have summaries or transcripts, they can be downloaded as text or PDF files using their nla.obj identifiers. This notebook downloads all the available transcripts and summaries from digitised oral histories available in Trove.

[Harvesting the text of digitised books (and ephemera)](https://glam-workbench.net/trove-books/harvesting-text-of-digitised-books/)
: This notebook harvests metadata and OCRd text from digitised works in Trove's book zone.

[Harvesting collections of text from archived web pages](https://glam-workbench.net/web-archives/harvesting-text/)
: This notebook helps you assemble datasets of text extracted from all available captures of archived web pages. You can then feed these datasets to the text analysis tool of your choice to analyse changes over time.

[Harvest parliament press releases from Trove](https://glam-workbench.net/trove-government/harvest-parliament-press-releases/)
: Trove includes more than 380,000 press releases, speeches, and interview transcripts issued by Australian federal politicians and saved by the Parliamentary Library. This notebook shows you how to harvest both metadata and full text from a search of the parliamentary press releases. 

### Software packages

[trove-newspaper-harvester](https://wragge.github.io/trove-newspaper-harvester/)
: The Trove Newspaper (& Gazette) Harvester makes it easy to download large quantities of digitised articles from Trove’s newspapers and gazettes. Just give it a search from the Trove web interface, and the harvester will save the metadata of all the articles in a CSV (spreadsheet) file for further analysis. You can also save the full text of every article, as well as copies of the articles as JPG images, and even PDFs.

```{code-cell} ipython3

```
