---
jupytext:
  formats: ipynb,md:myst
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

+++ {"user_expressions": []}

# Metadata and digital objects



+++

### Working notes

Trove is a mix

Often we want the digital objects – text and images, allow more options

But possibilities with metadata – looking at patterns over time, understanding collections, studying authorship. (Some viz examples?)

Aggregating data from other systems, can allow us to explore it in ways the original systems didn’t allow. (ABC RN?)

Sometimes aggregated metadata points to digital objects in other systems – fulltext (but problems)

Images are delivered in many different ways.

Just because a digital object exists, it doesn’t mean it’s accessible (repositories that require log-ins, NED publications that can only be accessed in-house)

From API Console – The `fullTextInd` index seems quite misleading as it includes articles from commercial databases where only a truncated sample of the full text is actually available, and electronic legal deposit works  where access to the text is restricted (also Open Library). It would seem better to combine  this indicator with a search for "nla.obj" or `nuc:ANL:DL` to try and limit to resources digitised by the NLA and partners.

`availability` : Whether the item is online or not. 			

`y`  – online

`y/f` – freely accessible online

But what does ‘freely accessible’ mean?

`identifier - fulltext` indicates something is online

`free_to_read` – no access restriction

```{code-cell} ipython3

```
