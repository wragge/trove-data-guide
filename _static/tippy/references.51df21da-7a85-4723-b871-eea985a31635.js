selector_to_html = {"a[href=\"https://doi.org/10.1045/march2011-holley\"]": "\n<div>\n    <h3>Resource Sharing in Australia: Find and Get in Trove - Making \"Getting\" Better</h3>\n    \n    <p><b>Authors:</b> Rose Holley</p>\n    \n    <p><b>Publisher:</b> CNRI Acct</p>\n    <p><b>Published:</b> 2011-3-15</p>\n</div>", "a[href=\"#references\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">References<a class=\"headerlink\" href=\"#references\" title=\"Permalink to this heading\">#</a></h1>"}
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
