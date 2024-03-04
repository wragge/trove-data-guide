selector_to_html = {"a[href=\"#metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Link to this heading\">#</a></h2><h3>Getting list metadata using the web interface<a class=\"headerlink\" href=\"#getting-list-metadata-using-the-web-interface\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#getting-list-metadata-using-the-api\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Getting list metadata using the API<a class=\"headerlink\" href=\"#getting-list-metadata-using-the-api\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#trove-lists\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Trove lists<a class=\"headerlink\" href=\"#trove-lists\" title=\"Link to this heading\">#</a></h1><h2>Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Link to this heading\">#</a></h2><h3>Getting list metadata using the web interface<a class=\"headerlink\" href=\"#getting-list-metadata-using-the-web-interface\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#getting-list-metadata-using-the-web-interface\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Getting list metadata using the web interface<a class=\"headerlink\" href=\"#getting-list-metadata-using-the-web-interface\" title=\"Link to this heading\">#</a></h3>"}
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
