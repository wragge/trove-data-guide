selector_to_html = {"a[href=\"#collections-and-contexts\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">10. </span>Collections and contexts<a class=\"headerlink\" href=\"#collections-and-contexts\" title=\"Permalink to this heading\">#</a></h1><p>This section will expand on some of the issues and questions raised in <a class=\"reference internal\" href=\"../what-is-trove/trove-is.html\"><span class=\"doc std std-doc\">What is Trove?</span></a> section, looking in depth at what we can know about the contents of the different Trove cattgories and what this means for researchers.</p>", "a[href=\"../what-is-trove/trove-is.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1. </span>Trove is\u2026<a class=\"headerlink\" href=\"#trove-is\" title=\"Permalink to this heading\">#</a></h1><p><strong>Trove is not one thing</strong>. On the <a class=\"reference external\" href=\"https://trove.nla.gov.au/about/what-trove/technical-ecosystem\">technical front</a>, Trove is a combination of many interconnected systems, data sources, and interfaces, each with its own individual history. But Trove is also an idea, an ambition, an attempt to provide Australians with facilitated access to research and heritage collections from across the country. That idea, expressed through policy documents, strategic plans, resource allocations, and collaborative agreements has also evolved over the past 15 years. At the same time, Trove has been enriched by its community of users, both by submitting annotations and corrections through the web interface, and by sharing their own research, methods, tools, and discoveries across the web. Trove now is the product of these entwined histories \u2013 technology, policy, and community.</p>"}
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
