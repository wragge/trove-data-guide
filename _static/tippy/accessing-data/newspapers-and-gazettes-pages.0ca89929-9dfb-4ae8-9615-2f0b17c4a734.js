selector_to_html = {"a[href=\"#pages-are-images\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id6\" role=\"doc-backlink\">Pages are images</a><a class=\"headerlink\" href=\"#pages-are-images\" title=\"Permalink to this heading\">#</a></h3><p>The digitisation process creates an image of each newspaper page. These images can be downloaded in different resolutions by <a class=\"reference internal\" href=\"#download-a-page-image\"><span class=\"std std-ref\">using the page\u2019s unique identifier to construct a direct url</span></a>. Articles are extracted from page images by the OCR process.</p>", "a[href=\"#page-text\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id13\" role=\"doc-backlink\">Page text</a><a class=\"headerlink\" href=\"#page-text\" title=\"Permalink to this heading\">#</a></h2><p>aggregated articles</p><p>Trove Newspaper harvester file titles \u2013 how to reaggregate</p>", "a[href=\"#what-are-pages\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\">What are pages?</a><a class=\"headerlink\" href=\"#what-are-pages\" title=\"Permalink to this heading\">#</a></h2><p>Printed newspaper pages are easy to understand. You can read them, you can turn them, you can wrap your fish and chips in them. Digitised newspaper pages in Trove are a bit more complex and exist in several related forms.</p>", "a[href=\"#page-links-and-identifiers\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id9\" role=\"doc-backlink\">Page links and identifiers</a><a class=\"headerlink\" href=\"#page-links-and-identifiers\" title=\"Permalink to this heading\">#</a></h2><p>Each newspaper and gazette page has a unique identifier. This identifier pops up in links to pages and PDFs and can be used to download a page image. But where do you find it?</p><p>In the web interface look under the \u2018Cite\u2019 tab of an article and you\u2019ll see a page identifier of the form <code class=\"docutils literal notranslate\"><span class=\"pre\">http://nla.gov.au/nla.news-page16635065</span></code>.</p>", "a[href=\"#download-a-page-as-a-pdf\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id16\" role=\"doc-backlink\">Download a page as a PDF</a><a class=\"headerlink\" href=\"#download-a-page-as-a-pdf\" title=\"Permalink to this heading\">#</a></h3><p>If you set the <code class=\"docutils literal notranslate\"><span class=\"pre\">reclevel</span></code> parameter to <code class=\"docutils literal notranslate\"><span class=\"pre\">full</span></code> when requesting articles from the <code class=\"docutils literal notranslate\"><span class=\"pre\">/result</span></code> or <code class=\"docutils literal notranslate\"><span class=\"pre\">/newspaper</span></code> API endpoints, the metadata includes a <code class=\"docutils literal notranslate\"><span class=\"pre\">pdf</span></code> field with a list of urls. These urls can be used to download PDF versions of the page(s) on which the article was published. For example:</p>", "a[href=\"newspapers-and-gazettes-issues.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12.3. </span>Accessing data about newspaper &amp; gazette issues<a class=\"headerlink\" href=\"#accessing-data-about-newspaper-gazette-issues\" title=\"Permalink to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\">Metadata</a><a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h2><h3><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">Get the number of issues per year for a title</a><a class=\"headerlink\" href=\"#get-the-number-of-issues-per-year-for-a-title\" title=\"Permalink to this heading\">#</a></h3><p>You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints to get the total number of digitised issues per year for a newspaper or gazette title. You just add the <code class=\"docutils literal notranslate\"><span class=\"pre\">include</span></code> parameter and set its value to <code class=\"docutils literal notranslate\"><span class=\"pre\">years</span></code>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitle%2F11%3Fencoding%3Djson%26include%3Dyears\"><img alt=\"Try it!\" src=\"../_images/try-trove-api-console.svg\"/></a></p>", "a[href=\"#metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id10\" role=\"doc-backlink\">Metadata</a><a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h2><p>There\u2019s no direct method for requesting metadata about a newspaper page in Trove. You can, however, get some information about pages from issues and articles.</p><p>Each newspaper and gazette page has a unique numeric identifier.</p>", "a[href=\"#accessing-data-about-newspaper-gazette-pages\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12.2. </span>Accessing data about newspaper &amp; gazette pages<a class=\"headerlink\" href=\"#accessing-data-about-newspaper-gazette-pages\" title=\"Permalink to this heading\">#</a></h1><p><img alt=\"Screenshot of the masthead at the top of a newspaper page\" src=\"../_images/16635065-level4-cropped.jpg\"/></p>", "a[href=\"#download-a-collection-of-page-images-or-pdfs\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id17\" role=\"doc-backlink\">Download a collection of page images or PDFs</a><a class=\"headerlink\" href=\"#download-a-collection-of-page-images-or-pdfs\" title=\"Permalink to this heading\">#</a></h3><p>Perhaps you want to download all the front pages of a particular newspaper, the front page of all newspapers on a particular date, or the pages on which a collection of articles was published. Use one of the methods described above to get a list of page urls. Then loop through the list, extracting the page id, and constructing the image download url for each page. For example, using the list of issues we downloaded before, we can get images of all the front pages:</p>", "a[href=\"#get-a-page-url-for-a-specific-title-date-and-page\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id12\" role=\"doc-backlink\">Get a page url for a specific title, date, and page</a><a class=\"headerlink\" href=\"#get-a-page-url-for-a-specific-title-date-and-page\" title=\"Permalink to this heading\">#</a></h3><p>You can also get page identifiers from a search for newspaper articles using the <code class=\"docutils literal notranslate\"><span class=\"pre\">/result</span></code> endpoint. To find the identifier for a particular page in a particular issue, you need to specify the title (the newspaper name), the publication date, and the page number.</p><p>First you need to tell the Trove API you want to search for newspaper articles. You do this by setting the <code class=\"docutils literal notranslate\"><span class=\"pre\">category</span></code> parameter to <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper</span></code>.</p>", "a[href=\"#download-a-page-image\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id15\" role=\"doc-backlink\">Download a page image</a><a class=\"headerlink\" href=\"#download-a-page-image\" title=\"Permalink to this heading\">#</a></h3><p>Once you know the secret formula, getting page images is easy. You can download a page image using a url like this:</p>", "a[href=\"#pages-are-groups-of-articles\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\">Pages are groups of articles</a><a class=\"headerlink\" href=\"#pages-are-groups-of-articles\" title=\"Permalink to this heading\">#</a></h3><p>Every digitised article has a page reference that tells you the number of the page on which the article was published. Page numbers are displayed in the Trove web interface and included in article metadata. They generally correspond to the numbers printed on the original pages. You can search for articles on a specific page using the <code class=\"docutils literal notranslate\"><span class=\"pre\">firstpageseq</span></code> index.</p>", "a[href=\"#pages-are-sometimes-missing\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id8\" role=\"doc-backlink\">Pages are sometimes missing</a><a class=\"headerlink\" href=\"#pages-are-sometimes-missing\" title=\"Permalink to this heading\">#</a></h3><p>Pages that were missing when a newspaper was digitised are marked by placeholder images. Missing pages, like other pages, have unique identifiers. You can construct links to them, and even download the placeholder, but they\u2019re <em>not really there</em>. Because the pages haven\u2019t gone through the OCR process, no articles from them will show up in search results. This raises the question, how many newspaper and gazette pages are missing from Trove?</p>", "a[href=\"#missing-page\"]": "<figure class=\"align-default\" id=\"missing-page\">\n<a class=\"reference internal image-reference\" href=\"../_images/missing-page.png\"><img alt=\"../_images/missing-page.png\" src=\"../_images/missing-page.png\" style=\"width: 300px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 12.1 </span><span class=\"caption-text\">Example of a missing page placeholder, from <a class=\"reference external\" href=\"http://nla.gov.au/nla.news-page20232534\">The Sydney Mail and New South Wales Advertiser, 6 January 1894, page 1</a></span><a class=\"headerlink\" href=\"#missing-page\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#get-a-list-of-front-page-urls\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id11\" role=\"doc-backlink\">Get a list of front page urls</a><a class=\"headerlink\" href=\"#get-a-list-of-front-page-urls\" title=\"Permalink to this heading\">#</a></h3><p>As <a class=\"reference internal\" href=\"newspapers-and-gazettes-issues.html\"><span class=\"doc std std-doc\">described elsewhere</span></a>, you can get information about individual issues from the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints. The issue data includes a <code class=\"docutils literal notranslate\"><span class=\"pre\">date</span></code> and a <code class=\"docutils literal notranslate\"><span class=\"pre\">url</span></code>. If you request the url you are redirected to the first page of that issue. Therefore, by working through each issue, it\u2019s possible to get a list of all of the front page urls for a particular newspaper. Here\u2019s an example:</p>", "a[href=\"#pages-are-entry-points\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id7\" role=\"doc-backlink\">Pages are entry points</a><a class=\"headerlink\" href=\"#pages-are-entry-points\" title=\"Permalink to this heading\">#</a></h3><p>You can save and share links to pages. These links open the page in the Trove web interface and display a list of included articles. You can also find page links in the <code class=\"docutils literal notranslate\"><span class=\"pre\">trovePageUrl</span></code> field of an article\u2019s metadata. However, while you can view pages in the Trove web interface, you can\u2019t access information about individual pages using the API \u2013 they just don\u2019t exist as separate entities.</p>", "a[href=\"#article-cite\"]": "<figure class=\"align-default\" id=\"article-cite\">\n<a class=\"reference internal image-reference\" href=\"../_images/article-cite.png\"><img alt=\"../_images/article-cite.png\" src=\"../_images/article-cite.png\" style=\"width: 300px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 12.2 </span><span class=\"caption-text\">Example of a page identifier found in an article\u2019s \u2018Cite\u2019 tab.</span><a class=\"headerlink\" href=\"#article-cite\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#page-images-and-pdfs\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id14\" role=\"doc-backlink\">Page images and PDFs</a><a class=\"headerlink\" href=\"#page-images-and-pdfs\" title=\"Permalink to this heading\">#</a></h2><h3><a class=\"toc-backref\" href=\"#id15\" role=\"doc-backlink\">Download a page image</a><a class=\"headerlink\" href=\"#download-a-page-image\" title=\"Permalink to this heading\">#</a></h3><p>Once you know the secret formula, getting page images is easy. You can download a page image using a url like this:</p>"}
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
