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

# HOW TO: Get information about images in a collection

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Collection

Embedded metadata of collection:

- `bibLevel`: `Set`

Top level record: `pid` == `topLevelCollection`

No `copies`

Searching for the collection identifier only returns the collection -- ie you can't search for items in a collection.

## Subcollection?

Subcollections are just items in the parent collection (ie the first image in the subcollection is an item in the parent).

There doesn't seem to be anything in the item metadata to indicate this.

When harvesting items from the collection list modal, links on 'children' go to the first item in subcollection, which will have it's own browse modal that can be scraped. (Note that child links in journals are the page ids which get redirected to issue ids, so they're effectively the same link, but in images they go to different levels in hierarchy)

So I suppose adjust collection scraping code to only get items without more than 1 chidren, then go down hierarchy to get members of subcollections.

    parent collection --  -- `bibLevel` == `Set`
    
    - item -- `bibLevel` == `Item`
    - item
    - item which is first member of subcollection (can navigate down to get to subcollection, although link goes to first item in subcollection, which is to the same image, but different id) -- `bibLevel` == `Item`
        - first item in subcollection (usually the image is the same as item above (but not always -- see https://nla.gov.au/nla.obj-147116781/view), but with different id and metadata?) -- has it's own browse modal for subcollection -- `bibLevel` == `Part`
        - more subcollection items -- `bibLevel` == `Part`

Members of a subcollection have `bibLevel` == `Part`

Members of a subcollection can have less metadata than item if it's a cover or the back of a photo etc -- eg no MARC record -- but can get data from `parent`. I assume that these sorts of items aren't individually findable in search. Other subcollection memebers with metadata do seem to be individually findable (but who knows if everything is?).

## Item

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```
