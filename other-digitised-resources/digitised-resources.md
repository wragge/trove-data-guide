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

# Understanding and using digitised resources

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

+++

This section describes how to access data from resources (other than newspapers and gazettes) that have been digitised by the NLA and partners and delivered through Trove. This includes things likes books, periodicals, photographs, maps, oral histories, and manuscript collections.

These resources are spread across multiple categories and mixed with records aggregated from other collections. This makes finding NLA digitised items quite challenging. The one exception to this is periodical articles, which have their own *Magazines & Newsletters* category.

Digitised resources can be found in the following categories:

- Books & Libraries (eg books and ephemera)
- Magazines & Newsletters (periodical articles)
- Images, Maps & Artefacts (eg photographs and maps)
- Research & Reports (eg government reports)
- Diaries, Letters & Archives (eg manuscript collections)
- Music, Audio & Video (eg sheet music and oral histories)

````{margin}
```{figure} /images/nla.obj-2383582349-1.jpg
:name: broadside-example

Is this a book? Example of a digitised broadside found in the *Books & Libraries* category. (<http://nla.gov.au/nla.obj-2383582349>)
```
````

As described in [](/understanding-search/finding-digitised-content.md) the most reliable method of finding digitised items within a category is to search for "nla.obj" and then apply additional facets as required.

However, the metadata describing digitised items is not always accurate or consistent. For example, the *Books & Libraries* category contains a large amount of digitised emphemera, such as pamphlets and posters. This material is in the *Books & Libraries* category because the `type` of these works has been set as `Book`, even though other formats might have been more appropriate. For example, there are more than a thousand ["broadsides"](https://trove.nla.gov.au/search/category/books?keyword=%22nla.obj%22%20broadsides&l-format=Book) (or posters) found in the *Books & Libraries* category. Similar sorts of digitised works can also be found in the *Images, Maps & Artefacts* category, where their `type` has been set as `Poster, chart, other`. This means that searching for digitised items can require a certain amount of exploration and iteration, as you learn more about the way they've been described and arranged.

<mark>==Something about works and versions here?==</mark>

Sometimes the digitised resources you find are not individual items, but *collections* of digitised items – books can have multiple volumes, maps can be arranged in series, and photographs can be digitised as albums. Search results can include records for a collection as well the individual items within that collection. For example, this record describes an [album of photographs from the B.A.N.Z. Antarctic Research Expedition](https://trove.nla.gov.au/work/30068558). But there are separate records for each individual photograph, such as this [cute penguin and baby](https://trove.nla.gov.au/work/22456751). There's no search option that lets you distinguish between a collection and its contents. 

The arrangment of items and collections is most complex in the *Diaries, Letters & Archives* category where hierarchical finding aids have been flattened out to aid discovery of their digitised contents. Collections there can contain a confusing mix of items and nested collections.

Once you've found a digitised item or collection, Trove provides a link to access the resource in one of a number of different 'viewers'. While these viewers share many characteristics, there can be differences in the way you navigate and download resources. This, in turn, affects your ability to access the underlying data.

This complex mix of categories, formats, and viewers makes it difficult to organise information about how to access data from digitised resources. To make it easier to understand all the differences and similarities, this section creates yet another grouping of resources!

- Books, pamphlets, and print music 
- Periodicals
- Government publications
- Posters and ephemera
- Photographs
- Maps
- Oral histories
- Manuscripts

<mark>==Need to mention the different uses of `type` and `format` in UI and API==</mark>

+++ {"editable": true, "slideshow": {"slide_type": ""}}

Introduce the complexities of categories and formats.


Explain differences between items and collections.


Categories containing digitised resources (other than newspapers):

- Books & Libraries
- Magazines & Newsletters
- Images, Maps & Artefacts
- Research & Reports
- Diaries, Letters & Archives
- Music, Audio & Video

Viewers for digitised content:

- Books/Journals
- Images/Maps
- Audio
- Born digital

Formats:

- Book
- Photo
- map etc

HOW TO on subsets?

- ephemera
- government publications
- oral histories

Books & Libraries

- Books
- Multi-volume books
- Government publications -- collections and single items
- Emphemera
- Periodical titles


Problems

- aggregated versions -- mixing of formats
- posters? can be images or ephemera (in book or image viewer)


### Books, pamphlets, print music -- collections and items

- in Books & Libraries, Research, Music
- print publications
- single or multi-pages
- collections (eg multi volume books) or items
- Use book viewer
- pages -- children of publications
- chapters?

#### Metadata

- work records
- embedded metadata
  - pages
  - chapters
- lists of items in collections


### Periodicals

- titles -- collections in Books & Libraries
- issues -- items in collections
- pages -- children of issues
- articles -- in Magazines & Newsletters

### Government publications

- Books, Research
- can be periodicals (eg annual reports)
- collections and items 
- book viewer
- search for `series:"Parliamentary paper (Australia. Parliament)"` seems more effective that using format "government Publication"

- seems that many gov publications have fulltext urls that actually point to a section id, rather than the actual publication: eg nla.obj-1363948030 is report but the link from work/10116167 goes to https://nla.gov.au/nla.obj-1520761853 which is a section of the report. See <https://api.trove.nla.gov.au/v3/work/10116167?encoding=json&include=workversions,links>. I think this is because the PPs are being treated as journal issues -- so there are links to articles, not issues.
- weird version  groupings: <https://trove.nla.gov.au/work/237938382/version/264507446%20264507456%20264507464%20264507475%20264507479%20264507486%20264507502%20264507507%20264507518%20264507589%20264507600%20264507607%20264507615%20264507622%20264507634%20264507640%20264507642%20264507648%20264507663%20264507890%20264507896%20264508005%20264508009%20264508015%20264508025%20264508041%20264508046%20264508054%20264508062%20264508074%20264508269%20264508275%20264508291%20264508303%20264508309%20264508316%20264508333%20264508385%20264508478%20264508484%20264508494%20264508502%20264508518%20264508530%20264508532>

### Posters and ephemera

- posters in finding aid: https://nla.gov.au/nla.obj-2590804313/findingaid?digitised=y

### Photos

### Oral histories



- Government publications -- collections and items
- Periodicals -- collections
- Images -- collections and items
- Maps -- collections and items
- Oral history
- Finding aids, manuscripts -- collections and items





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
- finding aid 'item' that is actually a collection: https://nla.gov.au/nla.obj-226146469/ (to browse all images you need to go down a level, but to download all images you need to be at collection level), also https://nla.gov.au/nla.obj-3199144271/view
- collections/items and how you browse/download each is very confusing in manscripts and finding aids
- at a collection level you only see the first image but can download all, at item level you can browse all images but only download one (need to add something about this to the web interface section)


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
