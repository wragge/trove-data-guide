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

````{card}
On this page

```{contents}
:local:
:backlinks: None
```
````

Harvesting data from a search for digitised resources (other than newspapers) in Trove is not as simple as making a few [API requests](/accessing-data/trove-api-intro). The major problem is that digitised resources are often assembled into groups or collections, and the full details of these groupings are not available through the Trove API. This means that simply harvesting results from an API query can miss many digitised resources. In addition, the way resources are described and arranged is often inconsistent, so you can't assume that a particular type of resource will be grouped in a particular way.

As a result of these problems, a 'belts and braces' approach seems best – follow every possible route and harvest as many records as possible. This may result in duplicates, but these can be dealt with later. In any case, Trove already contains a large number of duplicate records for digitised resources, so some form of merging or deduplication will always be required.

## Outline of harvesting method

This is an outline of a general, 'belts and braces' approach to harvesting details of digitised resources. The specific method will depend on the type of resource, the filters you apply, and the metadata you want to save.

```{seealso}
There are a number of complete, concrete examples in the GLAM Workbench that you can use or modify to meet your own needs. For example:

- [Harvest details of Commonwealth Parliamentary Papers digitised in Trove](https://glam-workbench.net/trove-government/harvest-parliamentary-papers/)
- [Create a list of Trove's digitised journals](https://glam-workbench.net/trove-journals/create-list-digitised-journals/)
- [Harvest oral histories metadata](https://glam-workbench.net/trove-music/harvest-oral-histories/)

```

### Harvest metadata from API

Searches using the API return work-level records. Sometimes digitised resources are grouped as [versions of a work](/what-is-trove/works-and-versions), even though they're quite different. To make sure you get everything, you need to work your way down through through the hierarchy of `work` -> `version` -> `sub-version` (labelled `record` in API responses), harvesting every relevant record. The steps are:

- get work records from search results [using the Trove API](/accessing-data/how-to/harvest-complete-results)
- get version/sub-version records from each work
- loop through all versions/sub-versions and check to see if they have an NLA fulltext link (indicating that a digitised version is available)
- if they do, get the metadata from the sub-version and add to dataset
    - sometimes records will have multiple fulltext urls, if so, add a record for each url to the dataset
    - sometimes sub-versions don't have fulltext links but the parent version does – if so add fulltext links from the parent version to the sub-version metadata
 

```{mermaid}
:align: center
graph TD
    Trove[(Trove API)] -- search query --> results[/results/]
    results --> Trove
    results --> work[/work record/]
    work --> results
    work --> version[/version record/]
    version --> work
    version --> digitised{"is this digitised?"}
    digitised -- yes --> record[/sub-version record/]
    digitised -- no --> ignore([ignore])
    record --> version
    record --> url[/"fulltext url"/]
    url --> record
    url --> save(["save metadata"])
```

### Expand collections and enrich dataset using embedded metadata

Most of Trove's digitised resource viewers embed useful metadata in the HTML of their web pages. You can use this to determine whether a fulltext url points to a single resource or a collection, and to enrich the metadata you obtained from the API. The steps are:

- [scrape metadata](/other-digitised-resources/how-to/extract-embedded-metadata) from the digitised viewer page returned by each fulltext url in the dataset
- check to see if the record describes a collection or a single item
    - if it's a collection then [harvest a list of collection items](/other-digitised-resources/how-to/get-collection-items) and add each one to the dataset
- enrich each item record using the embedded metadata (for example, get the number of pages in a book)
- save enriched item records

```{mermaid}
:align: center
graph TD
    metadata[("harvested metadata")] --> record[/"record"/]
    record --> metadata
    record --> viewer>"digitised object viewer"]
    viewer --> em_metadata[/"embedded metadata"/]
    em_metadata --> is_collection{"is this a collection?"}
    is_collection -- yes --> collection_viewer>"digitised collection viewer"]
    is_collection -- no --> enrich_md
    collection_viewer --> extract_items
    extract_items --> item[/"item"/]
    item --> extract_items
    item --> enrich_md["enrich metadata"]
    enrich_md --> save(["save metadata"])
```

```{admonition} How do you identify 'collections'?
:class: info

There don't seem to be any consistent markers to identify whether a digital object is a 'collection' or an 'item', however, there are some useful clues in the [metadata embedded in the digital object viewers](/other-digitised-resources/how-to/extract-embedded-metadata). If you're working with print publications, the existence of a non-empty `page` list in the metadata indicates the item is a single publication, rather than a collection. If you're working with maps or images, a non-empty `copies` list indicates that you're dealing with a single image.

```

### Check for 'missing' records

````{margin}
```{seealso}
See the GLAM Workbench notebook [Harvest details of Commonwealth Parliamentary Papers digitised in Trove](https://glam-workbench.net/trove-government/harvest-parliamentary-papers/) for an example of this processing step.
```
````

Some of the records in the dataset might represent *parts* of resources, such as the sections of a Parliamentary Paper. You'd expect there to be separate results for the parent records, but I've found this is not always the case – the parent records are missing. In the previous processing step you can add the identifiers for any parent resources from the metadata embedded in the digital object viewer. You can then check all the parent identifiers to make sure they're already included in the dataset. Something like this:

- compare the list of parent identifiers in the dataset with the fulltext urls already harvested
- if a parent identifier is missing, scrape metadata about it from the digitised object viewer and add it to the dataset

### Merge/remove duplicates from dataset

Duplicates exist at multiple levels amongst Trove's digitised resources. There can be more than one work record pointing to a single digitised object. Single works can also contain near-duplicate versions pointing to the same resource but including slightly different metadata. The processing steps above will exapand all of these duplicates and near-duplicates out into individual records. The aim of this step is to deduplicate the records while preserving all the harvested metadata. The desired result is a dataset with one record for each fulltext url. If there are multiple values in any column, these need to be concatenated into a single list or value.

- identify columns that can contain only one unique value (eg `fulltext_url`) and create a deduplicated dataframe containing these columns
- identify columns that could contain multiple values
- split these columns from the original dataframe
- group and concatenate the values in these columns and save the results as a new dataframe
- merge the deduplicated dataframe with unique values together with all the new dataframes, linking on the unique identifier (eg `fulltext_url`)

## Additional processing

Once you have a dataset that is as complete as possible, you might want to:

- [download OCRd text](/other-digitised-resources/how-to/download-items-text-images) from all the publications in the dataset
- [download individual pages or images](/other-digitised-resources/how-to/download-images) from all the items in the dataset

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```
