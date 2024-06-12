selector_to_html = {"a[href=\"../../newspapers-and-gazettes/data/articles.html#newspapers-articles-metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Article metadata<a class=\"headerlink\" href=\"#article-metadata\" title=\"Link to this heading\">#</a></h2><p>The <a class=\"reference internal\" href=\"../../glossary.html#term-Metadata\"><span class=\"xref std std-term\">metadata</span></a> associated with newspaper and gazette articles in Trove includes the basic information you\u2019d expect to put in a citation, like the article\u2019s headline, publication date, newspaper, and page number. Additional fields are added by the OCR and data ingestion processes, such as internal links, the number of words, and the article category. User activity also adds data relating to tags, comments, lists, and corrections.</p>", "a[href=\"#glam-workbench-notebooks\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">GLAM Workbench notebooks<a class=\"headerlink\" href=\"#glam-workbench-notebooks\" title=\"Link to this heading\">#</a></h3>", "a[href=\"../../newspapers-and-gazettes/data/titles.html#newspapers-titles-metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\">Title metadata</a><a class=\"headerlink\" href=\"#title-metadata\" title=\"Link to this heading\">#</a></h2><h3><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\">Get a list of newspaper &amp; gazette titles</a><a class=\"headerlink\" href=\"#get-a-list-of-newspaper-gazette-titles\" title=\"Link to this heading\">#</a></h3><p>You can get information about newspaper and gazette titles in Trove from these API endpoints:</p>", "a[href=\"#pre-harvested-datasets\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Pre-harvested datasets<a class=\"headerlink\" href=\"#pre-harvested-datasets\" title=\"Link to this heading\">#</a></h2><p>The GLAM Workbench provides a number of datasets containing collection and system data harvested from Trove.</p>", "a[href=\"../../other-digitised-resources/periodicals/accessing-data.html#digitised-periodicals-metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Link to this heading\">#</a></h2><h3>Get a list of digitised periodical titles<a class=\"headerlink\" href=\"#get-a-list-of-digitised-periodical-titles\" title=\"Link to this heading\">#</a></h3><p>Finding out which periodicals in Trove have been digitised is not straightforward. There are two basic approaches:</p>", "a[href=\"#data-sources\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">29.1. </span>Data sources<a class=\"headerlink\" href=\"#data-sources\" title=\"Link to this heading\">#</a></h1><h2>Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">#</a></h2><p>These sections of the Trove Data Guide explain how to access collection and system from different parts of Trove:</p>", "a[href=\"../../newspapers-and-gazettes/data/issues.html#newspapers-issues-metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id6\" role=\"doc-backlink\">Issue metadata</a><a class=\"headerlink\" href=\"#issue-metadata\" title=\"Link to this heading\">#</a></h2><p>Some issue metadata is available via the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints. You can also find details of articles published within an issue by searching for a specific day and newspaper using the <code class=\"docutils literal notranslate\"><span class=\"pre\">/result</span></code> endpoint.</p>", "a[href=\"#documentation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">#</a></h2><p>These sections of the Trove Data Guide explain how to access collection and system from different parts of Trove:</p>", "a[href=\"../../newspapers-and-gazettes/data/pages.html#newspapers-pages-metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id10\" role=\"doc-backlink\">Page metadata</a><a class=\"headerlink\" href=\"#page-metadata\" title=\"Link to this heading\">#</a></h2><p>Unlike titles and articles, there\u2019s no direct method for requesting metadata about a newspaper page from the Trove API. You can\u2019t, for example, submit a page identifier to the API and get back its publication date, the newspaper it came from, or a list of articles published on it. Pages are linked to articles and issues, but you can only access those links from the other end \u2013 from article and issue records.</p><p>As <a class=\"reference internal\" href=\"#newspaper-page-links\"><span class=\"std std-ref\">described above</span></a>, you can get page identifiers from an article record simply by setting the <code class=\"docutils literal notranslate\"><span class=\"pre\">reclevel</span></code> parameter to <code class=\"docutils literal notranslate\"><span class=\"pre\">full</span></code>. But how can you go in the other direction, and get the identifier for a specific page?</p>", "a[href=\"../../other-digitised-resources/oral-histories/accessing-data.html#digitised-oralhistories-metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Link to this heading\">#</a></h2><h3>Downloadable dataset<a class=\"headerlink\" href=\"#downloadable-dataset\" title=\"Link to this heading\">#</a></h3><p>A <a class=\"reference external\" href=\"https://glam-workbench.net/trove-music/trove-oral-histories/\">CSV file containing details of oral histories</a> from the NLA collection (both online and not online) harvested from Trove is available from the GLAM Workbench. You can also <a class=\"reference external\" href=\"https://glam-workbench.net/datasette-lite/?csv=https://github.com/GLAM-Workbench/trove-oral-histories-data/blob/main/trove-oral-histories.csv#/data/trove-oral-histories\">explore the data</a> using Datasette.</p>", "a[href=\"#creating-datasets\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Creating datasets<a class=\"headerlink\" href=\"#creating-datasets\" title=\"Link to this heading\">#</a></h2><p>These tools and examples can help you create your own collections of collection and system from Trove.</p>", "a[href=\"#software-packages\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Software packages<a class=\"headerlink\" href=\"#software-packages\" title=\"Link to this heading\">#</a></h3>"}
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