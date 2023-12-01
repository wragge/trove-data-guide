selector_to_html = {"a[href=\"#trove-is\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1. </span>Trove is\u2026<a class=\"headerlink\" href=\"#trove-is\" title=\"Permalink to this heading\">#</a></h1><p>Trove is:</p>", "a[href=\"#id2\"]": "<figure class=\"align-default\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../_images/trove-data-flows-2010-cathro-collier.png\"><img alt=\"../_images/trove-data-flows-2010-cathro-collier.png\" src=\"../_images/trove-data-flows-2010-cathro-collier.png\" style=\"width: 600px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 1.1 </span><span class=\"caption-text\">Trove Data Flows, 2010, licensed CC-BY-NC. <span id=\"id1\">[<a class=\"reference internal\" href=\"../references.html#id21\" title=\"Warwick Cathro and Susan Collier. Developing Trove: the policy and technical challenges. In VALA2010. 2010.\">Cathro and Collier, 2010</a>]</span> See the Trove help documentation for <a class=\"reference external\" href=\"https://trove.nla.gov.au/about/what-trove/technical-ecosystem\">information about the current configuration</a>.</span><a class=\"headerlink\" href=\"#id2\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#precursors-and-milestones\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\"><span class=\"section-number\">1.2. </span>Precursors and milestones</a><a class=\"headerlink\" href=\"#precursors-and-milestones\" title=\"Permalink to this heading\">#</a></h2><p>Not a history. Idntifying major threads and changes that shape Trove now.</p><p>What Trove is has changed over time.</p>", "a[href=\"#trove-now\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\"><span class=\"section-number\">1.1. </span>Trove now</a><a class=\"headerlink\" href=\"#trove-now\" title=\"Permalink to this heading\">#</a></h2><p>More information in pages for specific formats.</p>", "a[href=\"../glossary.html#term-Metadata\"]": "<dt id=\"term-Metadata\">Metadata</dt><dd><p>An indented explanation of term 1</p></dd>", "a[href=\"works-and-versions.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">3. </span>Works and versions<a class=\"headerlink\" href=\"#works-and-versions\" title=\"Permalink to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\"><span class=\"section-number\">3.1. </span>Grouping versions into works</a><a class=\"headerlink\" href=\"#grouping-versions-into-works\" title=\"Permalink to this heading\">#</a></h2><p>The idea is simple enough \u2013 bring all the versions of a publication together under a single heading to simplify a user\u2019s search results. Instead of having to wade through a long list of near-identical entries, a user can quickly focus in on a title of interest, and drill down to find a specific version at a specific library. This idea is based on the <a class=\"reference external\" href=\"https://www.ifla.org/references/best-practice-for-national-bibliographic-agencies-in-a-digital-age/resource-description-and-standards/bibliographic-control/functional-requirements-the-frbr-family-of-models/functional-requirements-for-bibliographic-records-frbr/\">Functional Requirements for Bibliographic Records</a> (FRBR). The FRBR data model describes four entities: \u2018work\u2019, \u2018expression\u2019, \u2018manifestation\u2019, and \u2018item\u2019:</p>"}
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
