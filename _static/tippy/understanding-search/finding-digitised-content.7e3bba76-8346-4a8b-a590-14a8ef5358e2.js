selector_to_html = {"a[href=\"#has-correctabletext\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">has:correctabletext</span></code><a class=\"headerlink\" href=\"#has-correctabletext\" title=\"Permalink to this heading\">#</a></h3><p>Adding <code class=\"docutils literal notranslate\"><span class=\"pre\">has:correctabletext</span></code> to your query limits the results to works that have OCRd text you can correct in the Trove web interface.</p><p>If the text content of a resource is \u2018correctable\u2019 then you\u2019d expect it to be an NLA digitised item with OCRd text you can download. So adding <code class=\"docutils literal notranslate\"><span class=\"pre\">has:correctabletext</span></code> to your query <em>should</em> limit the results to digitised items with downloadable text. This seems to be the case (though watch out for more ghost records), but again it\u2019s not clear what you are excluding \u2013 is every item with OCRd text correctable?</p>", "a[href=\"#imageind\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">imageInd</span></code><a class=\"headerlink\" href=\"#imageind\" title=\"Permalink to this heading\">#</a></h3><p>Adding <code class=\"docutils literal notranslate\"><span class=\"pre\">imageInd:thumbnail</span></code> to your query limits results to works that have a thumbnail image.</p><p>Both <code class=\"docutils literal notranslate\"><span class=\"pre\">fullTextInd:y</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">has:correctabletext</span></code> filter records based on whether they have accessible text. But there are many digitised resources that either contain no text at all, or have no text that can be extracted by OCR. Adding <code class=\"docutils literal notranslate\"><span class=\"pre\">imageInd:thumbnail</span></code> to your search can help find these items. However, like <code class=\"docutils literal notranslate\"><span class=\"pre\">fullTextInd</span></code> this index is applied to aggregated collections as well as digitised resources, so your results can include all sorts of content, from book covers to pictures of politicians. There\u2019s also no guarantee that an item with a thumbnail will provide a larger image for download.</p>", "a[href=\"#search-for-records-including-nla-obj\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.1. </span>Search for records including <code class=\"docutils literal notranslate\"><span class=\"pre\">nla.obj</span></code><a class=\"headerlink\" href=\"#search-for-records-including-nla-obj\" title=\"Permalink to this heading\">#</a></h2><p>All of the digitised resources in Trove (except for <em>Newspapers &amp; Gazettes</em>) have NLA identifiers of the form <code class=\"docutils literal notranslate\"><span class=\"pre\">nla.obj-[NUMBER]</span></code>. So a search for <code class=\"docutils literal notranslate\"><span class=\"pre\">\"nla.obj\"</span></code> should return all digitised resources. Here\u2019s the results of running this search across all categories:</p>", "a[href=\"#limit-results-to-the-trove-digital-library\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Limit results to the \u2018Trove Digital Library\u2019<a class=\"headerlink\" href=\"#limit-results-to-the-trove-digital-library\" title=\"Permalink to this heading\">#</a></h3><p>In the Advanced Search form for the <em>Books &amp; Libraries</em>, <em>Research &amp; Reports</em>, <em>Images, Maps &amp; Artefacts</em>, <em>Diaries, Letters &amp; Archives</em>, and <em>Music, Audio &amp; Video</em> categories, there\u2019s an option to limit the source of the records in your results by selecting from a list of \u2018Organisations\u2019. Hidden away in this list is the \u2018Trove Digital Library\u2019. Unfortunately, selecting \u2018Trove Digital Library\u2019 in Advanced Search doesn\u2019t work at the moment because of a bug in the web interface, but once you know it exists you can manually add it to your searches.</p>", "a[href=\"#fulltextind-y\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">fullTextInd:y</span></code><a class=\"headerlink\" href=\"#fulltextind-y\" title=\"Permalink to this heading\">#</a></h3><p>The Trove documentation states that by adding <code class=\"docutils literal notranslate\"><span class=\"pre\">fullTextInd:y</span></code> to your query you can:</p>", "a[href=\"#advanced-search-orgs\"]": "<figure class=\"align-default\" id=\"advanced-search-orgs\">\n<a class=\"reference internal image-reference\" href=\"../_images/advanced_search_orgs.png\"><img alt=\"../_images/advanced_search_orgs.png\" src=\"../_images/advanced_search_orgs.png\" style=\"width: 600px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 5.1 </span><span class=\"caption-text\">Selecting \u2018Trove Digital Library\u2019 in the Advanced Search form \u2013 note the NUC identifier in brackets</span><a class=\"headerlink\" href=\"#advanced-search-orgs\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#finding-nla-digitised-content-you-can-download\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5. </span>Finding NLA digitised content you can download<a class=\"headerlink\" href=\"#finding-nla-digitised-content-you-can-download\" title=\"Permalink to this heading\">#</a></h1><p>Trove provides a platform for the delivery of digitised content from the National Library of Australia and its partners. This digitised content is easy to find in the <em>Newspapers &amp; gazettes</em> and <em>Magazines &amp; newsletters</em> categories \u2013 they\u2019re full of it! But it\u2019s not so easy to find digitised content in other categories where it\u2019s mixed with works aggregated from a range of different sources.</p><p>There are a few different approaches to finding digitised content, but they all have potential problems. While I highlight what I think is the most reliable option, it\u2019s really a matter of working out what will best meet your research needs.</p>", "a[href=\"#other-options\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.2. </span>Other options<a class=\"headerlink\" href=\"#other-options\" title=\"Permalink to this heading\">#</a></h2><p>There are a few other ways of finding digitised content, but they\u2019re not as reliable as searching for \u201cnla.obj\u201d. There\u2019s no public documentation about how these indexes are created, so it\u2019s difficult to interpret the results they return. But they might be useful in some circumstances.</p>"}
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
