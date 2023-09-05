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

# Facets

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

+++

Not sure where this belongs…

Note that categories do not supply a full list of formats. It seems that they are filtered (particularly in Image, Sound) to only show those that are ‘relevant’. But if you explicitly search for a facet it will pop up in the list of facets, eg: <https://trove.nla.gov.au/search/category/images?keyword=&l-format=Book> (Book appears in facets) vs <https://trove.nla.gov.au/search/category/images?keyword=> (Book doesn’t appear in facets)

Facet numbers don’t add up – relationship between parents and children complex. This is formats from Book category:

```
Book                      16601754
Children                  7887342

Article                   7202750
Children                  7573654

Periodical                1910987
Children                  1912653

Microform                 949350

Conference Proceedings    472856

Audio book                317054

Government publication    218763

Archived website          32983

Thesis                    30434

Data set                  27
```

The Book parent contains more than it’s children (which is what you’d expect), but ‘Article’ parent contains fewer. Why?

+++

Magazines and newsletters:

- difference between `title` and `contribCollection` facets

```{code-cell} ipython3

```
