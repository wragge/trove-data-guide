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

# HOW TO: Download higher resolution versions of images from the web interface

+++

One confusing, and often frustrating, aspect of [image downloads via the Trove web interface](downloading-images-web-interface) is their resolution. You can use the Trove image viewer to zoom right in to many photographs and manuscripts, enabling you to pick up fine details. But if you download the same image you could find the resolution is much lower. This means you're limited in how you can use the downloaded image. The available resolutions vary across categories and formats, and you really don't know what you'll get until you download it. Many manuscripts, in particular, seem to have low-resolution downloads, which doesn't help you much when you're trying to decipher someone's handwriting!

Here's a couple of ways to get higher resolution versions.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Use Dezoomify

[Dezoomify](https://dezoomify.ophir.dev/) is a really handy tool for downloading high resolution images from sites that provide 'deep zoom' image viewers. Deezoomify finds and downloads the highest available resolution from the image viewer, bypassing the download option (if there is one). Just cut and paste the url of the Trove image viewer into Dezoomify and click the button.

```{figure} ../../images/dezoomify.png
:name: dezoomify
:width: 500
Just paste a Trove url into the box and click the button to download the image.
```

Dezoomify works with many GLAM collections, not just Trove, so it's a useful addition to your digital research toolbox.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(accessing-data:howto:highres:urls)=
## URL hacking

There's an even easier way of getting high-resolution images from the web interface. All that's needed is a little {term}`url hacking`. Here's a link to a page in one of Alfred Deakin's diaries: 

<https://nla.gov.au/nla.obj-226267069/view>

Notice, in particular, the `view` at the end of the url. What happens when we change `view` to `image`? Try it!

<https://nla.gov.au/nla.obj-226267069/image>

The modified url loads the image in your browser. To save it, just right click on the image and select 'Save image as...' from the menu.

But what resolution is the saved image? Let's compare. I downloaded the same page using the 'Download' tab in the Trove image viewer. The resolution was 1000 × 1598 pixels. The version saved using the hacked url is 1896 × 3029 pixels – almost double the size.

This hack works in digitised books and journals, as well as images and manuscripts. You probably won't gain a higher resolution, as book and journal downloads already seem to provide images as their maximum size, but it's still a handy little hack.

The urls created by Trove's books and journals viewer are a bit more complicated. If you're browsing through a book the url might look something like this: 

`https://nla.gov.au/nla.obj-2921071294/view?partId=nla.obj-2921076647#page/n8/mode/1up` 

Note that this url contains two NLA identifiers:

- `nla.obj-2921071294` is the identifier of the work (in this case an almanac)
- `nla.obj-2921076647` is the identifier of the page you're currently viewing

It's the page identifier you need to get the image. Using it, construct a url that looks like this:

<https://nla.gov.au/nla.obj-2921076647/image>

Alternatively, you can click on the 'Cite' tab of the book viewer. Select 'Image' and you'll see the image identifier for the current page. Just add `/image` to the end of the image identifier to create the download link.

```{figure} ../../images/cite-tab-image-identifier.png
:name: cite-tab-image-id
:width: 300
Get the image identifier from the 'Cite' tab
```

+++

## Other possibilities

Here I've focused on methods you can use within your web browser to download a single image at high resolution. But what if you want all the covers of a journal, or all the documents in a manuscript collection? The [Accessing data](/accessing-data/data-access-options) section describes a number of alternative approaches.

```{code-cell} ipython3

```
