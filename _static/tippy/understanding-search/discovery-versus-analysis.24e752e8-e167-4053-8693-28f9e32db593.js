selector_to_html = {"a[href=\"#discovery-versus-analysis\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">9.1. </span>Discovery versus analysis<a class=\"headerlink\" href=\"#discovery-versus-analysis\" title=\"Permalink to this heading\">#</a></h1><p>Need to recognise that the aim of the search indexing is to present the user with items that <em>could be</em> of relevance, but this fuzziness might limit the usefulness of search results for analysis. Eg: user-added tags and comments are searched by default. Examine relevance ranking.</p><p>Some notes on relevance from solr docs: <a class=\"reference external\" href=\"https://solr.apache.org/guide/solr/latest/deployment-guide/solrcloud-distributed-requests.html#distributedidf\">https://solr.apache.org/guide/solr/latest/deployment-guide/solrcloud-distributed-requests.html#distributedidf</a></p>"}
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
