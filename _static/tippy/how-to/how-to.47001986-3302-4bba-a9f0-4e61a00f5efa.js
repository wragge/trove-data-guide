selector_to_html = {"a[href=\"querypic.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">7.1. </span>Visualising newspaper searches with QueryPic<a class=\"headerlink\" href=\"#visualising-newspaper-searches-with-querypic\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"international-newspaper-titles.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">7.4. </span>Get a list of \u2018International\u2019 newspapers and gazettes<a class=\"headerlink\" href=\"#get-a-list-of-international-newspapers-and-gazettes\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"newspaper-titles-totals.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">7.2. </span>Find the number of newspapers<a class=\"headerlink\" href=\"#find-the-number-of-newspapers\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"get-newspaper-issue-article-pdfs.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">7.3. </span>Get a newspaper issue or article as a PDF<a class=\"headerlink\" href=\"#get-a-newspaper-issue-or-article-as-a-pdf\" title=\"Permalink to this heading\">#</a></h1><h2>Get a PDF of an issue<a class=\"headerlink\" href=\"#get-a-pdf-of-an-issue\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#how-to\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">7. </span>How to<a class=\"headerlink\" href=\"#how-to\" title=\"Permalink to this heading\">#</a></h1>"}
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
