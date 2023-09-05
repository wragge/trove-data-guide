selector_to_html = {"a[href=\"#digitised-maps\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12.2. </span>Digitised maps<a class=\"headerlink\" href=\"#digitised-maps\" title=\"Permalink to this heading\">#</a></h1><p>See the <a class=\"reference external\" href=\"https://glam-workbench.net/trove-maps/\">Trove Maps</a> section of the GLAM Workbench.</p>"}
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
