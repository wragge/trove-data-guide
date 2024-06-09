selector_to_html = {"a[href=\"#glam-workbench\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">GLAM Workbench<a class=\"headerlink\" href=\"#glam-workbench\" title=\"Link to this heading\">#</a></h2><p>The Trove Data Guide is a companion to the Trove sections of the <a class=\"reference external\" href=\"https://glam-workbench.net/\">GLAM Workbench</a>. While the GLAM Workbench provides tools and examples for working with data from Trove, this Guide digs deeper into the complexities to help researchers develop a critical understanding of Trove data \u2013 its limits and its possibilities.</p>", "a[href=\"contributing.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Contributing to the Trove Data Guide<a class=\"headerlink\" href=\"#contributing-to-the-trove-data-guide\" title=\"Link to this heading\">#</a></h1><p>The Trove Data guide will continue to expand and evolve over time. Your contributions are very welcome!</p>", "a[href=\"#development-and-feedback\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Development and feedback<a class=\"headerlink\" href=\"#development-and-feedback\" title=\"Link to this heading\">#</a></h2><p>More content will be added to the Trove Data Guide over coming months. To view work-in-progress see the <a class=\"reference external\" href=\"https://wragge.github.io/trove-data-guide/\">development version</a> and the project\u2019s <a class=\"reference external\" href=\"https://github.com/wragge/trove-data-guide\">GitHub repository</a>.</p><p>Ideas, corrections, and new content are very welcome \u2013 find out more about <a class=\"reference internal\" href=\"contributing.html\"><span class=\"std std-doc\">contributing to the Trove Data Guide</span></a>.</p>", "a[href=\"#about-this-guide\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">About this Guide<a class=\"headerlink\" href=\"#about-this-guide\" title=\"Link to this heading\">#</a></h1><p>The Trove Data Guide is being developed by <a class=\"reference external\" href=\"https://timsherratt.org\">Tim Sherratt</a> as part of the <a class=\"reference external\" href=\"https://ardc.edu.au/project/ardc-community-data-lab/\">ARDC Community Data Lab</a>.</p><p>The published version is available at: <a class=\"reference external\" href=\"https://tdg.glam-workbench.net\">https://tdg.glam-workbench.net</a>.</p>"}
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
