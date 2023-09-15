selector_to_html = {"a[href=\"#non-english-language-newspapers\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">11.3. </span>Non-English language newspapers<a class=\"headerlink\" href=\"#non-english-language-newspapers\" title=\"Permalink to this heading\">#</a></h1><p>See <a class=\"reference external\" href=\"https://glam-workbench.net/trove-newspapers/find-non-english-newspapers/\">Finding non-English newspapers in Trove</a> in the GLAM Workbench and the <a class=\"reference external\" href=\"https://glam-workbench.net/trove-newspapers/list-non-english-newspapers/\">list of non-English language newspapers</a>.</p><p>Discuss implications for search and OCR correction.</p>"}
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
