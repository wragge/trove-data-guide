selector_to_html = {"a[href=\"#zotero-fields\"]": "<table class=\"table\" id=\"zotero-fields\">\n<caption><span class=\"caption-text\">Newspaper and gazette metadata fields extracted by Zotero</span><a class=\"headerlink\" href=\"#zotero-fields\" title=\"Permalink to this table\">#</a></caption>\n<thead>\n<tr class=\"row-odd\"><th class=\"head\"><p>Zotero UI</p></th>\n<th class=\"head\"><p>Zotero field</p></th>\n<th class=\"head\"><p>Value</p></th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"row-even\"><td><p>Item Type</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">type</span></code></p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">newspaperArticle</span></code></p></td>\n</tr>\n<tr class=\"row-odd\"><td><p>Title</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">title</span></code></p></td>\n<td><p>article heading</p></td>\n</tr>\n<tr class=\"row-even\"><td><p>Publication</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">publicationTitle</span></code></p></td>\n<td><p>newspaper title (location and date range in brackets is removed)</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p>Date</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">date</span></code></p></td>\n<td><p>publication date</p></td>\n</tr>\n<tr class=\"row-even\"><td><p>Place</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">place</span></code></p></td>\n<td><p>publication state (extracted from newspaper title)</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p>Abstract</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">abstract</span></code></p></td>\n<td><p>first four lines of text, if available (taken from <code class=\"docutils literal notranslate\"><span class=\"pre\">description</span></code> META tag)</p></td>\n</tr>\n<tr class=\"row-even\"><td><p>URL</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">url</span></code></p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">http://nla.gov.au/nla.news-article[article</span> <span class=\"pre\">ID]</span></code></p></td>\n</tr>\n</tbody>\n</table>", "a[href=\"#newspapers\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Newspapers<a class=\"headerlink\" href=\"#newspapers\" title=\"Permalink to this heading\">#</a></h2><p><a class=\"reference external\" href=\"https://www.zotero.org/\">Zotero</a> includes a \u2018translator\u2019 for Trove that saves article metadata into your own research database. It also downloads a PDF copy of the article, and saves the OCRd text into an attached note. You can <a class=\"reference external\" href=\"https://www.zotero.org/support/adding_items_to_zotero\">add items</a> by clicking on the Zotero icon in your web browser. The translator extracts metadata from the article web page and citation, rather than the Trove API.</p>", "a[href=\"#using-zotero-to-save-items\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Using Zotero to save items<a class=\"headerlink\" href=\"#using-zotero-to-save-items\" title=\"Permalink to this heading\">#</a></h1><p><mark>==If I rewrite the translator to use the API I can expand this section to include other content types==</mark></p>"}
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
