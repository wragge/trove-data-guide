selector_to_html = {"a[href=\"#trove-search-screenshot\"]": "<figure class=\"align-default\" id=\"trove-search-screenshot\">\n<a class=\"reference internal image-reference\" href=\"../_images/trove-search-screenshot-arrow.png\"><img alt=\"../_images/trove-search-screenshot-arrow.png\" src=\"../_images/trove-search-screenshot-arrow.png\" style=\"width: 80%;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 1 </span><span class=\"caption-text\">Screenshot of Trove search for the term \u2018radio\u2019 \u2013 3,661,933 results!</span><a class=\"headerlink\" href=\"#trove-search-screenshot\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"../newspapers-and-gazettes/how-to/querypic.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">27.1. </span>HOW TO: Visualising newspaper searches with QueryPic<a class=\"headerlink\" href=\"#how-to-visualising-newspaper-searches-with-querypic\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"../glossary.html#term-Application-Programming-Interface-API\"]": "<dt id=\"term-Application-Programming-Interface-API\">Application Programming Interface (API)</dt><dd><p>definition</p></dd>", "a[href=\"../what-is-trove/trove-is.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1. </span>Trove is\u2026<a class=\"headerlink\" href=\"#trove-is\" title=\"Permalink to this heading\">#</a></h1><p><strong>Trove is not one thing</strong>. On the <a class=\"reference external\" href=\"https://trove.nla.gov.au/about/what-trove/technical-ecosystem\">technical side</a>, Trove is a combination of many interconnected systems, data sources, and interfaces, each with its own individual history. But Trove is also an idea, an ambition, an attempt to provide Australians with facilitated access to research and heritage collections from across the country. That idea, expressed through policy documents, strategic plans, resource allocations, and collaborative agreements has also evolved over the past 15 years. At the same time, Trove has been enriched by its community of users, both by submitting annotations and corrections through the web interface, and by sharing their own research, methods, tools, and discoveries across the web. Trove now is the product of these entwined histories \u2013 technology, policy, and community.</p>", "a[href=\"../pathways/pathways.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">35. </span>Research pathways<a class=\"headerlink\" href=\"#research-pathways\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"#introduction\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Introduction<a class=\"headerlink\" href=\"#introduction\" title=\"Permalink to this heading\">#</a></h1><p>We all know how to use <a class=\"reference external\" href=\"https://trove.nla.gov.au/\">Trove</a>. You just type your search terms into the box and click the button. You then work your way through the first few pages of results, saving anything that looks useful. If, for example, I\u2019m interested in the development of radio in Australia, I could search for the term \u2018radio\u2019 in Trove\u2019s digitised newspapers. It\u2019s easy!</p>", "a[href=\"../what-is-trove/types-of-data.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5. </span>Types of data<a class=\"headerlink\" href=\"#types-of-data\" title=\"Permalink to this heading\">#</a></h1><p>Types of data:</p>", "a[href=\"#querypic-radio-wireless-telegraph\"]": "<figure class=\"align-default\" id=\"querypic-radio-wireless-telegraph\">\n<a class=\"reference internal image-reference\" href=\"../_images/querypic-radio-wireless-telegraph.svg\"><img alt=\"../_images/querypic-radio-wireless-telegraph.svg\" src=\"../_images/querypic-radio-wireless-telegraph.svg\" width=\"80%\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 3 </span><span class=\"caption-text\">Chart generated by QueryPic for the search terms \u2018radio\u2019, \u2018wireless\u2019, and \u2018telegraph\u2019</span><a class=\"headerlink\" href=\"#querypic-radio-wireless-telegraph\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"../accessing-data/data-access-options.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">14. </span>Data access options<a class=\"headerlink\" href=\"#data-access-options\" title=\"Permalink to this heading\">#</a></h1><p>There are many different <a class=\"reference internal\" href=\"../what-is-trove/types-of-data.html\"><span class=\"doc std std-doc\">types of data</span></a> available from Trove and many different ways of accessing it. You can manually download some data, such as images, from Trove\u2019s web interface. If you\u2019re creating small, selective datasets, these manual methods might be all you need.</p><p>But what if you want to save <em>all</em> the results from a search, automate downloading of images and text, or create a pipeline to feed Trove data into a specific tool for analysis? In these sorts of cases, you need access methods that are reusable and extensible \u2013 methods that can be invoked using code and that deliver data in a <a class=\"reference internal\" href=\"../glossary.html#term-Machine-readable\"><span class=\"xref std std-term\">machine readable</span></a> format that computers can manipulate.</p>", "a[href=\"#querypic-radio\"]": "<figure class=\"align-default\" id=\"querypic-radio\">\n<a class=\"reference internal image-reference\" href=\"../_images/querypic-radio.svg\"><img alt=\"../_images/querypic-radio.svg\" src=\"../_images/querypic-radio.svg\" width=\"80%\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 2 </span><span class=\"caption-text\">Chart generated by QueryPic for the search term \u2018radio\u2019</span><a class=\"headerlink\" href=\"#querypic-radio\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
