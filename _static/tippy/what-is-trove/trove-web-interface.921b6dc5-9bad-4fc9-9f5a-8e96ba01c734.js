selector_to_html = {"a[href=\"#the-trove-web-interface\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">7. </span>The Trove web interface<a class=\"headerlink\" href=\"#the-trove-web-interface\" title=\"Permalink to this heading\">#</a></h1><p>For most users, Trove is defined by its web interface \u2013 by the screens, buttons, boxes, links, and lists you interact with as you navigate around the site. This guide focuses on getting and using the data that sits behind the web interface, but, in some cases, access to data is constrained by the design and functioning of the site. It\u2019s therefore useful to think about the different components of the web interface and how they fit together.</p>"}
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
