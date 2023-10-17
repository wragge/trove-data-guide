selector_to_html = {"a[href=\"../what-is-trove/trove-is.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1. </span>Trove is\u2026<a class=\"headerlink\" href=\"#trove-is\" title=\"Permalink to this heading\">#</a></h1><p><strong>Trove is not one thing</strong>. On the <a class=\"reference external\" href=\"https://trove.nla.gov.au/about/what-trove/technical-ecosystem\">technical front</a>, Trove is a combination of many interconnected systems, data sources, and interfaces, each with its own individual history. But Trove is also an idea, an ambition, an attempt to provide Australians with facilitated access to research and heritage collections from across the country. That idea, expressed through policy documents, strategic plans, resource allocations, and collaborative agreements has also evolved over the past 15 years. At the same time, Trove has been enriched by its community of users, both by submitting annotations and corrections through the web interface, and by sharing their own research, methods, tools, and discoveries across the web. Trove now is the product of these entwined histories \u2013 technology, policy, and community.</p><p>This Data Guide aims to help researchers make efficient and innovative use of Trove by documenting how it works and what it provides. But the complexity of Trove, and its evolution over time, makes it difficult to nail down its precise contents, limits, and structures. The simple question, \u2018What\u2019s in Trove?\u2019, is not easily answered. As I\u2019ve grappled with topics such as Trove\u2019s <a class=\"reference internal\" href=\"../what-is-trove/works-and-versions.html\"><span class=\"doc std std-doc\">works and versions</span></a>, and struggled to quantify measures like the <a class=\"reference internal\" href=\"../collections-and-contexts/newspapers-missing-pages.html\"><span class=\"doc std std-doc\">number of pages missing from digitised newspapers</span></a>, I\u2019ve come to realise that Trove, as a whole, is effectively unknowable. It\u2019s too big, too complex, and too inconsistent to yield to precise analysis. It\u2019s also changing constantly, so any attempt to capture its contents will be immediately out of date. The best we can hope for are a series of blurry snapshots that help us understand the characteristics of Trove, even though some of the fine details remain out of focus.</p>", "a[href=\"#collections-and-contexts\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">10. </span>Collections and contexts<a class=\"headerlink\" href=\"#collections-and-contexts\" title=\"Permalink to this heading\">#</a></h1><p>This section will expand on some of the issues and questions raised in <a class=\"reference internal\" href=\"../what-is-trove/trove-is.html\"><span class=\"doc std std-doc\">What is Trove?</span></a> section, looking in depth at what we can know about the contents of the different Trove cattgories and what this means for researchers.</p>"}
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
