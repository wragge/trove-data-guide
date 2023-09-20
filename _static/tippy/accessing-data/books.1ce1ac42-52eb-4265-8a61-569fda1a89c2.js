selector_to_html = {"a[href=\"#books\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Books<a class=\"headerlink\" href=\"#books\" title=\"Permalink to this heading\">#</a></h1><p>You can get text via the API, but you have to add <code class=\"docutils literal notranslate\"><span class=\"pre\">include=workversions</span></code> then loop through versions, looking in the <code class=\"docutils literal notranslate\"><span class=\"pre\">description</span></code> field for a <code class=\"docutils literal notranslate\"><span class=\"pre\">value</span></code> with <code class=\"docutils literal notranslate\"><span class=\"pre\">\"type\":</span> <span class=\"pre\">\"open_fulltext\"</span></code>.</p><p>I think there are limits on the amount of text you can get from the API \u2013 need to test this.</p>"}
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
