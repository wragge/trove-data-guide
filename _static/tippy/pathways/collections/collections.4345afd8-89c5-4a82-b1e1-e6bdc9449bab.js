selector_to_html = {"a[href=\"examples.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">32.1. </span>Tutorials and examples<a class=\"headerlink\" href=\"#tutorials-and-examples\" title=\"Link to this heading\">#</a></h1><h2>Tutorials<a class=\"headerlink\" href=\"#tutorials\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#creating-collections\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">32. </span>Creating collections<a class=\"headerlink\" href=\"#creating-collections\" title=\"Link to this heading\">#</a></h1><p>Tools and methods for assembling, managing, and sharing collections of resources harvested from Trove.</p>"}
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
