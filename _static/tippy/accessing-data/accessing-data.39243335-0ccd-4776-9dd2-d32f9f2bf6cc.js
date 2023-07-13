selector_to_html = {"a[href=\"#accessing-data\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5. </span>Accessing data<a class=\"headerlink\" href=\"#accessing-data\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"trove-lists.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.4. </span>Trove lists<a class=\"headerlink\" href=\"#trove-lists\" title=\"Permalink to this heading\">#</a></h1><h2>Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h2><h3>Getting list metadata using the web interface<a class=\"headerlink\" href=\"#getting-list-metadata-using-the-web-interface\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"trove-api-intro.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.2. </span>Trove API introduction<a class=\"headerlink\" href=\"#trove-api-introduction\" title=\"Permalink to this heading\">#</a></h1><h2>Types of requests:<a class=\"headerlink\" href=\"#types-of-requests\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"newspapers-and-gazettes.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.3. </span>Newspapers and gazettes<a class=\"headerlink\" href=\"#newspapers-and-gazettes\" title=\"Permalink to this heading\">#</a></h1><p><mark>==This might link to a fuller discussion in the contexts section?==</mark></p><p>Before you start requesting data from Trove\u2019s digitised newspapers, it\u2019s worth thinking a bit about the way newspapers are represented in Trove and the relationships between <strong>articles</strong>, <strong>pages</strong>, <strong>issues</strong>, and <strong>titles</strong>. When you search the newspapers, you\u2019re searching for <em>articles</em>. You might think that newspapers are organised in a simple hierarchical structure with titles at the top, and articles at the bottom, but it\u2019s not quite that straighforward. Articles are linked to both pages and titles. Titles have their own API endpoint that can lead you to issues, though following an issue url will actually take you to a page. Pages have identifiers, and you can browse their contents in the Trove web interface, but they don\u2019t exist as separate entities in the API. These sorts of oddities mean that sometimes there\u2019s no direct route to the information that you want, but by thinking about what is connected to what, you can find alternative paths. For example, while there\u2019s no direct link between issues and articles, if you get the publication date and title from an issue, you can then search for articles published in that issue by using the <code class=\"docutils literal notranslate\"><span class=\"pre\">date</span></code> index and <code class=\"docutils literal notranslate\"><span class=\"pre\">title</span></code> facet.</p>", "a[href=\"data-access-options.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.1. </span>Data access options<a class=\"headerlink\" href=\"#data-access-options\" title=\"Permalink to this heading\">#</a></h1><p>There are a number of ways in which you can access data from Trove:</p>"}
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
