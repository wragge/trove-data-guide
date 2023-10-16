selector_to_html = {"a[href=\"#articles-in-an-issue\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id9\" role=\"doc-backlink\">Articles in an issue</a><a class=\"headerlink\" href=\"#articles-in-an-issue\" title=\"Permalink to this heading\">#</a></h3><p>To get details of all the articles within an issue, you need to construct a search for articles using the <code class=\"docutils literal notranslate\"><span class=\"pre\">/result</span></code> endpoint that specifies the title (the newspaper name) and the publication date.</p><p>The newspaper title is set using the <code class=\"docutils literal notranslate\"><span class=\"pre\">l-title</span></code> parameter. For example, the identifier for the <em>Canberra Times</em> is <code class=\"docutils literal notranslate\"><span class=\"pre\">11</span></code>, so to limit your search to the <em>Canberra Times</em> you\u2019d set <code class=\"docutils literal notranslate\"><span class=\"pre\">l-title</span></code> to <code class=\"docutils literal notranslate\"><span class=\"pre\">11</span></code>.</p>", "a[href=\"#download-an-issue-as-a-pdf\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id12\" role=\"doc-backlink\">Download an issue as a PDF</a><a class=\"headerlink\" href=\"#download-an-issue-as-a-pdf\" title=\"Permalink to this heading\">#</a></h3><p>You can download PDFs of newspaper issues from the Trove web interface. However, automating this process is difficult. If you peek behind the web interface to see what happens when you click the download button, you\u2019ll see that it\u2019s a multi-step process. First the interface sends off a request to generate the issue PDF and gets back a token. It then uses that token to check with the Trove backend to see when the PDF generation is finished. When the backend signals the PDF is ready, the interface uses the token to download it. Complicated huh?</p><p>If you want to automate the download of article PDFs, you\u2019ll need to reproduce these steps. There\u2019s an example of how to do this with Python in <a class=\"reference internal\" href=\"../how-to/newspapers/get-newspaper-issue-article-pdfs.html\"><span class=\"doc std std-doc\">HOW TO: Get a newspaper issue or article as a PDF</span></a>.</p>", "a[href=\"#pdfs-of-issues\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id11\" role=\"doc-backlink\">PDFs of issues</a><a class=\"headerlink\" href=\"#pdfs-of-issues\" title=\"Permalink to this heading\">#</a></h2><h3><a class=\"toc-backref\" href=\"#id12\" role=\"doc-backlink\">Download an issue as a PDF</a><a class=\"headerlink\" href=\"#download-an-issue-as-a-pdf\" title=\"Permalink to this heading\">#</a></h3><p>You can download PDFs of newspaper issues from the Trove web interface. However, automating this process is difficult. If you peek behind the web interface to see what happens when you click the download button, you\u2019ll see that it\u2019s a multi-step process. First the interface sends off a request to generate the issue PDF and gets back a token. It then uses that token to check with the Trove backend to see when the PDF generation is finished. When the backend signals the PDF is ready, the interface uses the token to download it. Complicated huh?</p><p>If you want to automate the download of article PDFs, you\u2019ll need to reproduce these steps. There\u2019s an example of how to do this with Python in <a class=\"reference internal\" href=\"../how-to/newspapers/get-newspaper-issue-article-pdfs.html\"><span class=\"doc std std-doc\">HOW TO: Get a newspaper issue or article as a PDF</span></a>.</p>", "a[href=\"#details-of-issues-within-a-date-range\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id8\" role=\"doc-backlink\">Details of issues within a date range</a><a class=\"headerlink\" href=\"#details-of-issues-within-a-date-range\" title=\"Permalink to this heading\">#</a></h3><p>You can also use the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints to get some details about individual issues, including their date and identifier. To do this you add the <code class=\"docutils literal notranslate\"><span class=\"pre\">range</span></code> parameter to your request, and set its value to a date range using the format <code class=\"docutils literal notranslate\"><span class=\"pre\">YYYYMMDD-YYYYMMDD</span></code>. For example to find issues published between 1930 and 1935, you\u2019d set the <code class=\"docutils literal notranslate\"><span class=\"pre\">range</span></code> parameter to <code class=\"docutils literal notranslate\"><span class=\"pre\">19300101-19351231</span></code>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitle%2F11%3Fencoding%3Djson%26include%3Dyears%26range%3D19300101-19351231\"><img alt=\"Try it!\" src=\"../_images/try-trove-api-console.svg\"/></a></p>", "a[href=\"../how-to/newspapers/get-newspaper-issue-article-pdfs.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">19.2. </span>HOW TO: Get a newspaper issue or article as a PDF<a class=\"headerlink\" href=\"#how-to-get-a-newspaper-issue-or-article-as-a-pdf\" title=\"Permalink to this heading\">#</a></h1><p>You can download PDFs of newspaper and gazette articles, pages, and issues from Trove\u2019s web interface \u2013 it\u2019s just a matter of clicking a button. But downloading PDFs using computational methods is not so straightforward. When you click on the buttons in the web interface, you don\u2019t download the PDF from a fixed url. There\u2019s a bit of Javascript code behind the button that asks for for the PDF to be compiled, then alerts the user when it\u2019s ready. To automate the download process, you need to reproduce these steps in your code. This how-to provides an example of how this can be done using Python.</p>", "a[href=\"#get-the-number-of-issues-per-year-for-a-title\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id7\" role=\"doc-backlink\">Get the number of issues per year for a title</a><a class=\"headerlink\" href=\"#get-the-number-of-issues-per-year-for-a-title\" title=\"Permalink to this heading\">#</a></h3><p>You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints to get the total number of digitised issues per year for a newspaper or gazette title. You just add the <code class=\"docutils literal notranslate\"><span class=\"pre\">include</span></code> parameter and set its value to <code class=\"docutils literal notranslate\"><span class=\"pre\">years</span></code>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitle%2F11%3Fencoding%3Djson%26include%3Dyears\"><img alt=\"Try it!\" src=\"../_images/try-trove-api-console.svg\"/></a></p>", "a[href=\"../understanding-search/date-searches.html#using-the-date-index\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Using the date index<a class=\"headerlink\" href=\"#using-the-date-index\" title=\"Permalink to this heading\">#</a></h3><p>If you want to search for a range of dates you can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">date</span></code> index. Queries using the <code class=\"docutils literal notranslate\"><span class=\"pre\">date</span></code> index look something like this: <code class=\"docutils literal notranslate\"><span class=\"pre\">date:[STARTDATE</span> <span class=\"pre\">TO</span> <span class=\"pre\">ENDDATE]</span></code>. For example, to include records from 1914 to 1918 (inclusive) in your search, you\u2019d use <code class=\"docutils literal notranslate\"><span class=\"pre\">date:[1914</span> <span class=\"pre\">TO</span> <span class=\"pre\">1918]</span></code>. You can add date index queries to the search box in the web interface, or include them in the <code class=\"docutils literal notranslate\"><span class=\"pre\">q</span></code> parameter of an API request.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3Ddate%3A%5B1914+TO+1918%5D%26category%3Dnewspaper%26encoding%3Djson&amp;comment=\"><img alt=\"Try it!\" src=\"https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg\"/></a></p>", "a[href=\"#issue-metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id6\" role=\"doc-backlink\">Issue metadata</a><a class=\"headerlink\" href=\"#issue-metadata\" title=\"Permalink to this heading\">#</a></h2><p>Some issue metadata is available via the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints. You can also find details of articles published within an issue by searching for a specific day and newspaper using the <code class=\"docutils literal notranslate\"><span class=\"pre\">/result</span></code> endpoint.</p>", "a[href=\"newspapers-and-gazettes-pages.html#get-a-list-of-front-page-urls\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id12\" role=\"doc-backlink\">Get a list of front page identifiers</a><a class=\"headerlink\" href=\"#get-a-list-of-front-page-identifiers\" title=\"Permalink to this heading\">#</a></h3><p>As <a class=\"reference internal\" href=\"newspapers-and-gazettes-issues.html\"><span class=\"doc std std-doc\">described in the section on newspaper issues</span></a>, you can get information about individual issues from the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints. The issue data includes a <code class=\"docutils literal notranslate\"><span class=\"pre\">date</span></code> and a <code class=\"docutils literal notranslate\"><span class=\"pre\">url</span></code>. But if you request the issue url you\u2019re redirected to the first <em>page</em> of that issue! This means that you can start with a newspaper, request a list of issues, and then capture the identifiers of all the front pages. Here\u2019s a full example:</p>", "a[href=\"#issue-links-and-identifiers\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\">Issue links and identifiers</a><a class=\"headerlink\" href=\"#issue-links-and-identifiers\" title=\"Permalink to this heading\">#</a></h2><p>Issues also have their own unique identifiers assigned by Trove. These identifiers don\u2019t appear anywhere within the Trove web interface, but you can <a class=\"reference internal\" href=\"#issues-within-a-date-range\"><span class=\"std std-ref\">find them using the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints</span></a> as described below. Issue identifiers look like this: <code class=\"docutils literal notranslate\"><span class=\"pre\">https://nla.gov.au/nla.news-issue55379</span></code>.</p><p>Issues don\u2019t have their own landing pages, or API endpoints. If you plug an issue identifier into your web browser you\u2019ll be redirected to the first page of that issue. This provides a useful mechanism for finding the front pages of issues.</p>", "a[href=\"#id3\"]": "<figure class=\"align-default\" id=\"id3\">\n<img alt=\"../_images/70fca77e054f54751c4e9dcbe11519c1cf4d65cf363e8a528fce1ce3bae0c90c.png\" src=\"../_images/70fca77e054f54751c4e9dcbe11519c1cf4d65cf363e8a528fce1ce3bae0c90c.png\"/>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 15.8 </span><span class=\"caption-text\">Word cloud from the text content of the <em>Canberra Times</em>, 2 November 1942.</span><a class=\"headerlink\" href=\"#id3\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#issues-within-a-date-range\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id8\" role=\"doc-backlink\">Details of issues within a date range</a><a class=\"headerlink\" href=\"#details-of-issues-within-a-date-range\" title=\"Permalink to this heading\">#</a></h3><p>You can also use the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints to get some details about individual issues, including their date and identifier. To do this you add the <code class=\"docutils literal notranslate\"><span class=\"pre\">range</span></code> parameter to your request, and set its value to a date range using the format <code class=\"docutils literal notranslate\"><span class=\"pre\">YYYYMMDD-YYYYMMDD</span></code>. For example to find issues published between 1930 and 1935, you\u2019d set the <code class=\"docutils literal notranslate\"><span class=\"pre\">range</span></code> parameter to <code class=\"docutils literal notranslate\"><span class=\"pre\">19300101-19351231</span></code>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitle%2F11%3Fencoding%3Djson%26include%3Dyears%26range%3D19300101-19351231\"><img alt=\"Try it!\" src=\"../_images/try-trove-api-console.svg\"/></a></p>", "a[href=\"#what-are-issues\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\">What are issues?</a><a class=\"headerlink\" href=\"#what-are-issues\" title=\"Permalink to this heading\">#</a></h2><p>An issue is a single edition of a newspaper published on a particular date. Some newspapers published multiple editions each day, however, Trove holds only one edition per day for each newspaper. This means that issues in Trove can be identified and analysed by date.</p>", "a[href=\"#issue-text\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id10\" role=\"doc-backlink\">Issue text</a><a class=\"headerlink\" href=\"#issue-text\" title=\"Permalink to this heading\">#</a></h2><p>To get the full text of an issue you can <a class=\"reference internal\" href=\"#articles-in-an-issue\"><span class=\"std std-ref\">search for articles</span></a> within that issue and aggregate the text of all the individual articles. You\u2019ll need to set the <code class=\"docutils literal notranslate\"><span class=\"pre\">include</span></code> parameter to <code class=\"docutils literal notranslate\"><span class=\"pre\">articleText</span></code> to add the OCRd text to the results. Here\u2019s an example that collects the article texts from an issue and uses them to create a wordcloud using the <a class=\"reference external\" href=\"https://github.com/amueller/word_cloud\">WordCloud package</a>.</p>", "a[href=\"#download-issue-as-pdf\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id12\" role=\"doc-backlink\">Download an issue as a PDF</a><a class=\"headerlink\" href=\"#download-an-issue-as-a-pdf\" title=\"Permalink to this heading\">#</a></h3><p>You can download PDFs of newspaper issues from the Trove web interface. However, automating this process is difficult. If you peek behind the web interface to see what happens when you click the download button, you\u2019ll see that it\u2019s a multi-step process. First the interface sends off a request to generate the issue PDF and gets back a token. It then uses that token to check with the Trove backend to see when the PDF generation is finished. When the backend signals the PDF is ready, the interface uses the token to download it. Complicated huh?</p><p>If you want to automate the download of article PDFs, you\u2019ll need to reproduce these steps. There\u2019s an example of how to do this with Python in <a class=\"reference internal\" href=\"../how-to/newspapers/get-newspaper-issue-article-pdfs.html\"><span class=\"doc std std-doc\">HOW TO: Get a newspaper issue or article as a PDF</span></a>.</p>", "a[href=\"#accessing-data-about-newspaper-gazette-issues\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">15.3. </span>Accessing data about newspaper &amp; gazette issues<a class=\"headerlink\" href=\"#accessing-data-about-newspaper-gazette-issues\" title=\"Permalink to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\">What are issues?</a><a class=\"headerlink\" href=\"#what-are-issues\" title=\"Permalink to this heading\">#</a></h2><p>An issue is a single edition of a newspaper published on a particular date. Some newspapers published multiple editions each day, however, Trove holds only one edition per day for each newspaper. This means that issues in Trove can be identified and analysed by date.</p>"}
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
