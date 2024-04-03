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

# Interfaces

+++

For most users, Trove is defined by its web interface – by the screens, buttons, boxes, links, and lists you interact with as you navigate around the site. This Guide focuses on getting and using the data that sits behind the web interface, but, in some cases, access to data is constrained by the design and functioning of the website. It's therefore useful to think about the different components of the web interface and how they fit together.

+++

(interfaces:home)=
## Trove welcome, news, and help pages

The [Trove home page](https://trove.nla.gov.au/), and the various news and documentation pages connected to it, are delivered through a content management system. New articles are added regularly. You can catch up on what's been posted recently on the [News](https://trove.nla.gov.au/news) page. Unfortunately there's no functional RSS feed.

```{figure} /images/collection-feature.png
:name: collection-feature
A collection feature on Natural History Books  
<https://trove.nla.gov.au/collection/BHL/biodiversity/explore>
```

Of particular interest are the [Collection Features](https://trove.nla.gov.au/news?type=trove_collection_feature) which present curated subsets of Trove resources. These include some basic visualisations, and an option to search within the collection subset. However, there doesn't seem to be any way of downloading information about the complete set of items in a subset. The usual Bulk Download option isn't available, and the main Trove API doesn't know anything about these 'collections'.

Some useful links are hidden in unexpected places:

* the [Newspapers & Gazettes browse interface](https://trove.nla.gov.au/newspaper) is linked from the [Explore](https://trove.nla.gov.au/landing/explore) tab
* the [thematic collection of web sites](https://webarchive.nla.gov.au/collection) selected for preservation is linked from the [Categories](https://trove.nla.gov.au/landing/categories) tab
* API documentation can be found under the [**About > Create something**](https://trove.nla.gov.au/about/create-something) menu item

+++

(interfaces:search)=
## Search interface

The search application is at the heart of Trove, giving users a single entry point to a range of different systems and formats. See the [Trove help system](https://trove.nla.gov.au/help/searching/search) for an introduction, and the [Understanding search](/understanding-search/index) section of this Guide for hints and tricks.

Trove's search interface includes a number of different components.

(interfaces:search-simple)=
### 'Simple' search box

```{figure} /images/search-box.png
:name: search-box
Trove's simple search box 
```

Simple in design, but powerful in function – see [](/understanding-search/simple-search-options) for information on constructing complex queries.

(interfaces:search-advanced)=
### 'Advanced' search form

```{figure} /images/advanced-search.png
:name: advanced-search
The advanced search form for digitised newspapers
```

Advanced search doesn't really add any search options (except in the websites category), but it does layer a structured interface over the standard query options. Each category has it's own version of the advanced search form with slightly different fields.

(interfaces:search-summary)=
### Search results summary

```{figure} /images/search-summary.png
:name: search-summary
An example of the results presented by the search summary screen
```

The search results summary page provides a single page overview of results across all categories (except websites). It displays the total number of results in each category, the three top results, and a link to view the complete set of results.

(interfaces:search-results)=
### Search results

```{figure} /images/search-results.png
:name: search-results
An example of search results in the newspapers category
```

The search results page lists twenty results at a time (more [with a little url hacking](search:hacks:results-per-page)), and most categories provide options to sort and filter the results. The **Images, Maps & Artefacts** category displays results in a grid rather than a list.

+++

## Work and version records

See [Trove records](https://trove.nla.gov.au/help/navigating/trove-records) in the Trove help documentation for an introduction.

Works are the basic units of description for the categories that contain aggregated content:

* Books & Libraries
* Diaries, Letters & Archives
* Images, Maps & Artefacts
* Magazines & Newsletters
* Music, Audio & Video
* Research & Reports

Trove tries to [group all the versions of a particular resource into a single work](/what-is-trove/works-and-versions). If a work contains multiple versions (called 'Editions' in the web interface), then the default work view will provide a list of available versions to select from. If there's only one version then that version record will be displayed automatically.

### Work


```{figure} /images/work-view-record.png
:name: work-view-record
A work record containing multiple versions  
[https://trove.nla.gov.au/work/34731475](https://trove.nla.gov.au/work/34731475)
```

```{figure} /images/work-view-editions.png
:name: work-view-editions
Select a version of this work from the list  
[https://trove.nla.gov.au/work/34731475](https://trove.nla.gov.au/work/34731475)
```

### Version

```{figure} /images/work-view-version.png
:name: work-view-version
A single version record  
[https://trove.nla.gov.au/work/34731475/version/264818091](https://trove.nla.gov.au/work/34731475/version/264818091)
```

+++

## Newspapers

See [Newspaper viewer](https://trove.nla.gov.au/help/navigating/newspaper-viewer) in the Trove help documentation for an introduction.

### Browse interface

```{figure} /images/newspaper-browse.png
:name: newspaper-browse
The Newspapers & Gazettes browse interface  
[https://trove.nla.gov.au/newspaper/](https://trove.nla.gov.au/newspaper/)
```

### Title browser

```{figure} /images/newspaper-titles-list.png
:name: newspaper-titles-list
Browse a list of newspaper titles  
[https://trove.nla.gov.au/newspaper/about](https://trove.nla.gov.au/newspaper/about)
```

### Title details

```{figure} /images/newspaper-title.png
:name: newspaper-titles-list
View the details of a single title, in this case, the *Canberra Times*   
[https://nla.gov.au/nla.news-title11](http://nla.gov.au/nla.news-title11)
```

### Page viewer

```{figure} /images/newspaper-page.png
:name: newspaper-page
View details of all the articles on a single page  
[https://nla.gov.au/nla.news-page16636766](http://nla.gov.au/nla.news-page16636766)
```

### Article viewer

```{figure} /images/newspaper-article.png
:name: newspaper-article
View a single article  
[https://nla.gov.au/nla.news-article162833980](http://nla.gov.au/nla.news-article162833980)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Digitised content viewers

There are different viewers for different types of digitised content. Most of the viewers share a basic design and set of functions, however, the audio player is quite distinct.

You're most likely to arrive at one of the digitised content viewers from a link in a work record. However, the viewers don't include links *back* to work records in Trove. Instead they usually include links to the NLA's catalogue. If you want to find the corresponding work record (or records) in Trove, you'll need to construct a search using the [digital object identifier](identifiers:digitised-resources).

The amount of metadata presented in the digitised content viewers varies, and it doesn't always match what's in the work record. Interestingly, the HTML of the viewers embeds additional metadata as a JSON object. You [can extract this data](/other-digitised-resources/how-to/extract-embedded-metadata) and use it to do things like [downloading text, images, and PDFs](/other-digitised-resources/how-to/download-items-text-images).

(interfaces:digitised-collection-viewer)=
### Collection viewer

```{figure} /images/digital-collection.png
:name: digital-collection
View a collection of digitised items 
[https://nla.gov.au/nla.obj-141170265](https://nla.gov.au/nla.obj-141170265)
```

The **Browse this collection** button opens a modal window that lets you navigate through the items in the collection. This list is generated by an internal web request that returns an HTML fragment. You can [use these fragments to assemble machine-readable data](/other-digitised-resources/how-to/get-collection-items) about the items in a collection.

```{figure} /images/digital-collection-images.png
:name: digital-collection-images
View a list of items within a digital collection
[https://nla.gov.au/nla.obj-141170265](https://nla.gov.au/nla.obj-141170265)
```

Digital collections can contain a range of formats. For example they can describe multi-volume books, list all the issues in a periodical, display all the photographs in an album, or describe a collection of ephemera. They can even contain other collections.

```{figure} /images/digital-collection-journal.png
:name: digital-collection-journal
View a list of the issues available from a digitised periodical  
[http://nla.gov.au/nla.obj-52986893](http://nla.gov.au/nla.obj-52986893)
```

(interfaces:digitised-journal-viewer)=
### Book and journal viewer

```{figure} /images/digital-book-viewer.png
:name: digital-book-viewer
View a digitised book  
[https://nla.gov.au/nla.obj-3071128587](https://nla.gov.au/nla.obj-3071128587)
```

```{figure} /images/digital-journal-viewer.png
:name: digital-journal-viewer
View an issue from a digitised periodical  
[https://nla.gov.au/nla.obj-3084411245](http://nla.gov.au/nla.obj-3084411245)
```

### Image viewer

See [Image viewer](https://trove.nla.gov.au/help/navigating/image-viewer) in the Trove help documentation for an introduction.

```{figure} /images/digital-image-viewer.png
:name: digital-image-viewer
View a digitised image  
[https://nla.gov.au/nla.obj-141171324](http://nla.gov.au/nla.obj-141171324)
```

### Map viewer

See [Map viewer](https://trove.nla.gov.au/help/navigating/map-viewer) in the Trove help documentation for an introduction.

Some map series have a clickable index to enable you to navigate around the collection.

```{figure} /images/digital-map-index.png
:name: digital-map-index
Navigate around a map series by clicking on the index  
[https://nla.gov.au/nla.obj-234062874](https://nla.gov.au/nla.obj-234062874)
```

```{figure} /images/digital-map.png
:name: digital-map
View a digitised map  
[https://nla.gov.au/nla.obj-234078097](https://nla.gov.au/nla.obj-234078097)
```

### Finding aids

See [Finding aids](https://trove.nla.gov.au/help/navigating/finding-aids) in the Trove help documentation for an introduction.

```{figure} /images/digital-finding-aid.png
:name: digital-finding-aid
Browse a finding aid for items of interest  
[https://nla.gov.au/nla.obj-225220821](https://nla.gov.au/nla.obj-225220821)
```

If sections of a finding aid are digitised, you can click on the image icon to open a modal window with a list of available items.

```{figure} /images/digital-finding-aid-items.png
:name: digital-finding-aid-items
Browse a list of digitised items  
[https://nla.gov.au/nla.obj-225220821](https://nla.gov.au/nla.obj-225220821)
```

Clicking on one of the digitised items in a finding aid opens the item in the digital image viewer (or one of the other digital object viewers).

```{figure} /images/digital-finding-aid-item.png
:name: digital-finding-aid-item
View an item from a finding aid  
[https://nla.gov.au/nla.obj-225288469](https://nla.gov.au/nla.obj-225288469)
```

### Audio player

See [Audio player](https://trove.nla.gov.au/help/navigating/audio-player) in the Trove help documentation for an introduction.

```{figure} /images/audio-player.png
:name: audio-player
Listen to an audio recording  
[https://nla.gov.au/nla.obj-222456429](https://nla.gov.au/nla.obj-222456429)
```

+++

## Born digital publications

### PDF

```{figure} /images/born-digital-pdf.png
:name: born-digital-pdf
Read a born digital publication in PDF format  
[https://nla.gov.au/nla.obj-799207608](https://nla.gov.au/nla.obj-799207608)
```

### epub

```{figure} /images/born-digital-epub.png
:name: born-digital-epub
Read a born digital publication in epub format  
[https://nla.gov.au/nla.obj-1310550566](https://nla.gov.au/nla.obj-1310550566)
```

+++

## Web archives – search, view, collections

### Search

```{figure} /images/websites-search.png
:name: websites-search
Search for a keyword in the archived websites
```

```{figure} /images/websites-search-domain.png
:name: websites-search-domain
View search results within a specific web domain  
```

### View

```{figure} /images/websites-view.png
:name: websites-view
View an archived web page  
[https://webarchive.nla.gov.au/awa/20080718191843/http://www.bom.gov.au/](https://webarchive.nla.gov.au/awa/20080718191843/http://www.bom.gov.au/)
```

### Website title page

```{figure} /images/websites-title.png
:name: websites-title
Browse a list of issues or snapshots of a website selected for preservation   
[https://webarchive.nla.gov.au/tep/11045](https://webarchive.nla.gov.au/tep/11045)
```

### Website collection

```{figure} /images/websites-collection.png
:name: websites-collection
Browse a collection of websites selected for preservation  
[https://webarchive.nla.gov.au/collection/20575](https://webarchive.nla.gov.au/collection/20575)
```

+++

## Lists

### View

```{figure} /images/list-view.png
:name: list-view
View a Trove list  
[https://trove.nla.gov.au/list/83777](https://trove.nla.gov.au/list/83777)
```

### Manage

```{figure} /images/list-edit.png
:name: list-edit
Manage a Trove list  
```

+++

## User profile

```{figure} /images/user-profile.png
:name: user-profile
View your Trove user profile  
```

```{code-cell} ipython3

```
