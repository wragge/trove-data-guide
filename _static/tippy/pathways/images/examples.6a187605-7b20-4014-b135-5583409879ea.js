selector_to_html = {"a[href=\"tropy.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Working with a Trove collection in Tropy<a class=\"headerlink\" href=\"#working-with-a-trove-collection-in-tropy\" title=\"Link to this heading\">#</a></h1><p>You want to be able to work on a collection of digitised images from Trove on your desktop \u2013 adding notes, transcriptions, and annotations. <a class=\"reference external\" href=\"https://tropy.org/\">Tropy</a> is a useful tool for managing collections of research images, but how do you import a collection of images from Trove into Tropy? This tutorial walks through one possible method.</p>", "a[href=\"mirador.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Comparing manuscript collections in Mirador<a class=\"headerlink\" href=\"#comparing-manuscript-collections-in-mirador\" title=\"Link to this heading\">#</a></h1><p>You want to compare the contents of two digitised manuscript collections and examine individual documents side-by-side. The <a class=\"reference external\" href=\"https://projectmirador.org/\">Mirador viewer</a> can be configured as a flexible, research workspace that displays multiple images from different sources, but how do you get manuscript collections from Trove to Mirador?</p><p><img alt=\"Mirador example workspace\" src=\"../../_images/mirador-demo.png\"/></p>", "a[href=\"#tutorials\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Tutorials<a class=\"headerlink\" href=\"#tutorials\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#examples-from-the-glam-workbench\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Examples from the GLAM Workbench<a class=\"headerlink\" href=\"#examples-from-the-glam-workbench\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#tutorials-and-examples\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">28.3. </span>Tutorials and examples<a class=\"headerlink\" href=\"#tutorials-and-examples\" title=\"Link to this heading\">#</a></h1><h2>Tutorials<a class=\"headerlink\" href=\"#tutorials\" title=\"Link to this heading\">#</a></h2>"}
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
