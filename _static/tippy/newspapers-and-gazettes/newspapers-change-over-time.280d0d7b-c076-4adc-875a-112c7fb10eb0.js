selector_to_html = {"a[href=\"#how-does-the-contents-of-the-newspaper-corpus-change-over-time\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">How does the contents of the newspaper corpus change over time?<a class=\"headerlink\" href=\"#how-does-the-contents-of-the-newspaper-corpus-change-over-time\" title=\"Permalink to this heading\">#</a></h1><p>This section will examine how the contents of the newspaper corpus changes over time and the implications of this for researchers. This includes topics like:</p>"}
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
