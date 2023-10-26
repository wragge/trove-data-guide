selector_to_html = {"a[href=\"#understanding-the-newspaper-corpus\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">20. </span>Understanding the newspaper corpus<a class=\"headerlink\" href=\"#understanding-the-newspaper-corpus\" title=\"Permalink to this heading\">#</a></h1><p>This section will examine the way in which the Trove newspaper corpus has been constructed, and how its contents have changed over time.</p>"}
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
