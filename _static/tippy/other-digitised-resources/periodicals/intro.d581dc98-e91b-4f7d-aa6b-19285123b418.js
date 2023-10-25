selector_to_html = {"a[href=\"#identifiers-and-links\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">30.2. </span>Identifiers and links<a class=\"headerlink\" href=\"#identifiers-and-links\" title=\"Permalink to this heading\">#</a></h2><p><a class=\"reference external\" href=\"https://nla.gov.au/nla.obj-2904453468/view?sectionId=nla.obj-2910847932&amp;amp;partId=nla.obj-2907109728\">https://nla.gov.au/nla.obj-2904453468/view?sectionId=nla.obj-2910847932&amp;partId=nla.obj-2907109728</a></p><p>first id is issue, second is article, third is page</p>", "a[href=\"#periodicals\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">30. </span>Periodicals<a class=\"headerlink\" href=\"#periodicals\" title=\"Permalink to this heading\">#</a></h1><h2><span class=\"section-number\">30.2. </span>Identifiers and links<a class=\"headerlink\" href=\"#identifiers-and-links\" title=\"Permalink to this heading\">#</a></h2><p><a class=\"reference external\" href=\"https://nla.gov.au/nla.obj-2904453468/view?sectionId=nla.obj-2910847932&amp;amp;partId=nla.obj-2907109728\">https://nla.gov.au/nla.obj-2904453468/view?sectionId=nla.obj-2910847932&amp;partId=nla.obj-2907109728</a></p><p>first id is issue, second is article, third is page</p>", "a[href=\"accessing-data.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">30.1. </span>Accessing data from periodicals<a class=\"headerlink\" href=\"#accessing-data-from-periodicals\" title=\"Permalink to this heading\">#</a></h1><h2>Articles<a class=\"headerlink\" href=\"#articles\" title=\"Permalink to this heading\">#</a></h2><h3>Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h3><p><code class=\"docutils literal notranslate\"><span class=\"pre\">/search</span></code> in <code class=\"docutils literal notranslate\"><span class=\"pre\">magazine</span></code> category and <code class=\"docutils literal notranslate\"><span class=\"pre\">/work</span></code> endpoints</p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">bibliographicCitation</span></code> in article records has structured publication metadata</p>"}
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
