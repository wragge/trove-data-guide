selector_to_html = {"a[href=\"#get-a-list-of-newspaper-gazette-titles\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\">Get a list of newspaper &amp; gazette titles</a><a class=\"headerlink\" href=\"#get-a-list-of-newspaper-gazette-titles\" title=\"Permalink to this heading\">#</a></h3><p>You can get information about newspaper and gazette titles in Trove from these API endpoints:</p>", "a[href=\"#get-a-list-of-newspaper-titles-from-a-particular-state\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id7\" role=\"doc-backlink\">Get a list of newspaper titles from a particular state</a><a class=\"headerlink\" href=\"#get-a-list-of-newspaper-titles-from-a-particular-state\" title=\"Permalink to this heading\">#</a></h3><p>You can filter the list of titles by adding the <code class=\"docutils literal notranslate\"><span class=\"pre\">state</span></code> parameter. Possible values for <code class=\"docutils literal notranslate\"><span class=\"pre\">state</span></code> are:</p>", "a[href=\"#title-browse-link\"]": "<figure class=\"align-default\" id=\"title-browse-link\">\n<a class=\"reference internal image-reference\" href=\"../_images/title-browse-link.png\"><img alt=\"../_images/title-browse-link.png\" src=\"../_images/title-browse-link.png\" style=\"width: 500px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 15.9 </span><span class=\"caption-text\">Click on the \ud83d\udec8 icon to open a title\u2019s landing page</span><a class=\"headerlink\" href=\"#title-browse-link\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#title-metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\">Title metadata</a><a class=\"headerlink\" href=\"#title-metadata\" title=\"Permalink to this heading\">#</a></h2><h3><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\">Get a list of newspaper &amp; gazette titles</a><a class=\"headerlink\" href=\"#get-a-list-of-newspaper-gazette-titles\" title=\"Permalink to this heading\">#</a></h3><p>You can get information about newspaper and gazette titles in Trove from these API endpoints:</p>", "a[href=\"#images-and-pdfs\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id12\" role=\"doc-backlink\">Images and PDFs</a><a class=\"headerlink\" href=\"#images-and-pdfs\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#text\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id11\" role=\"doc-backlink\">Text</a><a class=\"headerlink\" href=\"#text\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#how-many-newspaper-titles-are-there\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id6\" role=\"doc-backlink\">How many newspaper titles are there?</a><a class=\"headerlink\" href=\"#how-many-newspaper-titles-are-there\" title=\"Permalink to this heading\">#</a></h3><p>The responses you get back from the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/titles</span></code> or <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/titles</span></code> endpoints includes a <code class=\"docutils literal notranslate\"><span class=\"pre\">total</span></code> value that tells you the number of titles matching your request. Reusing the data from the request above, we can get the total number of newspaper titles like this:</p>", "a[href=\"#aggregate-search-results-by-title-using-the-title-facet\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id9\" role=\"doc-backlink\">Aggregate search results by title using the <code class=\"docutils literal notranslate\"><span class=\"pre\">title</span></code> facet</a><a class=\"headerlink\" href=\"#aggregate-search-results-by-title-using-the-title-facet\" title=\"Permalink to this heading\">#</a></h3><p>You can also explore the characteristics of newspaper titles in Trove by using the API\u2019s <code class=\"docutils literal notranslate\"><span class=\"pre\">/result</span></code> endpoint with the <code class=\"docutils literal notranslate\"><span class=\"pre\">title</span></code> facet.</p>", "a[href=\"#get-details-of-a-single-newspaper-or-gazette-title\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id8\" role=\"doc-backlink\">Get details of a single newspaper or gazette title</a><a class=\"headerlink\" href=\"#get-details-of-a-single-newspaper-or-gazette-title\" title=\"Permalink to this heading\">#</a></h3><p>To retrieve information about an individual title, use the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> or <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints with a <a class=\"reference internal\" href=\"#title-links-and-identifiers\"><span class=\"std std-ref\">title identifier</span></a>. To construct the request url, add the title\u2019s numeric identifier to the endpoint: <code class=\"docutils literal notranslate\"><span class=\"pre\">https://api.trove.nla.gov.au/v3/newspaper/[TITLE</span> <span class=\"pre\">ID]</span></code>. For example, to request metadata about the <em>Canberra Times</em> you\u2019d use:  <code class=\"docutils literal notranslate\"><span class=\"pre\">https://api.trove.nla.gov.au/v3/newspaper/11</span></code></p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitle%2F11%2F%3Fencoding%3Djson&amp;comment=\"><img alt=\"Try it!\" src=\"https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg\"/></a></p>", "a[href=\"#title-id\"]": "<figure class=\"align-default\" id=\"title-id\">\n<a class=\"reference internal image-reference\" href=\"../_images/trove-title-id.png\"><img alt=\"../_images/trove-title-id.png\" src=\"../_images/trove-title-id.png\" style=\"width: 500px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 15.11 </span><span class=\"caption-text\">The title\u2019s identifier is displayed on the landing page</span><a class=\"headerlink\" href=\"#title-id\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#title-links-and-identifiers\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">Title links and identifiers</a><a class=\"headerlink\" href=\"#title-links-and-identifiers\" title=\"Permalink to this heading\">#</a></h2><p>Every title in Trove\u2019s <em>Newspapers &amp; Gazette\u2019s</em> category has it\u2019s own unique identifier. You can find this identifier in the web interface and by using the Trove API.</p><p>You can browse a full list of titles in the web interface. Click on the \ud83d\udec8 icon next to a title\u2019s name to open its landing page.</p>", "a[href=\"#find-catalogue-entries-for-newspaper-titles\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id10\" role=\"doc-backlink\">Find catalogue entries for newspaper titles</a><a class=\"headerlink\" href=\"#find-catalogue-entries-for-newspaper-titles\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#whats-a-title\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">What\u2019s a title?</a><a class=\"headerlink\" href=\"#whats-a-title\" title=\"Permalink to this heading\">#</a></h2><p>\u2018Titles\u2019 in this context refers to the names and details of the publications whose articles are digitised in Trove\u2019s <em>Newspapers &amp; Gazette\u2019s</em> category. For example: <em>Canberra Times</em>, <em>Sydney Morning Herald</em>, or <em>Commonwealth of Australia Gazette</em>.</p>", "a[href=\"#accessing-data-about-newspaper-gazette-titles\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">15.4. </span>Accessing data about newspaper &amp; gazette titles<a class=\"headerlink\" href=\"#accessing-data-about-newspaper-gazette-titles\" title=\"Permalink to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">What\u2019s a title?</a><a class=\"headerlink\" href=\"#whats-a-title\" title=\"Permalink to this heading\">#</a></h2><p>\u2018Titles\u2019 in this context refers to the names and details of the publications whose articles are digitised in Trove\u2019s <em>Newspapers &amp; Gazette\u2019s</em> category. For example: <em>Canberra Times</em>, <em>Sydney Morning Herald</em>, or <em>Commonwealth of Australia Gazette</em>.</p>", "a[href=\"#title-article-link\"]": "<figure class=\"align-default\" id=\"title-article-link\">\n<a class=\"reference internal image-reference\" href=\"../_images/newspaper-title-link.png\"><img alt=\"../_images/newspaper-title-link.png\" src=\"../_images/newspaper-title-link.png\" style=\"width: 500px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 15.10 </span><span class=\"caption-text\">Hover over the breadcrumbs to reveal a link to the title\u2019s landing page</span><a class=\"headerlink\" href=\"#title-article-link\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
