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

# Get positional information from OCR

+++

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

The OCR process not only extracts text from an image, it generates coordinates that document the position of each piece of text within the parent image. You could use this information to crop an image of the OCRd text out of the parent image. In the case of digitised newspapers, this sort of positional information could help you explore the layout and contents of newspaper pages and how this changes over time.

No positional information is available from the Trove API, however, there is some embedded within the web site. If you view the source of a newspaper article's web page, you'll find a number of `<input>` tags like this:

```html
<input id="l1.0.0" class="edit" type="text" aria-label="Line 1.0.0" data-x="2905" data-y="573" data-w="844" data-h="43" value="Mr. Wragge is going to issue a &quot;Wragge.&quot;" />
```

The `value` attribute of the tag includes the text of a single line. The `data` attributes provide the positional coordinates of that line:

- `data-x`: horizontal offset of the top left corner of a box surrounding the line (in pixels)
- `data-y`: vertical offset of the top left corner of a box surrounding the line (in pixels)
- `data-w`: the width of a box surrounding the line (in pixels)
- `data-h`: the height of a box surrounding the line (in pixels)

Individual lines are aggregated into blocks of content labelled as `zones` within the HTML. The position of each zone is also recorded:

```html
<div class="zone onPage readMode" data-page-id="5417618" data-x="2889" data-y="487" data-w="862" data-h="89" data-rotation="-1" style="display: none;">
```

Zones can also contain illustrations:

```html
<div class="illustration help-region onPage" data-x="4455" data-y="677" data-w="706" data-h="1031" data-caption="none" data-type="Cartoon" data-id="8281319" data-part="134576145" >
```

```{note}
The pixel values are absolute, so they relate to a page image at a specific resolution. This resolution is the highest available from the Trove web interface, with a zoom level of `7`. See below for [information on saving page images](download-a-page-image).
```

````{margin}
```{seealso}
For a full working example of this, see the GLAM Workbench notebook [Get the page coordinates of a digitised newspaper article from Trove](https://glam-workbench.net/trove-newspapers/#get-the-page-coordinates-of-a-digitised-newspaper-article-from-trove)
```
````

To get the coordinates of a box containing an entire article, you can add up the boxes for each zone. For example, assuming you have the zones in a list you could try:

```python
left = 10000
right = 0
top = 10000
bottom = 0
for zone in zones:
    if int(zone["data-y"]) < top:
        top = int(zone["data-y"])
    if int(zone["data-x"]) < left:
        left = int(zone["data-x"])
    if (int(zone["data-x"]) + int(zone["data-w"])) > right:
        right = int(zone["data-x"]) + int(zone["data-w"])
    if (int(zone["data-y"]) + int(zone["data-h"])) > bottom:
        bottom = int(zone["data-y"]) + int(zone["data-h"])
```

We can use this information to extract the image of an individual article or illustration from a page image. See below for details.

With an extra little trick you can even get the coordinates of an individual word. This information is not ordinarily contained within the HTML, *but* if you search for a particular word, that word is wrapped in a `<span>` tag that applies highlighting and includes the page coordinates. Here's a line of text with a highlighted word:

```html
<div class="read"><span class="highlightedTerm" data-x="4458" data-y="1949" data-w="129" data-h="32">Wragge,</span> the Government Meteorologist of</div>
```

You can see that the `<span>` element includes the same set of `data` attributes as before, defining a box around the highlighted word.

In theory, you could write some code that gets the positions of every word in an article by looping through the words, adding each one to the page url's `searchTerm` parameter so that it's highlighted, then grabbing the coordinates from the `<span>`. It would be rather inefficient though.

As described below, you can use this information to save images of individual words.

```{code-cell} ipython3

```
