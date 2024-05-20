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

# Working with a Trove collection in Tropy

```{contents}
:local:
:backlinks: None
```

+++

## Scenario

You want to be able to work on a collection of digitised images from Trove on your desktop – adding notes, transcriptions, and annotations. In the future you might want to share your research online.

+++

## Tools and standards

`````{grid}
:gutter: 3

````{grid-item-card} IIIF
:columns: 4

![IAW logo](/images/iiif_notext.png)

IIIF is a set of open standards for delivering high-quality, attributed digital objects online at scale. 

+++
```{button-link} https://iiif.io/
:color: primary
More info
```
````

````{grid-item-card} Tropy
:columns: 4

![IAW logo](/images/tropy-icon-light.png)

Tropy is free, open-source software that allows you to organize and describe photographs of research material.

+++
```{button-link} https://tropy.org/
:color: primary
More info
```
````
`````

+++

## Method

- find the collection identifier
- generate an IIIF manifest
- configure Tropy
  - template
  - vocab
- import manifest

+++

## Identifying a collection in Trove

The first thing you need is a collection to harvest! More specifically, you need to find a collection's landing page in Trove's digitised collection viewer. Once you've found the collection page, you can copy its `nla.obj` identifier.

### Finding collection pages

<-- see also link to GW list of finding aids? -->

Trove groups digitised resources into collections of different shapes and sizes. Here are some examples:

