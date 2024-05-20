selector_to_html = {"a[href=\"#tutorials-and-examples\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">27.3. </span>Tutorials and examples<a class=\"headerlink\" href=\"#tutorials-and-examples\" title=\"Link to this heading\">#</a></h1>", "a[href=\"tropy.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">27.4. </span>Working with a Trove collection in Tropy<a class=\"headerlink\" href=\"#working-with-a-trove-collection-in-tropy\" title=\"Link to this heading\">#</a></h1><h2>Scenario<a class=\"headerlink\" href=\"#scenario\" title=\"Link to this heading\">#</a></h2><p>You want to be able to work on a collection of digitised images from Trove on your desktop \u2013 adding notes, transcriptions, and annotations. In the future you might want to share your research online.</p>"}
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
