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
This page describes options for obtaining collection and system data from Trove.

```{contents}
:local:
:backlinks: None
```
````

## Documentation

These sections of the Trove Data Guide explain how to access collection and system from different parts of Trove:

- Metadata from digitised newspapers
    - [Articles](newspapers:articles:metadata)
    - [Pages](newspapers:pages:metadata)
    - [Issues](newspapers:issues:metadata)
    - [Titles](newspapers:titles:metadata)
- [Metadata from digitised periodicals](digitised:periodicals:metadata)
- [Metadata from oral histories](digitised:oralhistories:metadata)

+++

## Pre-harvested datasets

The GLAM Workbench provides a number of datasets containing collection and system data harvested from Trove.

`````{grid}
:gutter: 3

````{grid-item-card} First appearance of newspaper titles harvested from web archives
:columns: 6

CSV formatted dataset containing details of the first appearance of newspaper titles in web archive captures, indicating when the titles were (approximately) added to Trove. The complete list of captures has been filtered to include only the first appearance of each title / place / date range combination.

+++
```{button-link} https://glam-workbench.net/trove-newspapers/csv-newspaper-titles-from-web-archives-first-appearance/
:color: primary
More info
```
````
````{grid-item-card} CSV formatted list of Australian Women's Weekly issues, 1933 to 1982
:columns: 6

This CSV formatted file includes metadata for 2,566 issues of the Australian Women's Weekly from 1933 to 1982.

+++
```{button-link} https://glam-workbench.net/trove-newspapers/csv-aww-issues/
:color: primary
More info
```
````
````{grid-item-card} List of Trove newspapers with non-English language content
:columns: 6

Markdown formatted list of newspapers with non-English content created by applying language detection tools to a sample of articles.

+++
```{button-link} https://glam-workbench.net/trove-newspapers/list-non-english-newspapers/
:color: primary
More info
```
````
````{grid-item-card} Trove newspapers with articles published after 1954
:columns: 6

CSV formatted dataset containing a list of digitised newspapers in Trove with articles published after 1954 (the copyright cliff of death).

+++
```{button-link} https://glam-workbench.net/trove-newspapers/csv-newspapers-post-54/
:color: primary
More info
```
````
````{grid-item-card} CSV formatted list of digitised books in Trove
:columns: 6

This file provides metadata of digitised works with the format Book. 

+++
```{button-link} https://glam-workbench.net/trove-books/csv-books-in-digital-form/
:color: primary
More info
```
````
````{grid-item-card} List of organisations contributing metadata to Trove
:columns: 6

This is a flattened version of the contributors data available from the Trove API. It is harvested weekly.

+++
```{button-link} https://glam-workbench.net/trove-contributors/trove-contributors-list/
:color: primary
More info
```
````
````{grid-item-card} Count of records by contributor and category
:columns: 6

This dataset was created by searching for contributor's NUC codes in each Trove category. This gives a count of records by contributor and category. It is harvested weekly.

+++
```{button-link} https://github.com/wragge/trove-contributor-totals/
:color: primary
More info
```
````
````{grid-item-card} Digitised Parliamentary Papers in Trove
:columns: 6

This dataset contains metadata describing Commonwealth Parliamentary Papers that have been digitised and are made available through Trove.

+++
```{button-link} https://glam-workbench.net/trove-government/trove-parliamentary-papers-data/
:color: primary
More info
```
````
````{grid-item-card} Details of periodicals submitted to Trove through the National edeposit scheme (NED)
:columns: 6

This dataset contains details of periodical titles and issues submitted to the Trove through the NLA's National edeposit scheme. It includes CSV-formatted lists of titles and issues, and an SQLite database created for use with Datasette-Lite.

+++
```{button-link} https://glam-workbench.net/trove-journals/trove-ned-periodicals-data/
:color: primary
More info
```
````
````{grid-item-card} Details of digitised periodicals from the /magazine/titles API endpoint
:columns: 6

This dataset was created by checking, correcting, and enriching data about digitised periodicals obtained from the Trove API. Additional metadata describing periodical titles and issues was extracted from the Trove website and used to check the API results. Where titles were wrongly described as issues, and vice versa, the records were corrected.

+++
```{button-link} https://glam-workbench.net/trove-journals/periodicals-data-api/
:color: primary
More info
```
````
````{grid-item-card} Trove lists metadata
:columns: 6

CSV formatted file containing a complete harvest of metadata describing user-created Trove lists.

+++
```{button-link} https://glam-workbench.net/trove-lists/trove-lists-metadata/
:color: primary
More info
```
````
````{grid-item-card} Trove public tags
:columns: 6

This dataset contains details of 2,495,958 unique public tags added to 10,403,650 resources in Trove between August 2008 and June 2024. It is saved as a CSV file with the following columns:

+++
```{button-link} https://glam-workbench.net/trove-lists/trove-public-tags/
:color: primary
More info
```
````
````{grid-item-card} Trove tag counts
:columns: 6

CSV formatted file containing the total number of times each tag in Trove has been applied to resources.

+++
```{button-link} https://glam-workbench.net/trove-lists/trove-tag-counts/
:color: primary
More info
```
````
````{grid-item-card} NLA oral histories metadata
:columns: 6

This dataset contains metadata describing oral histories held by the National Library of Australia. The metadata was harvested from Trove and includes details of both digitised, and not digitised, oral histories.

+++
```{button-link} https://glam-workbench.net/trove-music/trove-oral-histories/
:color: primary
More info
```
````
````{grid-item-card} List of NLA oral history collections and projects
:columns: 6

This dataset contains a list of collection and project names extracted from the metadata of oral histories held by the NLA. The metadata was harvested from Trove and includes details of both digitised, and not digitised, oral histories.

+++
```{button-link} https://glam-workbench.net/trove-music/trove-oral-history-series/
:color: primary
More info
```
````
````{grid-item-card} Harvest of ABC Radio National metadata
:columns: 6

The full harvest of ABC Radio National program metadata, containing more than 400,000 records. 

+++
```{button-link} https://glam-workbench.net/trove-music/abcrn-data/
:color: primary
More info
```
````
````{grid-item-card} Rights applied to images by each Trove contributor
:columns: 6

This dataset includes information about the application of licences and rights statements to images by Trove contributors.

+++
```{button-link} https://glam-workbench.net/trove-images/trove-images-rights-data/
:color: primary
More info
```
````
````{grid-item-card} Pandora collections data
:columns: 6

This dataset contains details of the subject and collection groupings used by Pandora to organise archived web resource titles.

+++
```{button-link} https://glam-workbench.net/trove-web-archives/pandora-collections-data/
:color: primary
More info
```
````
````{grid-item-card} Pandora titles data
:columns: 6

This dataset contains a complete list of Pandora's archived web resource titles.

+++
```{button-link} https://glam-workbench.net/trove-web-archives/pandora-titles-data/
:color: primary
More info
```
````
````{grid-item-card} NLA digitised finding aids: list of urls
:columns: 6

A list of urls pointing to the National Library of Australia's digitised manuscript finding aids, harvested from Trove.

+++
```{button-link} https://glam-workbench.net/trove-unpublished/finding-aids-urls/
:color: primary
More info
```
````
````{grid-item-card} NLA digitised finding aids: summary information
:columns: 6

This dataset includes summary information describing each finding aid.

+++
```{button-link} https://glam-workbench.net/trove-unpublished/finding-aids-summary/
:color: primary
More info
```
````
`````

