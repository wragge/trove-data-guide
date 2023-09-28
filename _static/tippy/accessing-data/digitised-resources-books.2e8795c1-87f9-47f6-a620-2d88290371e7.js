selector_to_html = {"a[href=\"#text\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Text<a class=\"headerlink\" href=\"#text\" title=\"Permalink to this heading\">#</a></h2><p>Some in API but not all and limits on length \u2013 don\u2019t use!</p><p>Once you have number of pages can download \u2013&gt; how to</p>", "a[href=\"#images-and-pdf\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Images and PDF<a class=\"headerlink\" href=\"#images-and-pdf\" title=\"Permalink to this heading\">#</a></h2><p>Once you have number of pages can download \u2013&gt; how to</p><p>Some allow view but not download: <a class=\"reference external\" href=\"https://nla.gov.au/nla.obj-2490195342/view\">https://nla.gov.au/nla.obj-2490195342/view</a></p>", "a[href=\"#metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h2><p>Create datasets</p><p>Pre-harvested datasets \u2013 digitised books with OCR</p>", "a[href=\"#digitised-books-pamphlets-and-print-music\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">16.11. </span>Digitised books, pamphlets, and print music<a class=\"headerlink\" href=\"#digitised-books-pamphlets-and-print-music\" title=\"Permalink to this heading\">#</a></h1><p>Print publications with multiple pages.</p><p>Can be individual items or collections of items (eg multi-volume books).</p>"}
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
