selector_to_html = {"a[href=\"#digitised-resources\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5. </span>Digitised resources<a class=\"headerlink\" href=\"#digitised-resources\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"download-items-text-images.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.2. </span>HOW TO: Automate the download of digitised items as text, images, or PDFs<a class=\"headerlink\" href=\"#how-to-automate-the-download-of-digitised-items-as-text-images-or-pdfs\" title=\"Permalink to this heading\">#</a></h1><p>You can download text, images, and PDFs from individual digitised items <a class=\"reference internal\" href=\"../../accessing-data/using-web-interface.html\"><span class=\"doc std std-doc\">using the Trove web interface</span></a>. But only the text of periodical articles is available for machine access through the Trove API. This makes it difficult to assemble datasets, or build processing pipelines involving digitised resources. This page documents a series of work arounds that enable you to automate the download of digitised items as text, images, or PDFs.</p>", "a[href=\"extract-embedded-metadata.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.3. </span>HOW TO: Extract additional metadata from the web page of a digitised work<a class=\"headerlink\" href=\"#how-to-extract-additional-metadata-from-the-web-page-of-a-digitised-work\" title=\"Permalink to this heading\">#</a></h1><p>The viewers you use to examine digitised resources in Trove embed some metadata that isn\u2019t available through the Trove API. This includes a JSON-ified version of the item\u2019s MARC record (presumably copied from the NLA catalogue), as well as structural information used by the viewer itself, such as a list of pages in a digitised book.</p><p>This metadata can be useful in a number of different contexts. For example, you can extract the number of pages in a digitised book, then use this number to <a class=\"reference internal\" href=\"download-items-text-images.html\"><span class=\"doc std std-doc\">automatically download the full text or a PDF</span></a>. The GLAM Workbench includes an example where geospatial coordinates are extracted from the MARC data to add to a <a class=\"reference external\" href=\"https://glam-workbench.net/trove-maps/exploring-digitised-maps/\">harvest of digitised maps</a>.</p>", "a[href=\"get-collection-items.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.1. </span>HOW TO: Get a list of items in a digitised collection<a class=\"headerlink\" href=\"#how-to-get-a-list-of-items-in-a-digitised-collection\" title=\"Permalink to this heading\">#</a></h1><p>The NLA\u2019s digitised resources are often presented as \u2018collections\u2019. A collection could be the volumes in a multi-volume work, the issues of a periodical, a map series, an album of photographs, or a manuscript collection. In the web interface, collections will have a \u2018Browse this collection\u2019 link or button that displays a list of the contents, but getting machine-readable data is not so straightforward. You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">magazine/title</span></code> API endpoint to get a list of issues from a periodical, but there\u2019s no way to get the contents of other types of collections from the Trove API.</p><p><mark>==Insert screencap==</mark></p>"}
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
