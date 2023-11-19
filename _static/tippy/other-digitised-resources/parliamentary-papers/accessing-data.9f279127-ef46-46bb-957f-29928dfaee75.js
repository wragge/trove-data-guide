selector_to_html = {"a[href=\"#accessing-images\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Accessing images<a class=\"headerlink\" href=\"#accessing-images\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#accessing-metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Accessing metadata<a class=\"headerlink\" href=\"#accessing-metadata\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#what-data-is-available\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">What data is available?<a class=\"headerlink\" href=\"#what-data-is-available\" title=\"Permalink to this heading\">#</a></h2><p>The following data is available relating to the digitised Parliamentary Papers in Trove:</p>", "a[href=\"#accessing-data-from-parliamentary-papers\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">23.3. </span>Accessing data from Parliamentary Papers<a class=\"headerlink\" href=\"#accessing-data-from-parliamentary-papers\" title=\"Permalink to this heading\">#</a></h1><h2>What data is available?<a class=\"headerlink\" href=\"#what-data-is-available\" title=\"Permalink to this heading\">#</a></h2><p>The following data is available relating to the digitised Parliamentary Papers in Trove:</p>", "a[href=\"#accessing-ocrd-text\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Accessing OCRd text<a class=\"headerlink\" href=\"#accessing-ocrd-text\" title=\"Permalink to this heading\">#</a></h2>"}
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
