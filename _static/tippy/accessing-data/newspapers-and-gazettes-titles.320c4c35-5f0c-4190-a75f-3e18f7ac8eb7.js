selector_to_html = {"a[href=\"#get-details-of-a-single-newspaper-or-gazette-title\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\">Get details of a single newspaper or gazette title</a><a class=\"headerlink\" href=\"#get-details-of-a-single-newspaper-or-gazette-title\" title=\"Permalink to this heading\">#</a></h3><p>To retrieve information about an individual title, use the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> or <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints with a title identifier.</p><p>You can find a title\u2019s identifier in the Trove web interface. Go to the <a class=\"reference external\" href=\"https://trove.nla.gov.au/newspaper/about\">Digitised Newspapers and Gazettes in Trove</a> and select a title to view more information about it. The title\u2019s <code class=\"docutils literal notranslate\"><span class=\"pre\">id</span></code> is the number at the end of the url of the information page. For example, the <a class=\"reference external\" href=\"https://trove.nla.gov.au/newspaper/title/11\">page about the Canberra Times</a> has the url <code class=\"docutils literal notranslate\"><span class=\"pre\">https://trove.nla.gov.au/newspaper/title/11</span></code>, so the title\u2019s <code class=\"docutils literal notranslate\"><span class=\"pre\">id</span></code> is <code class=\"docutils literal notranslate\"><span class=\"pre\">11</span></code>.</p>", "a[href=\"#metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\">Metadata</a><a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h2><h3><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">Get a list of newspaper &amp; gazette titles</a><a class=\"headerlink\" href=\"#get-a-list-of-newspaper-gazette-titles\" title=\"Permalink to this heading\">#</a></h3><p>You can get information about newspaper and gazette titles in Trove from these API endpoints:</p>", "a[href=\"#get-a-list-of-newspaper-titles-from-a-particular-state\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\">Get a list of newspaper titles from a particular state</a><a class=\"headerlink\" href=\"#get-a-list-of-newspaper-titles-from-a-particular-state\" title=\"Permalink to this heading\">#</a></h3><p>You can filter the list of titles by adding the <code class=\"docutils literal notranslate\"><span class=\"pre\">state</span></code> parameter. Possible values for <code class=\"docutils literal notranslate\"><span class=\"pre\">state</span></code> are:</p>", "a[href=\"#text\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id8\" role=\"doc-backlink\">Text</a><a class=\"headerlink\" href=\"#text\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#images-and-pdfs\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id9\" role=\"doc-backlink\">Images and PDFs</a><a class=\"headerlink\" href=\"#images-and-pdfs\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#how-many-newspaper-titles-are-there\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">How many newspaper titles are there?</a><a class=\"headerlink\" href=\"#how-many-newspaper-titles-are-there\" title=\"Permalink to this heading\">#</a></h3><p>The responses you get back from the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/titles</span></code> or <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/titles</span></code> endpoints includes a <code class=\"docutils literal notranslate\"><span class=\"pre\">total</span></code> value that tells you the number of titles matching your request. Reusing the data from the request above, we can get the total number of newspaper titles like this:</p>", "a[href=\"#find-catalogue-entries-for-newspaper-titles\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id7\" role=\"doc-backlink\">Find catalogue entries for newspaper titles</a><a class=\"headerlink\" href=\"#find-catalogue-entries-for-newspaper-titles\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#aggregate-search-results-by-title-using-the-title-facet\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id6\" role=\"doc-backlink\">Aggregate search results by title using the <code class=\"docutils literal notranslate\"><span class=\"pre\">title</span></code> facet</a><a class=\"headerlink\" href=\"#aggregate-search-results-by-title-using-the-title-facet\" title=\"Permalink to this heading\">#</a></h3><p>You can also explore the characteristics of newspaper titles in Trove by using the API\u2019s <code class=\"docutils literal notranslate\"><span class=\"pre\">/result</span></code> endpoint with the <code class=\"docutils literal notranslate\"><span class=\"pre\">title</span></code> facet.</p>", "a[href=\"#get-a-list-of-newspaper-gazette-titles\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">Get a list of newspaper &amp; gazette titles</a><a class=\"headerlink\" href=\"#get-a-list-of-newspaper-gazette-titles\" title=\"Permalink to this heading\">#</a></h3><p>You can get information about newspaper and gazette titles in Trove from these API endpoints:</p>", "a[href=\"#accessing-data-about-newspaper-gazette-titles\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">10.4. </span>Accessing data about newspaper &amp; gazette titles<a class=\"headerlink\" href=\"#accessing-data-about-newspaper-gazette-titles\" title=\"Permalink to this heading\">#</a></h1><p>\u2018Titles\u2019 in this context refers to the names of the publications whose articles are digitised in Trove. For example: <em>Canberra Times</em>, <em>Sydney Morning Herald</em>, or <em>Commonwealth of Australia Gazette</em>.</p>"}
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
