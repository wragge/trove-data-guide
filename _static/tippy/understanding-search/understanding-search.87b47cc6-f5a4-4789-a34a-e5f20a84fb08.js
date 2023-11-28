selector_to_html = {"a[href=\"#id2\"]": "<figure class=\"align-default\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../_images/qp-wwi-only.png\"><img alt=\"../_images/qp-wwi-only.png\" src=\"../_images/qp-wwi-only.png\" style=\"width: 600px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 1.3 </span><span class=\"caption-text\">Number of digitised newspaper articles matched by the queries \u2018world war i\u2019.</span><a class=\"headerlink\" href=\"#id2\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#asking-critical-questions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\"><span class=\"section-number\">1.3. </span>Asking critical questions</a><a class=\"headerlink\" href=\"#asking-critical-questions\" title=\"Permalink to this heading\">#</a></h2><p>Focus here is on the \u2018simple search\u2019 option as the parameters are much the same between the web interface and API, and it\u2019s possible to replcate all \u2018Advanced\u2019 search options.</p><p>Topics:</p>", "a[href=\"#search-is-a-research-method\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\"><span class=\"section-number\">1.2. </span>Search is a research method</a><a class=\"headerlink\" href=\"#search-is-a-research-method\" title=\"Permalink to this heading\">#</a></h2><p>If you\u2019re working in a physical archive you don\u2019t expect to just submit a query to the person on the desk and have every relevant record delivered to you. You have to learn about the provenance of the records and the way they\u2019re arranged and described. It takes time, but it\u2019s a key part of the research process.</p><p>You should treat Trove the same way. Each search is an opportunity to learn a little more about the way Trove works. If you don\u2019t find what you\u2019re looking for, consult the documentation and experiment with alternative queries. Think about what works and what doesn\u2019t. It\u2019s an iterative process.</p>", "a[href=\"#understanding-search\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1. </span>Understanding search<a class=\"headerlink\" href=\"#understanding-search\" title=\"Permalink to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\"><span class=\"section-number\">1.1. </span>The limits of search</a><a class=\"headerlink\" href=\"#the-limits-of-search\" title=\"Permalink to this heading\">#</a></h2><p>Search is such a fundamental part of our online lives, we don\u2019t really think about it much. We just type words into the box, click enter, and start wading through the results. But search indexes have biases, they embed politics, they make assumptions about who we are and what we want. This is as true of Trove as any search tool.</p><p>In particular, search interfaces like Trove are not good at communicating their own limits. They tell us what they\u2019ve found, but not what is <em>findable</em>. This has important implications for researchers trying to interpret their search results. What does it mean if your Trove query returns nothing? Have the relevant resources been preserved, catalogued, digitised, indexed? Is there an issue with copyright? Are you searching the full text or just metadata? Is the metadata complete and consistent?</p>", "a[href=\"#id1\"]": "<figure class=\"align-default\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../_images/qp-wwi.png\"><img alt=\"../_images/qp-wwi.png\" src=\"../_images/qp-wwi.png\" style=\"width: 600px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 1.2 </span><span class=\"caption-text\">Number of digitised newspaper articles matched by the queries \u2018the great war\u2019, \u2018world war i\u2019, and \u2018world war ii\u2019.</span><a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#the-limits-of-search\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\"><span class=\"section-number\">1.1. </span>The limits of search</a><a class=\"headerlink\" href=\"#the-limits-of-search\" title=\"Permalink to this heading\">#</a></h2><p>Search is such a fundamental part of our online lives, we don\u2019t really think about it much. We just type words into the box, click enter, and start wading through the results. But search indexes have biases, they embed politics, they make assumptions about who we are and what we want. This is as true of Trove as any search tool.</p><p>In particular, search interfaces like Trove are not good at communicating their own limits. They tell us what they\u2019ve found, but not what is <em>findable</em>. This has important implications for researchers trying to interpret their search results. What does it mean if your Trove query returns nothing? Have the relevant resources been preserved, catalogued, digitised, indexed? Is there an issue with copyright? Are you searching the full text or just metadata? Is the metadata complete and consistent?</p>"}
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
