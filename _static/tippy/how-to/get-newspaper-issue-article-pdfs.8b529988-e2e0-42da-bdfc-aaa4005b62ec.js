selector_to_html = {"a[href=\"#get-a-pdf-of-an-issue\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Get a PDF of an issue<a class=\"headerlink\" href=\"#get-a-pdf-of-an-issue\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#get-a-pdf-of-an-article\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Get a PDF of an article<a class=\"headerlink\" href=\"#get-a-pdf-of-an-article\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#get-a-newspaper-issue-or-article-as-a-pdf\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">7.3. </span>Get a newspaper issue or article as a PDF<a class=\"headerlink\" href=\"#get-a-newspaper-issue-or-article-as-a-pdf\" title=\"Permalink to this heading\">#</a></h1><h2>Get a PDF of an issue<a class=\"headerlink\" href=\"#get-a-pdf-of-an-issue\" title=\"Permalink to this heading\">#</a></h2>"}
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
