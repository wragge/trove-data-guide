selector_to_html = {"a[href=\"#periodicals\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">20. </span>Periodicals<a class=\"headerlink\" href=\"#periodicals\" title=\"Link to this heading\">#</a></h1><h2><span class=\"section-number\">20.3. </span>Identifiers and links<a class=\"headerlink\" href=\"#identifiers-and-links\" title=\"Link to this heading\">#</a></h2><p><a class=\"reference external\" href=\"https://nla.gov.au/nla.obj-2904453468/view?sectionId=nla.obj-2910847932&amp;amp;partId=nla.obj-2907109728\">https://nla.gov.au/nla.obj-2904453468/view?sectionId=nla.obj-2910847932&amp;partId=nla.obj-2907109728</a></p><p>first id is issue, second is article, third is page</p>", "a[href=\"#identifiers-and-links\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">20.3. </span>Identifiers and links<a class=\"headerlink\" href=\"#identifiers-and-links\" title=\"Link to this heading\">#</a></h2><p><a class=\"reference external\" href=\"https://nla.gov.au/nla.obj-2904453468/view?sectionId=nla.obj-2910847932&amp;amp;partId=nla.obj-2907109728\">https://nla.gov.au/nla.obj-2904453468/view?sectionId=nla.obj-2910847932&amp;partId=nla.obj-2907109728</a></p><p>first id is issue, second is article, third is page</p>", "a[href=\"overview.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">20.1. </span>Overview of periodicals<a class=\"headerlink\" href=\"#overview-of-periodicals\" title=\"Link to this heading\">#</a></h1><h2>What is a periodical?<a class=\"headerlink\" href=\"#what-is-a-periodical\" title=\"Link to this heading\">#</a></h2><p>Periodicals are publications that are issued at regular intervals, like newspapers, magazines, or academic journals. In Trove, newspapers are managed and delivered through a separate system, so this section focuses on other types of digitised periodicals.</p><p>Here\u2019s some examples of Trove\u2019s digitised periodicals:</p>", "a[href=\"accessing-data.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">20.2. </span>Accessing data from periodicals<a class=\"headerlink\" href=\"#accessing-data-from-periodicals\" title=\"Link to this heading\">#</a></h1><h2>What is a periodical?<a class=\"headerlink\" href=\"#what-is-a-periodical\" title=\"Link to this heading\">#</a></h2><p>Periodicals are publications that are issued at regular intervals. They can include newspapers, magazines, and academic journals. Newspapers are managed and delivered separately in Trove, so this section focuses on all the other types of digitised periodicals.</p><p>Sometimes it\u2019s not clear whether a publication is a periodical or not. What about annual reports produced by government departments? Or almanacs that are updated each year?</p>"}
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
