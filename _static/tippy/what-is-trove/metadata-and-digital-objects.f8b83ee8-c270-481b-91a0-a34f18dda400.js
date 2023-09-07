selector_to_html = {"a[href=\"#metadata-and-digital-objects\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4. </span>Metadata and digital objects<a class=\"headerlink\" href=\"#metadata-and-digital-objects\" title=\"Permalink to this heading\">#</a></h1><h2><span class=\"section-number\">4.1. </span>Working notes<a class=\"headerlink\" href=\"#working-notes\" title=\"Permalink to this heading\">#</a></h2><p>Trove is a mix</p><p>Often we want the digital objects \u2013 text and images, allow more options</p>", "a[href=\"#working-notes\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4.1. </span>Working notes<a class=\"headerlink\" href=\"#working-notes\" title=\"Permalink to this heading\">#</a></h2><p>Trove is a mix</p><p>Often we want the digital objects \u2013 text and images, allow more options</p>"}
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
