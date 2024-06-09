selector_to_html = {"a[href=\"maps-to-ghap.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Create a layer in the Gazetteer of Historical Australian Placenames using metadata from Trove\u2019s digitised maps<a class=\"headerlink\" href=\"#create-a-layer-in-the-gazetteer-of-historical-australian-placenames-using-metadata-from-troves-digitised-maps\" title=\"Link to this heading\">#</a></h1><p>Trove includes thousands of digitised maps, created and published across the last few centuries. You want to create a collection of maps relating to your area of interest and explore it using the Gazetteer of Historical Australian Placenames (GHAP). You know it\u2019s possible to add layers to GHAP, but how do you get the data from Trove in a format that can be uploaded as a layer?</p>", "a[href=\"#maps-and-places\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">30. </span>Maps and places<a class=\"headerlink\" href=\"#maps-and-places\" title=\"Link to this heading\">#</a></h1>", "a[href=\"examples.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">30.1. </span>Tutorials and examples<a class=\"headerlink\" href=\"#tutorials-and-examples\" title=\"Link to this heading\">#</a></h1>"}
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
