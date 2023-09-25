selector_to_html = {"a[href=\"#digitised-resources\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Digitised resources<a class=\"headerlink\" href=\"#digitised-resources\" title=\"Permalink to this heading\">#</a></h1><p>Other than newspapers.</p><p>Metadata available from the main search index \u2013 so <em>mostly</em> the same as aggregated metadata</p>", "a[href=\"#how-tos\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">How tos<a class=\"headerlink\" href=\"#how-tos\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h2><p>Get children of collections by scraping browse list, except for periodicals.</p><p>Get pages (also chapters, articles) of publications from JSON metadata</p>", "a[href=\"#downloading-text-images-and-pdfs\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Downloading text images and PDFs<a class=\"headerlink\" href=\"#downloading-text-images-and-pdfs\" title=\"Permalink to this heading\">#</a></h2><p>Method is the same across different format types, but the results differ depending on whether it\u2019s a collection, publication etc.</p>", "a[href=\"#things-you-might-want-to-do\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Things you might want to do<a class=\"headerlink\" href=\"#things-you-might-want-to-do\" title=\"Permalink to this heading\">#</a></h2>"}
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
