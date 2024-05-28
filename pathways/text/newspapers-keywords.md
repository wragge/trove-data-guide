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

# Analysing keywords in Trove's digitised newspapers

You want to explore differences in language use across a collection of digitised newspaper articles. The [Australian Text Analytics Platform](https://www.atap.edu.au/) provides a [Keywords Analysis tool](https://github.com/Australian-Text-Analytics-Platform/keywords-analysis) that helps you examine whether particular words are over or under-represented across collections of text. But how do get data from Trove's newspapers to the keyword analysis tool?

+++

- constructing a search
- API key
- Using Binder
- Trove Newspaper Harvester
- understanding results
- reshaping results
- Using ATAP
- keyword analysis
- uploading text

+++

## Tools 
`````{grid}
:gutter: 3

````{grid-item-card} Trove Newspaper & Gazette Harvester
:columns: 6

![GLAM Workbench logo](/images/gw-icon.png)

The Trove Newspaper & Gazette Harvester makes it easy to download large quantities of digitised articles from Trove's newspapers and gazettes.

+++
```{button-link} https://glam-workbench.net/trove-harvester/
:color: primary
More info
```
````

````{grid-item-card} KeywordsAnalysis Tool
:columns: 6

![ATAP logo](/images/atap-logo.png)

Use the KeywordsAnalysis tool to analyse words in a collection of corpus and identify whether certain words are over or under-represented in a particular corpus (the study corpus) compared to their representation in other corpus (the reference corpus).

+++
```{button-link} https://github.com/Australian-Text-Analytics-Platform/keywords-analysis/
:color: primary
More info
```
````
`````

+++

## Getting your own Trove API key

The Trove Newspaper & Gazette Harvester downloads data using Trove's Application Programming Interface (API). Access to the API is managed through the use of 'keys'. You'll need your own API key to use the Harvester. Fortunately, it's quick and easy to get a key for non-commercial use. See Trove's [Using the API](https://trove.nla.gov.au/about/create-something/using-api) help page for full details, but in summary you need to:

- [create a Trove user account](https://trove.nla.gov.au/help/your-trove-account/creating-account) (if you don't have one already)
- login to your user account and go to your profile
- click on the 'For developers' tab
- fill in and submit the API application form

```{warning}
Your API key will be displayed as soon as you submit the application form, however, it can take several minutes for the key to be activated. If you receive authentication errors when you try to use the key, wait a little while and then try again.
```
Your API key is just a string of random letters and numbers. Any time you need it, just go back to the 'For developers' tab in your user profile and copy the key from the page.

```{figure} ../../images/trove-user-api-tab.png
:width: 600px
:name: trove-user-api-tab

Your API will be displayed in the 'For developers' tab of your user profile.
```

+++

## Constructing your search

The first step is constructing a search that will return relevant newspaper articles. This is harder than it seems. Yes, you can just plug keywords into Trove's search interface and get back interesting looking results. But it's important to keep in mind the differing needs of *discovery* versus *analysis*. Your aim here is not to find a few useful articles, but to construct a dataset containing *all* the articles returned by your search query. **Everything.** When you're searching for individual articles you can usually just ignore the fact that there are millions of articles in your search results, as Trove's relevance ranking pushes the most likely candidates to the top. But if you're creating a dataset, you want to be as precise as possible to avoid including unwanted noise.

```{admonition} Relevance in bulk harvests
:class: note
Unlike the web interface, when you harvest newspaper articles from the Trove API they're ordered by their identifier, not their relevance. So you can't just get the first few hundred articles and assume you've got the most important stuff. However, the API results do include a relevance score that you can use to filter the dataset *after* you've finished harvesting. This is discussed further below.
```

There are a few ways of making your search more precise:

- [de-fuzzify your results](search:simple:defuzzify) by controlling the precision of text searches
- use [proximity searches](search:simple:proximity) to specify the distance between search terms
- [apply facets](search:simple:facets) to limit your results – in particular you might want to use:
  - **Type** to include newspapers (or gazettes) only
  - **Category** to specify the type of articles (do you really want to include advertisements?)
  - **Place** to specify the state in which articles were published
  - **Word Count** to limit to articles of a particular length
  - **Date range** to specify the date span (do you really want everything from 1803 to 2020?)
 
Once you're happy with your search, copy the url in your browser's location bar. You'll need this url to run the Trove Newspaper & Gazette Harvester.

```{figure} ../../images/trove-search-location-bar.png
:width: 600px
:name: trove-search-location-bar

Copy the url in your browser's location bar.
```

+++

## Trove Newspaper & Gazette Harvester

The [Trove Newspaper & Gazette Harvester](https://glam-workbench.net/trove-harvester/) is a tool that helps you harvest metadata, text, and images from a search in Trove's digitised newspapers. You just give the harvester the url of a search and it will create a dataset containing hundreds, thousands, even millions of articles.

The Trove Newspaper & Gazette Harvester is available in a number of different forms according to your needs and skills. You can use it as:

- [a simple web app](https://glam-workbench.net/trove-harvester/harvester-web-app/)
- [a Jupyter Lab notebook](https://glam-workbench.net/trove-harvester/basic-harvester-example/)
- [a command line tool](https://wragge.github.io/trove-newspaper-harvester/cli.html)
- [a Python package](https://wragge.github.io/trove-newspaper-harvester/core.html) embedded in your own data processing workflows

This tutorial uses the Jupyter Lab notebook available in the GLAM Workbench. You'll need:

- a Trove API key
- the url of your search in the Trove web interface

## Starting the notebook

Go to [Using the Trove Harvester as a Python package](https://glam-workbench.net/trove-harvester/basic-harvester-example/) in the Trove newspaper harvester section of the GLAM Workbench.

This notebook, like all GLAM Workbench notebooks, needs to be run in a customised computing environment. The easiest way to do this is through BinderHub. BinderHub is a cloud-based service that gets a notebook up and running by reading its requirements from a code repository, and creating an environment with the necessary software. The GLAM Workbench is integrated with two BinderHub services:

- [ARDC Binder](https://ardc.edu.au/services/ardc-nectar-research-cloud/ardc-binderhub-service/) – based in Australia, requires login using university credentials
- [MyBinder](https://mybinder.org/) – international, no login required

If you have a login at an Australian university or research agency, try the ARDC Binder service first. It's a little more effort, but it's usually faster and more reliable than the public MyBinder service which can have capacity issues.

The GLAM Workbench displays a preview of the notebook, with options to run it using either the ARDC Binder or MyBinder service.

```{figure} ../../images/gw-harvester-package.png
:width: 600px
:name: gw-iiif-nb

The GLAM Workbench provides a number of ways you can run the notebook.
```

### Using ARDC Binder

To use the ARDC Binder service, click on the ARDC Binder tab under the notebook preview. You should see a big, blue **Run live on ARDC Binder** button. Click on the button to launch the Binder service.

If this is the first time you've used the ARDC Binder service you'll be asked to login using the Australian Access Federation (AAF).

```{figure} ../../images/ardc-binder-aaf-login.png
:width: 600px
:name: gw-iiif-nb

ARDC Binder will ask you to log in using AAF
```

Click on the **Sign in with AAF/Tuakiri** button. You'll be asked to select either AAF or Tuakiri – select AAF.

To sign in with AAF, select your institution from the list, then click the **Continue to your organisation** button.

```{figure} ../../images/aaf-institutions-select.png
:width: 300px
:name: aaf-institutions-select

Select your institution from the AAF list
```

You'll be redirected to your insitution's login screen. Log in using your usual credentials. Once you've logged in you'll be redirected back to ARDC Binder and the notebook will start to load. You might have to wait a bit while a customised computing environment is prepared for you. If you see a message saying that things are taking a long time and there might be a problem, just ignore it. Eventually the notebook will load in the Jupyter Lab interface.

### Using MyBinder

```{figure} ../../images/mybinder-tab.png
:width: 600px
:name: mybinder-tab

Click on the MyBinder tab.
```

To use the MyBinder service, click on the MyBinder tab under the notebook preview. You should see a big, blue **Run live on MyBinder** button. Click on the button to launch the Binder service. No login is required, so MyBinder immediately starts building a customised computing environment. This can take a while, but eventually the notebook should load in the Jupyter Lab interface.

## Running your harvest

No matter what service you use to run the notebook, the result will be the same – the notebook will open in the Jupyter Lab interface.

```{figure} ../../images/harvester-nb.png
:width: 600px
:name: iiif-nb-jupyterlab

The notebook running in Jupyter Lab.
```

The Jupyter Lab interface has two main panes – a file browser is on the left, while the current notebook is displayed in the main, central pane.

Scroll down the notebook until you come to the section **Set your Trove API key**. Underneath the text is a code cell that sets the value of the API key to use with the harvester. Click on the code cell to activate it for editing (you'll notice the border turns blue). Paste your API key where indicated between the double quotes.

```{figure} ../../images/trove-harvester-api-key.png
:width: 600px
:name: trove-harvester-api-key

Paste your API key between the quotes.
```

Scroll further to the next section headed **Set your search query**. This is where you set the search url that the harvester will use to create your dataset. Click on the code cell and paste your url between the double quotes. The Newspaper & Gazette Harvester takes the url from your search and automatically translates it into a form the API understands.

```{figure} ../../images/trove-harvester-query.png
:width: 600px
:name: trove-harvester-query

Paste the url of your search between the quotes.
```

You can now start your harvest! From the 'Run' menu select 'Run All cells'.

```{figure} ../../images/trove-harvester-run.png
:width: 600px
:name: trove-harvester-run

Select Run > Run All Cells.
```

To monitor the progress of your harvest scroll down until you see the cell containing `harvester.harvest()`. Beneath it you should see a progress bar that tells you how many articles have been saved.

```{figure} ../../images/trove-harvester-progress.png
:width: 600px
:name: trove-harvester-progress

Monitor your harvest.
```

Once the harvest is complete, the progress bar will turn green, and a link will appear to download all the harvested data as a zip file.

```{figure} ../../images/trove-harvester-finished.png
:width: 600px
:name: trove-harvester-finished

The harvest is finished!
```

+++

## Understanding your data

```{admonition} STOP! Save your data now!
:class: warning
Before you do anything else, click on the 'Download results' link to download the harvested data as a zip file. Save it with you other research data and make sure it's properly backed up. You might want to repeat this analysis sometime in the future, so it's important to have access to the original data, especially given that Trove itself is [changing all the time](newspapers:corpus:history).
```

You can start exploring your harvested data in the Jupyter Lab interface. By default, the Harvester saves its outputs in the `data` directory. Double click on the `data` directory in the file browser to open it.

Individual harvests are named according to the date and time they were started. Within the data directory you should see a directory that starts with the current year, for example `20240527055711`. Double click on the directory to open your harvest.

```{figure} ../../images/trove-harvester-results.png
:width: 600px
:name: trove-harvester-results

Open the harvest directory to view the results.
```


+++

## Reshaping your results

Creating corpora
You might need to experiment.

```{figure} ../../images/harvester-reshaping-slicer.png
:width: 600px
:name: harvester-reshaping-slicer

Create a HarvestSlicer using your harvests id.
```

```{figure} ../../images/harvester-reshaping-years.png
:width: 600px
:name: harvester-reshaping-years

Slice your harvest by year or decade.
```
