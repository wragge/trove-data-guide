selector_to_html = {"a[href=\"#newspaper-and-gazettes-how-to\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">27. </span>Newspaper and gazettes how to\u2026<a class=\"headerlink\" href=\"#newspaper-and-gazettes-how-to\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"get-newspaper-issue-article-pdfs.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">27.2. </span>HOW TO: Get a newspaper issue or article as a PDF<a class=\"headerlink\" href=\"#how-to-get-a-newspaper-issue-or-article-as-a-pdf\" title=\"Permalink to this heading\">#</a></h1><p>You can download PDFs of newspaper and gazette articles, pages, and issues from Trove\u2019s web interface \u2013 it\u2019s just a matter of clicking a button. But downloading PDFs using computational methods is not so straightforward. When you click on the buttons in the web interface, you don\u2019t download the PDF from a fixed url. There\u2019s a bit of Javascript code behind the button that asks for for the PDF to be compiled, then alerts the user when it\u2019s ready. To automate the download process, you need to reproduce these steps in your code. This how-to provides an example of how this can be done using Python.</p>", "a[href=\"querypic.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">27.1. </span>HOW TO: Visualising newspaper searches with QueryPic<a class=\"headerlink\" href=\"#how-to-visualising-newspaper-searches-with-querypic\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"get-ocr-coordinates.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">27.3. </span>HOW TO: Get information about the position of OCRd newspaper text<a class=\"headerlink\" href=\"#how-to-get-information-about-the-position-of-ocrd-newspaper-text\" title=\"Permalink to this heading\">#</a></h1><p>The OCR process not only extracts text from an image, it generates coordinates that document the position of each piece of text within the parent image. You could use this information to crop an image of the OCRd text out of the parent image. In the case of digitised newspapers, this sort of positional information could help you explore the layout and contents of newspaper pages and how this changes over time.</p><p>No positional information is available from the Trove API, however, there is some embedded within the web site. If you view the source of a newspaper article\u2019s web page, you\u2019ll find a number of <code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;input&gt;</span></code> tags like this:</p>", "a[href=\"create-newspaper-articles-dataset.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">27.4. </span>HOW TO: Create a dataset of digitised newspaper articles<a class=\"headerlink\" href=\"#how-to-create-a-dataset-of-digitised-newspaper-articles\" title=\"Permalink to this heading\">#</a></h1>"}
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
