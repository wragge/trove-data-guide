selector_to_html = {"a[href=\"#categories-and-zones\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2. </span>Categories and zones<a class=\"headerlink\" href=\"#categories-and-zones\" title=\"Permalink to this heading\">#</a></h1><p>Trove\u2019s resources are divided into <strong>categories</strong>. Understanding the nature and content of these categories will help you construct effective searches and access useful data.</p><p>There are nine categories in Trove:</p>", "a[href=\"#working-notes\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.1. </span>Working notes<a class=\"headerlink\" href=\"#working-notes\" title=\"Permalink to this heading\">#</a></h2><p>Exploration of overlaps</p><p>Contributors per zone (facets, point to more complete data)</p>", "a[href=\"#categories\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">3. </span>Categories<a class=\"headerlink\" href=\"#categories\" title=\"Permalink to this heading\">#</a></h1><p>Books &amp; libraries is the default, then use type.</p>"}
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
