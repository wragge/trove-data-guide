selector_to_html = {"a[href=\"#ispartof\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">isPartOf<a class=\"headerlink\" href=\"#ispartof\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#digitised-collections\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Digitised collections<a class=\"headerlink\" href=\"#digitised-collections\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#finding-aids\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Finding aids<a class=\"headerlink\" href=\"#finding-aids\" title=\"Permalink to this heading\">#</a></h2><p>Describe the different ways that \u2018collections\u2019 are described within Trove.</p><p>Parent-child relationships in Trove metadata:</p>", "a[href=\"#collections-within-collections\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Collections within collections<a class=\"headerlink\" href=\"#collections-within-collections\" title=\"Permalink to this heading\">#</a></h1><h2>isPartOf<a class=\"headerlink\" href=\"#ispartof\" title=\"Permalink to this heading\">#</a></h2>"}
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
