selector_to_html = {"a[href=\"networks.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24.5. </span>Networks and relationships<a class=\"headerlink\" href=\"#networks-and-relationships\" title=\"Link to this heading\">#</a></h1><h2>Data sources<a class=\"headerlink\" href=\"#data-sources\" title=\"Link to this heading\">#</a></h2>", "a[href=\"geospatial.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24.4. </span>Maps and places<a class=\"headerlink\" href=\"#maps-and-places\" title=\"Link to this heading\">#</a></h1><h2>Data sources<a class=\"headerlink\" href=\"#data-sources\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#research-pathways\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24. </span>Research pathways<a class=\"headerlink\" href=\"#research-pathways\" title=\"Link to this heading\">#</a></h1><p>This section will include detailed tutorials that demonstrate how you can make use of Trove data using tools from the <a class=\"reference external\" href=\"https://ardc.edu.au/project/ardc-community-data-lab/\">ARDC Community Data Lab</a> and beyond.</p>", "a[href=\"images.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24.2. </span>Images<a class=\"headerlink\" href=\"#images\" title=\"Link to this heading\">#</a></h1><h2>Images in Trove<a class=\"headerlink\" href=\"#images-in-trove\" title=\"Link to this heading\">#</a></h2><h3>Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">#</a></h3>", "a[href=\"structured-data.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24.3. </span>Structured data<a class=\"headerlink\" href=\"#structured-data\" title=\"Link to this heading\">#</a></h1><h2>Structured data in Trove<a class=\"headerlink\" href=\"#structured-data-in-trove\" title=\"Link to this heading\">#</a></h2>", "a[href=\"collections.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24.6. </span>Creating collections<a class=\"headerlink\" href=\"#creating-collections\" title=\"Link to this heading\">#</a></h1><h2>Data sources<a class=\"headerlink\" href=\"#data-sources\" title=\"Link to this heading\">#</a></h2>", "a[href=\"text.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24.1. </span>Text<a class=\"headerlink\" href=\"#text\" title=\"Link to this heading\">#</a></h1><h2>Text in Trove<a class=\"headerlink\" href=\"#text-in-trove\" title=\"Link to this heading\">#</a></h2><h3>Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">#</a></h3>"}
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