+++

## Creating datasets

These tools and examples can help you create your own collections of collection and system from Trove.

### GLAM Workbench notebooks

[Gathering historical data about the addition of newspaper titles to Trove](https://glam-workbench.net/trove-newspapers/historical-data-newspaper-titles/)
: The number of digitised newspapers available through Trove has increased dramatically since 2009. Understanding when newspapers were added is important for historiographical purposes, but there's no data about this available directly from Trove. This notebook uses web archives to extract lists of newspapers in Trove over time, and chart Trove's development.

[Harvest information about newspaper issues](https://glam-workbench.net/trove-newspapers/harvest_newspaper_issues/)
: When you search Trove's newspapers, you find articles – these articles are grouped by page, and all the pages from a particular date make up an issue. But how do you find out what issues are available? On what dates were newspapers published? This notebook shows how you can get information about issues from the Trove API.

[Get the page coordinates of a digitised newspaper article from Trove](https://glam-workbench.net/trove-newspapers/trove-newspapers-get-coordinates-of-articles/)
: This notebook demonstrates how to find the coordinates of a newspaper article on a digitised page.

[Harvest details of Commonwealth Parliamentary Papers digitised in Trove](https://glam-workbench.net/trove-government/harvest-parliamentary-papers/)
: Trove includes thousands of digitised papers and reports presented to the Commonwealth Parliament. However, finding all the Parliamentary Papers is not straightforward because of inconsistencies in the way they've been arranged and described. This notebook attempts to work around these problems and harvest as complete as possible data about Parliamentary Papers in Trove.

[Get details of periodicals from the /magazine/titles API endpoint](https://glam-workbench.net/trove-journals/periodicals-from-api/)
: This notebook uses the /magazine/titles endpoint of the Trove API to get details of digitised periodical titles and issues. It then tries to fix some problems with the data by removing duplicates and Parliamentary Papers, and checking the lists of issues against those scraped from the Trove website.

[Enrich the list of periodicals from the Trove API](https://glam-workbench.net/trove-journals/periodicals-enrich-for-datasette/)
: This notebook tries to fix some problems with the periodicals data from the Trove API. It also enriches the harvested data by extracting additional information from the website. It creates two datasets – one for titles and one for issues – and loads these into an SQLite database for use with Datasette Lite.

[Harvest details of periodicals submitted to Trove through the National edeposit scheme (NED)](https://glam-workbench.net/trove-journals/harvest-ned-periodicals/)
: This notebook harvests details of periodicals submitted to Trove through the National edeposit scheme (NED). It creates two datasets, one containing details of the periodical titles, and the other listing all the available issues.

[Harvest summary data from Trove lists](https://glam-workbench.net/trove-lists/harvest-summary-data-from-lists/)
: Use the Trove API to harvest data about all public lists, then extract some summary data and explore a few different techniques to analyse the complete dataset.

[Harvest public tags from Trove zones](https://glam-workbench.net/trove-lists/harvest-tags/)
: This notebook harvests all the public tags that users have added to records in Trove. However, tags are being added all the time, so by the time you've finished harvesting, the dataset will probably be out of date.

[Harvest oral histories metadata](https://glam-workbench.net/trove-music/harvest-oral-histories/)
: Harvests metadata describing the NLA's oral history collection from Trove and saves the results as a CSV file.

[Save a list of oral history collections and projects](https://glam-workbench.net/trove-music/save-series/)
: Extracts a list of series from metadata describing oral histories held by the NLA and described in Trove.

[Harvest ABC Radio National records from Trove](https://glam-workbench.net/trove-music/harvest-abcrn/)
: Trove harvests details of programs and segments broadcast on ABC Radio National. You can find them by searching for nuc:"ABC:RN" in the Music & Audio category. The records include basic metadata such as titles, dates, and contributors, but not full transcripts or audio. This notebook harvests, cleans, and saves all the available Radio National data from Trove.

[Create title datasets from collections and subjects](https://glam-workbench.net/trove-web-archives/create-datasets/)
: This notebook helps you create a dataset of archived urls using Pandora's subject and collection groupings.

[Harvest Pandora subjects and collections](https://glam-workbench.net/trove-web-archives/harvest-pandora-subject-collections/)
: This notebook harvests Pandora's navigation hierarchy, saving the connections between subjects, collections, and titles.

[Harvest the full collection of Pandora titles](https://glam-workbench.net/trove-web-archives/harvest-pandora-titles/)
: This notebook harvests a complete collection of archived web page titles from Pandora, the National Library of Australia's selective web archive.

[Find urls of digitised finding aids](https://glam-workbench.net/trove-unpublished/find-finding-aids/)
: This notebook uses the Trove API to harvest urls of NLA digitised finding aids from a search in the collection zone.

[Collect information about digitised finding aids](https://glam-workbench.net/trove-unpublished/get-info-finding-aids/)
: This notebook works through a list of urls pointing to NLA's digitised finding aids, extracting additional information about each one.

### Software packages

[trove-newspaper-harvester](https://wragge.github.io/trove-newspaper-harvester/)
: The Trove Newspaper (& Gazette) Harvester makes it easy to download large quantities of digitised articles from Trove’s newspapers and gazettes. Just give it a search from the Trove web interface, and the harvester will save the metadata of all the articles in a CSV (spreadsheet) file for further analysis. You can also save the full text of every article, as well as copies of the articles as JPG images, and even PDFs.
