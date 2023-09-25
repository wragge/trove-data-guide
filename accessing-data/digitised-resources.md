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

# Digitised resources

Other than newspapers.

Metadata available from the main search index -- so *mostly* the same as aggregated metadata

Exceptions:

- magazine & newsletter titles endpoint
- lists of items in collection (except for periodicals) -- need to be scraped
- pages in a book or issue -- scrape internal metadata
- finding aids

Entry points:

- book record: https://trove.nla.gov.au/work/8264204
- book view (single not in collection): https://nla.gov.au/nla.obj-13818998/ (redirects to item/page url)
- book item/page: https://nla.gov.au/nla.obj-13818998/view?partId=nla.obj-13952005 (partid is page id)
- book page: https://nla.gov.au/nla.obj-13952005 (redirected to item/page url)
- book page image: https://nla.gov.au/nla.obj-13952005/image

- article -> page
- single item (not in collection): https://nla.gov.au/nla.obj-133260135/ (photo), https://nla.gov.au/nla.obj-710156106/ (map)

- collection (photos): https://nla.gov.au/nla.obj-150592172
- item in this collection: https://nla.gov.au/nla.obj-150592180 (note just item id unlike periodicals)
- item image: https://nla.gov.au/nla.obj-150592180/image


- periodical work record: https://trove.nla.gov.au/work/19159055
- periodical collection: https://nla.gov.au/nla.obj-1740320424
- periodical issue: https://nla.gov.au/nla.obj-537658376/ -- issue url redirects to page
- periodical issue/page: https://nla.gov.au/nla.obj-537658376/view?partId=nla.obj-537659506 (part id is the page identifier) -- the page part of this is updated as you move through the issue
- periodical page: https://nla.gov.au/nla.obj-537659506 (redirects to the issue/page url)
- periodical page image: https://nla.gov.au/nla.obj-537660437/image
- going up from periodical title to work record? Search for id (can return preceding/succeeding titles eg: https://trove.nla.gov.au/search/category/books?keyword=%22nla.obj-1740320424%22)

- map series: https://nla.gov.au/nla.obj-234270965/

- finding aids produce multiple level hierarchies
- each level in the hierarchy (a collection) can contain items or collections
- items in a collection can themselves be a collection (eg a letter with multiple pages)
- download options vary according to where you are and only provide top images of items/collections at that level (so you might think you're getting everything, but you're not)
- an item that has multiple pages, doesn't have the pages in the item metadata, eg: https://nla.gov.au/nla.obj-226146469/
- finding aid 'item' that is actually a collection: https://nla.gov.au/nla.obj-226146469/ (to browse all images you need to go down a level, can)


Other notes:

- PDF viewer - down a level shows image of first page of PDF (always?)
- individual photos in collections are indexed

Downloading a range of images:

`https://nla.gov.au/nla.obj-[ID]/download?downloadOption=[FORMAT]&firstPage=[FIRST PAGE]&lastPage=[LAST PAGE]`

Formats are `ocr`, `pdf`, `zip` (images), and `tif` (on some things, check)

Where do you get the page numbers from?

- in books, periodicals it's in the embedded JSON metadata
- in manuscripts (and images in collections?) it's harcoded in the JS eg: `maxNumOfChildDownloads = 40;`
- page numbers are zero indexes so first page is `0`, last page in the example above is `39`
- can override the ui max of 20 images from collections
- if you download collection, first image is included twice -- once as the collection image and then as child

Getting children of publications/collections:

- publications have list of pages in embedded JSON metadata
- multi-volume publications - scrape individiual vols from the Browse page
- collections - scrape item details from Browse page
- map series - scrape item details from Browse page
- periodical issue ids from the `title` endpoint

Embedded JSOn metdata for publications also includes 

- lists of articles and chapters (check).
- previous / susequent titles (see: https://nla.gov.au/nla.obj-1740320424)

Example of article detail in publication issue embedded JSON (from: https://nla.gov.au/nla.obj-537658376)

```json
{
                "id": "58791853",
                "subType": "article",
                "pid": "nla.obj-587918530",
                "title": "PRINCIPAL'S MESSAGE",
                "creator": "",
                "bibLevel": "Section",
                "existson": [
                    {
                        "id": "53765989",
                        "page": "nla.obj-537659897"
                    },
                    {
                        "id": "53766003",
                        "page": "nla.obj-537660039"
                    },
                    {
                        "id": "53766016",
                        "page": "nla.obj-537660164"
                    }
                ]
            },
```

So publication metadata available (via embedded JSON):

- pages
- book chapters
- articles in an issue (including page ids)

+++

## Metadata

Get children of collections by scraping browse list, except for periodicals.

Get pages (also chapters, articles) of publications from JSON metadata

Get articles from search

MARC data in embedded JSON sometimes richer than API

+++

## Downloading text images and PDFs

Method is the same across different format types, but the results differ depending on whether it's a collection, publication etc.

+++

## Things you might want to do

- finding digitised resources
- Get all issues of a journal as PDFs
- All the text of a book
- Books with OCR
- Maps relating to a region
- images from a finding aid
- all images under a specific collection (including any subcollections)

## How tos

- Get a a list of items in a collection of digitised items (recursive for nested collections?)