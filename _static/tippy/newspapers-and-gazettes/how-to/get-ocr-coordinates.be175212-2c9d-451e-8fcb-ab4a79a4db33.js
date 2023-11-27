selector_to_html = {"a[href=\"#how-to-get-information-about-the-position-of-ocrd-newspaper-text\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4.3. </span>HOW TO: Get information about the position of OCRd newspaper text<a class=\"headerlink\" href=\"#how-to-get-information-about-the-position-of-ocrd-newspaper-text\" title=\"Permalink to this heading\">#</a></h1><p>The OCR process not only extracts text from an image, it generates coordinates that document the position of each piece of text within the parent image. You could use this information to crop an image of the OCRd text out of the parent image. In the case of digitised newspapers, this sort of positional information could help you explore the layout and contents of newspaper pages and how this changes over time.</p><p>No positional information is available from the Trove API, however, there is some embedded within the web site. If you view the source of a newspaper article\u2019s web page, you\u2019ll find a number of <code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;input&gt;</span></code> tags like this:</p>", "a[href=\"../data/pages.html#download-a-page-image\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id16\" role=\"doc-backlink\">Download a page image</a><a class=\"headerlink\" href=\"#download-a-page-image\" title=\"Permalink to this heading\">#</a></h3><p>Once you know the secret formula, getting page images is easy. You can download a page image using a url like this:</p>"}
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
