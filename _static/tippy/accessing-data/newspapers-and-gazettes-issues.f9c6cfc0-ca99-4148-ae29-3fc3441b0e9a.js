selector_to_html = {"a[href=\"#images-and-pdfs\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\">Images and PDFs</a><a class=\"headerlink\" href=\"#images-and-pdfs\" title=\"Permalink to this heading\">#</a></h2><h3><a class=\"toc-backref\" href=\"#id6\" role=\"doc-backlink\">Get an issue as a PDF</a><a class=\"headerlink\" href=\"#get-an-issue-as-a-pdf\" title=\"Permalink to this heading\">#</a></h3><p>You can download a newspaper or gazette issue as a PDF from the web interface.</p>", "a[href=\"#metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\">Metadata</a><a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h2><h3><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">Get the number of issues per year for a title</a><a class=\"headerlink\" href=\"#get-the-number-of-issues-per-year-for-a-title\" title=\"Permalink to this heading\">#</a></h3><p>You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints to get the total number of digitised issues per year for a newspaper or gazette title. You just add the <code class=\"docutils literal notranslate\"><span class=\"pre\">include</span></code> parameter and set its value to <code class=\"docutils literal notranslate\"><span class=\"pre\">years</span></code>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitle%2F11%3Fencoding%3Djson%26include%3Dyears\"><img alt=\"Try it!\" src=\"../_images/try-trove-api-console.svg\"/></a></p>", "a[href=\"#text\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\">Text</a><a class=\"headerlink\" href=\"#text\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#accessing-data-about-newspaper-gazette-issues\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">13.3. </span>Accessing data about newspaper &amp; gazette issues<a class=\"headerlink\" href=\"#accessing-data-about-newspaper-gazette-issues\" title=\"Permalink to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\">Metadata</a><a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h2><h3><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">Get the number of issues per year for a title</a><a class=\"headerlink\" href=\"#get-the-number-of-issues-per-year-for-a-title\" title=\"Permalink to this heading\">#</a></h3><p>You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints to get the total number of digitised issues per year for a newspaper or gazette title. You just add the <code class=\"docutils literal notranslate\"><span class=\"pre\">include</span></code> parameter and set its value to <code class=\"docutils literal notranslate\"><span class=\"pre\">years</span></code>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitle%2F11%3Fencoding%3Djson%26include%3Dyears\"><img alt=\"Try it!\" src=\"../_images/try-trove-api-console.svg\"/></a></p>", "a[href=\"newspapers-and-gazettes-pages.html#get-a-list-of-front-page-urls\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id11\" role=\"doc-backlink\">Get a list of front page urls</a><a class=\"headerlink\" href=\"#get-a-list-of-front-page-urls\" title=\"Permalink to this heading\">#</a></h3><p>As <a class=\"reference internal\" href=\"newspapers-and-gazettes-issues.html\"><span class=\"doc std std-doc\">described elsewhere</span></a>, you can get information about individual issues from the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints. The issue data includes a <code class=\"docutils literal notranslate\"><span class=\"pre\">date</span></code> and a <code class=\"docutils literal notranslate\"><span class=\"pre\">url</span></code>. If you request the url you are redirected to the first page of that issue. Therefore, by working through each issue, it\u2019s possible to get a list of all of the front page urls for a particular newspaper. Here\u2019s an example:</p>", "a[href=\"#details-of-issues-within-a-date-range\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">Details of issues within a date range</a><a class=\"headerlink\" href=\"#details-of-issues-within-a-date-range\" title=\"Permalink to this heading\">#</a></h3><p>You can also use the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints to get some details about individual issues, including their date and identifier. To do this you add the <code class=\"docutils literal notranslate\"><span class=\"pre\">range</span></code> parameter to your request, and set its value to a date range using the format <code class=\"docutils literal notranslate\"><span class=\"pre\">YYYYMMDD-YYYYMMDD</span></code>. For example to find issues published between 1930 and 1935, you\u2019d set the <code class=\"docutils literal notranslate\"><span class=\"pre\">range</span></code> parameter to <code class=\"docutils literal notranslate\"><span class=\"pre\">19300101-19351231</span></code>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitle%2F11%3Fencoding%3Djson%26include%3Dyears%26range%3D19300101-19351231\"><img alt=\"Try it!\" src=\"../_images/try-trove-api-console.svg\"/></a></p>", "a[href=\"#get-the-number-of-issues-per-year-for-a-title\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">Get the number of issues per year for a title</a><a class=\"headerlink\" href=\"#get-the-number-of-issues-per-year-for-a-title\" title=\"Permalink to this heading\">#</a></h3><p>You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints to get the total number of digitised issues per year for a newspaper or gazette title. You just add the <code class=\"docutils literal notranslate\"><span class=\"pre\">include</span></code> parameter and set its value to <code class=\"docutils literal notranslate\"><span class=\"pre\">years</span></code>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitle%2F11%3Fencoding%3Djson%26include%3Dyears\"><img alt=\"Try it!\" src=\"../_images/try-trove-api-console.svg\"/></a></p>", "a[href=\"#get-an-issue-as-a-pdf\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id6\" role=\"doc-backlink\">Get an issue as a PDF</a><a class=\"headerlink\" href=\"#get-an-issue-as-a-pdf\" title=\"Permalink to this heading\">#</a></h3><p>You can download a newspaper or gazette issue as a PDF from the web interface.</p>"}
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
