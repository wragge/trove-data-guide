selector_to_html = {"a[href=\"#how-to-use-the-bulk-export-option-to-save-the-results-of-a-search\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">16.2. </span>HOW TO: Use the bulk export option to save the results of a search<a class=\"headerlink\" href=\"#how-to-use-the-bulk-export-option-to-save-the-results-of-a-search\" title=\"Permalink to this heading\">#</a></h1><p><mark>==Include more info once official documentation is available==</mark></p><p><mark>==Note that there are some differences in fields from the API==</mark></p>"}
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
