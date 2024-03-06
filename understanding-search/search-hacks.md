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

# Search interface hacks

While Trove's search application works much the same way in the web interface and the API, a couple of annoying design choices limit your options in the web interface. This page documents some workarounds.

## Empty searches

If you wanted to find out how many digitised newspaper articles are currently in Trove, you might try an *empty* search – a search with no keyword value. An empty search should return everything in the collection. But if you attempt this in the Trove web interface you’ll find that the search button remains disabled until you type something in the box. It just won’t let you. This limitation is imposed by the interface, not the underlying search technologies. In contrast, the API doesn't require a search query.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dnewspaper%26encoding%3Djson&comment=)

To run an empty search in the web interface you have to do a bit of harmless *url hacking*. Try this:

* head to Trove newspapers, type anything in the search box, and hit the search button.
* now look at the url in your browser’s location bar. You should see something like:
    `https://trove.nla.gov.au/search/category/newspapers?keyword=anything`
* delete everything after the equals sign, so you end up with:
    `https://trove.nla.gov.au/search/category/newspapers?keyword=`
* hit enter to submit the edited url

You should now have more than 250 million search results. I just tried this myself and Trove told me there were 250,709,221 newspaper articles – I think [that’s everything](https://trove.nla.gov.au/search/category/newspapers?keyword=)! This simple hack will work in Trove's other categories as well – even the web archives.

```{figure} /images/empty-search-web-archives.png
:name: empty-search-web-archives
An empty search in web archives returns more than *8.5 billion* results!  
<https://trove.nla.gov.au/search/category/websites?keyword=>
```

## Results per page

The Trove API's `n` parameter lets you specify the number of search results you want to get back from a single request. In the web interface you have no choice – you get twenty results per page. This can be frustrating if you want to quickly scan a set of search results.

But once again you can work around this limit with a bit of url hacking. If you look under the hood to see what Trove does when you submit a search query, you'll see that it adds an extra `pageSize` parameter to the query before passing it to an internal API. The value of `pageSize` defaults to `20`, but if you add `&pageSize=100` to your search url, the value is passed through to the internal API and you get 100 results.

Try it: <a href="https://trove.nla.gov.au/search/category/newspapers?keyword=wragge&pageSize=100">https://trove.nla.gov.au/search/category/newspapers?keyword=wragge&pageSize=100</a>

This works with any search. Simply add `&pageSize=[some number]` to the url to control the number of results returned.
