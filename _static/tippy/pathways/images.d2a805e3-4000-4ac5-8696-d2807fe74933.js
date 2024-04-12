selector_to_html = {"a[href=\"#tutorials-and-examples\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Tutorials and examples<a class=\"headerlink\" href=\"#tutorials-and-examples\" title=\"Link to this heading\">#</a></h2>", "a[href=\"../newspapers-and-gazettes/data/pages.html#page-images-and-pdfs\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id15\" role=\"doc-backlink\">Page images and PDFs</a><a class=\"headerlink\" href=\"#page-images-and-pdfs\" title=\"Link to this heading\">#</a></h2><h3><a class=\"toc-backref\" href=\"#id16\" role=\"doc-backlink\">Download a page image</a><a class=\"headerlink\" href=\"#download-a-page-image\" title=\"Link to this heading\">#</a></h3><p>Once you know the secret formula, getting page images is easy. You can download a page image using a url like this:</p>", "a[href=\"#images-in-trove\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Images in Trove<a class=\"headerlink\" href=\"#images-in-trove\" title=\"Link to this heading\">#</a></h2><h3>Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#documentation\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#images\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24.2. </span>Images<a class=\"headerlink\" href=\"#images\" title=\"Link to this heading\">#</a></h1><h2>Images in Trove<a class=\"headerlink\" href=\"#images-in-trove\" title=\"Link to this heading\">#</a></h2><h3>Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#tools-and-resources\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Tools and resources<a class=\"headerlink\" href=\"#tools-and-resources\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#creating-datasets\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Creating datasets<a class=\"headerlink\" href=\"#creating-datasets\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#pre-harvested-data-sets\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Pre-harvested data sets<a class=\"headerlink\" href=\"#pre-harvested-data-sets\" title=\"Link to this heading\">#</a></h3>", "a[href=\"../other-digitised-resources/periodicals/accessing-data.html#digitised-periodicals-data-images\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Images<a class=\"headerlink\" href=\"#images\" title=\"Link to this heading\">#</a></h2><p>There are two types of images you can obtain from periodicals:</p>"}
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
