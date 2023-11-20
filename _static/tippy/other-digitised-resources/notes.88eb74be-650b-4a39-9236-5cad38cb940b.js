selector_to_html = {"a[href=\"#photos\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Photos<a class=\"headerlink\" href=\"#photos\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"#books-pamphlets-print-music-collections-and-items\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Books, pamphlets, print music \u2013 collections and items<a class=\"headerlink\" href=\"#books-pamphlets-print-music-collections-and-items\" title=\"Permalink to this heading\">#</a></h1><h2>Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#oral-histories\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Oral histories<a class=\"headerlink\" href=\"#oral-histories\" title=\"Permalink to this heading\">#</a></h1><p>Other than newspapers.</p><p>Metadata available from the main search index \u2013 so <em>mostly</em> the same as aggregated metadata</p>", "a[href=\"#posters-and-ephemera\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Posters and ephemera<a class=\"headerlink\" href=\"#posters-and-ephemera\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"#metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#periodicals\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Periodicals<a class=\"headerlink\" href=\"#periodicals\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"#government-publications\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Government publications<a class=\"headerlink\" href=\"#government-publications\" title=\"Permalink to this heading\">#</a></h1>"}
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
