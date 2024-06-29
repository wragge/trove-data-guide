selector_to_html = {"a[href=\"accessing-data/trove-api-intro.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">14. </span>Trove API introduction<a class=\"headerlink\" href=\"#trove-api-introduction\" title=\"Link to this heading\">#</a></h1><p>Use the Trove Application Programming Interface (API) to get direct access to Trove data. Just make a request  and get back data in a predictable, structured format that computers can understand.</p>", "a[href=\"#term-Metadata\"]": "<dt id=\"term-Metadata\">Metadata</dt><dd><p>An indented explanation of term 1</p></dd>", "a[href=\"#term-OCR\"]": "<dt id=\"term-OCR\">OCR</dt><dd><p>Optical Character Recognition</p></dd>", "a[href=\"#term-Application-Programming-Interface-API\"]": "<dt id=\"term-Application-Programming-Interface-API\">Application Programming Interface (API)</dt><dd><p>definition</p></dd>", "a[href=\"#term-Endpoint\"]": "<dt id=\"term-Endpoint\">Endpoint</dt><dd><p>The path to a specific API request, see <a class=\"reference internal\" href=\"accessing-data/trove-api-intro.html\"><span class=\"doc std std-doc\">Trove API introduction</span></a>.</p></dd>", "a[href=\"#term-Screen-scraping\"]": "<dt id=\"term-Screen-scraping\">Screen scraping</dt><dd><p>definition</p></dd>", "a[href=\"#term-url-hacking\"]": "<dt id=\"term-url-hacking\">url hacking</dt><dd><p>definition</p></dd>", "a[href=\"#term-Machine-readable\"]": "<dt id=\"term-Machine-readable\">Machine readable</dt><dd><p>definition</p></dd>", "a[href=\"#glossary\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Glossary<a class=\"headerlink\" href=\"#glossary\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#term-CSV\"]": "<dt id=\"term-CSV\">CSV</dt><dd><p>An indented explanation of term2</p></dd>"}
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
