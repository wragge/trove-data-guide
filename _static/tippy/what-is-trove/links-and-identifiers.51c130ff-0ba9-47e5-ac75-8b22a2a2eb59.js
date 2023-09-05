selector_to_html = {"a[href=\"#links-and-identifiers\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">6. </span>Links and identifiers<a class=\"headerlink\" href=\"#links-and-identifiers\" title=\"Permalink to this heading\">#</a></h1><p>obj ids can be anything</p><p><a class=\"reference external\" href=\"https://nla.gov.au/anbd.bib-an000069848008\">https://nla.gov.au/anbd.bib-an000069848008</a></p>"}
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
