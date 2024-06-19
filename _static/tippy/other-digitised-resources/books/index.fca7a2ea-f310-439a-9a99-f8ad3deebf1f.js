selector_to_html = {"a[href=\"#digitised-books\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">21. </span>Digitised books<a class=\"headerlink\" href=\"#digitised-books\" title=\"Link to this heading\">#</a></h1>", "a[href=\"overview.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">21.1. </span>Overview of digitised books<a class=\"headerlink\" href=\"#overview-of-digitised-books\" title=\"Link to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\">Finding digitised books</a><a class=\"headerlink\" href=\"#finding-digitised-books\" title=\"Link to this heading\">#</a></h2><p>Trove includes thousands of digitised resources described as books. You can find them by using the <a class=\"reference internal\" href=\"../../understanding-search/finding-digitised-content.html\"><span class=\"doc std std-doc\">standard search strategy for digitised resources</span></a> \u2013 search for <code class=\"docutils literal notranslate\"><span class=\"pre\">\"nla.obj\"</span></code> in the <strong>Books &amp; Libraries</strong> category with the <code class=\"docutils literal notranslate\"><span class=\"pre\">availability</span></code> facet set to <code class=\"docutils literal notranslate\"><span class=\"pre\">y</span></code>, and the <code class=\"docutils literal notranslate\"><span class=\"pre\">format</span></code> facet set to <code class=\"docutils literal notranslate\"><span class=\"pre\">Book</span></code>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22nla.obj%22%26category%3Dbook%26l-availability%3Dy%26l-format%3DBook%26encoding%3Djson&amp;amp;comment=\"><img alt=\"Try it!\" src=\"https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg\"/></a></p>"}
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
