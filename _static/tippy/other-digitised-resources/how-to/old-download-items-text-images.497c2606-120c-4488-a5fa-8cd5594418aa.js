selector_to_html = {"a[href=\"#how-to-automate-the-download-of-digitised-items-as-text-images-or-pdfs\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">HOW TO: Automate the download of digitised items as text, images, or PDFs<a class=\"headerlink\" href=\"#how-to-automate-the-download-of-digitised-items-as-text-images-or-pdfs\" title=\"Link to this heading\">#</a></h1><p>You can download text, images, and PDFs from individual digitised items <a class=\"reference internal\" href=\"../../accessing-data/using-web-interface.html\"><span class=\"std std-doc\">using the Trove web interface</span></a>. But only the text of periodical articles is available for machine access through the Trove API. This makes it difficult to assemble datasets, or build processing pipelines involving digitised resources. This page documents a series of work arounds that enable you to automate the download of digitised items as text, images, or PDFs.</p>", "a[href=\"../../accessing-data/using-web-interface.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">13. </span>Downloading data from the Trove web interface<a class=\"headerlink\" href=\"#downloading-data-from-the-trove-web-interface\" title=\"Link to this heading\">#</a></h1><h2><span class=\"section-number\">13.1. </span>Downloading images, PDFs, text, and audio<a class=\"headerlink\" href=\"#downloading-images-pdfs-text-and-audio\" title=\"Link to this heading\">#</a></h2><p>Items that have been digitised by the NLA and made available through one of Trove\u2019s digitised item viewers can usually be downloaded in a variety of formats. This includes newspapers, books, journals, images, maps, manuscripts, and oral histories.</p><p>The official Trove Help includes a page on <a class=\"reference external\" href=\"https://trove.nla.gov.au/help/using-trove/downloading\">Downloading</a> that describes the options available in the various Trove categories for downloading images, PDFs, text, and audio. Different formats have different viewers, but generally speaking you just need to find the download tab in the sidebar, select a format, and click the button.</p>", "a[href=\"get-collection-items.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">25.3. </span>HOW TO: Get a list of items from a digitised collection<a class=\"headerlink\" href=\"#how-to-get-a-list-of-items-from-a-digitised-collection\" title=\"Link to this heading\">#</a></h1><h2><span class=\"section-number\">25.3.1. </span>Background<a class=\"headerlink\" href=\"#background\" title=\"Link to this heading\">#</a></h2><p>The NLA\u2019s digitised resources are often presented as \u2018collections\u2019. A collection could be the volumes in a multi-volume work, the issues of a periodical, a map series, an album of photographs, or a manuscript collection. In the web interface, collections will have a \u2018Browse this collection\u2019 link or button that displays a list of the contents, but getting machine-readable data is not so straightforward. You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">magazine/title</span></code> API endpoint to get a list of issues from a periodical, but there\u2019s no way to get the contents of other types of collections from the Trove API.</p>", "a[href=\"#downloading-high-resolution-images-individually\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Downloading high-resolution images individually<a class=\"headerlink\" href=\"#downloading-high-resolution-images-individually\" title=\"Link to this heading\">#</a></h2><p>The method described above has a couple of problems when it comes to downloading images. The first is that all the requested images are delivered in a single <code class=\"docutils literal notranslate\"><span class=\"pre\">zip</span></code> file. If you\u2019re requested images of all the pages in a book, this file could get very large. The second problem is that the built-in download link doesn\u2019t always provide images at the highest possible resolution.</p><p>An alternative approach that avoids both of these problems is to construct a url for each individual page. All you need to do this is get the page identifier and tack <code class=\"docutils literal notranslate\"><span class=\"pre\">/image</span></code> on the end of the url.</p>", "a[href=\"#using-troves-download-link\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Using Trove\u2019s download link<a class=\"headerlink\" href=\"#using-troves-download-link\" title=\"Link to this heading\">#</a></h2><p>When you click on the download button in the web interface, your browser fires off a request to Trove that looks like this:</p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">https://nla.gov.au/nla.obj-[ID]/download?downloadOption=[FORMAT]&amp;firstPage=[FIRST]&amp;lastPage=[LAST]</span></code></p>", "a[href=\"extract-embedded-metadata.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">25.2. </span>HOW TO: Extract additional metadata from the digitised resource viewer<a class=\"headerlink\" href=\"#how-to-extract-additional-metadata-from-the-digitised-resource-viewer\" title=\"Link to this heading\">#</a></h1><p>The viewers you use to examine digitised resources in Trove embed some metadata that isn\u2019t available through the Trove API. This includes a JSON-ified version of the item\u2019s MARC record (presumably copied from the NLA catalogue), as well as structural information used by the viewer itself, such as a list of pages in a digitised book.</p><p>This metadata can be useful in a number of different contexts. For example, you can extract the number of pages in a digitised book, then use this number to <a class=\"reference internal\" href=\"get-downloads.html\"><span class=\"doc std std-doc\">automatically download the full text or a PDF</span></a>. The GLAM Workbench includes an example where geospatial coordinates are extracted from the MARC data to add to a <a class=\"reference external\" href=\"https://glam-workbench.net/trove-maps/exploring-digitised-maps/\">harvest of digitised maps</a>.</p>"}
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