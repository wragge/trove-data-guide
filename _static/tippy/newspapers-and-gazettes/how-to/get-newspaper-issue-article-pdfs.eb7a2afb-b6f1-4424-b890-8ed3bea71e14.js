selector_to_html = {"a[href=\"#how-to-get-a-newspaper-issue-or-article-as-a-pdf\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">16.1. </span>HOW TO: Get a newspaper issue or article as a PDF<a class=\"headerlink\" href=\"#how-to-get-a-newspaper-issue-or-article-as-a-pdf\" title=\"Permalink to this heading\">#</a></h1><p>You can download PDFs of newspaper and gazette articles, pages, and issues from Trove\u2019s web interface \u2013 it\u2019s just a matter of clicking a button. But downloading PDFs using computational methods is not so straightforward. When you click on the buttons in the web interface, you don\u2019t download the PDF from a fixed url. There\u2019s a bit of Javascript code behind the button that asks for for the PDF to be compiled, then alerts the user when it\u2019s ready. To automate the download process, you need to reproduce these steps in your code. This how-to provides an example of how this can be done using Python.</p>", "a[href=\"#get-a-pdf-of-an-article\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Get a PDF of an article<a class=\"headerlink\" href=\"#get-a-pdf-of-an-article\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#get-a-pdf-of-an-issue\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Get a PDF of an issue<a class=\"headerlink\" href=\"#get-a-pdf-of-an-issue\" title=\"Permalink to this heading\">#</a></h2>"}
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
