selector_to_html = {"a[href=\"#trove-api-introduction\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.2. </span>Trove API introduction<a class=\"headerlink\" href=\"#trove-api-introduction\" title=\"Permalink to this heading\">#</a></h1><h2>Types of requests:<a class=\"headerlink\" href=\"#types-of-requests\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#api-responses\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">API responses<a class=\"headerlink\" href=\"#api-responses\" title=\"Permalink to this heading\">#</a></h2><p><mark>==Again how much details is required? Specific info can be provided in the sections about particular categories/formats==</mark></p>", "a[href=\"#translating-a-web-query-into-an-api-query\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Translating a web query into an API query<a class=\"headerlink\" href=\"#translating-a-web-query-into-an-api-query\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#authentication\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Authentication<a class=\"headerlink\" href=\"#authentication\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#types-of-requests\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Types of requests:<a class=\"headerlink\" href=\"#types-of-requests\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#making-a-request\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Making a request<a class=\"headerlink\" href=\"#making-a-request\" title=\"Permalink to this heading\">#</a></h2><p>Basic examples linked to API Console</p>", "a[href=\"#items\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Items<a class=\"headerlink\" href=\"#items\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#search\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Search<a class=\"headerlink\" href=\"#search\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#endpoints\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Endpoints<a class=\"headerlink\" href=\"#endpoints\" title=\"Permalink to this heading\">#</a></h2><p><mark>==Link where appropriate to sections on specific categories/formats==</mark></p>", "a[href=\"#parameters\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Parameters<a class=\"headerlink\" href=\"#parameters\" title=\"Permalink to this heading\">#</a></h2><p><mark>==How much detail do I go into? Do I just point to Trove docs?==</mark></p>", "a[href=\"#lists\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Lists<a class=\"headerlink\" href=\"#lists\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#harvesting-a-complete-result-set\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Harvesting a complete result set<a class=\"headerlink\" href=\"#harvesting-a-complete-result-set\" title=\"Permalink to this heading\">#</a></h2><p>Provide a basic code pattern for paginating through a result set.</p><p>Saving results (ndjson, csv (with flattening) etc)</p>"}
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
