selector_to_html = {"a[href=\"#finding-digitised-content-you-can-download\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Finding digitised content you can download<a class=\"headerlink\" href=\"#finding-digitised-content-you-can-download\" title=\"Permalink to this heading\">#</a></h1><p>Still much harder than it should be (except for <code class=\"docutils literal notranslate\"><span class=\"pre\">magazine</span></code> &amp; <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper</span></code> categories of course).</p><p>Various combinations of:</p>"}
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
