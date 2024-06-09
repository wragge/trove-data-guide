selector_to_html = {"a[href=\"#understanding-search\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Understanding search<a class=\"headerlink\" href=\"#understanding-search\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#asking-critical-questions\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Asking critical questions<a class=\"headerlink\" href=\"#asking-critical-questions\" title=\"Link to this heading\">#</a></h1><p>Focus here is on the \u2018simple search\u2019 option as the parameters are much the same between the web interface and API, and it\u2019s possible to replcate all \u2018Advanced\u2019 search options.</p><p>Topics:</p>", "a[href=\"#searching-for-articles-on-a-specific-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Searching for articles on a specific page<a class=\"headerlink\" href=\"#searching-for-articles-on-a-specific-page\" title=\"Link to this heading\">#</a></h1><p>You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">firstpageseq</span></code> index to search for articles published on a particular page. For example, include <code class=\"docutils literal notranslate\"><span class=\"pre\">firstpageseq:1</span></code> in your query to find articles on page one. This works in both the web interface\u2019s simple search box and the <code class=\"docutils literal notranslate\"><span class=\"pre\">q</span></code> value of the API.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A//api.trove.nla.gov.au/v3/result%3Fq%3Dfirstpageseq%3A1%26category%3Dnewspaper%26encoding%3Djson&amp;amp;comment=\"><img alt=\"Try it!\" src=\"https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg\"/></a></p>", "a[href=\"../newspapers-and-gazettes/data/pages.html#get-page-identifier-from-search\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id11\" role=\"doc-backlink\">Get the identifier of a specific page by searching for articles</a><a class=\"headerlink\" href=\"#get-the-identifier-of-a-specific-page-by-searching-for-articles\" title=\"Link to this heading\">#</a></h3><p>To get the identifier of a specific page, you need to construct a very precise search for articles published on that page using the <code class=\"docutils literal notranslate\"><span class=\"pre\">/result</span></code> endpoint. You can do this by specifying the title (the newspaper name), the publication date, and the page number. Once you have the search results, you can extract the page identifier from the article records.</p><p>The newspaper title is set using the <code class=\"docutils literal notranslate\"><span class=\"pre\">l-title</span></code> parameter. For example, the identifier for the <em>Canberra Times</em> is <code class=\"docutils literal notranslate\"><span class=\"pre\">11</span></code>, so to limit your search to the <em>Canberra Times</em> you\u2019d set <code class=\"docutils literal notranslate\"><span class=\"pre\">l-title</span></code> to <code class=\"docutils literal notranslate\"><span class=\"pre\">11</span></code>.</p>"}
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
