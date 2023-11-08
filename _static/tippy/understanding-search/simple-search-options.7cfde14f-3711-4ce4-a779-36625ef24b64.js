selector_to_html = {"a[href=\"#searching-for-articles-within-a-given-date-range\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">10.3. </span>Searching for articles within a given date range<a class=\"headerlink\" href=\"#searching-for-articles-within-a-given-date-range\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#simple-search-options\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">10. </span>\u2018Simple\u2019 search options<a class=\"headerlink\" href=\"#simple-search-options\" title=\"Permalink to this heading\">#</a></h1><p><mark>==Include a note about <code class=\"docutils literal notranslate\"><span class=\"pre\">firstpageseq</span></code> and the fact that this will match pages from supplements as well. So supplements need to be filtered out after harvesting. Also note that not all issues start with page 1.==</mark></p>", "a[href=\"../newspapers-and-gazettes/data/pages.html#get-page-identifier-from-search\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id11\" role=\"doc-backlink\">Get the identifier of a specific page by searching for articles</a><a class=\"headerlink\" href=\"#get-the-identifier-of-a-specific-page-by-searching-for-articles\" title=\"Permalink to this heading\">#</a></h3><p>To get the identifier of a specific page, you need to construct a very precise search for articles published on that page using the <code class=\"docutils literal notranslate\"><span class=\"pre\">/result</span></code> endpoint. You can do this by specifying the title (the newspaper name), the publication date, and the page number. Once you have the search results, you can extract the page identifier from the article records.</p><p>The newspaper title is set using the <code class=\"docutils literal notranslate\"><span class=\"pre\">l-title</span></code> parameter. For example, the identifier for the <em>Canberra Times</em> is <code class=\"docutils literal notranslate\"><span class=\"pre\">11</span></code>, so to limit your search to the <em>Canberra Times</em> you\u2019d set <code class=\"docutils literal notranslate\"><span class=\"pre\">l-title</span></code> to <code class=\"docutils literal notranslate\"><span class=\"pre\">11</span></code>.</p>", "a[href=\"#table-available-search-indexes\"]": "<table class=\"table\" id=\"table-available-search-indexes\">\n<caption><span class=\"caption-number\">Table 10.1 </span><span class=\"caption-text\">Available search indexes</span><a class=\"headerlink\" href=\"#table-available-search-indexes\" title=\"Permalink to this table\">#</a></caption>\n<thead>\n<tr class=\"row-odd\"><th class=\"head\"><p>Index</p></th>\n<th class=\"head\"><p>Description</p></th>\n<th class=\"head\"><p>Example</p></th>\n<th class=\"head\"><p>Notes</p></th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">date</span></code></p></td>\n<td><p>Search for articles within a given date range</p></td>\n<td><p>Example</p></td>\n<td><p>Notes</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">firstpageseq</span></code></p></td>\n<td><p>Search for a specific page number</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">firstpageseq:2</span></code> \u2013 find articles published on page two</p></td>\n<td><p>Results combine newspaper body and separately-numbered supplements, so searches can return articles from multiple pages</p></td>\n</tr>\n</tbody>\n</table>", "a[href=\"#searching-for-articles-on-a-specific-page\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">10.2. </span>Searching for articles on a specific page<a class=\"headerlink\" href=\"#searching-for-articles-on-a-specific-page\" title=\"Permalink to this heading\">#</a></h2><p>You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">firstpageseq</span></code> index to search for articles published on a particular page. For example, include <code class=\"docutils literal notranslate\"><span class=\"pre\">firstpageseq:1</span></code> in your query to find articles on page one. This works in both the web interface\u2019s simple search box and the <code class=\"docutils literal notranslate\"><span class=\"pre\">q</span></code> value of the API.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A//api.trove.nla.gov.au/v3/result%3Fq%3Dfirstpageseq%3A1%26category%3Dnewspaper%26encoding%3Djson&amp;comment=\"><img alt=\"Try it!\" src=\"https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg\"/></a></p>", "a[href=\"#available-indexes\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">10.1. </span>Available indexes<a class=\"headerlink\" href=\"#available-indexes\" title=\"Permalink to this heading\">#</a></h2><p>Note that <code class=\"docutils literal notranslate\"><span class=\"pre\">fullTextInd</span></code> can be misleading and inaccurate \u2013 doesn\u2019t always link to fulltext version, text not always available. Can be restricted (eg NED publications) or from a contributor where fulltext links are sometimes wrong. Need to combine with something like \u201cnla.obj\u201d, and exclude NED, to find digitised resources reliably.</p><p><mark>==<code class=\"docutils literal notranslate\"><span class=\"pre\">series:</span></code>? Seems to work. Is it different to <code class=\"docutils literal notranslate\"><span class=\"pre\">contribcollection</span></code>?==</mark></p>"}
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
