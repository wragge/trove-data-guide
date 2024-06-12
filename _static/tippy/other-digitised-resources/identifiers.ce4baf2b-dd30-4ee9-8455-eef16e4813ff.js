selector_to_html = {"a[href=\"#parts-and-wholes\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Parts and wholes<a class=\"headerlink\" href=\"#parts-and-wholes\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#data-access-methods\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Data access methods<a class=\"headerlink\" href=\"#data-access-methods\" title=\"Link to this heading\">#</a></h2><p>Digitsed versus born digital</p><p>Print publications (book or periodical issue) \u2013 get page identifiers, get section/article identifiers, get text, get pdf, get images (all or page range)</p>", "a[href=\"#recognising-digital-object-identifiers\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Recognising digital object identifiers<a class=\"headerlink\" href=\"#recognising-digital-object-identifiers\" title=\"Link to this heading\">#</a></h2><p>Digital object identifiers are a url with the form: <code class=\"docutils literal notranslate\"><span class=\"pre\">https://nla.gov.au/nla.obj-[NUMBER]</span></code></p><p>For example: <a class=\"reference external\" href=\"http://nla.gov.au/nla.obj-141171021\">http://nla.gov.au/nla.obj-141171021</a> identifies a photograph of two angry rockhopper penguins.</p>", "a[href=\"#collections-and-items\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Collections and items<a class=\"headerlink\" href=\"#collections-and-items\" title=\"Link to this heading\">#</a></h2>", "a[href=\"../what-is-trove/links-and-identifiers.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5. </span>Links and identifiers<a class=\"headerlink\" href=\"#links-and-identifiers\" title=\"Link to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\"><span class=\"section-number\">5.1. </span>Identifying identifiers</a><a class=\"headerlink\" href=\"#identifying-identifiers\" title=\"Link to this heading\">#</a></h2><p>As you navigate around Trove you\u2019ll find a range of url patterns pointing to different types of resources. Some examples are:</p>", "a[href=\"#where-do-the-urls-go\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Where do the urls go?<a class=\"headerlink\" href=\"#where-do-the-urls-go\" title=\"Link to this heading\">#</a></h2><p>When you plug a digital object identifier into your browser you\u2019re taken to one of Trove\u2019s digital object viewers.</p>", "a[href=\"#page-identifiers\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Page identifiers<a class=\"headerlink\" href=\"#page-identifiers\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#digital-object-identifiers\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Digital object identifiers<a class=\"headerlink\" href=\"#digital-object-identifiers\" title=\"Link to this heading\">#</a></h1><p>The complexities of Trove\u2019s digital object identifer scheme are introduced in <a class=\"reference internal\" href=\"../what-is-trove/links-and-identifiers.html\"><span class=\"doc std std-doc\">Links and identifiers</span></a>. The main issue confronting users is that identifiers for different types of digital objects \u2013 such as books, pages, issues, articles, photographs, and collections \u2013 all look the same. This is important because the digital identifier provides a key to unlock an object\u2019s metadata and digital representations. <strong>To access data about digitised resources in Trove you need to understand how the identifiers work.</strong></p>"}
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
