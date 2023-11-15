selector_to_html = {"a[href=\"#parliamentary-papers\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">31. </span>Parliamentary papers<a class=\"headerlink\" href=\"#parliamentary-papers\" title=\"Permalink to this heading\">#</a></h1><p>The NLA has digitised a large collection of reports and papers presented to the Commonwealth Parliament.</p><p><img alt=\"\" src=\"../../_images/pp-macaroni.png\"/></p>", "a[href=\"overview.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">31.1. </span>Overview of Parliamentary Papers<a class=\"headerlink\" href=\"#overview-of-parliamentary-papers\" title=\"Permalink to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\">What are Parliamentary Papers?</a><a class=\"headerlink\" href=\"#what-are-parliamentary-papers\" title=\"Permalink to this heading\">#</a></h2><p>Parliamentary Papers are documents presented to the Australian Parliament. Sometimes this is required by law. Other times it\u2019s just for information. The <a class=\"reference external\" href=\"https://www.aph.gov.au/Parliamentary_Business/Chamber_documents/Tabled_Papers/Parliamentary_Papers_series\">Parliament of Australia website notes</a>:</p>", "a[href=\"finding-pp.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">31.2. </span>Finding Parliamentary Papers in Trove<a class=\"headerlink\" href=\"#finding-parliamentary-papers-in-trove\" title=\"Permalink to this heading\">#</a></h1><h2>Finding Parliamentary Papers in Trove<a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this heading\">#</a></h2><p>You can <a class=\"reference internal\" href=\"../../understanding-search/finding-digitised-content.html\"><span class=\"doc std std-doc\">find NLA digitised resources</span></a> by searching for <code class=\"docutils literal notranslate\"><span class=\"pre\">\"nla.obj\"</span></code> and selecting the \u2018Online\u2019 facet (if you\u2019re using the API set <code class=\"docutils literal notranslate\"><span class=\"pre\">l-availability</span></code> to <code class=\"docutils literal notranslate\"><span class=\"pre\">y</span></code>). To further limit the results to digitised Parliamentary Papers the best option seems to be adding <code class=\"docutils literal notranslate\"><span class=\"pre\">series:\"Parliamentary</span> <span class=\"pre\">paper</span> <span class=\"pre\">(Australia.</span> <span class=\"pre\">Parliament)</span></code> to <a class=\"reference external\" href=\"https://trove.nla.gov.au/search?keyword=%22nla.obj%22%20series%3A%22Parliamentary%20paper%20%28Australia.%20Parliament%29%22&amp;l-availability=y\">your search query</a>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22nla.obj%22+series%3A%22Parliamentary+paper+%28Australia.+Parliament%29%22%26category%3Dall%26l-availability%3Dy%26encoding%3Djson%26bulkHarvest%3Dtrue&amp;comment=\"><img alt=\"Try it!\" src=\"https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg\"/></a></p>"}
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
