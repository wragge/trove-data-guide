selector_to_html = {"a[href=\"#posters-and-ephemera\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Posters and ephemera<a class=\"headerlink\" href=\"#posters-and-ephemera\" title=\"Link to this heading\">#</a></h1><p><code class=\"docutils literal notranslate\"><span class=\"pre\">series:\"Australian</span> <span class=\"pre\">ephemera</span> <span class=\"pre\">collection</span> <span class=\"pre\">(General)\"</span></code></p><p><a class=\"reference external\" href=\"https://trove.nla.gov.au/search?keyword=series%3A%22Australian%20ephemera%20collection%20%28General%29%22\">https://trove.nla.gov.au/search?keyword=series%3A\u201dAustralian ephemera collection (General)\u201d</a></p>"}
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
