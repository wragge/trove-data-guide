selector_to_html = {"a[href=\"#empty-searches\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Empty searches<a class=\"headerlink\" href=\"#empty-searches\" title=\"Link to this heading\">#</a></h2><p>If you wanted to find out how many digitised newspaper articles are currently in Trove, you might try an <em>empty</em> search \u2013 a search with no keyword value. An empty search should return everything in the collection. But if you attempt this in the Trove web interface you\u2019ll find that the search button remains disabled until you type something in the box. It just won\u2019t let you. This limitation is imposed by the interface, not the underlying search technologies. In contrast, the API doesn\u2019t require a search query.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dnewspaper%26encoding%3Djson&amp;amp;comment=\"><img alt=\"Try it!\" src=\"https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg\"/></a></p>", "a[href=\"#search-interface-hacks\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Search interface hacks<a class=\"headerlink\" href=\"#search-interface-hacks\" title=\"Link to this heading\">#</a></h1><p>While Trove\u2019s search application works much the same way in the web interface and the API, a couple of annoying design choices limit your options in the web interface. This page documents some workarounds.</p>", "a[href=\"#results-per-page\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Results per page<a class=\"headerlink\" href=\"#results-per-page\" title=\"Link to this heading\">#</a></h2><p>The Trove API\u2019s <code class=\"docutils literal notranslate\"><span class=\"pre\">n</span></code> parameter lets you specify the number of search results you want to get back from a single request. In the web interface you have no choice \u2013 you get twenty results per page. This can be frustrating if you want to quickly scan a set of search results.</p><p>But once again you can work around this limit with a bit of url hacking. If you look under the hood to see what Trove does when you submit a search query, you\u2019ll see that it adds an extra <code class=\"docutils literal notranslate\"><span class=\"pre\">pageSize</span></code> parameter to the query before passing it to an internal API. The value of <code class=\"docutils literal notranslate\"><span class=\"pre\">pageSize</span></code> defaults to <code class=\"docutils literal notranslate\"><span class=\"pre\">20</span></code>, but if you add <code class=\"docutils literal notranslate\"><span class=\"pre\">&amp;pageSize=100</span></code> to your search url, the value is passed through to the internal API and you get 100 results.</p>", "a[href=\"#empty-search-web-archives\"]": "<figure class=\"align-default\" id=\"empty-search-web-archives\">\n<img alt=\"../_images/empty-search-web-archives.png\" src=\"../_images/empty-search-web-archives.png\"/>\n<figcaption>\n<p><span class=\"caption-text\">An empty search in web archives returns more than <em>8.5 billion</em> results!<br/>\n<a class=\"reference external\" href=\"https://trove.nla.gov.au/search/category/websites?keyword=\">https://trove.nla.gov.au/search/category/websites?keyword=</a></span><a class=\"headerlink\" href=\"#empty-search-web-archives\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