- [a finding aid describing the papers of Sir Edmund Barton](https://nla.gov.au/nla.obj-224441684)
- [an album of photographs from the B.A.N.Z. Antarctic Research Expedition](https://nla.gov.au/nla.obj-141170265)
- [a collection of postcards featuring actresses and Australian towns](https://nla.gov.au/nla.obj-140670968)

Collections can contain a variety of formats including photographs, posters, art works, ephemera, letters, and manuscripts.

Finding collections in Trove can be tricky because there's no way of filtering search results to only show collections. This means your search results might include collections, as well as individual items from those collections. See [](../../understanding-search/finding-digitised-content) for help with finding digitised resources. Search results will include a **View** link that takes you to Trove's digital resource viewer.

Most collections have a landing page with a big green button that says 'Browse this collection'. 

```{figure} ../../images/collection-album-landing.png
:width: 600px
:name: collection-album-landing

The landing page for the B.A.N.Z. Antarctic Research Expedition photographs (https://nla.gov.au/nla.obj-141170265)
```

If your search results lead to an item within a collection, rather than a landing page, you can usually navigate up the collection hierarchy by using the breadcrumb links.

```{figure} ../../images/collection-breadcrumbs.png
:width: 600px
:name: collection-breadcrumbs

An photo within the B.A.N.Z. Antarctic Research Expedition collection (https://nla.gov.au/nla.obj-141171021) – clicking on the breadcrumb link will take you up to the collection landing page.
```

Collections can also include other collections. For example, the Barton Papers are divided into series, and each series has its own landing page. Here's the landing page for [Series 6, Papers relating to the Federation Campaign](https://nla.gov.au/nla.obj-224441858). However, the finding aid only links to items within a series, not to the series landing page itself. To get to the series page from the finding aid, you need to go down the hierarchy to an item in the series, then back up the breadcrumbs trail.

Navigation within collections can be confusing, and it can sometimes be hard to tell what level of the collection hierarchy you're actually on. Because of this it might take a bit of trial and error to get to the page you need to harvest the collection data you're actually interested in.

### Getting the collection's `nla.obj` identifier

Once you've found the collection's landing page you need to copy its `nla.obj` identifier. You can find the identifier in a couple of places.

If the page has a **Cite** button or tab, click on it to reveal more information about the collection, including the identifier.

```{figure} ../../images/collection-cite-identifier.png
:name: collection-cite-identifier
:width: 600px
Clicking on the **Cite** button reveals the collection's identifier.
```

You don't need the full identifier url, just the section that starts with `nla.obj`. So, in the example above, the identifier value would be `nla.obj-141170265`.

Alternatively, you can just grab the identifier from your browser's location bar.

```{figure} ../../images/collection-url-identifier.png
:name: collection-url-identifier
:width: 600px
Your browser's location bar includes the identifier of the current page.
```

Copy the `nla.obj` to use in the next step.

+++

## Saving a Trove collection as an IIIF manifest

The first step in importing Trove data into Tropy is to save the data in a format that Tropy understands. Tropy has plugins that enable it to import data from CSV files and IIIF manifests. You can save a Trove collection as an IIIF manifest using [this noteboook](https://glam-workbench.net/trove-images/save-image-collection-iiif/) in the GLAM Workbench.

### What is IIIF?

The [International Image Interoperability Framework](https://iiif.io/), more conveniently known as IIIF, develops open standards for sharing digital objects, such as images. IIIF platforms and standards are used by GLAM organisations around the world to deliver their image collections online.

Once you have standards for sharing image metadata, people can build tools that work across collections. For example, [Universal Viewer](https://universalviewer.io/) and [Mirador](https://projectmirador.org/) are both richly featured, open source, community developed image viewing platforms.

IIIF manifests are JSON files that describe a set of digital objects. They include technical information about the images and how to access them, as well as metadata describing their content and context. Everything you need to explore the images is packaged up in a single, standards based file. This means that if you point a manifest at tools like Universal Viewer and Mirador, they can present the images to users without any special configuration. Similarly, Tropy knows what to expect when you import data from an IIIF manifest.

Unfortunately Trove doesn’t provide data using IIIF standards. Indeed, it doesn’t really supply any machine-readable data about the contents of digital collections. The GLAM Workbench notebook scrapes metadata from Trove’s digital collection viewer, reassembling it as a standard IIIF manifest.

### Running the notebook

Go to [Save a collection of digitised images as an IIIF manifest](https://glam-workbench.net/trove-images/save-image-collection-iiif/) in the Trove images section of the GLAM Workbench.

This notebook, like all GLAM Workbench notebooks, needs to be run in a customised computing environment. The easiest way to do this is through BinderHub. BinderHub is a cloud-based service that gets a notebook up and running by reading its requirements from a code repository, and creating the necessary environment. The GLAM Workbench is integrated with two BinderHub services:

- [ARDC Binder](https://ardc.edu.au/services/ardc-nectar-research-cloud/ardc-binderhub-service/) – based in Australia, requires login using university credentials
- [MyBinder](https://mybinder.org/) – international, no login required

If you have a login at an Australian university or research agency, try the ARDC Binder service first. It's a little more effort, but it's usually faster and more reliable than the public MyBinder service which can have capacity issues.

The GLAM Workbench displays a preview of the notebook, with options to run it using either the ARDC Binder of MyBinder service.

```{figure} ../../images/gw-iiif-nb.png
:width: 600px
:name: gw-iiif-nb

```

#### Using ARDC Binder

To use the ARDC Binder service, click on the ARDC Binder tab under the notebook preview. You should see a big, blue **Run live on ARDC Binder** button. Click on the button to launch the Binder service.

If this is the first time you've used the ARDC Binder service you'll be asked to login using the Australian Access Federation (AAF).

```{figure} ../../images/ardc-binder-aaf-login.png
:width: 600px
:name: gw-iiif-nb

```

Click on the **Sign in with AAF/Tuakiri** button. You'll be asked to select either AAF or Tuakiri – select AAF.

To sign in with AAF, select your institution from the list, then click the **Continue to your organisation** button.

```{figure} ../../images/aaf-institutions-select.png
:width: 300px
:name: aaf-institutions-select

```

You'll be redirected to your insitution's login screen. Log in using your usual credentials. Once you've logged in you'll be redirected back to ARDC Binder and the notebook will start to load. You might have to wait a bit while a customised computing environment is prepared for you. If you see a message saying that things are taking a long time and there might be a problem, just ignore it. Eventually the notebook will load in the Jupyter Lab interface.

#### Using MyBinder

```{figure} ../../images/mybinder-tab.png
:width: 600px
:name: mybinder-tab

```

To use the MyBinder service, click on the MyBinder tab under the notebook preview. You should see a big, blue **Run live on MyBinder** button. Click on the button to launch the Binder service. No login is required, so MyBinder immediately starts building a customised computing environment. This can take a while, but eventually the notebook should load in the Jupyter Lab interface.

### Using the notebook in Jupyter Lab

No matter what service you use to run the notebook, the result will be the same – the notebook will open in the Jupyter Lab interface.

```{figure} ../../images/iiif-nb-jupyterlab.png
:width: 600px
:name: iiif-nb-jupyterlab

```

The Jupyter Lab interface has two main panes – a file browser is on the left, while the current notebook is displayed in the main, central pane.

Scroll down the notebook until you come to a line that reads `create_manifest_v3("nla.obj-140670968")`. You need to edit this line to save your collection for Tropy:

- click on the line of code, you'll see the border of the cell is highlighted – this means it's ready for editing
- change `create_manifest_v3` to `create_manifest_v2` (this tells the notebook to create a manifest that conforms to version 2 of the IIIF API)
- replace the `nla.obj-140670968` value with the identifier of the collection you want to harvest (keep the double quotes around the identifier)

For example, the B.A.N.Z. Antarctic Research Expedition collection mentioned above has the identifier `nla.obj-141170265`. To tell the notebook to save this collection as an IIIF manifest, you need to change the line of code to `create_manifest_v2("nla.obj-141170265")`.

```{figure} ../../images/create-manifest-after.png
:width: 600px
:name: create-manifest-after

Change `v3` to `v2` and insert your collection's identifier as shown
```

You can now start the harvest! From Jupyter Lab's 'Run' menu select 'Run all cells'. You'll notice that the square brackets next to the line of code you edited will now contain an asterisk. This indicates the code is running. Once it's finished, the asterisk will change to a number.

The harvesting process gathers information from every item in the collection. This takes time. Depending on the size of the collection, it could take a few minutes, or more than an hour, to generate the IIIF manifest. You'll know that the harvest has finished when the asterisk in the square brackets has changed to a number, and a new `manifests` folder has appeared in the file browser.

```{figure} ../../images/iiif-manifests-folder.png
:width: 600px
:name: iiif-manifests-folder

Double click to open the folder
```

Once the harvest has finished, double click on the `manifests` folder to open it. Your newly-created IIIF manifest will be inside.

```{figure} ../../images/iiif-manifest-download.png
:width: 600px
:name: iiif-manifest-download

Right click on the file
```

Right-click on the manifest file and select 'Download' from the menu. The manifest file will be saved to your local computer.

+++

## Installing Tropy and the IIIF Manifest plugin

+++

## Configuring Tropy (optional)

+++

## Importing the manifest into Tropy

+++

## Troubleshooting

+++

## Going further
