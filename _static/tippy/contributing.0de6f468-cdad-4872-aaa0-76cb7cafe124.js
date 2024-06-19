selector_to_html = {"a[href=\"#report-errors\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Report errors<a class=\"headerlink\" href=\"#report-errors\" title=\"Link to this heading\">#</a></h2><p>If you notice technical problems or content errors <a class=\"reference external\" href=\"https://github.com/wragge/trove-data-guide/issues\">raise an issue</a> in the GitHub repository.</p>", "a[href=\"#add-or-edit-content\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Add or edit content<a class=\"headerlink\" href=\"#add-or-edit-content\" title=\"Link to this heading\">#</a></h2><p>The Trove Data Guide is developed using <a class=\"reference external\" href=\"https://jupyterbook.org/en/latest/intro.html\">Jupyter Book</a>. Content is created in a series of Jupyter notebooks that are rendered as static HTML pages by the build process. If you want to contribute content you\u2019ll need to set up a Python virtual environment running Jupyter Book.</p>", "a[href=\"#contributing-to-the-trove-data-guide\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Contributing to the Trove Data Guide<a class=\"headerlink\" href=\"#contributing-to-the-trove-data-guide\" title=\"Link to this heading\">#</a></h1><p>The Trove Data guide will continue to expand and evolve over time. Your contributions are very welcome!</p>", "a[href=\"#share-ideas\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Share ideas<a class=\"headerlink\" href=\"#share-ideas\" title=\"Link to this heading\">#</a></h2><p>If you have ideas for new topics or tutorials add them to the Trove Data Guide\u2019s <a class=\"reference external\" href=\"https://github.com/wragge/trove-data-guide/discussions\">Ideas Board</a>.</p>"}
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
