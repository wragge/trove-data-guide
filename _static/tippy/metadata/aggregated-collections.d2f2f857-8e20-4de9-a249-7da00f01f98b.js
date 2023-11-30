selector_to_html = {"a[href=\"#aggregated-collections\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Aggregated collections<a class=\"headerlink\" href=\"#aggregated-collections\" title=\"Permalink to this heading\">#</a></h1><p>This sections will examine the collections aggregated into Trove.</p>"}
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
