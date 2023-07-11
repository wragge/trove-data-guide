selector_to_html = {"a[href=\"what-is-trove/what-is-trove.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2. </span>What is Trove?<a class=\"headerlink\" href=\"#what-is-trove\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"references.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">10. </span>References<a class=\"headerlink\" href=\"#references\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"genindex.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">9. </span>Index<a class=\"headerlink\" href=\"#index\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"#welcome-to-the-trove-data-guide\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Welcome to the Trove Data Guide<a class=\"headerlink\" href=\"#welcome-to-the-trove-data-guide\" title=\"Permalink to this heading\">#</a></h1><p>This guide will help you develop a critical understanding of Trove as a source for digital research.</p>", "a[href=\"pathways/pathways.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">6. </span>Research pathways<a class=\"headerlink\" href=\"#research-pathways\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"demo.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">11. </span>Jupyter Book demo page<a class=\"headerlink\" href=\"#jupyter-book-demo-page\" title=\"Permalink to this heading\">#</a></h1><p>Trove is not one thing. <span id=\"id1\">[<a class=\"reference internal\" href=\"references.html#id18\" title=\"Tim Sherratt. Hacking Heritage: Understanding the Limits of Online Access. In H Lewi, W Smith, D von Lehn, and S Cooke, editors, The Routledge International Handbook of New Digital Practices in Galleries, Libraries, Archives, Museums and Heritage Sites, pages 116\u2013130. Routledge, London, 2019. doi:10.5281/zenodo.5035855.\">Sherratt, 2019</a>]</span></p>", "a[href=\"accessing-data/accessing-data.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5. </span>Accessing data<a class=\"headerlink\" href=\"#accessing-data\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"types-of-data/types-of-data.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">3. </span>Types of data<a class=\"headerlink\" href=\"#types-of-data\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"introduction/introduction.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1. </span>Introduction<a class=\"headerlink\" href=\"#introduction\" title=\"Permalink to this heading\">#</a></h1><p>We all know how to use <a class=\"reference external\" href=\"https://trove.nla.gov.au/\">Trove</a>. You just type your search terms into the box and click the button. You then work your way through the first few pages of results, saving anything that looks useful. If, for example, I\u2019m interested in the development of radio in Australia, I could search for the term \u2018radio\u2019 in Trove\u2019s digitised newspapers. It\u2019s easy!</p>", "a[href=\"how-to/how-to.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">7. </span>How to<a class=\"headerlink\" href=\"#how-to\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"glossary.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">8. </span>Glossary<a class=\"headerlink\" href=\"#glossary\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"understanding-search/understanding-search.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4. </span>Understanding search<a class=\"headerlink\" href=\"#understanding-search\" title=\"Permalink to this heading\">#</a></h1>"}
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
