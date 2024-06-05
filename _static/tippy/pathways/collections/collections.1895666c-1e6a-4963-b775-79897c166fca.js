selector_to_html = {"a[href=\"#tutorials-and-examples\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Tutorials and examples<a class=\"headerlink\" href=\"#tutorials-and-examples\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#tools-and-resources\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Tools and resources<a class=\"headerlink\" href=\"#tools-and-resources\" title=\"Link to this heading\">#</a></h2><h3>ARDC Community Data Lab<a class=\"headerlink\" href=\"#ardc-community-data-lab\" title=\"Link to this heading\">#</a></h3><p>These tools are developed, maintained or supported by the Community Data Lab or other projects within the HASS&amp;I Research Data Commons.</p>", "a[href=\"#creating-collections\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Creating collections<a class=\"headerlink\" href=\"#creating-collections\" title=\"Link to this heading\">#</a></h1><p>Tools and methods for assembling, managing, and sharing collections of resources harvested from Trove.</p>", "a[href=\"#ardc-community-data-lab\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">ARDC Community Data Lab<a class=\"headerlink\" href=\"#ardc-community-data-lab\" title=\"Link to this heading\">#</a></h3><p>These tools are developed, maintained or supported by the Community Data Lab or other projects within the HASS&amp;I Research Data Commons.</p>", "a[href=\"#other-tools-and-resources\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Other tools and resources<a class=\"headerlink\" href=\"#other-tools-and-resources\" title=\"Link to this heading\">#</a></h3>"}
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
