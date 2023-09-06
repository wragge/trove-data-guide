selector_to_html = {"a[href=\"#newspaper-and-gazettes-how-to\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Newspaper and gazettes how to\u2026<a class=\"headerlink\" href=\"#newspaper-and-gazettes-how-to\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"create-newspaper-articles-dataset.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">How to create a dataset of digitised newspaper articles<a class=\"headerlink\" href=\"#how-to-create-a-dataset-of-digitised-newspaper-articles\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"querypic.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Visualising newspaper searches with QueryPic<a class=\"headerlink\" href=\"#visualising-newspaper-searches-with-querypic\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"get-newspaper-issue-article-pdfs.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Get a newspaper issue or article as a PDF<a class=\"headerlink\" href=\"#get-a-newspaper-issue-or-article-as-a-pdf\" title=\"Permalink to this heading\">#</a></h1><p>You can download PDFs of newspaper and gazette articles, pages, and issues from Trove\u2019s web interface \u2013 it\u2019s just a matter of clicking a button. But downloading PDFs using computational methods is not so straightforward. When you click on the buttons in the web interface, you don\u2019t download the PDF from a fixed url. There\u2019s a bit of Javascript code behind the button that asks for for the PDF to be compiled, then alerts the user when it\u2019s ready. To automate the download process, you need to reproduce these steps in your code. This how-to provides an example of how this can be done using Python.</p>", "a[href=\"international-newspaper-titles.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Get a list of \u2018International\u2019 newspapers and gazettes<a class=\"headerlink\" href=\"#get-a-list-of-international-newspapers-and-gazettes\" title=\"Permalink to this heading\">#</a></h1>"}
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
