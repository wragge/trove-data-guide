selector_to_html = {"a[href=\"#other-tools\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Other tools<a class=\"headerlink\" href=\"#other-tools\" title=\"Link to this heading\">#</a></h3><p><a class=\"reference external\" href=\"https://glam-workbench.net/trove-newspapers/Save-page-image/\">Download a page image from Trove\u2019s newspapers</a>\nThe Trove web interface doesn\u2019t provide a way of getting high-resolution page images from newspapers. This simple app lets you download page images as complete, high-resolution jpeg files.</p>", "a[href=\"../../newspapers-and-gazettes/data/pages.html#page-images-and-pdfs\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Page images and PDFs<a class=\"headerlink\" href=\"#page-images-and-pdfs\" title=\"Link to this heading\">#</a></h2><h3>Download a page image<a class=\"headerlink\" href=\"#download-a-page-image\" title=\"Link to this heading\">#</a></h3><p>Once you know the secret formula, getting page images is easy. You can download a page image using a url like this:</p>", "a[href=\"#documentation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">#</a></h2><p>These sections of the Trove Data Guide explain how to access images from different parts of Trove:</p>", "a[href=\"../../newspapers-and-gazettes/data/articles.html#articles-as-images\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Save articles as images<a class=\"headerlink\" href=\"#save-articles-as-images\" title=\"Link to this heading\">#</a></h3><p>The \u2018images\u2019 of articles you download from the web interface are actually HTML pages with embedded images. The embedded images themselves are often sliced up to fit on a page, and there\u2019s no straightforward way of putting them back together. This means there\u2019s no point trying to download images by duplicating what the web interface does. Fortunately, there\u2019s an alternative.</p><p>As described above, it\u2019s possible the extract the positional coordinates of an article from the web interface. It\u2019s also possible to download a high-resolution image of a page. By putting the two together you can crop an article image from the full page. This <a class=\"reference external\" href=\"https://glam-workbench.net/trove-newspapers/Save-Trove-newspaper-article-as-image/\">method is fully documented</a> in the GLAM Workbench.</p>", "a[href=\"../../newspapers-and-gazettes/data/articles.html#words-as-images\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Save words as images<a class=\"headerlink\" href=\"#save-words-as-images\" title=\"Link to this heading\">#</a></h3><p>By using a variation on the method described above, you can even save images of individual words! As explained in <a class=\"reference internal\" href=\"../../newspapers-and-gazettes/how-to/get-ocr-coordinates.html\"><span class=\"doc std std-doc\">HOW TO: Get information about the position of OCRd newspaper text</span></a>, the secret is to modify an article\u2019s url and set the <code class=\"docutils literal notranslate\"><span class=\"pre\">searchTerm</span></code> parameter to the word you want to save. This will highlight the word wherever it appears in the article. You can then scrape the coordinates of the highlighted words, and crop them from the full page image. This method is used in the GLAM Workbench notebook <a class=\"reference external\" href=\"https://glam-workbench.net/trove-newspapers/trove-newspapers-scissors-and-paste/\">Create \u2018scissors and paste\u2019 messages from Trove newspaper articles</a> to generate images like this!</p><p><img alt='Scissors and paste style message created from snipped words: \"Help trapped inside Trove cannot escape.\"' src=\"../../_images/trapped-trove.jpg\"/></p>", "a[href=\"../../other-digitised-resources/periodicals/accessing-data.html#digitised-periodicals-data-images\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">22.3.4. </span>Images<a class=\"headerlink\" href=\"#images\" title=\"Link to this heading\">#</a></h2><p>There are two types of images you can obtain from periodicals:</p>", "a[href=\"#data-sources\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">28.1. </span>Data sources<a class=\"headerlink\" href=\"#data-sources\" title=\"Link to this heading\">#</a></h1><p>This page describes options for obtaining images from Trove.</p>", "a[href=\"#pre-harvested-data-sets\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Pre-harvested data sets<a class=\"headerlink\" href=\"#pre-harvested-data-sets\" title=\"Link to this heading\">#</a></h2><p>The GLAM Workbench provides datasets containing images harvested from Trove.</p>", "a[href=\"#software-packages\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Software packages<a class=\"headerlink\" href=\"#software-packages\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#creating-datasets\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Creating datasets<a class=\"headerlink\" href=\"#creating-datasets\" title=\"Link to this heading\">#</a></h2><p>These tools and examples can help you create your own collections of images from Trove.</p>", "a[href=\"#glam-workbench-notebooks\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">GLAM Workbench notebooks<a class=\"headerlink\" href=\"#glam-workbench-notebooks\" title=\"Link to this heading\">#</a></h3>"}
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