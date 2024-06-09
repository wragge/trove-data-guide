selector_to_html = {"a[href=\"#creating-datasets\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Creating datasets<a class=\"headerlink\" href=\"#creating-datasets\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#data-sources\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Data sources<a class=\"headerlink\" href=\"#data-sources\" title=\"Link to this heading\">#</a></h1><h2>Maps and place data in Trove<a class=\"headerlink\" href=\"#maps-and-place-data-in-trove\" title=\"Link to this heading\">#</a></h2><h3>Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#documentation\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#maps-and-place-data-in-trove\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Maps and place data in Trove<a class=\"headerlink\" href=\"#maps-and-place-data-in-trove\" title=\"Link to this heading\">#</a></h2><h3>Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#pre-harvested-datasets\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Pre-harvested datasets<a class=\"headerlink\" href=\"#pre-harvested-datasets\" title=\"Link to this heading\">#</a></h3>"}
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
