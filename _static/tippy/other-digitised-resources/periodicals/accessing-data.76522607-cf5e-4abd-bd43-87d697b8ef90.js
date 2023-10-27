selector_to_html = {"a[href=\"#accessing-data-from-periodicals\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">30.1. </span>Accessing data from periodicals<a class=\"headerlink\" href=\"#accessing-data-from-periodicals\" title=\"Permalink to this heading\">#</a></h1><h2>Articles<a class=\"headerlink\" href=\"#articles\" title=\"Permalink to this heading\">#</a></h2><h3>Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h3><p><code class=\"docutils literal notranslate\"><span class=\"pre\">/search</span></code> in <code class=\"docutils literal notranslate\"><span class=\"pre\">magazine</span></code> category and <code class=\"docutils literal notranslate\"><span class=\"pre\">/work</span></code> endpoints</p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">bibliographicCitation</span></code> in article records has structured publication metadata</p>", "a[href=\"#issues\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Issues<a class=\"headerlink\" href=\"#issues\" title=\"Permalink to this heading\">#</a></h2><h3>Metadata<a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this heading\">#</a></h3><p><code class=\"docutils literal notranslate\"><span class=\"pre\">/magazine/title</span></code> endpoint</p><p>Issue id</p>", "a[href=\"#id1\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Metadata<a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this heading\">#</a></h3><p><code class=\"docutils literal notranslate\"><span class=\"pre\">/magazine/title</span></code> endpoint</p><p>Issue id</p>", "a[href=\"#text\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Text<a class=\"headerlink\" href=\"#text\" title=\"Permalink to this heading\">#</a></h3><p>Via API</p>", "a[href=\"#images-and-pdfs\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Images and PDFs<a class=\"headerlink\" href=\"#images-and-pdfs\" title=\"Permalink to this heading\">#</a></h3><p>Page images</p>", "a[href=\"#articles\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Articles<a class=\"headerlink\" href=\"#articles\" title=\"Permalink to this heading\">#</a></h2><h3>Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h3><p><code class=\"docutils literal notranslate\"><span class=\"pre\">/search</span></code> in <code class=\"docutils literal notranslate\"><span class=\"pre\">magazine</span></code> category and <code class=\"docutils literal notranslate\"><span class=\"pre\">/work</span></code> endpoints</p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">bibliographicCitation</span></code> in article records has structured publication metadata</p>", "a[href=\"#metadata\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h3><p><code class=\"docutils literal notranslate\"><span class=\"pre\">/search</span></code> in <code class=\"docutils literal notranslate\"><span class=\"pre\">magazine</span></code> category and <code class=\"docutils literal notranslate\"><span class=\"pre\">/work</span></code> endpoints</p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">bibliographicCitation</span></code> in article records has structured publication metadata</p>"}
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
