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

# Accessing data from digitised oral histories

```{contents}
:local:
:backlinks: None
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Identifiers

Digitised oral histories are uniquely identified by a `nla.obj` identifier, for example: `nla.obj-220905784`.

You can find these identifiers in the web interface and in API results. In the web interface, for example, the 'Listen' link from [this oral history record](https://trove.nla.gov.au/work/245550803) goes to the url <https://nla.gov.au/nla.obj-220905784> which opens the audio player.

If you're using the API, the digital object url will be in the `identifier` field of the work or version, with a `linktype` value equal to `fulltext`.

```json
    "type": "url",
    "linktype": "fulltext",
    "value": "https://nla.gov.au/nla.obj-220905784"
```

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F245550803%3Fencoding%3Djson%26include%3Dworkversions%2Clinks%2Choldings&comment=)

You can use this identifier to access additional metadata and download transcripts.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Types of data

There are three types of data from the NLA's digitised oral histories that you can download:

- metadata (available from the Trove API and embedded within the audio player)
- text files (timed summaries, full transcripts, or a combination of both)
- audio files (available in three bitrates – 48, 128, 256kbps)

A single oral history can be recorded across multiple sessions. There are separate audio files for each session, but summaries and transcripts are combined into a single text file.

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Metadata

````{margin}
```{seealso}
The method used to create this dataset is documented in the GLAM Workbench notebook [Harvest oral histories metadata](https://glam-workbench.net/trove-music/harvest-oral-histories/). As well as downloading data from the Trove API, it uses the methods described below to [scrape additional metadata from the audio player](additional-metadata-audio-player) and [obtain details of downloadable files](details-of-available-downloads).
```
````

(oral-histories-downloadable-data)=
### Downloadable dataset

A [CSV file containing details of oral histories](https://glam-workbench.net/trove-music/trove-oral-histories/) from the NLA collection (both online and not online) harvested from Trove is available from the GLAM Workbench. You can also [explore the data](https://glam-workbench.net/datasette-lite/?csv=https://github.com/GLAM-Workbench/trove-oral-histories-data/blob/main/trove-oral-histories.csv#/data/trove-oral-histories) using Datasette.

### Search results from the API

As [described elsewhere](finding-oral-histories), you can find details of oral histories from the NLA collection that are available online by searching for `"nla.obj"` in the `music` category, with the `availability` facet set to `y`, and the `format` facet set to `Sound/Interview, lecture, talk`.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22nla.obj%22%26category%3Dmusic%26l-format%3DSound%2FInterview%2C+lecture%2C+talk%26l-availability%3Dy%26encoding%3Djson&comment=)

Start with this search then add additional keywords or filters to limit the results according to your research needs. For example, you could use the `series` index to find results from the Hazel de Berg collection.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3Dseries%3A%22Hazel+de+Berg+collection%22%26category%3Dmusic%26l-format%3DSound%2FInterview%2C+lecture%2C+talk%26l-availability%3Dy%26encoding%3Djson&comment=)

A complete list of series values is available in [this text file](https://github.com/GLAM-Workbench/trove-oral-histories-data/blob/main/trove-oral-history-series.txt).

As with other digitised resources there are some inconsistencies in the description and arrangement of oral histories in Trove. A few things I've noticed are:

- Different recordings with the same person can be grouped as a single work, for example [this work](https://trove.nla.gov.au/work/38468518) combines recordings from 2010 and 2013.
- Some records include links to collection pages, but all of these links seem to return 404 errors. For example, try clicking on the 'Browse other digitised items' links in [this work record](https://trove.nla.gov.au/work/19002018). I'm assuming that all the items within these collections have their own individual work records, so the missing pages can be ignored.
- There are some duplicate records (same fulltext urls, slightly different metadata).

To make sure you get all relevant results, I'd recommend harvesting all the version data from the work records and dealing with duplicates at the end. This strategy is described and documented in [](/other-digitised-resources/how-to/harvest-digitised-resources).

(additional-metadata-audio-player)=
### Additional metadata from audio player

Trove's audio player displays some metadata that isn't included in the API records. This can include:

- a descriptive note with the date and place of the recording
- a note about the availability of transcripts
- roles of the people involved – ie 'interviewer' and 'interviewee'

```{figure} /images/audio-player-metadata.png
:width: 200
:name: audio-player-metadata

Example of the metadata displayed in Trove's audio player
```

This information could be useful, and you might want to use it to enrich the records harvested from the API. Some example code that you can use to scrape this metadata using the digital object url of an oral history record is included in [](/other-digitised-resources/how-to/scrape-metadata-audio-player).

(details-of-available-downloads)=
### Details of available downloads

When you click on the 'Download' button in the audio player, a window pops up with links to download the summary/transcript and any audio files. The contents of this pop-up are generated from a Javascript file. It's possible to access this Javascript file directly and extract details about available downloads.

The Javascript file includes the following fields:

- `anySummary` – indicates if a summary is available, set to either `true` or `false`
- `anyTranscript` – indicates if a transcript is available, set to either `true` or `false`
- `sessions` ­– a list of session details include timed summaries
- `sessionFiles`– a list of audio files available from each session

Here's an example of the file data, showing that the audio from each session is available for download at three different bitrates (indicated by the `data_rate` field):

```json
  "sessionFiles" : [ {
    "label" : "Session 1",
    "files" : [ {
      "use" : "derivative",
      "size" : 26825472,
      "mimetype" : "audio/mpeg",
      "access" : "Unrestricted",
      "href" : "https://nla.gov.au/tarkine/listen/download/nla.obj-219744824?copyRole=l1",
      "downloadmpeg" : "https://nla.gov.au/tarkine/listen/download/nla.obj-219744824?copyRole=l1",
      "streaming" : "rtmpt://mp3-streaming.nla.gov.au:80/audiodelivery/mp3:efde93481c560578b4a5ed2f1e0deeaa4a715cd2",
      "analogdigitalflag" : "FileDigital",
      "audio_data_encoding" : null,
      "data_rate" : "48",
      "sampling_frequency" : "0",
      "duration" : 4470
    }, {
      "use" : "derivative",
      "size" : 71534976,
      "mimetype" : "audio/mpeg",
      "access" : "Unrestricted",
      "href" : "https://nla.gov.au/tarkine/listen/download/nla.obj-219744824?copyRole=l2",
      "downloadmpeg" : "https://nla.gov.au/tarkine/listen/download/nla.obj-219744824?copyRole=l2",
      "streaming" : "rtmpt://mp3-streaming.nla.gov.au:80/audiodelivery/mp3:e26aa37f785a1143853cb902a43bea79ef10f3cc",
      "analogdigitalflag" : "FileDigital",
      "audio_data_encoding" : null,
      "data_rate" : "128",
      "sampling_frequency" : "0",
      "duration" : 4470
    }, {
      "use" : "derivative",
      "size" : 143069952,
      "mimetype" : "audio/mpeg",
      "access" : "Unrestricted",
      "href" : "https://nla.gov.au/tarkine/listen/download/nla.obj-219744824?copyRole=l3",
      "downloadmpeg" : "https://nla.gov.au/tarkine/listen/download/nla.obj-219744824?copyRole=l3",
      "streaming" : "rtmpt://mp3-streaming.nla.gov.au:80/audiodelivery/mp3:de322b949c6ca359d48e2f285deeda2b4fb708d8",
      "analogdigitalflag" : "FileDigital",
      "audio_data_encoding" : null,
      "data_rate" : "256",
      "sampling_frequency" : "0",
      "duration" : 4470
    } ]
  }
```

[View the complete Javascript file](https://nla.gov.au/tarkine/listen/transcript/nla.obj-219744819.js)

Each session's audio file has it's own unique `nla.obj` identifier. You can find it in the urls of the `href` and `downloadmpeg` fields. In the example above, it's `nla.obj-219744824`. As described below, you can use these identifiers to automate the download of audio files from a list of oral history records.

The urls of these Javascript files have the following pattern:

`https://nla.gov.au/tarkine/listen/transcript/[NLA.OBJ ID].js`

In this case, you use the `nla.obj` identifier of the oral history record, for example:

<https://nla.gov.au/tarkine/listen/transcript/nla.obj-219744824.js>

The actual data is wrapped in a Javascript function. You can extract it using a regular expression. For example, to download and extract the data for the oral history record with the identifier `nla.obj-222301677`, you can use:

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
import json
import re

import requests

# nla.obj of an oral history record
id = "nla.obj-222301677"

# Request the JS file
response = requests.get(f"https://nla.gov.au/tarkine/listen/transcript/{id}.js")

# Extract the JSON data from the JS function using regex
data = re.search(r"define\((\{.*)\)", response.text, re.DOTALL).group(1)

# Load the JSON data
json_data = json.loads(data)
```

You can then extract some useful information from the data:

```{code-cell} ipython3
# Does it have a summary?
print(f"Has summary: {json_data['anySummary']}")

# Does it have a transcript?
print(f"Has transcript: {json_data['anyTranscript']}")

# How many sessions are there?
print(f"Sessions: {len(json_data['sessions'])}\n")

duration = 0

# Loop all the files/bitrates
for session in json_data["sessionFiles"]:
    for file in session["files"]:
        
        # Get the download link
        print(file["href"])
        
        duration += file["duration"]
print(f"\nTotal duration: {duration} seconds")
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

(oral-histories-transcripts)=
## Transcripts and summaries

````{margin}
```{seealso}
The GLAM Workbench notebook [Download summaries and transcripts from oral histories](https://glam-workbench.net/trove-music/download-transcripts/) demonstrates how you can automate the download of text transcripts.
```
````

Each oral history record has a single text file combining summaries and transcripts for every session of the interview. The urls used to download this file have the pattern:

`https://nla.gov.au/tarkine/listen/download/transcript/[NLA.OBJ ID]`

In this case, you use the `nla.obj` identifier of the oral history record, for example:

<https://nla.gov.au/tarkine/listen/download/transcript/nla.obj-219744824>

The text files come in different formats depending on whether a summary, a transcript, or both, are available. Here are some examples:

- [summary only (no transcript)](https://nla.gov.au/tarkine/listen/download/transcript/nla.obj-214947934)
- [transcript only (no summary)](https://nla.gov.au/tarkine/listen/download/transcript/nla.obj-200337136)
- [combined summary and transcript](https://nla.gov.au/tarkine/listen/download/transcript/nla.obj-217517250)

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## Audio files

Each audio file has it's own `nla.obj` identifier. Using this identifier, you can download the file at a variety of bitrates.

The url pattern to use when downloading audio files is:

`https://nla.gov.au/tarkine/listen/download/[NLA.OBJ ID]?copyRole=l[BITRATE LEVEL]`

The bitrate level is a value between 1 and 3:

- Level 1: 48kbps
- Level 2: 128kbps
- Level 3: 256kbps

So to download the audio file with an identifier equal to `nla.obj-219744824` at a bitrate of 48kbps, you'd use this url:

<https://nla.gov.au/tarkine/listen/download/nla.obj-219744824?copyRole=l1>

To get the same file at a bitrate of 256kbps you just change the final `1` to `3`.

If you don't have the audio file identifiers, you can [extract them from the Javascript file](details-of-available-downloads) that contains details of available downloads.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```
