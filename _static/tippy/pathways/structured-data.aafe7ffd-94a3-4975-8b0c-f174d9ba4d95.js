selector_to_html = {"a[href=\"#structured-data-in-trove\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">28.1. </span>Structured data in Trove<a class=\"headerlink\" href=\"#structured-data-in-trove\" title=\"Link to this heading\">#</a></h2><h3>Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#other-tools-and-resources\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Other tools and resources<a class=\"headerlink\" href=\"#other-tools-and-resources\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#pre-harvested-datasets\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Pre-harvested datasets<a class=\"headerlink\" href=\"#pre-harvested-datasets\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#tutorials-and-examples\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">28.3. </span>Tutorials and examples<a class=\"headerlink\" href=\"#tutorials-and-examples\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#creating-datastes\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Creating datastes<a class=\"headerlink\" href=\"#creating-datastes\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#documentation\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#structured-data\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">28. </span>Structured data<a class=\"headerlink\" href=\"#structured-data\" title=\"Link to this heading\">#</a></h1><p>Includes collection metadata, search data (eg facets), user-generated data, and system statistics.</p>", "a[href=\"#ardc-community-data-lab\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">ARDC Community Data Lab<a class=\"headerlink\" href=\"#ardc-community-data-lab\" title=\"Link to this heading\">#</a></h3><p>These tools are developed, maintained or supported by the Community Data Lab or other projects within the HASS&amp;I Research Data Commons.</p>", "a[href=\"#tools-and-resources\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">28.2. </span>Tools and resources<a class=\"headerlink\" href=\"#tools-and-resources\" title=\"Link to this heading\">#</a></h2><h3>ARDC Community Data Lab<a class=\"headerlink\" href=\"#ardc-community-data-lab\" title=\"Link to this heading\">#</a></h3><p>These tools are developed, maintained or supported by the Community Data Lab or other projects within the HASS&amp;I Research Data Commons.</p>"}
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
