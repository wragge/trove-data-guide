selector_to_html = {"a[href=\"#understanding-and-using-digitised-resources\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">18. </span>Understanding and using digitised resources<a class=\"headerlink\" href=\"#understanding-and-using-digitised-resources\" title=\"Link to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\"><span class=\"section-number\">18.1. </span>Finding digitised resources</a><a class=\"headerlink\" href=\"#finding-digitised-resources\" title=\"Link to this heading\">#</a></h2><p>These resources are spread across multiple categories and mixed with records aggregated from other collections. This makes finding NLA digitised items quite challenging. The one exception to this is periodical articles, which have their own <em>Magazines &amp; Newsletters</em> category.</p><p>Digitised resources can be found in the following categories:</p>", "a[href=\"../understanding-search/finding-digitised-content.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">10. </span>Finding NLA digitised content you can download<a class=\"headerlink\" href=\"#finding-nla-digitised-content-you-can-download\" title=\"Link to this heading\">#</a></h1><p>Trove provides a platform for the delivery of digitised content from the National Library of Australia and its partners. This digitised content is easy to find in the <em>Newspapers &amp; gazettes</em> and <em>Magazines &amp; newsletters</em> categories \u2013 they\u2019re full of it! But it\u2019s not so easy to find digitised content in other categories where it\u2019s mixed with works aggregated from a range of different sources.</p><p>There are a few different approaches to finding digitised content, but they all have potential problems. While I highlight what I think is the most reliable option, it\u2019s really a matter of working out what will best meet your research needs.</p>", "a[href=\"#finding-digitised-resources\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\"><span class=\"section-number\">18.1. </span>Finding digitised resources</a><a class=\"headerlink\" href=\"#finding-digitised-resources\" title=\"Link to this heading\">#</a></h2><p>These resources are spread across multiple categories and mixed with records aggregated from other collections. This makes finding NLA digitised items quite challenging. The one exception to this is periodical articles, which have their own <em>Magazines &amp; Newsletters</em> category.</p><p>Digitised resources can be found in the following categories:</p>", "a[href=\"#broadside-example\"]": "<figure class=\"align-default\" id=\"broadside-example\">\n<img alt=\"../_images/nla.obj-2383582349-1.jpg\" src=\"../_images/nla.obj-2383582349-1.jpg\"/>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 18.1 </span><span class=\"caption-text\">Is this a book? Example of a digitised broadside found in the <em>Books &amp; Libraries</em> category. (<a class=\"reference external\" href=\"http://nla.gov.au/nla.obj-2383582349\">http://nla.gov.au/nla.obj-2383582349</a>)</span><a class=\"headerlink\" href=\"#broadside-example\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
