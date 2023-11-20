selector_to_html = {"a[href=\"#search-as-a-research-method\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1. </span>Search as a research method<a class=\"headerlink\" href=\"#search-as-a-research-method\" title=\"Permalink to this heading\">#</a></h1><p>Searching collections of digital resources is a research method. Need to understand options and plan approach, recognising the limits of any search interface.</p><p>Search enables you to find items of relevance to your research and assemble a dataset for further analysis. Creating search queries is an iterative process \u2013 refining parameters, checking results etc.</p>"}
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
