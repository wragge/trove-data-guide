selector_to_html = {"a[href=\"../how-to/web-interface/use-lists.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Using Trove lists to create a dataset<a class=\"headerlink\" href=\"#using-trove-lists-to-create-a-dataset\" title=\"Permalink to this heading\">#</a></h1><p>Another option for creating collections of manually selected newspaper article metadata is Trove\u2019s built-in Lists function.</p><p><mark>==Note about adding mutliple items to Lists. Hacking the url to get more==</mark></p>", "a[href=\"#article-identifiers\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">Article identifiers</a><a class=\"headerlink\" href=\"#article-identifiers\" title=\"Permalink to this heading\">#</a></h3><p>Every newspaper article in Trove has its own unique identifier. This identifier is used in persistent links to articles on the Trove web site. In the web interface, you can find the identifier under the article\u2019s \u2018Cite\u2019 tab, it\u2019ll look something like this <code class=\"docutils literal notranslate\"><span class=\"pre\">http://nla.gov.au/nla.news-article163325648</span></code></p>", "a[href=\"#get-positional-information-from-ocr\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id16\" role=\"doc-backlink\">Get positional information from OCR</a><a class=\"headerlink\" href=\"#get-positional-information-from-ocr\" title=\"Permalink to this heading\">#</a></h3><p>Additional metadata relating OCRd text to its position on a page can be scraped from the Trove web site, see <a class=\"reference internal\" href=\"../how-to/newspapers/get-ocr-coordinates.html\"><span class=\"doc std std-doc\">How to get information about the position of OCRd newspaper text</span></a></p>", "a[href=\"#articles-and-issues\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\">Articles and issues</a><a class=\"headerlink\" href=\"#articles-and-issues\" title=\"Permalink to this heading\">#</a></h3><p>There are no direct links from articles to newspaper <strong>issues</strong>. However, articles share a date with their parent issue, so it\u2019s possible to use the date to connect them. For example you can use a <code class=\"docutils literal notranslate\"><span class=\"pre\">date</span></code> search to find all the articles in an issue.</p>", "a[href=\"#article-links-and-connections\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">Article links and connections</a><a class=\"headerlink\" href=\"#article-links-and-connections\" title=\"Permalink to this heading\">#</a></h2><p>Articles exist at the bottom of a hierarchy of newspapers, issues, and pages. Article metadata includes information linking articles to other levels in this hierarchy, but the type and form of these links varies.</p>", "a[href=\"../how-to/web-interface/use-zotero.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Using Zotero to save items<a class=\"headerlink\" href=\"#using-zotero-to-save-items\" title=\"Permalink to this heading\">#</a></h1><p><mark>==If I rewrite the translator to use the API I can expand this section to include other content types==</mark></p>", "a[href=\"#what-are-articles\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\">What are articles?</a><a class=\"headerlink\" href=\"#what-are-articles\" title=\"Permalink to this heading\">#</a></h2><p>When you search in Trove\u2019s digitised newspapers, you\u2019re searching for <em>articles</em>. The boundaries of articles are defined as part of the <span class=\"xref std std-term\">OCR</span> process. In most cases they represent a single piece of content with a heading and some text (or an illustration). But sometimes blocks of content are grouped together. Advertisements, for example, are often grouped as a single \u2018article\u2019 headed \u2018Advertising\u2019. A single article can also be split across multiple pages.</p>", "a[href=\"#limit-your-results-to-either-newspaper-or-gazette-articles\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id9\" role=\"doc-backlink\">Limit your results to either newspaper <em>or</em> gazette articles</a><a class=\"headerlink\" href=\"#limit-your-results-to-either-newspaper-or-gazette-articles\" title=\"Permalink to this heading\">#</a></h3><p>Use the <code class=\"docutils literal notranslate\"><span class=\"pre\">artType</span></code> facet to limit the results to either newspapers or gazettes:</p>", "a[href=\"#include-extra-fields-in-the-metadata\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id11\" role=\"doc-backlink\">Include extra fields in the metadata</a><a class=\"headerlink\" href=\"#include-extra-fields-in-the-metadata\" title=\"Permalink to this heading\">#</a></h3><p>You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">reclevel</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">include</span></code> parameters to control the amount of metadata provided about each article. For example:</p><p>Setting <code class=\"docutils literal notranslate\"><span class=\"pre\">reclevel=full</span></code> adds the following fields:</p>", "a[href=\"#find-the-total-number-of-newspaper-gazette-articles\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id8\" role=\"doc-backlink\">Find the total number of newspaper &amp; gazette articles</a><a class=\"headerlink\" href=\"#find-the-total-number-of-newspaper-gazette-articles\" title=\"Permalink to this heading\">#</a></h3><p>You can retrieve newspaper and gazette articles using the Trove API\u2019s <code class=\"docutils literal notranslate\"><span class=\"pre\">/result</span></code> endpoint, just set the <code class=\"docutils literal notranslate\"><span class=\"pre\">category</span></code> parameter to <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper</span></code>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dnewspaper%26encoding%3Djson\"><img alt=\"Try it!\" src=\"../_images/try-trove-api-console.svg\"/></a></p>", "a[href=\"#article-cite\"]": "<figure class=\"align-default\" id=\"article-cite\">\n<a class=\"reference internal image-reference\" href=\"../_images/article-cite.png\"><img alt=\"../_images/article-cite.png\" src=\"../_images/article-cite.png\" style=\"width: 300px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 15.1 </span><span class=\"caption-text\">Example of an article identifier found in the \u2018Cite\u2019 tab.</span><a class=\"headerlink\" href=\"#article-cite\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"../understanding-search/simple-search-options.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">9.2. </span>\u2018Simple\u2019 search options<a class=\"headerlink\" href=\"#simple-search-options\" title=\"Permalink to this heading\">#</a></h1><p><mark>==Include a note about <code class=\"docutils literal notranslate\"><span class=\"pre\">firstpageseq</span></code> and the fact that this will match pages from supplements as well. So supplements need to be filtered out after harvesting. Also note that not all issues start with page 1.==</mark></p>", "a[href=\"#using-facets-to-get-aggregate-data-about-articles\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id12\" role=\"doc-backlink\">Using facets to get aggregate data about articles</a><a class=\"headerlink\" href=\"#using-facets-to-get-aggregate-data-about-articles\" title=\"Permalink to this heading\">#</a></h3><p><mark>Links to QueryPic and other examples</mark></p>", "a[href=\"../glossary.html#term-Metadata\"]": "<dt id=\"term-Metadata\">Metadata</dt><dd><p>An indented explanation of term 1</p></dd>", "a[href=\"#pagination\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id13\" role=\"doc-backlink\">Pagination</a><a class=\"headerlink\" href=\"#pagination\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"../how-to/newspapers/get-ocr-coordinates.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">How to get information about the position of OCRd newspaper text<a class=\"headerlink\" href=\"#how-to-get-information-about-the-position-of-ocrd-newspaper-text\" title=\"Permalink to this heading\">#</a></h1><p>The OCR process not only extracts text from an image, it generates coordinates that document the position of each piece of text within the parent image. You could use this information to crop an image of the OCRd text out of the parent image. In the case of digitised newspapers, this sort of positional information could help you explore the layout and contents of newspaper pages and how this changes over time.</p><p>No positional information is available from the Trove API, however, there is some embedded within the web site. If you view the source of a newspaper article\u2019s web page, you\u2019ll find a number of <code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;input&gt;</span></code> tags like this:</p>", "a[href=\"#text\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id17\" role=\"doc-backlink\">Text</a><a class=\"headerlink\" href=\"#text\" title=\"Permalink to this heading\">#</a></h2><p>Newspaper text is segmented by article. The text is generated by OCR, with manual corrections by volunteers.</p>", "a[href=\"../how-to/web-interface/use-bulk-export.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Use the bulk export option to save the results of a search<a class=\"headerlink\" href=\"#use-the-bulk-export-option-to-save-the-results-of-a-search\" title=\"Permalink to this heading\">#</a></h1><p><mark>==Include more info once official documentation is available==</mark></p><p><mark>==Note that there are some differences in fields from the API==</mark></p>", "a[href=\"#save-metadata-from-a-search\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id10\" role=\"doc-backlink\">Save metadata from a search</a><a class=\"headerlink\" href=\"#save-metadata-from-a-search\" title=\"Permalink to this heading\">#</a></h3><p>Use the <code class=\"docutils literal notranslate\"><span class=\"pre\">q</span></code> parameter to supply search keywords. The query string can be anything you might include in Trove\u2019s <a class=\"reference internal\" href=\"../understanding-search/simple-search-options.html\"><span class=\"doc std std-doc\">\u2018simple\u2019 search</span></a> box. Results can also be filtered using a number of facets, such as <code class=\"docutils literal notranslate\"><span class=\"pre\">category</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">state</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">illustrated</span></code>, and <code class=\"docutils literal notranslate\"><span class=\"pre\">decade</span></code>.</p><p><mark>==More detail on constructing searches here or somewhere else?==</mark></p>", "a[href=\"#get-metadata-for-an-individual-article\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id15\" role=\"doc-backlink\">Get metadata for an individual article</a><a class=\"headerlink\" href=\"#get-metadata-for-an-individual-article\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#accessing-data-about-newspaper-and-gazette-articles\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">15.1. </span>Accessing data about newspaper and gazette articles<a class=\"headerlink\" href=\"#accessing-data-about-newspaper-and-gazette-articles\" title=\"Permalink to this heading\">#</a></h1><p><img alt=\"Screenshot of Trove web interface displaying basic article metadata\" src=\"../_images/trove-article-metadata.png\"/></p>", "a[href=\"#articles-and-pages\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id6\" role=\"doc-backlink\">Articles and pages</a><a class=\"headerlink\" href=\"#articles-and-pages\" title=\"Permalink to this heading\">#</a></h3><p>There are two ways in which articles are linked to <strong>pages</strong>. The first is simply by the <code class=\"docutils literal notranslate\"><span class=\"pre\">page</span></code> value, which is a number indicating the sequence of a page within an issue. This <em>usually</em> corresponds to the page number printed on the page, however, sometimes issues include separately numbered supplements. You can tell if a page is part of a supplement by looking at the confusingly-named <code class=\"docutils literal notranslate\"><span class=\"pre\">pageSequence</span></code> value \u2013 it will typically include an \u2018S\u2019 after the page number. There might also be a <code class=\"docutils literal notranslate\"><span class=\"pre\">pageLabel</span></code> value that provides the number printed on the page within the supplement.</p><p>Here\u2019s <a class=\"reference external\" href=\"https://trove.nla.gov.au/newspaper/article/48076559/\">an advertisement for abstestos cement</a> in a 1957 building supplement published as part of the <em>Australian Women\u2019s Weekly</em>. The article\u2019s metadata record includes the following page values:</p>", "a[href=\"#trove-newspaper-harvester\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id14\" role=\"doc-backlink\">Trove Newspaper Harvester</a><a class=\"headerlink\" href=\"#trove-newspaper-harvester\" title=\"Permalink to this heading\">#</a></h3><p><mark>==Where should this go?==</mark></p>", "a[href=\"#api\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id18\" role=\"doc-backlink\">API</a><a class=\"headerlink\" href=\"#api\" title=\"Permalink to this heading\">#</a></h3><p><code class=\"docutils literal notranslate\"><span class=\"pre\">include=articletext</span></code></p><p>Note: includes html\nNote: not the AWW (have to scrape)</p>", "a[href=\"#images-and-pdfs\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id19\" role=\"doc-backlink\">Images and PDFs</a><a class=\"headerlink\" href=\"#images-and-pdfs\" title=\"Permalink to this heading\">#</a></h2><p>PDF proxy</p><p>Save articles as images</p>", "a[href=\"#article-metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id7\" role=\"doc-backlink\">Article metadata</a><a class=\"headerlink\" href=\"#article-metadata\" title=\"Permalink to this heading\">#</a></h2><p>The <a class=\"reference internal\" href=\"../glossary.html#term-Metadata\"><span class=\"xref std std-term\">metadata</span></a> associated with newspaper and gazette articles in Trove includes the basic information you\u2019d expect to put in a citation, like the article\u2019s headline, publication date, newspaper, and page number. Additional fields are added by the OCR and data ingestion processes, such as internal links, the number of words, and the article category. User activity also adds data relating to tags, comments, lists, and corrections.</p>", "a[href=\"#articles-and-newspaper-titless\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\">Articles and newspaper titless</a><a class=\"headerlink\" href=\"#articles-and-newspaper-titless\" title=\"Permalink to this heading\">#</a></h3><p>Links to newspaper <strong>titles</strong> are perhaps the most straightforward. Each article is linked to a single newspaper title by the title\u2019s unique identifier. An article\u2019s metadata record includes a field for <code class=\"docutils literal notranslate\"><span class=\"pre\">title</span></code> that includes both the numeric identifier and the newspaper\u2019s masthead. for example:</p>"}
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
