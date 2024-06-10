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

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Documentation

These sections of the Trove Data Guide explain how to access maps and place data from different parts of Trove:

- [Which countries do oral histories relate to?](digitised:oralhistories:locations)

### Pre-harvested datasets

The GLAM Workbench provides a number of datasets containing OCRd text harvested from Trove.

`````{grid}
:gutter: 3

````{grid-item-card} Trove digitised maps metadata
:columns: 6

This dataset contains metadata describing digitised maps in Trove, harvested from the Trove API and other sources.

+++
```{button-link} https://glam-workbench.net/trove-maps/single-maps-data/
:color: primary
More info
```
````
````{grid-item-card} Trove digitised maps – coordinates
:columns: 6

This dataset was generated from the harvest of digitised maps metadata. Coordinate strings in the metadata (points and bounding boxes) were parsed and converted to decimal values.

+++
```{button-link} https://glam-workbench.net/trove-maps/single-maps-coordinates-data/
:color: primary
More info
```
````
````{grid-item-card} MARC Geographic Areas – Wikidata mappings
:columns: 6

Trove uses codes from the MARC Geographic Areas list to identify locations in metadata records. I couldn't find any mappings of these codes to other sources of geospatial information, so I fired up OpenRefine and reconciled the geographic area names against Wikidata. Once I'd linked as many as possible, I copied additional information from Wikidata, such as ISO country codes, GeoNames identifiers, and geographic coordinates.

+++
```{button-link} https://github.com/GLAM-Workbench/marc-geographicareas
:color: primary
More info
```
````
````{grid-item-card} Geolocated newspaper titles 
:columns: 6

This dataset relates newspaper titles in Trove with their places of publication and circulation.

+++
```{button-link} https://docs.google.com/spreadsheets/d/1rURriHBSf3MocI8wsdl1114t0YeyU0BVSXWeg232MZs/edit?usp=sharing
:color: primary
More info
```
````
`````

### Creating datasets

[Exploring digitised maps in Trove](https://glam-workbench.net/trove-maps/exploring-digitised-maps/)
: I knew there were lots of great maps you could download from Trove, but how many? And how big were the files? I thought I'd try to quantify this a bit by harvesting and analysing the metadata.

[Parse map coordinates from metadata](https://glam-workbench.net/trove-maps/parse-coordinates/)
: The harvest of digitised maps metadata includes a coordinates column that provides a string representation of either a point or a bounding box. This notebook attempts to parse the coordinate string and convert the values to decimals. It then uses the decimal values to explore the geographical context of Trove's digitised map collection.

[Create a subset of digitised maps by searching for coordinates](https://glam-workbench.net/trove-maps/create-map-subsets/)
: This notebook helps you create subsets of digitised maps by searching for maps whose centre points fall within a specified bounding box. You can download the results as CSV and GeoJSON files.
