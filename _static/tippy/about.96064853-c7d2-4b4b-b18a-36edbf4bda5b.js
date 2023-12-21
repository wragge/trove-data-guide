selector_to_html = {"a[href=\"#about-this-guide\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">About this Guide<a class=\"headerlink\" href=\"#about-this-guide\" title=\"Permalink to this heading\">#</a></h1><p>The Trove Data Guide is being developed by <a class=\"reference external\" href=\"https://timsherratt.org\">Tim Sherratt</a> as part of the <a class=\"reference external\" href=\"https://ardc.edu.au/project/ardc-community-data-lab/\">ARDC Community Data Lab</a>.</p><p>The published version is available at: <a class=\"reference external\" href=\"http://tdg.glamworkbench.cloud.edu.au\">http://tdg.glamworkbench.cloud.edu.au</a>.</p>", "a[href=\"#glam-workbench\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">GLAM Workbench<a class=\"headerlink\" href=\"#glam-workbench\" title=\"Permalink to this heading\">#</a></h2><p>The Trove Data Guide is a companion to the Trove sections of the <a class=\"reference external\" href=\"https://glam-workbench.net/\">GLAM Workbench</a>. While the GLAM Workbench provides tools and examples for working with data from Trove, this Guide digs deeper into the complexities to help researchers develop a critical understanding of Trove data \u2013 its limits and its possibilities.</p>", "a[href=\"#development-and-feedback\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Development and feedback<a class=\"headerlink\" href=\"#development-and-feedback\" title=\"Permalink to this heading\">#</a></h2><p>More content will be added to the Trove Data Guide over coming months. To view work-in-progress see the <a class=\"reference external\" href=\"https://wragge.github.io/trove-data-guide/\">development version</a> and the project\u2019s <a class=\"reference external\" href=\"https://github.com/wragge/trove-data-guide\">GitHub repository</a>.</p><p>Suggestions for new topics are welcome \u2013 feel free to <a class=\"reference external\" href=\"https://github.com/wragge/trove-data-guide/issues\">add an issue</a> in the GitHub repository.</p>"}
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
