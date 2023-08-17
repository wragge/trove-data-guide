selector_to_html = {"a[href=\"#collections-and-contexts\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">8. </span>Collections and contexts<a class=\"headerlink\" href=\"#collections-and-contexts\" title=\"Permalink to this heading\">#</a></h1><p>This section will expand on some of the issues and questions raised in <a class=\"reference internal\" href=\"../what-is-trove/trove-is.html\"><span class=\"doc std std-doc\">What is Trove?</span></a> section, looking in depth at what we can know about the contents of the different Trove cattgories and what this means for researchers.</p>", "a[href=\"../what-is-trove/trove-is.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1. </span>Trove is\u2026<a class=\"headerlink\" href=\"#trove-is\" title=\"Permalink to this heading\">#</a></h1>"}
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
