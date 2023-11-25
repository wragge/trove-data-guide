selector_to_html = {"a[href=\"#magazine-title-id\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">/magazine/title/[ID]</span></code><a class=\"headerlink\" href=\"#magazine-title-id\" title=\"Permalink to this heading\">#</a></h4><p>Example issue:</p>", "a[href=\"#issues\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Issues<a class=\"headerlink\" href=\"#issues\" title=\"Permalink to this heading\">#</a></h2><h3>Metadata<a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this heading\">#</a></h3><p>API provides <code class=\"docutils literal notranslate\"><span class=\"pre\">/magazine/titles</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">/magazine/title/[ID]</span></code> endpoints</p><p>Been prodding the new <code class=\"docutils literal notranslate\"><span class=\"pre\">/magazine/title</span></code> endpoint that was added to #Trove API v3. It provides details on periodical titles and issues (other than newspapers). So it\u2019s very useful, but also very not\u2026</p>", "a[href=\"#format-periodical-and-nla-obj\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Format <code class=\"docutils literal notranslate\"><span class=\"pre\">periodical</span></code> and \u201cnla.obj\u201d<a class=\"headerlink\" href=\"#format-periodical-and-nla-obj\" title=\"Permalink to this heading\">#</a></h4><p>There are 2,500 titles in the title endpoint, but only about 1,000 when you search for <code class=\"docutils literal notranslate\"><span class=\"pre\">\"nla.obj\"</span></code> &amp; <code class=\"docutils literal notranslate\"><span class=\"pre\">l-format=periodical</span></code>. Is there any way to reconcile? Is it because of PP?</p><p>Check by getting ids from title endpoint, then extracting embedded metadata? Will that help?</p>", "a[href=\"#images-and-pdfs\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Images and PDFs<a class=\"headerlink\" href=\"#images-and-pdfs\" title=\"Permalink to this heading\">#</a></h3><p>Page images</p>", "a[href=\"#accessing-data-from-periodicals\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Accessing data from periodicals<a class=\"headerlink\" href=\"#accessing-data-from-periodicals\" title=\"Permalink to this heading\">#</a></h1><h2>Articles<a class=\"headerlink\" href=\"#articles\" title=\"Permalink to this heading\">#</a></h2><h3>Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h3><p><code class=\"docutils literal notranslate\"><span class=\"pre\">/search</span></code> in <code class=\"docutils literal notranslate\"><span class=\"pre\">magazine</span></code> category and <code class=\"docutils literal notranslate\"><span class=\"pre\">/work</span></code> endpoints</p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">bibliographicCitation</span></code> in article records has structured publication metadata</p>", "a[href=\"#text\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Text<a class=\"headerlink\" href=\"#text\" title=\"Permalink to this heading\">#</a></h3><p>Via API</p>", "a[href=\"#magazine-titles\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">/magazine/titles</span></code><a class=\"headerlink\" href=\"#magazine-titles\" title=\"Permalink to this heading\">#</a></h4><p>Example record:</p>", "a[href=\"#metadata\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h3><p><code class=\"docutils literal notranslate\"><span class=\"pre\">/search</span></code> in <code class=\"docutils literal notranslate\"><span class=\"pre\">magazine</span></code> category and <code class=\"docutils literal notranslate\"><span class=\"pre\">/work</span></code> endpoints</p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">bibliographicCitation</span></code> in article records has structured publication metadata</p>", "a[href=\"#articles\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Articles<a class=\"headerlink\" href=\"#articles\" title=\"Permalink to this heading\">#</a></h2><h3>Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h3><p><code class=\"docutils literal notranslate\"><span class=\"pre\">/search</span></code> in <code class=\"docutils literal notranslate\"><span class=\"pre\">magazine</span></code> category and <code class=\"docutils literal notranslate\"><span class=\"pre\">/work</span></code> endpoints</p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">bibliographicCitation</span></code> in article records has structured publication metadata</p>", "a[href=\"#id1\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Metadata<a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this heading\">#</a></h3><p>API provides <code class=\"docutils literal notranslate\"><span class=\"pre\">/magazine/titles</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">/magazine/title/[ID]</span></code> endpoints</p><p>Been prodding the new <code class=\"docutils literal notranslate\"><span class=\"pre\">/magazine/title</span></code> endpoint that was added to #Trove API v3. It provides details on periodical titles and issues (other than newspapers). So it\u2019s very useful, but also very not\u2026</p>"}
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
