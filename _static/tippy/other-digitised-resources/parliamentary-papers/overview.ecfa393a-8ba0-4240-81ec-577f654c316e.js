selector_to_html = {"a[href=\"#when-were-the-parliamentary-papers-published\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">When were the Parliamentary Papers published?</a><a class=\"headerlink\" href=\"#when-were-the-parliamentary-papers-published\" title=\"Permalink to this heading\">#</a></h2><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">date</span></code> metadata is not always accurate, but it seems good enough to explore the distribution of Trove\u2019s Parliamentary Papers over time.</p>", "a[href=\"#what-are-parliamentary-papers\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\">What are Parliamentary Papers?</a><a class=\"headerlink\" href=\"#what-are-parliamentary-papers\" title=\"Permalink to this heading\">#</a></h2><p>Parliamentary Papers are documents presented to the Australian Parliament. Sometimes this is required by law. Other times it\u2019s just for information. The <a class=\"reference external\" href=\"https://www.aph.gov.au/Parliamentary_Business/Chamber_documents/Tabled_Papers/Parliamentary_Papers_series\">Parliament of Australia website notes</a>:</p>", "a[href=\"#titles-and-topics-of-parliamentary-papers\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\">Titles and topics of Parliamentary Papers</a><a class=\"headerlink\" href=\"#titles-and-topics-of-parliamentary-papers\" title=\"Permalink to this heading\">#</a></h2><p>What are all these Parliamentary Papers about? You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">title</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">subject</span></code>, and <code class=\"docutils literal notranslate\"><span class=\"pre\">contributor</span></code> fields to explore their content.</p><p>Here, for example is a word cloud generated from the <code class=\"docutils literal notranslate\"><span class=\"pre\">title</span></code> field. There\u2019s a lot of annual reports, and many of the titles include the abbreviation \u201cPP\u201d, so I\u2019ve excluded the words \u201creport\u201d, \u201cannual\u201d, \u201cPP\u201d, and \u201cAR\u201d.</p>", "a[href=\"#pp-overview-chart-dates\"]": "<figure class=\"align-default\" id=\"pp-overview-chart-dates\">\n<div class=\"output text_html\">\n<style>\n  #altair-viz-cd6047aa80384bccb6a591c21bc8adc4.vega-embed {\n    width: 100%;\n    display: flex;\n  }\n\n  #altair-viz-cd6047aa80384bccb6a591c21bc8adc4.vega-embed details,\n  #altair-viz-cd6047aa80384bccb6a591c21bc8adc4.vega-embed details summary {\n    position: relative;\n  }\n</style>\n<div id=\"altair-viz-cd6047aa80384bccb6a591c21bc8adc4\"></div>\n<script type=\"text/javascript\">\n  var VEGA_DEBUG = (typeof VEGA_DEBUG == \"undefined\") ? {} : VEGA_DEBUG;\n  (function(spec, embedOpt){\n    let outputDiv = document.currentScript.previousElementSibling;\n    if (outputDiv.id !== \"altair-viz-cd6047aa80384bccb6a591c21bc8adc4\") {\n      outputDiv = document.getElementById(\"altair-viz-cd6047aa80384bccb6a591c21bc8adc4\");\n    }\n    const paths = {\n      \"vega\": \"https://cdn.jsdelivr.net/npm/vega@5?noext\",\n      \"vega-lib\": \"https://cdn.jsdelivr.net/npm/vega-lib?noext\",\n      \"vega-lite\": \"https://cdn.jsdelivr.net/npm/vega-lite@5.8.0?noext\",\n      \"vega-embed\": \"https://cdn.jsdelivr.net/npm/vega-embed@6?noext\",\n    };\n\n    function maybeLoadScript(lib, version) {\n      var key = `${lib.replace(\"-\", \"\")}_version`;\n      return (VEGA_DEBUG[key] == version) ?\n        Promise.resolve(paths[lib]) :\n        new Promise(function(resolve, reject) {\n          var s = document.createElement('script');\n          document.getElementsByTagName(\"head\")[0].appendChild(s);\n          s.async = true;\n          s.onload = () => {\n            VEGA_DEBUG[key] = version;\n            return resolve(paths[lib]);\n          };\n          s.onerror = () => reject(`Error loading script: ${paths[lib]}`);\n          s.src = paths[lib];\n        });\n    }\n\n    function showError(err) {\n      outputDiv.innerHTML = `<div class=\"error\" style=\"color:red;\">${err}</div>`;\n      throw err;\n    }\n\n    function displayChart(vegaEmbed) {\n      vegaEmbed(outputDiv, spec, embedOpt)\n        .catch(err => showError(`Javascript Error: ${err.message}<br>This usually means there's a typo in your chart specification. See the javascript console for the full traceback.`));\n    }\n\n    if(typeof define === \"function\" && define.amd) {\n      requirejs.config({paths});\n      require([\"vega-embed\"], displayChart, err => showError(`Error loading script: ${err.message}`));\n    } else {\n      maybeLoadScript(\"vega\", \"5\")\n        .then(() => maybeLoadScript(\"vega-lite\", \"5.8.0\"))\n        .then(() => maybeLoadScript(\"vega-embed\", \"6\"))\n        .catch(showError)\n        .then(() => displayChart(vegaEmbed));\n    }\n  })({\"config\": {\"view\": {\"continuousWidth\": 300, \"continuousHeight\": 300}}, \"data\": {\"name\": \"data-642b118b05e6711faca82b99423e6b05\"}, \"mark\": {\"type\": \"bar\", \"size\": 3}, \"encoding\": {\"tooltip\": [{\"field\": \"year\", \"format\": \"%Y\", \"type\": \"temporal\"}, {\"field\": \"count\", \"type\": \"quantitative\"}], \"x\": {\"field\": \"year\", \"type\": \"temporal\"}, \"y\": {\"field\": \"count\", \"type\": \"quantitative\"}}, \"width\": \"container\", \"$schema\": \"https://vega.github.io/schema/vega-lite/v5.8.0.json\", \"datasets\": {\"data-642b118b05e6711faca82b99423e6b05\": [{\"year\": \"2002\", \"count\": 627}, {\"year\": \"2008\", \"count\": 582}, {\"year\": \"1992\", \"count\": 546}, {\"year\": \"1985\", \"count\": 510}, {\"year\": \"1989\", \"count\": 502}, {\"year\": \"1995\", \"count\": 499}, {\"year\": \"2005\", \"count\": 490}, {\"year\": \"2011\", \"count\": 489}, {\"year\": \"1991\", \"count\": 485}, {\"year\": \"1994\", \"count\": 485}, {\"year\": \"2000\", \"count\": 482}, {\"year\": \"2012\", \"count\": 479}, {\"year\": \"1997\", \"count\": 469}, {\"year\": \"1999\", \"count\": 463}, {\"year\": \"2009\", \"count\": 463}, {\"year\": \"1993\", \"count\": 457}, {\"year\": \"1982\", \"count\": 456}, {\"year\": \"1986\", \"count\": 451}, {\"year\": \"1990\", \"count\": 446}, {\"year\": \"1987\", \"count\": 445}, {\"year\": \"2006\", \"count\": 444}, {\"year\": \"2003\", \"count\": 442}, {\"year\": \"1996\", \"count\": 441}, {\"year\": \"2010\", \"count\": 437}, {\"year\": \"1978\", \"count\": 436}, {\"year\": \"1976\", \"count\": 419}, {\"year\": \"2004\", \"count\": 419}, {\"year\": \"1979\", \"count\": 417}, {\"year\": \"1988\", \"count\": 413}, {\"year\": \"1983\", \"count\": 408}, {\"year\": \"1998\", \"count\": 403}, {\"year\": \"1980\", \"count\": 402}, {\"year\": \"1981\", \"count\": 364}, {\"year\": \"1977\", \"count\": 358}, {\"year\": \"1974\", \"count\": 338}, {\"year\": \"1973\", \"count\": 334}, {\"year\": \"1984\", \"count\": 328}, {\"year\": \"1975\", \"count\": 299}, {\"year\": \"1972\", \"count\": 285}, {\"year\": \"1971\", \"count\": 284}, {\"year\": \"1970\", \"count\": 250}, {\"year\": \"1968\", \"count\": 246}, {\"year\": \"2001\", \"count\": 239}, {\"year\": \"2007\", \"count\": 214}, {\"year\": \"1967\", \"count\": 207}, {\"year\": \"1969\", \"count\": 204}, {\"year\": \"1915\", \"count\": 195}, {\"year\": \"1907\", \"count\": 168}, {\"year\": \"1962\", \"count\": 167}, {\"year\": \"1963\", \"count\": 150}, {\"year\": \"1930\", \"count\": 143}, {\"year\": \"1927\", \"count\": 142}, {\"year\": \"1931\", \"count\": 141}, {\"year\": \"1961\", \"count\": 136}, {\"year\": \"1935\", \"count\": 136}, {\"year\": \"1964\", \"count\": 133}, {\"year\": \"1939\", \"count\": 133}, {\"year\": \"1938\", \"count\": 128}, {\"year\": \"1965\", \"count\": 127}, {\"year\": \"1906\", \"count\": 127}, {\"year\": \"1937\", \"count\": 121}, {\"year\": \"1934\", \"count\": 120}, {\"year\": \"1966\", \"count\": 116}, {\"year\": \"1959\", \"count\": 115}, {\"year\": \"1916\", \"count\": 110}, {\"year\": \"1908\", \"count\": 108}, {\"year\": \"1960\", \"count\": 106}, {\"year\": \"1933\", \"count\": 105}, {\"year\": \"1918\", \"count\": 105}, {\"year\": \"1932\", \"count\": 104}, {\"year\": \"1953\", \"count\": 101}, {\"year\": \"1921\", \"count\": 95}, {\"year\": \"1905\", \"count\": 94}, {\"year\": \"1955\", \"count\": 94}, {\"year\": \"1924\", \"count\": 94}, {\"year\": \"1951\", \"count\": 93}, {\"year\": \"1914\", \"count\": 92}, {\"year\": \"1912\", \"count\": 89}, {\"year\": \"1920\", \"count\": 89}, {\"year\": \"1956\", \"count\": 88}, {\"year\": \"1929\", \"count\": 84}, {\"year\": \"1913\", \"count\": 81}, {\"year\": \"1909\", \"count\": 81}, {\"year\": \"1954\", \"count\": 80}, {\"year\": \"1910\", \"count\": 80}, {\"year\": \"1922\", \"count\": 80}, {\"year\": \"1936\", \"count\": 78}, {\"year\": \"1957\", \"count\": 77}, {\"year\": \"1926\", \"count\": 76}, {\"year\": \"1917\", \"count\": 76}, {\"year\": \"1925\", \"count\": 75}, {\"year\": \"1901\", \"count\": 75}, {\"year\": \"1911\", \"count\": 74}, {\"year\": \"1952\", \"count\": 73}, {\"year\": \"1904\", \"count\": 71}, {\"year\": \"1958\", \"count\": 68}, {\"year\": \"1903\", \"count\": 68}, {\"year\": \"1923\", \"count\": 64}, {\"year\": \"1949\", \"count\": 60}, {\"year\": \"1919\", \"count\": 58}, {\"year\": \"1948\", \"count\": 58}, {\"year\": \"1928\", \"count\": 57}, {\"year\": \"1940\", \"count\": 55}, {\"year\": \"1902\", \"count\": 54}, {\"year\": \"1946\", \"count\": 52}, {\"year\": \"1950\", \"count\": 51}, {\"year\": \"1941\", \"count\": 50}, {\"year\": \"1947\", \"count\": 50}, {\"year\": \"1945\", \"count\": 44}, {\"year\": \"1944\", \"count\": 40}, {\"year\": \"1942\", \"count\": 25}, {\"year\": \"1943\", \"count\": 18}, {\"year\": \"1892\", \"count\": 1}, {\"year\": \"1900\", \"count\": 1}, {\"year\": \"1898\", \"count\": 1}, {\"year\": \"1897\", \"count\": 1}, {\"year\": \"1896\", \"count\": 1}, {\"year\": \"1895\", \"count\": 1}, {\"year\": \"1894\", \"count\": 1}, {\"year\": \"1893\", \"count\": 1}, {\"year\": \"1888\", \"count\": 1}, {\"year\": \"1891\", \"count\": 1}, {\"year\": \"1890\", \"count\": 1}, {\"year\": \"1889\", \"count\": 1}, {\"year\": \"2016\", \"count\": 1}, {\"year\": \"2015\", \"count\": 1}, {\"year\": \"2014\", \"count\": 1}, {\"year\": \"2013\", \"count\": 1}, {\"year\": \"2019\", \"count\": 1}]}}, {\"mode\": \"vega-lite\"});\n</script></div><figcaption>\n<p><span class=\"caption-number\">Fig. 31.1 </span><span class=\"caption-text\">Publication dates of digitised Parliamentary Papers in Trove</span><a class=\"headerlink\" href=\"#pp-overview-chart-dates\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#how-many-parliamentary-papers-are-digitised-in-trove\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">How many Parliamentary Papers are digitised in Trove?</a><a class=\"headerlink\" href=\"#how-many-parliamentary-papers-are-digitised-in-trove\" title=\"Permalink to this heading\">#</a></h2><p>Many Commonwealth Parliamentary Papers have been digitised and made available through Trove. But, because of the way they\u2019re arranged and described, it\u2019s difficult to know exactly how many there are. I\u2019ve attempted to harvest details of all the Parliamentary Papers in Trove using a combination of techniques. Based on <a class=\"reference external\" href=\"https://github.com/GLAM-Workbench/trove-parliamentary-papers-data\">this dataset</a>, it seems there are currently <span class=\"pasted-text\">24,990</span> digitised Parliamentary Papers in Trove. Here are some more statistics from this dataset:</p>", "a[href=\"#overview-of-parliamentary-papers\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">31.1. </span>Overview of Parliamentary Papers<a class=\"headerlink\" href=\"#overview-of-parliamentary-papers\" title=\"Permalink to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\">What are Parliamentary Papers?</a><a class=\"headerlink\" href=\"#what-are-parliamentary-papers\" title=\"Permalink to this heading\">#</a></h2><p>Parliamentary Papers are documents presented to the Australian Parliament. Sometimes this is required by law. Other times it\u2019s just for information. The <a class=\"reference external\" href=\"https://www.aph.gov.au/Parliamentary_Business/Chamber_documents/Tabled_Papers/Parliamentary_Papers_series\">Parliament of Australia website notes</a>:</p>"}
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
