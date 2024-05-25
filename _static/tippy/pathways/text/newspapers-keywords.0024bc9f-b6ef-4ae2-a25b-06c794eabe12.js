selector_to_html = {"a[href=\"../../understanding-search/simple-search-options.html#search-simple-defuzzify\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\"><span class=\"section-number\">8.2. </span>De-fuzzify your searches</a><a class=\"headerlink\" href=\"#de-fuzzify-your-searches\" title=\"Link to this heading\">#</a></h2><p>By default, Trove adds a bit of fuzziness to your searches to try and ensure you get back some useful results. This includes:</p>", "a[href=\"#tools\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Tools<a class=\"headerlink\" href=\"#tools\" title=\"Link to this heading\">#</a></h2>", "a[href=\"../../understanding-search/simple-search-options.html#search-simple-facets\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id7\" role=\"doc-backlink\"><span class=\"section-number\">8.6. </span>Using facets</a><a class=\"headerlink\" href=\"#using-facets\" title=\"Link to this heading\">#</a></h2><p>Facets are a set of pre-determined values you can use to set limits on your search resuls. They allow you to take slices of your results.</p><p>In the web interface, facets appear as a set of check boxes next to the list of results. You just click the box next to a facet value to apply it to your search. You can only select one facet value at a time.</p>", "a[href=\"#analysing-keywords-in-troves-digitised-newspapers\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Analysing keywords in Trove\u2019s digitised newspapers<a class=\"headerlink\" href=\"#analysing-keywords-in-troves-digitised-newspapers\" title=\"Link to this heading\">#</a></h1><p>You want to explore differences in language use across a collection of digitised newspaper articles. The <a class=\"reference external\" href=\"https://www.atap.edu.au/\">Australian Text Analytics Platform</a> provides a <a class=\"reference external\" href=\"https://github.com/Australian-Text-Analytics-Platform/keywords-analysis\">Keywords Analysis tool</a> that helps you examine whether particular words are over or under-represented across collections of text. But how do get data from Trove\u2019s newspapers to the keyword analysis tool?</p>", "a[href=\"#constructing-your-search\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Constructing your search<a class=\"headerlink\" href=\"#constructing-your-search\" title=\"Link to this heading\">#</a></h2><p>The first step is constructing a search that will return relevant newspaper articles. This is harder than it seems. Yes, you can just plug keywords into Trove\u2019s search interface and get back interesting looking results. But it\u2019s important to keep in mind the differing needs of <em>discovery</em> versus <em>analysis</em>. Your aim here is not to find a few useful articles, but to construct a dataset containing <em>all</em> the articles returned by your search query. <strong>Everything.</strong> When you\u2019re searching for individual articles you can usually just ignore the fact that there are millions of articles in your search results, as Trove\u2019s relevance ranking pushes the most likely candidates to the top. But if you\u2019re creating a dataset, you want to be as precise as possible to avoid including unwanted noise.</p>"}
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
