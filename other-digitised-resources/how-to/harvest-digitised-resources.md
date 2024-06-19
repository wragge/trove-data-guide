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

# HOW TO: Harvest data relating to digitised resources

Harvesting data from a search for digitised resources (other than newspapers) in Trove is not as simple as making a few API requests. The major problem is that digitised resources are often assembled into groups or collections, and the full details of these groupings are not available through the Trove API. This means that simply harvesting results from an API query will miss many digitised resources. In addition, the way resources are described and arranged is often inconsistent, so you can't assume that a particular type of resource will be grouped in a particular way.

As a result of these problems, a 'belts and braces' approach seems best – follow every possible route and harvest as many records as possible. This may result in duplicates, but these can be dealt with later. In any case, Trove already contains a large number of duplicate records for digitised resources, so some form of merging or de-duplication will always be required.

## Outline of harvesting method

Here I'm outlining the general approach. The specific method will depend on the type of resource, the filters you apply, and the metadata you want to save.

```{seealso}
There are a number of examples of this approach in the GLAM Workbench that you can use or modify to meet your own needs. For example:

- [Harvest details of Commonwealth Parliamentary Papers digitised in Trove](https://glam-workbench.net/trove-government/harvest-parliamentary-papers/)
- [Create a list of Trove's digitised journals](https://glam-workbench.net/trove-journals/create-list-digitised-journals/)
- [Harvest oral histories metadata](https://glam-workbench.net/trove-music/harvest-oral-histories/)

```

### Harvest metadata from API

Searches using the API return work-level records. Sometimes digitised resources are grouped as versions of a work, even though they're quite different. To make sure you get everything, you need to work your way down through through the hierarchy of work -> version -> sub-version (labelled 'record' in API responses), harvesting every relevant record.

- get work records from search results
- get version/sub-version records from each work
- loop through all versions/sub-versions checking to see if they have an NLA fulltext link (indicating that a digitised version is available)
- if they do, get the metadata from the sub-version and add to dataset
    - sometimes records will have multiple fulltext urls, if so, add a record for each url to the dataset
    - sometimes sub-versions don't have fulltext links but the parent version does – if so add fulltext links from parent version to sub-version metadata

### Expand collections and enrich dataset using embedded metadata

As noted in [](/other-digitised-resources/how-to/extract-embedded-metadata), most of Trove's digitised resource viewers embed useful metadata in the HTML of their web pages. You can use this to determine whether a fulltext url points to a single resource or a collection, and to enrich the metadata you obtained from the API.

- scrape metadata from the page returned by each fulltext url in the dataset
- if the metadata doesn't include a list of pages then it's probably a collection page
    - if so [harvest a list of collection items](/other-digitised-resources/how-to/get-collection-items) and add them to the dataset
- get the number of pages in the resource (or optionally a list of page identifiers) – this information can be used to download OCRd text and images from a resource
- add or update fields using scraped metadata (eg add sub-unit values)

### Check for 'missing' records

Some of the records in the dataset will represent *parts* of resources, such as the sections of a Parliamentary Paper. The identifiers of the parent resources are added to the child records in the previous processing step. You can check the parent identifiers to make sure they're already included in the dataset.

- compare the list of parent identifiers in the dataset with the fulltext urls
- if a parent identifier is missing, scrape metadata about it and add to the dataset

### Merge/remove duplicates from dataset

The aim of this step is to de-duplicate the harvested records while preserving all the harvested metadata. The result is a dataset with one record for each fulltext url. If there are multiple values in any column, these will merged into a single list.

- identify columns that can contain only one value (eg `fulltext_url`) and create a de-duplicated dataframe containing these columns
- identify columns that could contain multiple values that need to be de-duplicated
- merge values of columns with multiple values into new dataframes
- merge dataframe with single value columns together with all the new dataframes, linking on the `fulltext_url` field

### Download text

- use the number of pages attempt to [download text from publication](/other-digitised-resources/how-to/download-items-text-images)
- if successful add text file name to dataset

### Download images

- use the number of pages or page identifiers to [download page images from a publication](/other-digitised-resources/how-to/download-items-text-images)

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```
