selector_to_html = {"a[href=\"../how-to/get-ocr-coordinates.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4.3. </span>HOW TO: Get information about the position of OCRd newspaper text<a class=\"headerlink\" href=\"#how-to-get-information-about-the-position-of-ocrd-newspaper-text\" title=\"Permalink to this heading\">#</a></h1><p>The OCR process not only extracts text from an image, it generates coordinates that document the position of each piece of text within the parent image. You could use this information to crop an image of the OCRd text out of the parent image. In the case of digitised newspapers, this sort of positional information could help you explore the layout and contents of newspaper pages and how this changes over time.</p><p>No positional information is available from the Trove API, however, there is some embedded within the web site. If you view the source of a newspaper article\u2019s web page, you\u2019ll find a number of <code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;input&gt;</span></code> tags like this:</p>", "a[href=\"#article-cite\"]": "<figure class=\"align-default\" id=\"article-cite\">\n<a class=\"reference internal image-reference\" href=\"../../_images/article-cite.png\"><img alt=\"../../_images/article-cite.png\" src=\"../../_images/article-cite.png\" style=\"width: 300px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 3.1 </span><span class=\"caption-text\">Example of an article identifier found in the \u2018Cite\u2019 tab.</span><a class=\"headerlink\" href=\"#article-cite\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#add-extra-metadata-fields\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id10\" role=\"doc-backlink\">Add extra metadata fields</a><a class=\"headerlink\" href=\"#add-extra-metadata-fields\" title=\"Permalink to this heading\">#</a></h3><p>You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">reclevel</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">include</span></code> parameters with either the <code class=\"docutils literal notranslate\"><span class=\"pre\">/newspaper</span></code> or <code class=\"docutils literal notranslate\"><span class=\"pre\">/result</span></code> endpoints to control the amount of metadata provided about each article. For example:</p><p>Setting <code class=\"docutils literal notranslate\"><span class=\"pre\">reclevel=full</span></code> adds the following fields:</p>", "a[href=\"../../understanding-search/facets.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">3. </span>Facets<a class=\"headerlink\" href=\"#facets\" title=\"Permalink to this heading\">#</a></h1><p>Not sure where this belongs\u2026</p><p>Note that categories do not supply a full list of formats. It seems that they are filtered (particularly in Image, Sound) to only show those that are \u2018relevant\u2019. But if you explicitly search for a facet it will pop up in the list of facets, eg: <a class=\"reference external\" href=\"https://trove.nla.gov.au/search/category/images?keyword=&amp;amp;l-format=Book\">https://trove.nla.gov.au/search/category/images?keyword=&amp;l-format=Book</a> (Book appears in facets) vs <a class=\"reference external\" href=\"https://trove.nla.gov.au/search/category/images?keyword=\">https://trove.nla.gov.au/search/category/images?keyword=</a> (Book doesn\u2019t appear in facets)</p>", "a[href=\"#article-metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id7\" role=\"doc-backlink\">Article metadata</a><a class=\"headerlink\" href=\"#article-metadata\" title=\"Permalink to this heading\">#</a></h2><p>The <a class=\"reference internal\" href=\"../../glossary.html#term-Metadata\"><span class=\"xref std std-term\">metadata</span></a> associated with newspaper and gazette articles in Trove includes the basic information you\u2019d expect to put in a citation, like the article\u2019s headline, publication date, newspaper, and page number. Additional fields are added by the OCR and data ingestion processes, such as internal links, the number of words, and the article category. User activity also adds data relating to tags, comments, lists, and corrections.</p>", "a[href=\"../../understanding-search/simple-search-options.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2. </span>\u2018Simple\u2019 search options<a class=\"headerlink\" href=\"#simple-search-options\" title=\"Permalink to this heading\">#</a></h1><p><mark>==Include a note about <code class=\"docutils literal notranslate\"><span class=\"pre\">firstpageseq</span></code> and the fact that this will match pages from supplements as well. So supplements need to be filtered out after harvesting. Also note that not all issues start with page 1.==</mark></p>", "a[href=\"#newspaper-illustration-types-over-time\"]": "<figure class=\"align-default\" id=\"newspaper-illustration-types-over-time\">\n<img alt=\"../../_images/newspaper-illustration-types.svg\" src=\"../../_images/newspaper-illustration-types.svg\"/><figcaption>\n<p><span class=\"caption-number\">Fig. 3.2 </span><span class=\"caption-text\">Visualisation of the numbers of different illustration types in Trove newspaper articles over time.</span><a class=\"headerlink\" href=\"#newspaper-illustration-types-over-time\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#article-identifiers\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">Article identifiers</a><a class=\"headerlink\" href=\"#article-identifiers\" title=\"Permalink to this heading\">#</a></h3><p>Every newspaper article in Trove has its own unique identifier. This identifier is used in persistent links to articles on the Trove web site. In the web interface, you can find the identifier under the article\u2019s \u2018Cite\u2019 tab, it\u2019ll look something like this <code class=\"docutils literal notranslate\"><span class=\"pre\">http://nla.gov.au/nla.news-article163325648</span></code></p>", "a[href=\"#articles-and-newspaper-titles\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\">Articles and newspaper titles</a><a class=\"headerlink\" href=\"#articles-and-newspaper-titles\" title=\"Permalink to this heading\">#</a></h3><p>Links to newspaper <strong>titles</strong> are perhaps the most straightforward. Each article is linked to a single newspaper title by the title\u2019s unique identifier. An article\u2019s metadata record includes a field for <code class=\"docutils literal notranslate\"><span class=\"pre\">title</span></code> that includes both the numeric identifier and the newspaper\u2019s masthead. for example:</p>", "a[href=\"#search-results\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id9\" role=\"doc-backlink\">Search results</a><a class=\"headerlink\" href=\"#search-results\" title=\"Permalink to this heading\">#</a></h3><p>You can search for newspaper and gazette articles using the Trove API\u2019s <code class=\"docutils literal notranslate\"><span class=\"pre\">/result</span></code> endpoint, just set the <code class=\"docutils literal notranslate\"><span class=\"pre\">category</span></code> parameter to <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper</span></code>.</p>", "a[href=\"#save-article-illustrations-as-images\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id19\" role=\"doc-backlink\">Save article illustrations as images</a><a class=\"headerlink\" href=\"#save-article-illustrations-as-images\" title=\"Permalink to this heading\">#</a></h3><p><mark>==I should probably add a GW notebook for this \u2013 some of the necessary code is in the save a thumbnail nb==</mark></p>", "a[href=\"../../glossary.html#term-Metadata\"]": "<dt id=\"term-Metadata\">Metadata</dt><dd><p>An indented explanation of term 1</p></dd>", "a[href=\"#newspaper-article-identifiers\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">Article identifiers</a><a class=\"headerlink\" href=\"#article-identifiers\" title=\"Permalink to this heading\">#</a></h3><p>Every newspaper article in Trove has its own unique identifier. This identifier is used in persistent links to articles on the Trove web site. In the web interface, you can find the identifier under the article\u2019s \u2018Cite\u2019 tab, it\u2019ll look something like this <code class=\"docutils literal notranslate\"><span class=\"pre\">http://nla.gov.au/nla.news-article163325648</span></code></p>", "a[href=\"#article-links-and-connections\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">Article links and connections</a><a class=\"headerlink\" href=\"#article-links-and-connections\" title=\"Permalink to this heading\">#</a></h2><p>Articles exist at the bottom of a hierarchy of newspapers, issues, and pages. Article metadata includes information linking articles to other levels in this hierarchy, but the type and form of these links varies.</p>", "a[href=\"#save-words-as-images\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id20\" role=\"doc-backlink\">Save words as images</a><a class=\"headerlink\" href=\"#save-words-as-images\" title=\"Permalink to this heading\">#</a></h3><p>By using a variation on the method described above, you can even save images of individual words! As explained in <a class=\"reference internal\" href=\"../how-to/get-ocr-coordinates.html\"><span class=\"doc std std-doc\">HOW TO: Get information about the position of OCRd newspaper text</span></a>, the secret is to modify an article\u2019s url and set the <code class=\"docutils literal notranslate\"><span class=\"pre\">searchTerm</span></code> parameter to the word you want to save. This will highlight the word wherever it appears in the article. You can then scrape the coordinates of the highlighted words, and crop them from the full page image. This method is used in the GLAM Workbench notebook <a class=\"reference external\" href=\"https://glam-workbench.net/trove-newspapers/trove-newspapers-scissors-and-paste/\">Create \u2018scissors and paste\u2019 messages from Trove newspaper articles</a> to generate images like this!</p><p><img alt='Scissors and paste style message created from snipped words: \"Help trapped inside Trove cannot escape.\"' src=\"../../_images/trapped-trove.jpg\"/></p>", "a[href=\"../../accessing-data/how-to/harvest-complete-results.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.5. </span>HOW TO: Harvest a complete set of search results using the Trove API<a class=\"headerlink\" href=\"#how-to-harvest-a-complete-set-of-search-results-using-the-trove-api\" title=\"Permalink to this heading\">#</a></h1><p>See <a class=\"reference internal\" href=\"../../accessing-data/trove-api-intro.html\"><span class=\"doc\">Trove API introduction</span></a> for general information about using the Trove API.</p>", "a[href=\"#articles-as-images\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id18\" role=\"doc-backlink\">Save articles as images</a><a class=\"headerlink\" href=\"#save-articles-as-images\" title=\"Permalink to this heading\">#</a></h3><p>The \u2018images\u2019 of articles you download from the web interface are actually HTML pages with embedded images. The embedded images themselves are often sliced up to fit on a page, and there\u2019s no straightforward way of putting them back together. This means there\u2019s no point trying to download images by duplicating what the web interface does. Fortunately, there\u2019s an alternative.</p><p>As described above, it\u2019s possible the extract the positional coordinates of an article from the web interface. It\u2019s also possible to download a high-resolution image of a page. By putting the two together you can crop an article image from the full page. This <a class=\"reference external\" href=\"https://glam-workbench.net/trove-newspapers/Save-Trove-newspaper-article-as-image/\">method is fully documented</a> in the GLAM Workbench.</p>", "a[href=\"#using-facets-to-get-aggregate-data-about-articles\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id12\" role=\"doc-backlink\">Using facets to get aggregate data about articles</a><a class=\"headerlink\" href=\"#using-facets-to-get-aggregate-data-about-articles\" title=\"Permalink to this heading\">#</a></h3><p><a class=\"reference internal\" href=\"../../understanding-search/facets.html\"><span class=\"doc std std-doc\">Search facets</span></a> are another source of useful metadata. Using them, you can slice a results set in different ways to reveal large-scale patterns. Facets available in the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper</span></code> category include:</p>", "a[href=\"#downloading-article-pdfs\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id17\" role=\"doc-backlink\">Downloading article PDFs</a><a class=\"headerlink\" href=\"#downloading-article-pdfs\" title=\"Permalink to this heading\">#</a></h3><p>Getting PDFs of full newspaper pages is easy. If you set the <code class=\"docutils literal notranslate\"><span class=\"pre\">reclevel</span></code> parameter to <code class=\"docutils literal notranslate\"><span class=\"pre\">full</span></code> in your API request, the response will include a <code class=\"docutils literal notranslate\"><span class=\"pre\">pdf</span></code> field with direct links to download the PDFs of all pages on which the article appeared.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2F217926119%3Fencoding%3Djson%26reclevel%3Dfull&amp;comment=\"><img alt=\"Try it!\" src=\"https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg\"/></a></p>", "a[href=\"#article-text\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id14\" role=\"doc-backlink\">Article text</a><a class=\"headerlink\" href=\"#article-text\" title=\"Permalink to this heading\">#</a></h2><p>Trove provides the full text of articles for download. This makes it possible to use natural language processing and other computational methods to analyse the contents of newspapers.</p><p>There are actually three sources of newspaper article text:</p>", "a[href=\"#images-and-pdfs-of-articles\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id16\" role=\"doc-backlink\">Images and PDFs of articles</a><a class=\"headerlink\" href=\"#images-and-pdfs-of-articles\" title=\"Permalink to this heading\">#</a></h2><p>While you can download article images (embedded in an HTML page) and PDFs from the Trove web interface, there\u2019s no direct mechanism for accessing them via the API. This makes it difficult to automate downloads, assemble image datasets, and build image processing pipelines. Fortunately, there are a few handy workarounds you can use.</p>", "a[href=\"#save-articles-as-images\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id18\" role=\"doc-backlink\">Save articles as images</a><a class=\"headerlink\" href=\"#save-articles-as-images\" title=\"Permalink to this heading\">#</a></h3><p>The \u2018images\u2019 of articles you download from the web interface are actually HTML pages with embedded images. The embedded images themselves are often sliced up to fit on a page, and there\u2019s no straightforward way of putting them back together. This means there\u2019s no point trying to download images by duplicating what the web interface does. Fortunately, there\u2019s an alternative.</p><p>As described above, it\u2019s possible the extract the positional coordinates of an article from the web interface. It\u2019s also possible to download a high-resolution image of a page. By putting the two together you can crop an article image from the full page. This <a class=\"reference external\" href=\"https://glam-workbench.net/trove-newspapers/Save-Trove-newspaper-article-as-image/\">method is fully documented</a> in the GLAM Workbench.</p>", "a[href=\"#articles-and-issues\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\">Articles and issues</a><a class=\"headerlink\" href=\"#articles-and-issues\" title=\"Permalink to this heading\">#</a></h3><p>There are no direct links from articles to newspaper <strong>issues</strong>. However, articles share a date with their parent issue, so it\u2019s possible to use the date to connect them. For example you can use a <code class=\"docutils literal notranslate\"><span class=\"pre\">date</span></code> search to find all the articles in an issue.</p>", "a[href=\"#including-article-text-in-api-results\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id15\" role=\"doc-backlink\">Including article text in API results</a><a class=\"headerlink\" href=\"#including-article-text-in-api-results\" title=\"Permalink to this heading\">#</a></h3><p>The transcribed article title is available in the <code class=\"docutils literal notranslate\"><span class=\"pre\">heading</span></code> field of the API results. There\u2019s no direct way to access the transcribed text from first four lines of articles. However, if you access articles via the <code class=\"docutils literal notranslate\"><span class=\"pre\">/result</span></code> endpoint without supplying any search terms, the <code class=\"docutils literal notranslate\"><span class=\"pre\">snippet</span></code> field should display the transcribed text.</p><p>To include the full OCRd/corrected text in API results you just need to set the <code class=\"docutils literal notranslate\"><span class=\"pre\">include</span></code> parameter to <code class=\"docutils literal notranslate\"><span class=\"pre\">articleText</span></code>.</p>", "a[href=\"../../glossary.html#term-OCR\"]": "<dt id=\"term-OCR\">OCR</dt><dd><p>Optical Character Recognition</p></dd>", "a[href=\"#words-as-images\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id20\" role=\"doc-backlink\">Save words as images</a><a class=\"headerlink\" href=\"#save-words-as-images\" title=\"Permalink to this heading\">#</a></h3><p>By using a variation on the method described above, you can even save images of individual words! As explained in <a class=\"reference internal\" href=\"../how-to/get-ocr-coordinates.html\"><span class=\"doc std std-doc\">HOW TO: Get information about the position of OCRd newspaper text</span></a>, the secret is to modify an article\u2019s url and set the <code class=\"docutils literal notranslate\"><span class=\"pre\">searchTerm</span></code> parameter to the word you want to save. This will highlight the word wherever it appears in the article. You can then scrape the coordinates of the highlighted words, and crop them from the full page image. This method is used in the GLAM Workbench notebook <a class=\"reference external\" href=\"https://glam-workbench.net/trove-newspapers/trove-newspapers-scissors-and-paste/\">Create \u2018scissors and paste\u2019 messages from Trove newspaper articles</a> to generate images like this!</p><p><img alt='Scissors and paste style message created from snipped words: \"Help trapped inside Trove cannot escape.\"' src=\"../../_images/trapped-trove.jpg\"/></p>", "a[href=\"#get-positional-information-from-ocr\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id13\" role=\"doc-backlink\">Get positional information from OCR</a><a class=\"headerlink\" href=\"#get-positional-information-from-ocr\" title=\"Permalink to this heading\">#</a></h3><p>The OCR process generates some article metadata that is not available through the Trove API. As well as extracting text from the page images, the OCR process captures positional information that relates blocks of text to their location within the original image.</p><p>Some of this positional information can be scraped from the Trove web site, enabling you to locate individual lines of text, and, by combining their coordinates, draw a bounding box around a complete article. This method is explained in <a class=\"reference internal\" href=\"../how-to/get-ocr-coordinates.html\"><span class=\"doc std std-doc\">HOW TO: Get information about the position of OCRd newspaper text</span></a>.</p>", "a[href=\"#individual-articles\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id8\" role=\"doc-backlink\">Individual articles</a><a class=\"headerlink\" href=\"#individual-articles\" title=\"Permalink to this heading\">#</a></h3><p>To access metadata relating to an individual article you need the <a class=\"reference internal\" href=\"#newspaper-article-identifiers\"><span class=\"std std-ref\">article\u2019s numeric identifier</span></a>. You can then construct an API request url by adding the identifier to the <code class=\"docutils literal notranslate\"><span class=\"pre\">/newspaper/</span></code> endpoint. For example, if the article identifier was <code class=\"docutils literal notranslate\"><span class=\"pre\">61389505</span></code>, the API request url would be:</p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">https://api.trove.nla.gov.au/v3/newspaper/61389505</span></code></p>", "a[href=\"#what-are-articles\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\">What are articles?</a><a class=\"headerlink\" href=\"#what-are-articles\" title=\"Permalink to this heading\">#</a></h2><p>When you search in Trove\u2019s digitised newspapers, you\u2019re searching for <em>articles</em>. The boundaries of articles are defined as part of the <a class=\"reference internal\" href=\"../../glossary.html#term-OCR\"><span class=\"xref std std-term\">OCR</span></a> process. In most cases they represent a single piece of content with a heading and some text (or an illustration). But sometimes blocks of content are grouped together. Advertisements, for example, are often grouped as a single \u2018article\u2019 headed \u2018Advertising\u2019. A single article can also be split across multiple pages.</p>", "a[href=\"#articles-and-pages\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id6\" role=\"doc-backlink\">Articles and pages</a><a class=\"headerlink\" href=\"#articles-and-pages\" title=\"Permalink to this heading\">#</a></h3><p>There are two ways in which articles are linked to <strong>pages</strong>. The first is simply by the <code class=\"docutils literal notranslate\"><span class=\"pre\">page</span></code> value, which is a number indicating the sequence of a page within an issue. This <em>usually</em> corresponds to the page number printed on the page, however, sometimes issues include separately numbered supplements. You can tell if a page is part of a supplement by looking at the confusingly-named <code class=\"docutils literal notranslate\"><span class=\"pre\">pageSequence</span></code> value \u2013 it will typically include an \u2018S\u2019 after the page number. There might also be a <code class=\"docutils literal notranslate\"><span class=\"pre\">pageLabel</span></code> value that provides the number printed on the page within the supplement.</p><p>Here\u2019s <a class=\"reference external\" href=\"https://trove.nla.gov.au/newspaper/article/48076559/\">an advertisement for abstestos cement</a> in a 1957 building supplement published as part of the <em>Australian Women\u2019s Weekly</em>. The article\u2019s metadata record includes the following page values:</p>", "a[href=\"#find-the-total-number-of-articles-in-a-search\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id11\" role=\"doc-backlink\">Find the total number of articles in a search</a><a class=\"headerlink\" href=\"#find-the-total-number-of-articles-in-a-search\" title=\"Permalink to this heading\">#</a></h3><p>You can also access metadata <em>about</em> a search. API search results include a <code class=\"docutils literal notranslate\"><span class=\"pre\">total</span></code> value that tells you the number of articles matching your query. If we don\u2019t include any search parameters, we can use this to find out the number of newspaper and gazette articles in the whole of Trove!</p>", "a[href=\"#accessing-data-about-newspaper-and-gazette-articles\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">3.1. </span>Accessing data about newspaper and gazette articles<a class=\"headerlink\" href=\"#accessing-data-about-newspaper-and-gazette-articles\" title=\"Permalink to this heading\">#</a></h1><p><img alt=\"Screenshot of Trove web interface displaying basic article metadata\" src=\"../../_images/trove-article-metadata.png\"/></p>", "a[href=\"../how-to/get-newspaper-issue-article-pdfs.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4.2. </span>HOW TO: Get a newspaper issue or article as a PDF<a class=\"headerlink\" href=\"#how-to-get-a-newspaper-issue-or-article-as-a-pdf\" title=\"Permalink to this heading\">#</a></h1><p>You can download PDFs of newspaper and gazette articles, pages, and issues from Trove\u2019s web interface \u2013 it\u2019s just a matter of clicking a button. But downloading PDFs using computational methods is not so straightforward. When you click on the buttons in the web interface, you don\u2019t download the PDF from a fixed url. There\u2019s a bit of Javascript code behind the button that asks for for the PDF to be compiled, then alerts the user when it\u2019s ready. To automate the download process, you need to reproduce these steps in your code. This how-to provides an example of how this can be done using Python.</p>", "a[href=\"#newspaper-article-coords\"]": "<figure class=\"align-default\" id=\"newspaper-article-coords\">\n<a class=\"reference internal image-reference\" href=\"../../_images/article-coords-example.jpg\"><img alt=\"../../_images/article-coords-example.jpg\" src=\"../../_images/article-coords-example.jpg\" style=\"width: 400px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 3.3 </span><span class=\"caption-text\">Example of a bounding box around an article, created by scraping positional information from the Trove web site.</span><a class=\"headerlink\" href=\"#newspaper-article-coords\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>"}
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