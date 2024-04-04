selector_to_html = {"a[href=\"accessing-data.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">20.2. </span>Accessing data from periodicals<a class=\"headerlink\" href=\"#accessing-data-from-periodicals\" title=\"Link to this heading\">#</a></h1><h2>What periodicals have been digitised?<a class=\"headerlink\" href=\"#what-periodicals-have-been-digitised\" title=\"Link to this heading\">#</a></h2><p>Search for <a class=\"reference external\" href=\"https://trove.nla.gov.au/search/category/books?keyword=%22nla.obj%22%20NOT%20series%3A%22Parliamentary%20paper%20%28Australia.%20Parliament%29%22%20NOT%20nuc%3A%22ANL%3ANED%22&amp;amp;l-format=Periodical&amp;amp;l-availability=y\">\u201cnla.obj\u201d NOT series:\u201cParliamentary paper (Australia. Parliament)\u201d NOT nuc:\u201cANL:NED\u201d and <code class=\"docutils literal notranslate\"><span class=\"pre\">l-format=Periodical</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">l-availability=y</span></code></a> in different categories (mostly B&amp;L) : 968 results</p><p>API provides another option</p>", "a[href=\"#identifiers-and-links\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">20.3. </span>Identifiers and links<a class=\"headerlink\" href=\"#identifiers-and-links\" title=\"Link to this heading\">#</a></h2><p><a class=\"reference external\" href=\"https://nla.gov.au/nla.obj-2904453468/view?sectionId=nla.obj-2910847932&amp;amp;partId=nla.obj-2907109728\">https://nla.gov.au/nla.obj-2904453468/view?sectionId=nla.obj-2910847932&amp;partId=nla.obj-2907109728</a></p><p>first id is issue, second is article, third is page</p>", "a[href=\"#periodicals\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">20. </span>Periodicals<a class=\"headerlink\" href=\"#periodicals\" title=\"Link to this heading\">#</a></h1><h2><span class=\"section-number\">20.3. </span>Identifiers and links<a class=\"headerlink\" href=\"#identifiers-and-links\" title=\"Link to this heading\">#</a></h2><p><a class=\"reference external\" href=\"https://nla.gov.au/nla.obj-2904453468/view?sectionId=nla.obj-2910847932&amp;amp;partId=nla.obj-2907109728\">https://nla.gov.au/nla.obj-2904453468/view?sectionId=nla.obj-2910847932&amp;partId=nla.obj-2907109728</a></p><p>first id is issue, second is article, third is page</p>", "a[href=\"overview.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">20.1. </span>Overview of periodicals<a class=\"headerlink\" href=\"#overview-of-periodicals\" title=\"Link to this heading\">#</a></h1><h2>What is a periodical?<a class=\"headerlink\" href=\"#what-is-a-periodical\" title=\"Link to this heading\">#</a></h2><p>Periodicals are publications that are issued at regular intervals, like newspapers, magazines, or academic journals. Newspapers have their own category in Trove and are managed and delivered through a separate system, but what about everything else? This section helps you find and use all the other types of digitised periodicals available through Trove.</p><p>Here\u2019s some examples of Trove\u2019s digitised periodicals:</p>"}
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
