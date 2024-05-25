selector_to_html = {"a[href=\"#data-access-options\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12. </span>Data access options<a class=\"headerlink\" href=\"#data-access-options\" title=\"Link to this heading\">#</a></h1><p>There are many different <a class=\"reference internal\" href=\"../what-is-trove/types-of-data.html\"><span class=\"doc std std-doc\">types of data</span></a> available from Trove and many different ways of accessing it. You can manually download some data, such as images, from Trove\u2019s web interface. If you\u2019re creating small, selective datasets, these manual methods might be all you need.</p><p>But what if you want to save <em>all</em> the results from a search, automate downloading of images and text, or create a pipeline to feed Trove data into a specific tool for analysis? In these sorts of cases, you need access methods that are reusable and extensible \u2013 methods that can be invoked using code and that deliver data in a <a class=\"reference internal\" href=\"../glossary.html#term-Machine-readable\"><span class=\"xref std std-term\">machine readable</span></a> format that computers can manipulate.</p>", "a[href=\"../newspapers-and-gazettes/how-to/get-ocr-coordinates.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">18.2. </span>HOW TO: Get information about the position of OCRd newspaper text<a class=\"headerlink\" href=\"#how-to-get-information-about-the-position-of-ocrd-newspaper-text\" title=\"Link to this heading\">#</a></h1><p>The OCR process not only extracts text from an image, it generates coordinates that document the position of each piece of text within the parent image. You could use this information to crop an image of the OCRd text out of the parent image. In the case of digitised newspapers, this sort of positional information could help you explore the layout and contents of newspaper pages and how this changes over time.</p><p>No positional information is available from the Trove API, however, there is some embedded within the web site. If you view the source of a newspaper article\u2019s web page, you\u2019ll find a number of <code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;input&gt;</span></code> tags like this:</p>", "a[href=\"../glossary.html#term-Application-Programming-Interface-API\"]": "<dt id=\"term-Application-Programming-Interface-API\">Application Programming Interface (API)</dt><dd><p>definition</p></dd>", "a[href=\"../glossary.html#term-Screen-scraping\"]": "<dt id=\"term-Screen-scraping\">Screen scraping</dt><dd><p>definition</p></dd>", "a[href=\"../what-is-trove/types-of-data.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Types of data<a class=\"headerlink\" href=\"#types-of-data\" title=\"Link to this heading\">#</a></h1><p>Types of data:</p>", "a[href=\"../glossary.html#term-Machine-readable\"]": "<dt id=\"term-Machine-readable\">Machine readable</dt><dd><p>definition</p></dd>"}
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
