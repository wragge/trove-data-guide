selector_to_html = {"a[href=\"using-web-interface.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">13. </span>Downloading data from the Trove web interface<a class=\"headerlink\" href=\"#downloading-data-from-the-trove-web-interface\" title=\"Link to this heading\">#</a></h1><h2><span class=\"section-number\">13.1. </span>Downloading images, PDFs, text, and audio<a class=\"headerlink\" href=\"#downloading-images-pdfs-text-and-audio\" title=\"Link to this heading\">#</a></h2><p>Items that have been digitised by the NLA and made available through one of Trove\u2019s digitised item viewers can usually be downloaded in a variety of formats. This includes newspapers, books, journals, images, maps, manuscripts, and oral histories.</p><p>The official Trove Help includes a page on <a class=\"reference external\" href=\"https://trove.nla.gov.au/help/using-trove/downloading\">Downloading</a> that describes the options available in the various Trove categories for downloading images, PDFs, text, and audio. Different formats have different viewers, but generally speaking you just need to find the download tab in the sidebar, select a format, and click the button.</p>", "a[href=\"../glossary.html#term-Application-Programming-Interface-API\"]": "<dt id=\"term-Application-Programming-Interface-API\">Application Programming Interface (API)</dt><dd><p>definition</p></dd>", "a[href=\"trove-api-intro.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">14. </span>Trove API introduction<a class=\"headerlink\" href=\"#trove-api-introduction\" title=\"Link to this heading\">#</a></h1><p>Use the Trove Application Programming Interface (API) to get direct access to Trove data. Just make a request  and get back data in a predictable, structured format that computers can understand.</p>", "a[href=\"../pathways/index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">26. </span>Research pathways<a class=\"headerlink\" href=\"#research-pathways\" title=\"Link to this heading\">#</a></h1><p>The Trove Data Guide provides lots of information to help researchers access and understand the data that\u2019s available through Trove. But once you\u2019ve found some interesting data, how do you package it for further analysis? How do you connect your Trove discoveries with available digital tools to pursue specific research questions?</p><p>This section highlights pathways that connect Trove data to a range of digital tools. They\u2019re examples of what\u2019s possible \u2013 intended to spark new ideas and approaches, not to privilege particular methodologies. Use them as a starting point in planning your own projects.</p>", "a[href=\"../other-digitised-resources/accessing-data.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">20. </span>Accessing data from digitised resources<a class=\"headerlink\" href=\"#accessing-data-from-digitised-resources\" title=\"Link to this heading\">#</a></h1><p>Trove\u2019s digitised resources are delivered in a number of different ways depending on their format and arrangement. See <a class=\"reference internal\" href=\"../what-is-trove/interfaces.html#whatis-interfaces-digitised\"><span class=\"std std-ref\">Digitised content viewers</span></a> and <a class=\"reference internal\" href=\"../accessing-data/using-web-interface.html\"><span class=\"doc std std-doc\">Downloading data from the Trove web interface</span></a> for hints on using digitised resources through Trove\u2019s web interface.</p><p>Access to machine-readable data is even more complicated. The Trove API provides limited information about digitised resources, necessitating a variety of hacks and workarounds. Nonetheless, there are some methods of accessing data from digitised resources that work reliably across multiple formats. These are described below.</p>", "a[href=\"../newspapers-and-gazettes/how-to/get-ocr-coordinates.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">18.2. </span>HOW TO: Get information about the position of OCRd newspaper text<a class=\"headerlink\" href=\"#how-to-get-information-about-the-position-of-ocrd-newspaper-text\" title=\"Link to this heading\">#</a></h1><p>The OCR process not only extracts text from an image, it generates coordinates that document the position of each piece of text within the parent image. You could use this information to crop an image of the OCRd text out of the parent image. In the case of digitised newspapers, this sort of positional information could help you explore the layout and contents of newspaper pages and how this changes over time.</p><p>No positional information is available from the Trove API, however, there is some embedded within the web site. If you view the source of a newspaper article\u2019s web page, you\u2019ll find a number of <code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;input&gt;</span></code> tags like this:</p>", "a[href=\"#data-access-options\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12. </span>Data access options<a class=\"headerlink\" href=\"#data-access-options\" title=\"Link to this heading\">#</a></h1><p>There are many different types of data available from Trove and many different ways of accessing it. You can <a class=\"reference internal\" href=\"using-web-interface.html\"><span class=\"doc std std-doc\">manually download some data</span></a>, such as images, from Trove\u2019s web interface. If you\u2019re creating small, selective datasets, these manual methods might be all you need.</p><p>But what if you want to save <em>all</em> the results from a search, automate downloading of images and text, or create a pipeline to feed Trove data into a specific tool for analysis? In these sorts of cases, you need access methods that are reusable and extensible \u2013 methods that can be invoked using code and that deliver data in a <a class=\"reference internal\" href=\"../glossary.html#term-Machine-readable\"><span class=\"xref std std-term\">machine readable</span></a> format that computers can manipulate.</p>", "a[href=\"../newspapers-and-gazettes/data/accessing-data.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">17. </span>Accessing data from newspapers and gazettes<a class=\"headerlink\" href=\"#accessing-data-from-newspapers-and-gazettes\" title=\"Link to this heading\">#</a></h1><p>Before you start requesting data from Trove\u2019s digitised newspapers, it\u2019s worth thinking a bit about the way newspapers are represented in Trove and the relationships between <strong>articles</strong>, <strong>pages</strong>, <strong>issues</strong>, and <strong>titles</strong>. You might think that newspapers are organised in a simple hierarchical structure with titles at the top, and articles at the bottom, but it\u2019s not quite that straighforward. Articles are linked to both pages and titles. Titles have their own API endpoint that can lead you to issues, though following an issue url will actually take you to a page. Pages have identifiers, and you can browse their contents in the Trove web interface, but they don\u2019t exist as separate entities in the API. These sorts of oddities mean that sometimes there\u2019s no direct route to the information that you want, but by thinking about what is connected to what, you can find alternative paths. For example, while there\u2019s no direct link between issues and articles, if you get the publication date and title from an issue, you can then search for articles published in that issue by using the <code class=\"docutils literal notranslate\"><span class=\"pre\">date</span></code> index and <code class=\"docutils literal notranslate\"><span class=\"pre\">title</span></code> facet.</p><p>This section is organised by <strong>articles</strong>, <strong>pages</strong>, <strong>issues</strong>, and <strong>titles</strong>. For each entity, I\u2019ve described a variety of methods to access metadata, text and images \u2013 some are straightforward, others are a bit hacky, but they work!</p>", "a[href=\"../glossary.html#term-Screen-scraping\"]": "<dt id=\"term-Screen-scraping\">Screen scraping</dt><dd><p>definition</p></dd>", "a[href=\"../glossary.html#term-Machine-readable\"]": "<dt id=\"term-Machine-readable\">Machine readable</dt><dd><p>definition</p></dd>"}
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