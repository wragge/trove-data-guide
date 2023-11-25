selector_to_html = {"a[href=\"#accuracy-and-consistency-of-metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4.1. </span>Accuracy and consistency of metadata<a class=\"headerlink\" href=\"#accuracy-and-consistency-of-metadata\" title=\"Permalink to this heading\">#</a></h2><p><mark>==I suspect this section might get moved to the contexts section later on. Also need to note that the facets in the book zone don\u2019t display dates past today, even though they are there. I think this is an attempt to clean up the interface, but just hides the problem rather than fixing it.==</mark></p><p>Trove\u2019s aggregated metadata can include errors, either because of data entry problems or formatting inconsistencies. Problems with dates can seem more obvious than other types of metadata because we expect them to fall within a specific range \u2013 it\u2019s unlikely Australian libraries will hold books from the year 9000! You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">decade</span></code> facet to reveal some of these problems.</p>", "a[href=\"#date-searches\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4. </span>Date searches<a class=\"headerlink\" href=\"#date-searches\" title=\"Permalink to this heading\">#</a></h1><p>You can limit your Trove searches by date in a number of ways. These options vary across categories and can cause confusion. This section will attempt to document the possibilities and problems.</p>", "a[href=\"#research-decades-chart\"]": "<figure class=\"align-default\" id=\"research-decades-chart\" style=\"width: 600px\">\n<div class=\"output text_html\">\n<style>\n  #altair-viz-9145e034cf6c4a9d9a783abbb0fd2a55.vega-embed {\n    width: 100%;\n    display: flex;\n  }\n\n  #altair-viz-9145e034cf6c4a9d9a783abbb0fd2a55.vega-embed details,\n  #altair-viz-9145e034cf6c4a9d9a783abbb0fd2a55.vega-embed details summary {\n    position: relative;\n  }\n</style>\n<div id=\"altair-viz-9145e034cf6c4a9d9a783abbb0fd2a55\"></div>\n<script type=\"text/javascript\">\n  var VEGA_DEBUG = (typeof VEGA_DEBUG == \"undefined\") ? {} : VEGA_DEBUG;\n  (function(spec, embedOpt){\n    let outputDiv = document.currentScript.previousElementSibling;\n    if (outputDiv.id !== \"altair-viz-9145e034cf6c4a9d9a783abbb0fd2a55\") {\n      outputDiv = document.getElementById(\"altair-viz-9145e034cf6c4a9d9a783abbb0fd2a55\");\n    }\n    const paths = {\n      \"vega\": \"https://cdn.jsdelivr.net/npm/vega@5?noext\",\n      \"vega-lib\": \"https://cdn.jsdelivr.net/npm/vega-lib?noext\",\n      \"vega-lite\": \"https://cdn.jsdelivr.net/npm/vega-lite@5.8.0?noext\",\n      \"vega-embed\": \"https://cdn.jsdelivr.net/npm/vega-embed@6?noext\",\n    };\n\n    function maybeLoadScript(lib, version) {\n      var key = `${lib.replace(\"-\", \"\")}_version`;\n      return (VEGA_DEBUG[key] == version) ?\n        Promise.resolve(paths[lib]) :\n        new Promise(function(resolve, reject) {\n          var s = document.createElement('script');\n          document.getElementsByTagName(\"head\")[0].appendChild(s);\n          s.async = true;\n          s.onload = () => {\n            VEGA_DEBUG[key] = version;\n            return resolve(paths[lib]);\n          };\n          s.onerror = () => reject(`Error loading script: ${paths[lib]}`);\n          s.src = paths[lib];\n        });\n    }\n\n    function showError(err) {\n      outputDiv.innerHTML = `<div class=\"error\" style=\"color:red;\">${err}</div>`;\n      throw err;\n    }\n\n    function displayChart(vegaEmbed) {\n      vegaEmbed(outputDiv, spec, embedOpt)\n        .catch(err => showError(`Javascript Error: ${err.message}<br>This usually means there's a typo in your chart specification. See the javascript console for the full traceback.`));\n    }\n\n    if(typeof define === \"function\" && define.amd) {\n      requirejs.config({paths});\n      require([\"vega-embed\"], displayChart, err => showError(`Error loading script: ${err.message}`));\n    } else {\n      maybeLoadScript(\"vega\", \"5\")\n        .then(() => maybeLoadScript(\"vega-lite\", \"5.8.0\"))\n        .then(() => maybeLoadScript(\"vega-embed\", \"6\"))\n        .catch(showError)\n        .then(() => displayChart(vegaEmbed));\n    }\n  })({\"config\": {\"view\": {\"continuousWidth\": 300, \"continuousHeight\": 300}}, \"data\": {\"name\": \"data-20fe0cdb540ec04a5c19505eaba6cd8e\"}, \"mark\": {\"type\": \"bar\"}, \"encoding\": {\"x\": {\"axis\": {\"format\": \"c\"}, \"bin\": {\"step\": 100}, \"field\": \"decade\", \"title\": \"decade (binned by century)\", \"type\": \"quantitative\"}, \"y\": {\"field\": \"total_works\", \"scale\": {\"type\": \"log\"}, \"title\": \"number of works (log scale)\", \"type\": \"quantitative\"}}, \"height\": 250, \"width\": 500, \"$schema\": \"https://vega.github.io/schema/vega-lite/v5.8.0.json\", \"datasets\": {\"data-20fe0cdb540ec04a5c19505eaba6cd8e\": [{\"decade\": 9970, \"total_works\": 2}, {\"decade\": 6660, \"total_works\": 3}, {\"decade\": 5550, \"total_works\": 1}, {\"decade\": 5380, \"total_works\": 4}, {\"decade\": 5130, \"total_works\": 2}, {\"decade\": 5000, \"total_works\": 2}, {\"decade\": 4990, \"total_works\": 1}, {\"decade\": 4390, \"total_works\": 2}, {\"decade\": 3410, \"total_works\": 1}, {\"decade\": 3330, \"total_works\": 3}, {\"decade\": 3070, \"total_works\": 1}, {\"decade\": 3010, \"total_works\": 1}, {\"decade\": 3000, \"total_works\": 1}, {\"decade\": 2990, \"total_works\": 2}, {\"decade\": 2840, \"total_works\": 1}, {\"decade\": 2310, \"total_works\": 1}, {\"decade\": 2300, \"total_works\": 2}, {\"decade\": 2290, \"total_works\": 4}, {\"decade\": 2200, \"total_works\": 2}, {\"decade\": 2180, \"total_works\": 4}, {\"decade\": 2170, \"total_works\": 1}, {\"decade\": 2110, \"total_works\": 1}, {\"decade\": 2100, \"total_works\": 65}, {\"decade\": 2090, \"total_works\": 34}, {\"decade\": 2080, \"total_works\": 761}, {\"decade\": 2070, \"total_works\": 3}, {\"decade\": 2060, \"total_works\": 1}, {\"decade\": 2050, \"total_works\": 5}, {\"decade\": 2040, \"total_works\": 7}, {\"decade\": 2030, \"total_works\": 15}, {\"decade\": 2020, \"total_works\": 729698}, {\"decade\": 2010, \"total_works\": 1796725}, {\"decade\": 2000, \"total_works\": 1415302}, {\"decade\": 1990, \"total_works\": 778255}, {\"decade\": 1980, \"total_works\": 615272}, {\"decade\": 1970, \"total_works\": 433191}, {\"decade\": 1960, \"total_works\": 259516}, {\"decade\": 1950, \"total_works\": 184831}, {\"decade\": 1940, \"total_works\": 155467}, {\"decade\": 1930, \"total_works\": 116478}, {\"decade\": 1920, \"total_works\": 107299}, {\"decade\": 1910, \"total_works\": 98696}, {\"decade\": 1900, \"total_works\": 111974}, {\"decade\": 1890, \"total_works\": 30981}, {\"decade\": 1880, \"total_works\": 29680}, {\"decade\": 1870, \"total_works\": 23527}, {\"decade\": 1860, \"total_works\": 23385}, {\"decade\": 1850, \"total_works\": 22419}, {\"decade\": 1840, \"total_works\": 15625}, {\"decade\": 1830, \"total_works\": 14692}, {\"decade\": 1820, \"total_works\": 10520}, {\"decade\": 1810, \"total_works\": 14155}, {\"decade\": 1800, \"total_works\": 9455}, {\"decade\": 1790, \"total_works\": 9169}, {\"decade\": 1780, \"total_works\": 3851}, {\"decade\": 1770, \"total_works\": 3192}, {\"decade\": 1760, \"total_works\": 2223}, {\"decade\": 1750, \"total_works\": 2126}, {\"decade\": 1740, \"total_works\": 1677}, {\"decade\": 1730, \"total_works\": 1412}, {\"decade\": 1720, \"total_works\": 1690}, {\"decade\": 1710, \"total_works\": 1623}, {\"decade\": 1700, \"total_works\": 1787}, {\"decade\": 1690, \"total_works\": 1062}, {\"decade\": 1680, \"total_works\": 1161}, {\"decade\": 1670, \"total_works\": 739}, {\"decade\": 1660, \"total_works\": 874}, {\"decade\": 1650, \"total_works\": 1049}, {\"decade\": 1640, \"total_works\": 2617}, {\"decade\": 1630, \"total_works\": 398}, {\"decade\": 1620, \"total_works\": 459}, {\"decade\": 1610, \"total_works\": 396}, {\"decade\": 1600, \"total_works\": 390}, {\"decade\": 1590, \"total_works\": 218}, {\"decade\": 1580, \"total_works\": 422}, {\"decade\": 1570, \"total_works\": 257}, {\"decade\": 1560, \"total_works\": 261}, {\"decade\": 1550, \"total_works\": 186}, {\"decade\": 1540, \"total_works\": 173}, {\"decade\": 1530, \"total_works\": 132}, {\"decade\": 1520, \"total_works\": 75}, {\"decade\": 1510, \"total_works\": 68}, {\"decade\": 1500, \"total_works\": 177}, {\"decade\": 1490, \"total_works\": 51}, {\"decade\": 1480, \"total_works\": 47}, {\"decade\": 1470, \"total_works\": 20}, {\"decade\": 1460, \"total_works\": 15}, {\"decade\": 1450, \"total_works\": 20}, {\"decade\": 1440, \"total_works\": 13}, {\"decade\": 1430, \"total_works\": 14}, {\"decade\": 1420, \"total_works\": 11}, {\"decade\": 1410, \"total_works\": 16}, {\"decade\": 1400, \"total_works\": 165}, {\"decade\": 1390, \"total_works\": 11}, {\"decade\": 1380, \"total_works\": 11}, {\"decade\": 1370, \"total_works\": 13}, {\"decade\": 1360, \"total_works\": 12}, {\"decade\": 1350, \"total_works\": 12}, {\"decade\": 1340, \"total_works\": 12}, {\"decade\": 1330, \"total_works\": 13}, {\"decade\": 1320, \"total_works\": 9}, {\"decade\": 1310, \"total_works\": 8}, {\"decade\": 1300, \"total_works\": 111}, {\"decade\": 1290, \"total_works\": 5}, {\"decade\": 1280, \"total_works\": 6}, {\"decade\": 1270, \"total_works\": 4}, {\"decade\": 1260, \"total_works\": 5}, {\"decade\": 1250, \"total_works\": 2}, {\"decade\": 1240, \"total_works\": 4}, {\"decade\": 1230, \"total_works\": 3}, {\"decade\": 1220, \"total_works\": 4}, {\"decade\": 1210, \"total_works\": 3}, {\"decade\": 1200, \"total_works\": 98}, {\"decade\": 1190, \"total_works\": 32}, {\"decade\": 1180, \"total_works\": 2}, {\"decade\": 1170, \"total_works\": 1}, {\"decade\": 1160, \"total_works\": 1}, {\"decade\": 1150, \"total_works\": 1}, {\"decade\": 1140, \"total_works\": 1}, {\"decade\": 1130, \"total_works\": 1}, {\"decade\": 1120, \"total_works\": 1}, {\"decade\": 1110, \"total_works\": 1}, {\"decade\": 1100, \"total_works\": 31}, {\"decade\": 1090, \"total_works\": 5}, {\"decade\": 1080, \"total_works\": 3}, {\"decade\": 1070, \"total_works\": 2}, {\"decade\": 1060, \"total_works\": 1}, {\"decade\": 1050, \"total_works\": 1}, {\"decade\": 1040, \"total_works\": 2}, {\"decade\": 1030, \"total_works\": 1}, {\"decade\": 1020, \"total_works\": 7}, {\"decade\": 1010, \"total_works\": 27}, {\"decade\": 1000, \"total_works\": 22}, {\"decade\": 910, \"total_works\": 2}, {\"decade\": 690, \"total_works\": 2}, {\"decade\": 650, \"total_works\": 1}, {\"decade\": 640, \"total_works\": 1}, {\"decade\": 630, \"total_works\": 1}, {\"decade\": 620, \"total_works\": 1}, {\"decade\": 610, \"total_works\": 1}, {\"decade\": 600, \"total_works\": 1}, {\"decade\": 590, \"total_works\": 1}, {\"decade\": 580, \"total_works\": 1}, {\"decade\": 570, \"total_works\": 1}, {\"decade\": 560, \"total_works\": 1}, {\"decade\": 550, \"total_works\": 1}, {\"decade\": 540, \"total_works\": 1}, {\"decade\": 530, \"total_works\": 1}, {\"decade\": 520, \"total_works\": 1}, {\"decade\": 510, \"total_works\": 1}, {\"decade\": 500, \"total_works\": 1}, {\"decade\": 490, \"total_works\": 2}, {\"decade\": 480, \"total_works\": 1}, {\"decade\": 470, \"total_works\": 1}, {\"decade\": 460, \"total_works\": 1}, {\"decade\": 450, \"total_works\": 1}, {\"decade\": 440, \"total_works\": 1}, {\"decade\": 430, \"total_works\": 1}, {\"decade\": 420, \"total_works\": 1}, {\"decade\": 410, \"total_works\": 1}, {\"decade\": 400, \"total_works\": 1}, {\"decade\": 390, \"total_works\": 1}, {\"decade\": 380, \"total_works\": 1}, {\"decade\": 370, \"total_works\": 1}, {\"decade\": 360, \"total_works\": 1}, {\"decade\": 350, \"total_works\": 1}, {\"decade\": 340, \"total_works\": 1}, {\"decade\": 330, \"total_works\": 1}, {\"decade\": 320, \"total_works\": 1}, {\"decade\": 310, \"total_works\": 1}, {\"decade\": 300, \"total_works\": 1}, {\"decade\": 290, \"total_works\": 1}, {\"decade\": 280, \"total_works\": 1}, {\"decade\": 270, \"total_works\": 1}, {\"decade\": 260, \"total_works\": 3}, {\"decade\": 250, \"total_works\": 1}, {\"decade\": 240, \"total_works\": 1}, {\"decade\": 230, \"total_works\": 1}, {\"decade\": 220, \"total_works\": 2}, {\"decade\": 210, \"total_works\": 2}, {\"decade\": 200, \"total_works\": 17}, {\"decade\": 190, \"total_works\": 18}, {\"decade\": 180, \"total_works\": 2}, {\"decade\": 170, \"total_works\": 1}, {\"decade\": 160, \"total_works\": 1}, {\"decade\": 150, \"total_works\": 1}, {\"decade\": 140, \"total_works\": 1}, {\"decade\": 130, \"total_works\": 1}, {\"decade\": 120, \"total_works\": 1}, {\"decade\": 110, \"total_works\": 5}, {\"decade\": 100, \"total_works\": 2}, {\"decade\": 90, \"total_works\": 2}, {\"decade\": 70, \"total_works\": 3}, {\"decade\": 60, \"total_works\": 1}, {\"decade\": 50, \"total_works\": 1}, {\"decade\": 40, \"total_works\": 1}, {\"decade\": 30, \"total_works\": 7}, {\"decade\": 20, \"total_works\": 31}, {\"decade\": 10, \"total_works\": 69}, {\"decade\": 0, \"total_works\": 311}]}}, {\"mode\": \"vega-lite\"});\n</script></div><figcaption>\n<p><span class=\"caption-number\">Fig. 4.5 </span><span class=\"caption-text\">Distribution of publication dates of works in the \u2018Research &amp; reports\u2019 category</span><a class=\"headerlink\" href=\"#research-decades-chart\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#using-date-facets\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4.2. </span>Using date facets<a class=\"headerlink\" href=\"#using-date-facets\" title=\"Permalink to this heading\">#</a></h2><p>There are three facets you can use to limit search results by date: <code class=\"docutils literal notranslate\"><span class=\"pre\">decade</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">year</span></code>, and <code class=\"docutils literal notranslate\"><span class=\"pre\">month</span></code>. The <code class=\"docutils literal notranslate\"><span class=\"pre\">month</span></code> facet is only available in the <em>Newspapers &amp; Gazettes</em> category.</p>", "a[href=\"#using-the-date-index\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Using the date index<a class=\"headerlink\" href=\"#using-the-date-index\" title=\"Permalink to this heading\">#</a></h3><p>If you want to search for a range of dates you can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">date</span></code> index. Queries using the <code class=\"docutils literal notranslate\"><span class=\"pre\">date</span></code> index look something like this: <code class=\"docutils literal notranslate\"><span class=\"pre\">date:[STARTDATE</span> <span class=\"pre\">TO</span> <span class=\"pre\">ENDDATE]</span></code>. For example, to include records from 1914 to 1918 (inclusive) in your search, you\u2019d use <code class=\"docutils literal notranslate\"><span class=\"pre\">date:[1914</span> <span class=\"pre\">TO</span> <span class=\"pre\">1918]</span></code>. You can add date index queries to the search box in the web interface, or include them in the <code class=\"docutils literal notranslate\"><span class=\"pre\">q</span></code> parameter of an API request.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3Ddate%3A%5B1914+TO+1918%5D%26category%3Dnewspaper%26encoding%3Djson&amp;comment=\"><img alt=\"Try it!\" src=\"https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg\"/></a></p>", "a[href=\"#works-versions-and-dates\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4.3. </span>Works, versions, and dates<a class=\"headerlink\" href=\"#works-versions-and-dates\" title=\"Permalink to this heading\">#</a></h2><p>Date searches can produce odd results when you\u2019re working with aggregated content (as in the <em>Books &amp; Libraries</em> category). What do you think happens if you set the <code class=\"docutils literal notranslate\"><span class=\"pre\">l-decade</span></code> facet to <code class=\"docutils literal notranslate\"><span class=\"pre\">200</span></code> (ie 2000 to 2009) and the <code class=\"docutils literal notranslate\"><span class=\"pre\">l-year</span></code> facet to <code class=\"docutils literal notranslate\"><span class=\"pre\">1900</span></code>? In the <em>Newspapers &amp; Gazettes</em> category you get no results, as you would expect. But in <em>Books &amp; Libraries</em> you get more than a million results!</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dbook%26l-decade%3D200%26l-year%3D1900%26encoding%3Djson&amp;comment=\"><img alt=\"Try it!\" src=\"https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg\"/></a></p>", "a[href=\"../what-is-trove/works-and-versions.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4. </span>Works and versions<a class=\"headerlink\" href=\"#works-and-versions\" title=\"Permalink to this heading\">#</a></h1><p>And editions and collections</p>", "a[href=\"#table-available-search-indexes\"]": "<table class=\"table\" id=\"table-available-search-indexes\">\n<caption><span class=\"caption-number\">Table 4.1 </span><span class=\"caption-text\">Date facets</span><a class=\"headerlink\" href=\"#table-available-search-indexes\" title=\"Permalink to this table\">#</a></caption>\n<thead>\n<tr class=\"row-odd\"><th class=\"head\"><p>Facet</p></th>\n<th class=\"head\"><p>Description</p></th>\n<th class=\"head\"><p>Example</p></th>\n<th class=\"head\"><p>Categories</p></th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">l-decade</span></code></p></td>\n<td><p>Limit results to a specific decade</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">l-decade=190</span></code></p></td>\n<td><p>Applicable to all categories except Websites and Lists</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">l-year</span></code></p></td>\n<td><p>Limit results to a specific year</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">l-decade=1901</span></code></p></td>\n<td><p>Applicable to all categories except Websites and Lists</p></td>\n</tr>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">l-month</span></code></p></td>\n<td><p>Limit results to a specific month</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">l-month=11</span></code></p></td>\n<td><p>Applicable only to Newspapers &amp; Gazettes category</p></td>\n</tr>\n</tbody>\n</table>", "a[href=\"#magazine-decades-chart\"]": "<figure class=\"align-default\" id=\"magazine-decades-chart\" style=\"width: 600px\">\n<div class=\"output text_html\">\n<style>\n  #altair-viz-4cd2952e7d0640dda4ae27245639b4e5.vega-embed {\n    width: 100%;\n    display: flex;\n  }\n\n  #altair-viz-4cd2952e7d0640dda4ae27245639b4e5.vega-embed details,\n  #altair-viz-4cd2952e7d0640dda4ae27245639b4e5.vega-embed details summary {\n    position: relative;\n  }\n</style>\n<div id=\"altair-viz-4cd2952e7d0640dda4ae27245639b4e5\"></div>\n<script type=\"text/javascript\">\n  var VEGA_DEBUG = (typeof VEGA_DEBUG == \"undefined\") ? {} : VEGA_DEBUG;\n  (function(spec, embedOpt){\n    let outputDiv = document.currentScript.previousElementSibling;\n    if (outputDiv.id !== \"altair-viz-4cd2952e7d0640dda4ae27245639b4e5\") {\n      outputDiv = document.getElementById(\"altair-viz-4cd2952e7d0640dda4ae27245639b4e5\");\n    }\n    const paths = {\n      \"vega\": \"https://cdn.jsdelivr.net/npm/vega@5?noext\",\n      \"vega-lib\": \"https://cdn.jsdelivr.net/npm/vega-lib?noext\",\n      \"vega-lite\": \"https://cdn.jsdelivr.net/npm/vega-lite@5.8.0?noext\",\n      \"vega-embed\": \"https://cdn.jsdelivr.net/npm/vega-embed@6?noext\",\n    };\n\n    function maybeLoadScript(lib, version) {\n      var key = `${lib.replace(\"-\", \"\")}_version`;\n      return (VEGA_DEBUG[key] == version) ?\n        Promise.resolve(paths[lib]) :\n        new Promise(function(resolve, reject) {\n          var s = document.createElement('script');\n          document.getElementsByTagName(\"head\")[0].appendChild(s);\n          s.async = true;\n          s.onload = () => {\n            VEGA_DEBUG[key] = version;\n            return resolve(paths[lib]);\n          };\n          s.onerror = () => reject(`Error loading script: ${paths[lib]}`);\n          s.src = paths[lib];\n        });\n    }\n\n    function showError(err) {\n      outputDiv.innerHTML = `<div class=\"error\" style=\"color:red;\">${err}</div>`;\n      throw err;\n    }\n\n    function displayChart(vegaEmbed) {\n      vegaEmbed(outputDiv, spec, embedOpt)\n        .catch(err => showError(`Javascript Error: ${err.message}<br>This usually means there's a typo in your chart specification. See the javascript console for the full traceback.`));\n    }\n\n    if(typeof define === \"function\" && define.amd) {\n      requirejs.config({paths});\n      require([\"vega-embed\"], displayChart, err => showError(`Error loading script: ${err.message}`));\n    } else {\n      maybeLoadScript(\"vega\", \"5\")\n        .then(() => maybeLoadScript(\"vega-lite\", \"5.8.0\"))\n        .then(() => maybeLoadScript(\"vega-embed\", \"6\"))\n        .catch(showError)\n        .then(() => displayChart(vegaEmbed));\n    }\n  })({\"config\": {\"view\": {\"continuousWidth\": 300, \"continuousHeight\": 300}}, \"data\": {\"name\": \"data-1cb1f61599afe699e718c5504ebab549\"}, \"mark\": {\"type\": \"bar\"}, \"encoding\": {\"x\": {\"axis\": {\"format\": \"c\"}, \"bin\": {\"step\": 100}, \"field\": \"decade\", \"title\": \"decade (binned by century)\", \"type\": \"quantitative\"}, \"y\": {\"field\": \"total_works\", \"scale\": {\"type\": \"log\"}, \"title\": \"number of works (log scale)\", \"type\": \"quantitative\"}}, \"height\": 250, \"width\": 500, \"$schema\": \"https://vega.github.io/schema/vega-lite/v5.8.0.json\", \"datasets\": {\"data-1cb1f61599afe699e718c5504ebab549\": [{\"decade\": 2030, \"total_works\": 2}, {\"decade\": 2020, \"total_works\": 323}, {\"decade\": 2010, \"total_works\": 30087}, {\"decade\": 2000, \"total_works\": 71907}, {\"decade\": 1990, \"total_works\": 104433}, {\"decade\": 1980, \"total_works\": 127288}, {\"decade\": 1970, \"total_works\": 131328}, {\"decade\": 1960, \"total_works\": 124876}, {\"decade\": 1950, \"total_works\": 185513}, {\"decade\": 1940, \"total_works\": 219373}, {\"decade\": 1930, \"total_works\": 248592}, {\"decade\": 1920, \"total_works\": 206651}, {\"decade\": 1910, \"total_works\": 132211}, {\"decade\": 1900, \"total_works\": 73784}, {\"decade\": 1890, \"total_works\": 53295}, {\"decade\": 1880, \"total_works\": 48571}, {\"decade\": 1870, \"total_works\": 16992}, {\"decade\": 1860, \"total_works\": 10343}, {\"decade\": 1850, \"total_works\": 5050}, {\"decade\": 1840, \"total_works\": 10725}, {\"decade\": 1830, \"total_works\": 3471}, {\"decade\": 1820, \"total_works\": 2167}, {\"decade\": 1810, \"total_works\": 537}, {\"decade\": 1800, \"total_works\": 61}, {\"decade\": 1780, \"total_works\": 8}, {\"decade\": 1760, \"total_works\": 25}, {\"decade\": 850, \"total_works\": 68}, {\"decade\": 200, \"total_works\": 2}, {\"decade\": 190, \"total_works\": 20}, {\"decade\": 10, \"total_works\": 7}]}}, {\"mode\": \"vega-lite\"});\n</script></div><figcaption>\n<p><span class=\"caption-number\">Fig. 4.6 </span><span class=\"caption-text\">Distribution of publication dates of works in the \u2018Magazines &amp; newsletters\u2019 category</span><a class=\"headerlink\" href=\"#magazine-decades-chart\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>"}
skip_classes = ["headerlink", "sd-stretched-link", "sd-rounded-pill"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(`article.bd-article ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
