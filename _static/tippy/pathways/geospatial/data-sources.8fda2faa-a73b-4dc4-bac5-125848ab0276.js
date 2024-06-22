selector_to_html = {"a[href=\"#creating-datasets\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Creating datasets<a class=\"headerlink\" href=\"#creating-datasets\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#documentation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">#</a></h2><p>These sections of the Trove Data Guide explain how to access maps and place data from different parts of Trove:</p>", "a[href=\"#pre-harvested-datasets\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Pre-harvested datasets<a class=\"headerlink\" href=\"#pre-harvested-datasets\" title=\"Link to this heading\">#</a></h3><p>The GLAM Workbench provides a number of datasets containing OCRd text harvested from Trove.</p>", "a[href=\"../../other-digitised-resources/oral-histories/overview.html#digitised-oralhistories-locations\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24.1.9. </span>Which countries do the oral histories relate to?<a class=\"headerlink\" href=\"#which-countries-do-the-oral-histories-relate-to\" title=\"Link to this heading\">#</a></h2><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">spatial</span></code> metadata field is used to relate oral history interviews to specific geographic locations. The values used in this field are mostly codes from the <a class=\"reference external\" href=\"https://www.loc.gov/marc/geoareas/gacs_code.html\">MARC list of geographic areas</a>. For example, Australia is represented by the code <code class=\"docutils literal notranslate\"><span class=\"pre\">u-at</span></code> (although Trove often includes trailing dashes to make the code a fixed width, so in this case the value would be <code class=\"docutils literal notranslate\"><span class=\"pre\">u-at---</span></code>). The MARC codes are not very useful on their own, as there are no links to other sources of geospatial information. I\u2019ve created <a class=\"reference external\" href=\"https://gist.github.com/wragge/7389bf347fb1b7e82011e5ddcb4b44dc\">a dataset that maps the MARC codes to Wikidata entries</a>. It includes geospatial coordinates, ISO country codes, and GeoNames identifiers. Using this dataset, you can link the Trove <code class=\"docutils literal notranslate\"><span class=\"pre\">spatial</span></code> values to ISO country codes, and create a choropleth map that shows the number of oral history records associated with each country.</p>", "a[href=\"#data-sources\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">30.1. </span>Data sources<a class=\"headerlink\" href=\"#data-sources\" title=\"Link to this heading\">#</a></h1><h2>Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">#</a></h2><p>These sections of the Trove Data Guide explain how to access maps and place data from different parts of Trove:</p>"}
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
