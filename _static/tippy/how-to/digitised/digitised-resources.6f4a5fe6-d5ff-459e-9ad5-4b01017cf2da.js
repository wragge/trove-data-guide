selector_to_html = {"a[href=\"get-collection-items.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">22.1. </span>HOW TO: Get a list of items in a digitised collection<a class=\"headerlink\" href=\"#how-to-get-a-list-of-items-in-a-digitised-collection\" title=\"Permalink to this heading\">#</a></h1><p>The NLA\u2019s digitised resources are often presented as \u2018collections\u2019. A collection could be the volumes in a multi-volume work, the issues of a periodical, a map series, an album of photographs, or a manuscript collection. In the web interface, collections will have a \u2018Browse this collection\u2019 link or button that displays a list of the contents, but getting machine-readable data is not so straightforward. You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">magazine/title</span></code> API endpoint to get a list of issues from a periodical, but there\u2019s no way to get the contents of other types of collections from the Trove API.</p><p><mark>==Insert screencap==</mark></p>", "a[href=\"#digitised-resources\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">22. </span>Digitised resources<a class=\"headerlink\" href=\"#digitised-resources\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"download-items-text-images.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">22.2. </span>HOW TO: Automate the download of digitised items as text, images, or PDFs<a class=\"headerlink\" href=\"#how-to-automate-the-download-of-digitised-items-as-text-images-or-pdfs\" title=\"Permalink to this heading\">#</a></h1><p>You can download text, images, and PDFs from individual digitised items <span class=\"xref myst\">using the Trove web interface</span>. But only the text of periodical articles is available for machine access through the Trove API. This makes it difficult to assemble datasets, or build processing pipelines involving digitised resources. This page documents a series of work arounds that enable you to automate the download of digitised items as text, images, or PDFs.</p>"}
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
