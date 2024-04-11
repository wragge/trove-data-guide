selector_to_html = {"a[href=\"geospatial.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24.4. </span>Geospatial data<a class=\"headerlink\" href=\"#geospatial-data\" title=\"Link to this heading\">#</a></h1><h2>Data sources<a class=\"headerlink\" href=\"#data-sources\" title=\"Link to this heading\">#</a></h2>", "a[href=\"analysing-texts.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24.1. </span>Analysing texts<a class=\"headerlink\" href=\"#analysing-texts\" title=\"Link to this heading\">#</a></h1><h2>Data sources<a class=\"headerlink\" href=\"#data-sources\" title=\"Link to this heading\">#</a></h2>", "a[href=\"using-images.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24.2. </span>Using images<a class=\"headerlink\" href=\"#using-images\" title=\"Link to this heading\">#</a></h1><h2>Data sources<a class=\"headerlink\" href=\"#data-sources\" title=\"Link to this heading\">#</a></h2>", "a[href=\"collections.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24.6. </span>Networks and relationships<a class=\"headerlink\" href=\"#networks-and-relationships\" title=\"Link to this heading\">#</a></h1><h2>Data sources<a class=\"headerlink\" href=\"#data-sources\" title=\"Link to this heading\">#</a></h2>", "a[href=\"structured-data.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24.3. </span>Creating collections<a class=\"headerlink\" href=\"#creating-collections\" title=\"Link to this heading\">#</a></h1><h2>Data sources<a class=\"headerlink\" href=\"#data-sources\" title=\"Link to this heading\">#</a></h2>", "a[href=\"networks.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24.5. </span>Structured data<a class=\"headerlink\" href=\"#structured-data\" title=\"Link to this heading\">#</a></h1><h2>Data sources<a class=\"headerlink\" href=\"#data-sources\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#research-pathways\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24. </span>Research pathways<a class=\"headerlink\" href=\"#research-pathways\" title=\"Link to this heading\">#</a></h1><p>This section will include detailed tutorials that demonstrate how you can make use of Trove data using tools from the <a class=\"reference external\" href=\"https://ardc.edu.au/project/ardc-community-data-lab/\">ARDC Community Data Lab</a> and beyond.</p>"}
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
