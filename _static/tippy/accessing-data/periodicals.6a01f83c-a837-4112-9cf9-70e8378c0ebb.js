selector_to_html = {"a[href=\"#periodicals\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Periodicals<a class=\"headerlink\" href=\"#periodicals\" title=\"Permalink to this heading\">#</a></h1><p><code class=\"docutils literal notranslate\"><span class=\"pre\">bibliographicCitation</span></code> in article records has structured publication metadata</p>", "a[href=\"#journal-articles\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Journal articles<a class=\"headerlink\" href=\"#journal-articles\" title=\"Permalink to this heading\">#</a></h2><p>Advertisements on multiple pages in an issue grouped as a single work record for discovery: <a class=\"reference external\" href=\"https://trove.nla.gov.au/work/232859472?keyword=fullTextInd%3Ay\">https://trove.nla.gov.au/work/232859472?keyword=fullTextInd%3Ay</a></p><p>Can access as separate versions via the API: <a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F232859472%3Fencoding%3Djson%26include%3Dall&amp;amp;comment=\">https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F232859472%3Fencoding%3Djson%26include%3Dall&amp;comment=</a></p>"}
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
