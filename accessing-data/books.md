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

# Books

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

+++

You can get text via the API, but you have to add `include=workversions` then loop through versions, looking in the `description` field for a `value` with `"type": "open_fulltext"`.

I think there are limits on the amount of text you can get from the API -- need to test this.

```{code-cell} ipython3

```
