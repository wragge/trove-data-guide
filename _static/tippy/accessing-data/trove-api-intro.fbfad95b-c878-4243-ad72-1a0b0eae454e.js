selector_to_html = {"a[href=\"#authorising-your-requests-with-an-api-key\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">16.3. </span>Authorising your requests with an API key<a class=\"headerlink\" href=\"#authorising-your-requests-with-an-api-key\" title=\"Permalink to this heading\">#</a></h2><p>The Trove API lets you make a limited number of requests without any authorisation. This is handy for quick testing or experimentation, but for most uses you\u2019ll need to authorise your requests with an API key. Trove API keys are free and, for non-commercial uses, can be <a class=\"reference external\" href=\"https://trove.nla.gov.au/about/create-something/using-api\">obtained instantly</a>.</p><p>There are two ways of adding your key to an API request:</p>", "a[href=\"#a-simple-api-request\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">16.4. </span>A simple API request<a class=\"headerlink\" href=\"#a-simple-api-request\" title=\"Permalink to this heading\">#</a></h2><p>Here\u2019s an example of making a simple API request using the Python Requests library. You see many examples like this throughout this guide:</p>", "a[href=\"#trove-api-introduction\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">16. </span>Trove API introduction<a class=\"headerlink\" href=\"#trove-api-introduction\" title=\"Permalink to this heading\">#</a></h1><p>Use the Trove Application Programming Interface (API) to get direct access to Trove data. Just make a request  and get back data in a predictable, structured format that computers can understand.</p>", "a[href=\"#api-requests-endpoints-and-responses\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">16.2. </span>API requests, endpoints, and responses<a class=\"headerlink\" href=\"#api-requests-endpoints-and-responses\" title=\"Permalink to this heading\">#</a></h2><p>API documentation typically includes references to things like <em>requests</em>, <em>endpoints</em>, and <em>responses</em>. Put simply, <strong>requests</strong> are the questions you ask; <strong>endpoints</strong> are the addresses you send your questions to; and <strong>responses</strong> are the answers you get back.</p><p>API <strong>requests</strong> are just normal urls. They encode your questions using query parameters. For example, the Trove API uses the <code class=\"docutils literal notranslate\"><span class=\"pre\">q</span></code> parameter for search terms, so including <code class=\"docutils literal notranslate\"><span class=\"pre\">q=wragge</span></code> in your API request will ask Trove to search for resources that include the word \u2018wragge\u2019.</p>", "a[href=\"#parameters\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">16.6. </span>Parameters<a class=\"headerlink\" href=\"#parameters\" title=\"Permalink to this heading\">#</a></h2><p><mark>==How much detail do I go into? Do I just point to Trove docs?==</mark></p>", "a[href=\"#result-endpoint\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">/result</span></code> endpoint<a class=\"headerlink\" href=\"#result-endpoint\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#api-responses\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">16.8. </span>API responses<a class=\"headerlink\" href=\"#api-responses\" title=\"Permalink to this heading\">#</a></h2><p><mark>==Again how much details is required? Specific info can be provided in the sections about particular categories/formats==</mark></p>", "a[href=\"#search-results\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Search results<a class=\"headerlink\" href=\"#search-results\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#harvesting-a-complete-result-set\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">16.9. </span>Harvesting a complete result set<a class=\"headerlink\" href=\"#harvesting-a-complete-result-set\" title=\"Permalink to this heading\">#</a></h2><p>Provide a basic code pattern for paginating through a result set.</p><p>Saving results (ndjson, csv (with flattening) etc)</p>", "a[href=\"#lists-of-records\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Lists of records<a class=\"headerlink\" href=\"#lists-of-records\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#endpoints\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">16.5. </span>Endpoints<a class=\"headerlink\" href=\"#endpoints\" title=\"Permalink to this heading\">#</a></h2><p><mark>==Link where appropriate to sections on specific categories/formats==</mark></p>", "a[href=\"#translating-a-web-query-into-an-api-query\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">16.7. </span>Translating a web query into an API query<a class=\"headerlink\" href=\"#translating-a-web-query-into-an-api-query\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#individual-records\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Individual records<a class=\"headerlink\" href=\"#individual-records\" title=\"Permalink to this heading\">#</a></h3><p>To request an individual record you need to know its numeric identifier. Then you add the identifier to the endpoint url. So to request the record of the newspaper</p>", "a[href=\"#why-use-the-api\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">16.1. </span>Why use the API?<a class=\"headerlink\" href=\"#why-use-the-api\" title=\"Permalink to this heading\">#</a></h2><p>The API is not the only way of getting data from Trove, but it\u2019s the most flexible, reliable and scalable. You can give it a search query and work your way through the complete set of results, downloading <em>every</em> record. By comparison, the Trove web interface displays a maximum of 2,000 results, and even the Bulk Export feature is limited to one million.</p><p>The data you get back from the API is in a structured form that can be read and manipulated by computers. This means you can take advantage of a wide range of existing tools and libraries to build reusable pipelines for data analysis and visualisation.</p>", "a[href=\"#table-search-parameters\"]": "<table class=\"table\" id=\"table-search-parameters\">\n<caption><span class=\"caption-number\">Table 16.1 </span><span class=\"caption-text\">Search parameters \u2013 all categories</span><a class=\"headerlink\" href=\"#table-search-parameters\" title=\"Permalink to this table\">#</a></caption>\n<thead>\n<tr class=\"row-odd\"><th class=\"head\"><p>Parameter</p></th>\n<th class=\"head\"><p>Description</p></th>\n<th class=\"head\"><p>Possible values</p></th>\n<th class=\"head\"><p>Default value</p></th>\n<th class=\"head\"><p>Example</p></th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">q</span></code></p></td>\n<td><p>Search query (basically what you\u2019d put in the search box of the web interface)</p></td>\n<td><p>As well as keywords and boolean operators you can filter results using indexes.</p></td>\n<td></td>\n<td></td>\n</tr>\n<tr class=\"row-odd\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">category</span></code></p></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">encoding</span></code></p></td>\n<td></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">xml</span></code> or <code class=\"docutils literal notranslate\"><span class=\"pre\">json</span></code></p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">xml</span></code></p></td>\n<td></td>\n</tr>\n<tr class=\"row-odd\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">n</span></code></p></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">s</span></code></p></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr class=\"row-odd\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">bulkHarvest</span></code></p></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>"}
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
