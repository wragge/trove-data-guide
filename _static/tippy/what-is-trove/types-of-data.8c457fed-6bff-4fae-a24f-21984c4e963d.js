selector_to_html = {"a[href=\"#collection-metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Collection metadata<a class=\"headerlink\" href=\"#collection-metadata\" title=\"Link to this heading\">#</a></h2><p>Structured data that describes</p>", "a[href=\"#types-of-data\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Types of data<a class=\"headerlink\" href=\"#types-of-data\" title=\"Link to this heading\">#</a></h1><p>Types of data:</p>"}
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