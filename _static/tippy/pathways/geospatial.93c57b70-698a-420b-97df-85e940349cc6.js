selector_to_html = {"a[href=\"#maps-and-place-data-in-trove\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">30.1. </span>Maps and place data in Trove<a class=\"headerlink\" href=\"#maps-and-place-data-in-trove\" title=\"Link to this heading\">#</a></h2><h3>Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#pre-harvested-datasets\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Pre-harvested datasets<a class=\"headerlink\" href=\"#pre-harvested-datasets\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#other-tools-and-resources\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Other tools and resources<a class=\"headerlink\" href=\"#other-tools-and-resources\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#creating-datasets\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Creating datasets<a class=\"headerlink\" href=\"#creating-datasets\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#tools-and-resources\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">30.2. </span>Tools and resources<a class=\"headerlink\" href=\"#tools-and-resources\" title=\"Link to this heading\">#</a></h2><h3>ARDC Community Data Lab<a class=\"headerlink\" href=\"#ardc-community-data-lab\" title=\"Link to this heading\">#</a></h3><p>These tools are developed, maintained or supported by the Community Data Lab or other projects within the HASS&amp;I Research Data Commons.</p>", "a[href=\"#maps-and-places\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">30. </span>Maps and places<a class=\"headerlink\" href=\"#maps-and-places\" title=\"Link to this heading\">#</a></h1><h2><span class=\"section-number\">30.1. </span>Maps and place data in Trove<a class=\"headerlink\" href=\"#maps-and-place-data-in-trove\" title=\"Link to this heading\">#</a></h2><h3>Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#documentation\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#tutorials-and-examples\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">30.3. </span>Tutorials and examples<a class=\"headerlink\" href=\"#tutorials-and-examples\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#ardc-community-data-lab\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">ARDC Community Data Lab<a class=\"headerlink\" href=\"#ardc-community-data-lab\" title=\"Link to this heading\">#</a></h3><p>These tools are developed, maintained or supported by the Community Data Lab or other projects within the HASS&amp;I Research Data Commons.</p>"}
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
