selector_to_html = {"a[href=\"#details-of-issues-within-a-date-range\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Details of issues within a date range<a class=\"headerlink\" href=\"#details-of-issues-within-a-date-range\" title=\"Permalink to this heading\">#</a></h4><p>You can also use the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints to get some details about individual issues, including their date and identifier. To do this you add the <code class=\"docutils literal notranslate\"><span class=\"pre\">range</span></code> parameter to your request, and set its value to a date range using the format <code class=\"docutils literal notranslate\"><span class=\"pre\">YYYYMMDD-YYYYMMDD</span></code>. For example to find issues published between 1930 and 1935, you\u2019d set the <code class=\"docutils literal notranslate\"><span class=\"pre\">range</span></code> parameter to <code class=\"docutils literal notranslate\"><span class=\"pre\">19300101-19351231</span></code>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitle%2F11%3Fencoding%3Djson%26include%3Dyears%26range%3D19300101-19351231\"><img alt=\"Try it!\" src=\"../_images/try-trove-api-console.svg\"/></a></p>", "a[href=\"#aggregate-search-results-by-title-using-the-title-facet\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Aggregate search results by title using the <code class=\"docutils literal notranslate\"><span class=\"pre\">title</span></code> facet<a class=\"headerlink\" href=\"#aggregate-search-results-by-title-using-the-title-facet\" title=\"Permalink to this heading\">#</a></h4><p>You can also explore the characteristics of newspaper titles in Trove by using the API\u2019s <code class=\"docutils literal notranslate\"><span class=\"pre\">/result</span></code> endpoint with the <code class=\"docutils literal notranslate\"><span class=\"pre\">title</span></code> facet.</p>", "a[href=\"#get-a-page-url-for-a-specific-title-date-and-page\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Get a page url for a specific title, date, and page<a class=\"headerlink\" href=\"#get-a-page-url-for-a-specific-title-date-and-page\" title=\"Permalink to this heading\">#</a></h4><p>You can also get page identifiers from a search for newspaper articles using the <code class=\"docutils literal notranslate\"><span class=\"pre\">/result</span></code> endpoint. To find the identifier for a particular page in a particular issue, you need to specify the title (the newspaper name), the publication date, and the page number.</p><p>First you need to tell the Trove API you want to search for newspaper articles. You do this by setting the <code class=\"docutils literal notranslate\"><span class=\"pre\">category</span></code> parameter to <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper</span></code>.</p>", "a[href=\"#article-text\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Article text<a class=\"headerlink\" href=\"#article-text\" title=\"Permalink to this heading\">#</a></h3><p>Newspaper text is segmented by article. The text is generated by OCR, with manual corrections by volunteers.</p>", "a[href=\"#get-the-number-of-issues-per-year-for-a-title\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Get the number of issues per year for a title<a class=\"headerlink\" href=\"#get-the-number-of-issues-per-year-for-a-title\" title=\"Permalink to this heading\">#</a></h4><p>You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints to get the total number of digitised issues per year for a newspaper or gazette title. You just add the <code class=\"docutils literal notranslate\"><span class=\"pre\">include</span></code> parameter and set its value to <code class=\"docutils literal notranslate\"><span class=\"pre\">years</span></code>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitle%2F11%3Fencoding%3Djson%26include%3Dyears\"><img alt=\"Try it!\" src=\"../_images/try-trove-api-console.svg\"/></a></p>", "a[href=\"#download-a-page-image\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Download a page image<a class=\"headerlink\" href=\"#download-a-page-image\" title=\"Permalink to this heading\">#</a></h4><p>Once you know the secret formula, getting page images is easy. You can download a page image using a url like this:</p>", "a[href=\"#api\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">API<a class=\"headerlink\" href=\"#api\" title=\"Permalink to this heading\">#</a></h4><p><code class=\"docutils literal notranslate\"><span class=\"pre\">include=articletext</span></code></p><p>Note: includes html\nNote: not the AWW (have to scrape)</p>", "a[href=\"#how-many-newspaper-titles-are-there\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">How many newspaper titles are there?<a class=\"headerlink\" href=\"#how-many-newspaper-titles-are-there\" title=\"Permalink to this heading\">#</a></h4><p>The responses you get back from the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/titles</span></code> or <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/titles</span></code> endpoints includes a <code class=\"docutils literal notranslate\"><span class=\"pre\">total</span></code> value that tells you the number of titles matching your request. Reusing the data from the request above, we can get the total number of newspaper titles like this:</p>", "a[href=\"#newspapers-and-gazettes\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.3. </span>Newspapers and gazettes<a class=\"headerlink\" href=\"#newspapers-and-gazettes\" title=\"Permalink to this heading\">#</a></h1><p><mark>==This might link to a fuller discussion in the contexts section?==</mark></p><p>Before you start requesting data from Trove\u2019s digitised newspapers, it\u2019s worth thinking a bit about the way newspapers are represented in Trove and the relationships between <strong>articles</strong>, <strong>pages</strong>, <strong>issues</strong>, and <strong>titles</strong>. When you search the newspapers, you\u2019re searching for <em>articles</em>. You might think that newspapers are organised in a simple hierarchical structure with titles at the top, and articles at the bottom, but it\u2019s not quite that straighforward. Articles are linked to both pages and titles. Titles have their own API endpoint that can lead you to issues, though following an issue url will actually take you to a page. Pages have identifiers, and you can browse their contents in the Trove web interface, but they don\u2019t exist as separate entities in the API. These sorts of oddities mean that sometimes there\u2019s no direct route to the information that you want, but by thinking about what is connected to what, you can find alternative paths. For example, while there\u2019s no direct link between issues and articles, if you get the publication date and title from an issue, you can then search for articles published in that issue by using the <code class=\"docutils literal notranslate\"><span class=\"pre\">date</span></code> index and <code class=\"docutils literal notranslate\"><span class=\"pre\">title</span></code> facet.</p>", "a[href=\"#get-metadata-from-a-search-for-articles-using-the-api\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Get metadata from a search for articles using the API<a class=\"headerlink\" href=\"#get-metadata-from-a-search-for-articles-using-the-api\" title=\"Permalink to this heading\">#</a></h4><p>You can retrieve newspaper and gazette articles using the Trove API\u2019s <code class=\"docutils literal notranslate\"><span class=\"pre\">/result</span></code> endpoint, just set the <code class=\"docutils literal notranslate\"><span class=\"pre\">category</span></code> parameter to <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper</span></code>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dnewspaper%26encoding%3Djson\"><img alt=\"Try it!\" src=\"../_images/try-trove-api-console.svg\"/></a></p>", "a[href=\"#get-a-list-of-front-page-urls\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Get a list of front page urls<a class=\"headerlink\" href=\"#get-a-list-of-front-page-urls\" title=\"Permalink to this heading\">#</a></h4><p>As described below, you can get information about individual issues from the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints. The issue data includes a <code class=\"docutils literal notranslate\"><span class=\"pre\">date</span></code> and a <code class=\"docutils literal notranslate\"><span class=\"pre\">url</span></code>. If you request the url you are redirected to the first page of that issue. Therefore, by working through each issue, it\u2019s possible to get a list of all of the front page urls for a particular newspaper. Here\u2019s an example:</p>", "a[href=\"#trove-lists\"]": "<h5 class=\"tippy-header\" style=\"margin-top: 0;\">Trove Lists<a class=\"headerlink\" href=\"#trove-lists\" title=\"Permalink to this heading\">#</a></h5><p>Another option for creating collections of manually selected newspaper article metadata is Trove\u2019s built-in Lists function.</p><p><mark>==Note about adding mutliple items to Lists. Hacking the url to get more==</mark></p>", "a[href=\"../how-to/get-newspaper-issue-article-pdfs.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">7.3. </span>Get a newspaper issue or article as a PDF<a class=\"headerlink\" href=\"#get-a-newspaper-issue-or-article-as-a-pdf\" title=\"Permalink to this heading\">#</a></h1><h2>Get a PDF of an issue<a class=\"headerlink\" href=\"#get-a-pdf-of-an-issue\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#newspaper-issues\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Newspaper &amp; gazette issues<a class=\"headerlink\" href=\"#newspaper-gazette-issues\" title=\"Permalink to this heading\">#</a></h2><h3>Issue metadata<a class=\"headerlink\" href=\"#issue-metadata\" title=\"Permalink to this heading\">#</a></h3><h4>Get the number of issues per year for a title<a class=\"headerlink\" href=\"#get-the-number-of-issues-per-year-for-a-title\" title=\"Permalink to this heading\">#</a></h4><p>You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints to get the total number of digitised issues per year for a newspaper or gazette title. You just add the <code class=\"docutils literal notranslate\"><span class=\"pre\">include</span></code> parameter and set its value to <code class=\"docutils literal notranslate\"><span class=\"pre\">years</span></code>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitle%2F11%3Fencoding%3Djson%26include%3Dyears\"><img alt=\"Try it!\" src=\"../_images/try-trove-api-console.svg\"/></a></p>", "a[href=\"#save-article-metadata-from-the-web-interface\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Save article metadata from the web interface<a class=\"headerlink\" href=\"#save-article-metadata-from-the-web-interface\" title=\"Permalink to this heading\">#</a></h4><p>Before you dive straight into to the API documentation, remember that there are ways of getting article metadata from the Trove web interface. Each method has its own limitations, but depending on your needs they might do the job. See <a class=\"reference internal\" href=\"../how-to/create-newspaper-articles-dataset.html\"><span class=\"doc std std-doc\">How to create a dataset of digitised newspaper articles</span></a> for further tips.</p>", "a[href=\"#newspaper-titles\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Newspaper &amp; gazette titles<a class=\"headerlink\" href=\"#newspaper-gazette-titles\" title=\"Permalink to this heading\">#</a></h2><h3>Title metadata<a class=\"headerlink\" href=\"#title-metadata\" title=\"Permalink to this heading\">#</a></h3><p>\u2018Titles\u2019 in this context refers to the names of the publications whose articles are digitised in Trove. For example: <em>Canberra Times</em>, <em>Sydney Morning Herald</em>, or <em>Commonwealth of Australia Gazette</em>.</p>", "a[href=\"#get-a-list-of-newspaper-titles-from-a-particular-state\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Get a list of newspaper titles from a particular state<a class=\"headerlink\" href=\"#get-a-list-of-newspaper-titles-from-a-particular-state\" title=\"Permalink to this heading\">#</a></h4><p>You can filter the list of titles by adding the <code class=\"docutils literal notranslate\"><span class=\"pre\">state</span></code> parameter. Possible values for <code class=\"docutils literal notranslate\"><span class=\"pre\">state</span></code> are:</p>", "a[href=\"#get-metadata-for-an-individual-article\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Get metadata for an individual article<a class=\"headerlink\" href=\"#get-metadata-for-an-individual-article\" title=\"Permalink to this heading\">#</a></h4>", "a[href=\"#get-an-issue-as-a-pdf\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Get an issue as a PDF<a class=\"headerlink\" href=\"#get-an-issue-as-a-pdf\" title=\"Permalink to this heading\">#</a></h4><p>You can download a newspaper or gazette issue as a PDF from the web interface.</p>", "a[href=\"#newspaper-gazette-issues\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Newspaper &amp; gazette issues<a class=\"headerlink\" href=\"#newspaper-gazette-issues\" title=\"Permalink to this heading\">#</a></h2><h3>Issue metadata<a class=\"headerlink\" href=\"#issue-metadata\" title=\"Permalink to this heading\">#</a></h3><h4>Get the number of issues per year for a title<a class=\"headerlink\" href=\"#get-the-number-of-issues-per-year-for-a-title\" title=\"Permalink to this heading\">#</a></h4><p>You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints to get the total number of digitised issues per year for a newspaper or gazette title. You just add the <code class=\"docutils literal notranslate\"><span class=\"pre\">include</span></code> parameter and set its value to <code class=\"docutils literal notranslate\"><span class=\"pre\">years</span></code>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitle%2F11%3Fencoding%3Djson%26include%3Dyears\"><img alt=\"Try it!\" src=\"../_images/try-trove-api-console.svg\"/></a></p>", "a[href=\"#issue-text\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Issue text<a class=\"headerlink\" href=\"#issue-text\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#newspaper-gazette-articles\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Newspaper &amp; gazette articles<a class=\"headerlink\" href=\"#newspaper-gazette-articles\" title=\"Permalink to this heading\">#</a></h2><p><img alt=\"Screenshot of Trove web interface displaying basic article metadata\" src=\"../_images/trove-article-metadata.png\"/></p>", "a[href=\"../how-to/international-newspaper-titles.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">7.4. </span>Get a list of \u2018International\u2019 newspapers and gazettes<a class=\"headerlink\" href=\"#get-a-list-of-international-newspapers-and-gazettes\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"#newspaper-articles\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Newspaper &amp; gazette articles<a class=\"headerlink\" href=\"#newspaper-gazette-articles\" title=\"Permalink to this heading\">#</a></h2><p><img alt=\"Screenshot of Trove web interface displaying basic article metadata\" src=\"../_images/trove-article-metadata.png\"/></p>", "a[href=\"trove-lists.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.4. </span>Trove lists<a class=\"headerlink\" href=\"#trove-lists\" title=\"Permalink to this heading\">#</a></h1><h2>Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h2><h3>Getting list metadata using the web interface<a class=\"headerlink\" href=\"#getting-list-metadata-using-the-web-interface\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#trove-newspaper-harvester\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Trove Newspaper Harvester<a class=\"headerlink\" href=\"#trove-newspaper-harvester\" title=\"Permalink to this heading\">#</a></h4><p><mark>==Where should this go?==</mark></p>", "a[href=\"#scraping-positional-information-from-the-web-site\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Scraping positional information from the web site<a class=\"headerlink\" href=\"#scraping-positional-information-from-the-web-site\" title=\"Permalink to this heading\">#</a></h4><p>The OCR process not only extracts text from an image, it generates coordinates that document the position of each piece of text within the parent image. You could use this information to crop an image of the OCRd text out of the parent image. In the case of digitised newspapers, this sort of positional information could help you explore the layout and contents of newspaper pages and how this changes over time.</p><p>No positional information is available from the Trove API, however, there is some embedded within the web site. If you view the source of a newspaper article\u2019s web page, you\u2019ll find a number of <code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;input&gt;</span></code> tags like this:</p>", "a[href=\"../how-to/newspaper-titles-totals.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">7.2. </span>Find the number of newspapers<a class=\"headerlink\" href=\"#find-the-number-of-newspapers\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"#page-text\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Page text<a class=\"headerlink\" href=\"#page-text\" title=\"Permalink to this heading\">#</a></h3><p>aggregated articles</p><p>Trove Newspaper harvester file titles \u2013 how to reaggregate</p>", "a[href=\"#get-a-list-of-newspaper-gazette-titles\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Get a list of newspaper &amp; gazette titles<a class=\"headerlink\" href=\"#get-a-list-of-newspaper-gazette-titles\" title=\"Permalink to this heading\">#</a></h4><p>You can get information about newspaper and gazette titles in Trove from these API endpoints:</p>", "a[href=\"#get-details-of-a-single-newspaper-or-gazette-title\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Get details of a single newspaper or gazette title<a class=\"headerlink\" href=\"#get-details-of-a-single-newspaper-or-gazette-title\" title=\"Permalink to this heading\">#</a></h4><p>To retrieve information about an individual title, use the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> or <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints with a title identifier.</p><p>You can find a title\u2019s identifier in the Trove web interface. Go to the <a class=\"reference external\" href=\"https://trove.nla.gov.au/newspaper/about\">Digitised Newspapers and Gazettes in Trove</a> and select a title to view more information about it. The title\u2019s <code class=\"docutils literal notranslate\"><span class=\"pre\">id</span></code> is the number at the end of the url of the information page. For example, the <a class=\"reference external\" href=\"https://trove.nla.gov.au/newspaper/title/11\">page about the Canberra Times</a> has the url <code class=\"docutils literal notranslate\"><span class=\"pre\">https://trove.nla.gov.au/newspaper/title/11</span></code>, so the title\u2019s <code class=\"docutils literal notranslate\"><span class=\"pre\">id</span></code> is <code class=\"docutils literal notranslate\"><span class=\"pre\">11</span></code>.</p>", "a[href=\"#find-catalogue-entries-for-newspaper-titles\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Find catalogue entries for newspaper titles<a class=\"headerlink\" href=\"#find-catalogue-entries-for-newspaper-titles\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#issue-metadata\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Issue metadata<a class=\"headerlink\" href=\"#issue-metadata\" title=\"Permalink to this heading\">#</a></h3><h4>Get the number of issues per year for a title<a class=\"headerlink\" href=\"#get-the-number-of-issues-per-year-for-a-title\" title=\"Permalink to this heading\">#</a></h4><p>You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints to get the total number of digitised issues per year for a newspaper or gazette title. You just add the <code class=\"docutils literal notranslate\"><span class=\"pre\">include</span></code> parameter and set its value to <code class=\"docutils literal notranslate\"><span class=\"pre\">years</span></code>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitle%2F11%3Fencoding%3Djson%26include%3Dyears\"><img alt=\"Try it!\" src=\"../_images/try-trove-api-console.svg\"/></a></p>", "a[href=\"#page-images-and-pdfs\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Page images and PDFs<a class=\"headerlink\" href=\"#page-images-and-pdfs\" title=\"Permalink to this heading\">#</a></h3><h4>Download a page image<a class=\"headerlink\" href=\"#download-a-page-image\" title=\"Permalink to this heading\">#</a></h4><p>Once you know the secret formula, getting page images is easy. You can download a page image using a url like this:</p>", "a[href=\"#article-metadata\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Article metadata<a class=\"headerlink\" href=\"#article-metadata\" title=\"Permalink to this heading\">#</a></h3><p>Newspaper and gazette article metadata includes basic information such as the article heading, publication date, publication title, and page number. Additional information such as attached tags or comments can be also be retrieved from the Trove API.</p>", "a[href=\"../understanding-search/simple-search-options.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4.1. </span>\u2018Simple\u2019 search options<a class=\"headerlink\" href=\"#simple-search-options\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"#download-a-collection-of-page-images\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Download a collection of page images<a class=\"headerlink\" href=\"#download-a-collection-of-page-images\" title=\"Permalink to this heading\">#</a></h4><p>Perhaps you want to download all the front pages of a particular newspaper, or the front page of all newspapers on a particular date. Use one of the methods described above to get a list of page urls. Then loop through the list, extracting the page id, and constructing the image download url for each page. The GLAM Workbench provides an example of this in the <a class=\"reference external\" href=\"https://glam-workbench.net/trove-newspapers/#harvest-australian-womens-weekly-covers-or-the-front-pages-of-any-newspaper\">Harvest Australian Women\u2019s Weekly covers (or the front pages of any newspaper)</a> notebook.</p>", "a[href=\"#issue-images-and-pdfs\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Issue images and PDFs<a class=\"headerlink\" href=\"#issue-images-and-pdfs\" title=\"Permalink to this heading\">#</a></h3><h4>Get an issue as a PDF<a class=\"headerlink\" href=\"#get-an-issue-as-a-pdf\" title=\"Permalink to this heading\">#</a></h4><p>You can download a newspaper or gazette issue as a PDF from the web interface.</p>", "a[href=\"#page-as-pdf\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Page as PDF<a class=\"headerlink\" href=\"#page-as-pdf\" title=\"Permalink to this heading\">#</a></h4>", "a[href=\"#page-metadata\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Page metadata<a class=\"headerlink\" href=\"#page-metadata\" title=\"Permalink to this heading\">#</a></h3><p><mark>==Include something about the different ways pages are represented \u2013 as images with identifiers, as consecutive numbers in navigation, and as labels.==</mark></p><p>There is no direct method for requesting metadata about a newspaper page in Trove. You can, however, get some information about pages from issues and articles.</p>", "a[href=\"#newspaper-gazette-titles\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Newspaper &amp; gazette titles<a class=\"headerlink\" href=\"#newspaper-gazette-titles\" title=\"Permalink to this heading\">#</a></h2><h3>Title metadata<a class=\"headerlink\" href=\"#title-metadata\" title=\"Permalink to this heading\">#</a></h3><p>\u2018Titles\u2019 in this context refers to the names of the publications whose articles are digitised in Trove. For example: <em>Canberra Times</em>, <em>Sydney Morning Herald</em>, or <em>Commonwealth of Australia Gazette</em>.</p>", "a[href=\"#bulk-export\"]": "<h5 class=\"tippy-header\" style=\"margin-top: 0;\">Bulk export<a class=\"headerlink\" href=\"#bulk-export\" title=\"Permalink to this heading\">#</a></h5><p><mark>==Include more info once official documentation is available==</mark></p><p><mark>==Note that there are some differences in fields from the API==</mark></p>", "a[href=\"#newspaper-pages\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Newspaper &amp; gazette pages<a class=\"headerlink\" href=\"#newspaper-gazette-pages\" title=\"Permalink to this heading\">#</a></h2><h3>Page metadata<a class=\"headerlink\" href=\"#page-metadata\" title=\"Permalink to this heading\">#</a></h3><p><mark>==Include something about the different ways pages are represented \u2013 as images with identifiers, as consecutive numbers in navigation, and as labels.==</mark></p><p>There is no direct method for requesting metadata about a newspaper page in Trove. You can, however, get some information about pages from issues and articles.</p>", "a[href=\"../how-to/create-newspaper-articles-dataset.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">7.5. </span>How to create a dataset of digitised newspaper articles<a class=\"headerlink\" href=\"#how-to-create-a-dataset-of-digitised-newspaper-articles\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"#zotero-fields\"]": "<table class=\"table\" id=\"zotero-fields\">\n<caption><span class=\"caption-number\">Table 5.1 </span><span class=\"caption-text\">Newspaper and gazette metadata fields extracted by Zotero</span><a class=\"headerlink\" href=\"#zotero-fields\" title=\"Permalink to this table\">#</a></caption>\n<thead>\n<tr class=\"row-odd\"><th class=\"head\"><p>Zotero UI</p></th>\n<th class=\"head\"><p>Zotero field</p></th>\n<th class=\"head\"><p>Value</p></th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"row-even\"><td><p>Item Type</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">type</span></code></p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">newspaperArticle</span></code></p></td>\n</tr>\n<tr class=\"row-odd\"><td><p>Title</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">title</span></code></p></td>\n<td><p>article heading</p></td>\n</tr>\n<tr class=\"row-even\"><td><p>Publication</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">publicationTitle</span></code></p></td>\n<td><p>newspaper title (location and date range in brackets is removed)</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p>Date</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">date</span></code></p></td>\n<td><p>publication date</p></td>\n</tr>\n<tr class=\"row-even\"><td><p>Place</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">place</span></code></p></td>\n<td><p>publication state (extracted from newspaper title)</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p>Abstract</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">abstract</span></code></p></td>\n<td><p>first four lines of text, if available (taken from <code class=\"docutils literal notranslate\"><span class=\"pre\">description</span></code> META tag)</p></td>\n</tr>\n<tr class=\"row-even\"><td><p>URL</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">url</span></code></p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">http://nla.gov.au/nla.news-article[article</span> <span class=\"pre\">ID]</span></code></p></td>\n</tr>\n</tbody>\n</table>", "a[href=\"#newspaper-gazette-pages\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Newspaper &amp; gazette pages<a class=\"headerlink\" href=\"#newspaper-gazette-pages\" title=\"Permalink to this heading\">#</a></h2><h3>Page metadata<a class=\"headerlink\" href=\"#page-metadata\" title=\"Permalink to this heading\">#</a></h3><p><mark>==Include something about the different ways pages are represented \u2013 as images with identifiers, as consecutive numbers in navigation, and as labels.==</mark></p><p>There is no direct method for requesting metadata about a newspaper page in Trove. You can, however, get some information about pages from issues and articles.</p>", "a[href=\"#saving-article-metadata-with-zotero\"]": "<h5 class=\"tippy-header\" style=\"margin-top: 0;\">Saving article metadata with Zotero<a class=\"headerlink\" href=\"#saving-article-metadata-with-zotero\" title=\"Permalink to this heading\">#</a></h5><p><a class=\"reference external\" href=\"https://www.zotero.org/\">Zotero</a> includes a \u2018translator\u2019 for Trove that saves article metadata into your own research database. It also downloads a PDF copy of the article, and saves the OCRd text into an attached note. You can <a class=\"reference external\" href=\"https://www.zotero.org/support/adding_items_to_zotero\">add items</a> by clicking on the Zotero icon in your web browser. The translator extracts metadata from the article web page and citation, rather than the Trove API.</p>", "a[href=\"#article-images\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Article images<a class=\"headerlink\" href=\"#article-images\" title=\"Permalink to this heading\">#</a></h3><p>PDF proxy</p><p>Save articles as images</p>", "a[href=\"#title-metadata\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Title metadata<a class=\"headerlink\" href=\"#title-metadata\" title=\"Permalink to this heading\">#</a></h3><p>\u2018Titles\u2019 in this context refers to the names of the publications whose articles are digitised in Trove. For example: <em>Canberra Times</em>, <em>Sydney Morning Herald</em>, or <em>Commonwealth of Australia Gazette</em>.</p>"}
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
