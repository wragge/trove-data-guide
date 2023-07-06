selector_to_html = {"a[href=\"metadata-and-digital-objects.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.3. </span>Metadata and digital objects<a class=\"headerlink\" href=\"#metadata-and-digital-objects\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"trove-is.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.1. </span>Trove is\u2026<a class=\"headerlink\" href=\"#trove-is\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"works-and-versions.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.4. </span>Works and versions<a class=\"headerlink\" href=\"#works-and-versions\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"categories-and-zones.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.2. </span>Categories and zones<a class=\"headerlink\" href=\"#categories-and-zones\" title=\"Permalink to this heading\">#</a></h1><p>Trove\u2019s resources are divided into <strong>categories</strong>. Understanding the nature and content of these categories will help you construct effective searches and access useful data.</p><p>There are nine categories in Trove:</p>", "a[href=\"links-and-identifiers.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.5. </span>Links and identifiers<a class=\"headerlink\" href=\"#links-and-identifiers\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"#what-is-trove\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2. </span>What is Trove?<a class=\"headerlink\" href=\"#what-is-trove\" title=\"Permalink to this heading\">#</a></h1>"}
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
