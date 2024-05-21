selector_to_html = {"a[href=\"#research-pathways\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">25. </span>Research pathways<a class=\"headerlink\" href=\"#research-pathways\" title=\"Link to this heading\">#</a></h1><p>The Trove Data Guide provides lots of information to help researchers access and understand the data that\u2019s available through Trove. But once you\u2019ve found some interesting data, how do you package it for further analysis? How do you connect your Trove discoveries with available digital tools to pursue specific research questions?</p><p>This section highlights pathways that connect Trove data to a range of digital tools. They\u2019re examples of what\u2019s possible \u2013 intended to spark new ideas and approaches, not to privilege particular methodologies. Use them as a starting point in planning your own projects.</p>"}
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
