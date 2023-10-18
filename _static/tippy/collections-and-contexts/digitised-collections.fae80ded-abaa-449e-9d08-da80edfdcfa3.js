selector_to_html = {"a[href=\"#books\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12.1. </span>Books<a class=\"headerlink\" href=\"#books\" title=\"Permalink to this heading\">#</a></h2><p>See <a class=\"reference external\" href=\"https://glam-workbench.net/trove-books/\">Trove Books</a> section of GLAM Workbench.</p>", "a[href=\"#periodicals\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12.2. </span>Periodicals<a class=\"headerlink\" href=\"#periodicals\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#maps\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12.4. </span>Maps<a class=\"headerlink\" href=\"#maps\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#digitised-collections\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12. </span>Digitised collections<a class=\"headerlink\" href=\"#digitised-collections\" title=\"Permalink to this heading\">#</a></h1><p>This section will explore digitised collections, other than newspapers.</p>", "a[href=\"#manuscripts\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12.3. </span>Manuscripts<a class=\"headerlink\" href=\"#manuscripts\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#oral-histories\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12.5. </span>Oral histories<a class=\"headerlink\" href=\"#oral-histories\" title=\"Permalink to this heading\">#</a></h2>"}
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
