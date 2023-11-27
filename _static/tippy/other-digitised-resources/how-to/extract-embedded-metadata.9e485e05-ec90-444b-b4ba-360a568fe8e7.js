selector_to_html = {"a[href=\"#get-information-about-pages\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Get information about pages<a class=\"headerlink\" href=\"#get-information-about-pages\" title=\"Permalink to this heading\">#</a></h2><p>Depending on the format, the <code class=\"docutils literal notranslate\"><span class=\"pre\">children</span></code> field can contain information about pages, chapters, and articles contained within the digitised work. Books and periodical issues should include <code class=\"docutils literal notranslate\"><span class=\"pre\">page</span></code> data. To find the number of pages, you just need to get the length of the <code class=\"docutils literal notranslate\"><span class=\"pre\">page</span></code> list.</p>", "a[href=\"download-items-text-images.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.2. </span>HOW TO: Automate the download of digitised items as text, images, or PDFs<a class=\"headerlink\" href=\"#how-to-automate-the-download-of-digitised-items-as-text-images-or-pdfs\" title=\"Permalink to this heading\">#</a></h1><p>You can download text, images, and PDFs from individual digitised items <a class=\"reference internal\" href=\"../../accessing-data/using-web-interface.html\"><span class=\"doc std std-doc\">using the Trove web interface</span></a>. But only the text of periodical articles is available for machine access through the Trove API. This makes it difficult to assemble datasets, or build processing pipelines involving digitised resources. This page documents a series of work arounds that enable you to automate the download of digitised items as text, images, or PDFs.</p>", "a[href=\"#get-marc-catalogue-data\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Get MARC catalogue data<a class=\"headerlink\" href=\"#get-marc-catalogue-data\" title=\"Permalink to this heading\">#</a></h2><p>The MARC data is contained in the <code class=\"docutils literal notranslate\"><span class=\"pre\">marcData</span></code> field. This field can contain multiple records \u2013 the main metadata is contained in the <code class=\"docutils literal notranslate\"><span class=\"pre\">Bibliographic</span></code> record. To retrieve a value you need to know the <a class=\"reference external\" href=\"https://www.loc.gov/marc/bibliographic/\">MARC tag and subfield</a> for the field you\u2019re interested in. You can then loop through the <code class=\"docutils literal notranslate\"><span class=\"pre\">datafield</span></code> list until you find the tag and subfield, and extract the value from the <code class=\"docutils literal notranslate\"><span class=\"pre\">content</span></code> field.</p><p>The functions below will extract the value of a given MARC tag and subfield from the embedded metadata.</p>", "a[href=\"#how-to-extract-additional-metadata-from-the-web-page-of-a-digitised-work\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.3. </span>HOW TO: Extract additional metadata from the web page of a digitised work<a class=\"headerlink\" href=\"#how-to-extract-additional-metadata-from-the-web-page-of-a-digitised-work\" title=\"Permalink to this heading\">#</a></h1><p>The viewers you use to examine digitised resources in Trove embed some metadata that isn\u2019t available through the Trove API. This includes a JSON-ified version of the item\u2019s MARC record (presumably copied from the NLA catalogue), as well as structural information used by the viewer itself, such as a list of pages in a digitised book.</p><p>This metadata can be useful in a number of different contexts. For example, you can extract the number of pages in a digitised book, then use this number to <a class=\"reference internal\" href=\"download-items-text-images.html\"><span class=\"doc std std-doc\">automatically download the full text or a PDF</span></a>. The GLAM Workbench includes an example where geospatial coordinates are extracted from the MARC data to add to a <a class=\"reference external\" href=\"https://glam-workbench.net/trove-maps/exploring-digitised-maps/\">harvest of digitised maps</a>.</p>"}
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
