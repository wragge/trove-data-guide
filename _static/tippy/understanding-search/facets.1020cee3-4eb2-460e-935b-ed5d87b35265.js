selector_to_html = {"a[href=\"#facets\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">9.3. </span>Facets<a class=\"headerlink\" href=\"#facets\" title=\"Permalink to this heading\">#</a></h1><p>Not sure where this belongs\u2026</p><p>Note that categories do not supply a full list of formats. It seems that they are filtered (particularly in Image, Sound) to only show those that are \u2018relevant\u2019. But if you explicitly search for a facet it will pop up in the list of facets, eg: <a class=\"reference external\" href=\"https://trove.nla.gov.au/search/category/images?keyword=&amp;amp;l-format=Book\">https://trove.nla.gov.au/search/category/images?keyword=&amp;l-format=Book</a> (Book appears in facets) vs <a class=\"reference external\" href=\"https://trove.nla.gov.au/search/category/images?keyword=\">https://trove.nla.gov.au/search/category/images?keyword=</a> (Book doesn\u2019t appear in facets)</p>"}
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
