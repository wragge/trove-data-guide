selector_to_html = {"a[href=\"accessing-data.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">22.3. </span>Accessing data from periodicals<a class=\"headerlink\" href=\"#accessing-data-from-periodicals\" title=\"Link to this heading\">#</a></h1><h2>Understanding identifiers<a class=\"headerlink\" href=\"#understanding-identifiers\" title=\"Link to this heading\">#</a></h2><p>There are four different types of identifiers used by Trove for periodical titles, issues, pages, and articles \u2013 and they all look exactly the same! To confuse matters further, sometimes the different identifiers take you to the same place. For example, these three identifiers, for an issue, page, and article, all deliver you to the front page of <em>Walkabout</em>, volume 1, number 2 (2 December 1934).</p>", "a[href=\"#periodicals\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">22. </span>Periodicals<a class=\"headerlink\" href=\"#periodicals\" title=\"Link to this heading\">#</a></h1><h2><span class=\"section-number\">22.4. </span>Identifiers and links<a class=\"headerlink\" href=\"#identifiers-and-links\" title=\"Link to this heading\">#</a></h2><p><a class=\"reference external\" href=\"https://nla.gov.au/nla.obj-2904453468/view?sectionId=nla.obj-2910847932&amp;amp;partId=nla.obj-2907109728\">https://nla.gov.au/nla.obj-2904453468/view?sectionId=nla.obj-2910847932&amp;partId=nla.obj-2907109728</a></p><p>first id is issue, second is article, third is page</p>", "a[href=\"finding-periodicals.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">22.2. </span>Finding digitised periodicals<a class=\"headerlink\" href=\"#finding-digitised-periodicals\" title=\"Link to this heading\">#</a></h1><p>Trove has a ready-made <a class=\"reference external\" href=\"https://trove.nla.gov.au/newspaper/about\">list of digitised newspaper titles</a> for you to search and browse. However, there\u2019s no comparable list for other types of periodicals. So how do you find out which periodicals have been digitised? Unfortunately there\u2019s no simple answer, but here are some possible strategies.</p>", "a[href=\"#identifiers-and-links\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">22.4. </span>Identifiers and links<a class=\"headerlink\" href=\"#identifiers-and-links\" title=\"Link to this heading\">#</a></h2><p><a class=\"reference external\" href=\"https://nla.gov.au/nla.obj-2904453468/view?sectionId=nla.obj-2910847932&amp;amp;partId=nla.obj-2907109728\">https://nla.gov.au/nla.obj-2904453468/view?sectionId=nla.obj-2910847932&amp;partId=nla.obj-2907109728</a></p><p>first id is issue, second is article, third is page</p>", "a[href=\"overview.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">22.1. </span>Overview of periodicals<a class=\"headerlink\" href=\"#overview-of-periodicals\" title=\"Link to this heading\">#</a></h1><h2>What is a periodical?<a class=\"headerlink\" href=\"#what-is-a-periodical\" title=\"Link to this heading\">#</a></h2><p>Periodicals are publications that are issued at regular intervals, like newspapers, magazines, or academic journals. Newspapers have their own category in Trove and are managed and delivered through a separate system, but what about everything else? This section helps you find and use all the other types of digitised periodicals available through Trove.</p><p>Here\u2019s some examples of Trove\u2019s digitised periodicals:</p>"}
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
