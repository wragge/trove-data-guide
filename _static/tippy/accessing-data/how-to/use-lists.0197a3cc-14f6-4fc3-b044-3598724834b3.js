selector_to_html = {"a[href=\"#how-to-use-trove-lists-to-create-a-dataset\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">18.3. </span>HOW TO: Use Trove lists to create a dataset<a class=\"headerlink\" href=\"#how-to-use-trove-lists-to-create-a-dataset\" title=\"Permalink to this heading\">#</a></h1><p>Another option for creating collections of manually selected newspaper article metadata is Trove\u2019s built-in Lists function.</p><p><mark>==Note about adding mutliple items to Lists. Hacking the url to get more==</mark></p>", "a[href=\"../../user-generated-data/trove-lists.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">34. </span>Trove lists<a class=\"headerlink\" href=\"#trove-lists\" title=\"Permalink to this heading\">#</a></h1><h2><span class=\"section-number\">34.1. </span>Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h2><h3>Getting list metadata using the web interface<a class=\"headerlink\" href=\"#getting-list-metadata-using-the-web-interface\" title=\"Permalink to this heading\">#</a></h3>"}
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
