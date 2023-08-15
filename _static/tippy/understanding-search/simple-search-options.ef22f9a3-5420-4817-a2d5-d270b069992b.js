selector_to_html = {"a[href=\"#simple-search-options\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">7.2. </span>\u2018Simple\u2019 search options<a class=\"headerlink\" href=\"#simple-search-options\" title=\"Permalink to this heading\">#</a></h1><p><mark>==Include a note about <code class=\"docutils literal notranslate\"><span class=\"pre\">firstpageseq</span></code> and the fact that this will match pages from supplements as well. So supplements need to be filtered out after harvesting. Also note that not all issues start with page 1.==</mark></p>"}
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
