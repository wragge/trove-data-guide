selector_to_html = {"a[href=\"trove-lists.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.4. </span>Trove lists<a class=\"headerlink\" href=\"#trove-lists\" title=\"Permalink to this heading\">#</a></h1><h2>Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h2><h3>Getting list metadata using the web interface<a class=\"headerlink\" href=\"#getting-list-metadata-using-the-web-interface\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"trove-api-intro.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.2. </span>Trove API introduction<a class=\"headerlink\" href=\"#trove-api-introduction\" title=\"Permalink to this heading\">#</a></h1><h2>Types of requests:<a class=\"headerlink\" href=\"#types-of-requests\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"data-access-options.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.1. </span>Data access options<a class=\"headerlink\" href=\"#data-access-options\" title=\"Permalink to this heading\">#</a></h1><p>There are a number of ways in which you can access data from Trove:</p>", "a[href=\"#accessing-data\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5. </span>Accessing data<a class=\"headerlink\" href=\"#accessing-data\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"newspapers-and-gazettes.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.3. </span>Newspapers and gazettes<a class=\"headerlink\" href=\"#newspapers-and-gazettes\" title=\"Permalink to this heading\">#</a></h1><p><mark>==Note here about the structure of digitised newspapers \u2013 titles, issues, pages, and articles. With articles the main entry point.==</mark></p>"}
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
