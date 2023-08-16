selector_to_html = {"a[href=\"#downloading-data-from-the-trove-web-interface\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12.1. </span>Downloading data from the Trove web interface<a class=\"headerlink\" href=\"#downloading-data-from-the-trove-web-interface\" title=\"Permalink to this heading\">#</a></h1><h2>Downloading images, PDFs, text, and audio<a class=\"headerlink\" href=\"#downloading-images-pdfs-text-and-audio\" title=\"Permalink to this heading\">#</a></h2><p>The official Trove Help includes a page on <a class=\"reference external\" href=\"https://trove.nla.gov.au/help/using-trove/downloading\">Downloading</a> that describes the options available in the various Trove categories for downloading images, PDFs, text, and audio. Different formats have different viewers, but generally speaking you just need to find the download tab in the sidebar, select a format, and click the button.</p>", "a[href=\"#downloading-images-pdfs-text-and-audio\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Downloading images, PDFs, text, and audio<a class=\"headerlink\" href=\"#downloading-images-pdfs-text-and-audio\" title=\"Permalink to this heading\">#</a></h2><p>The official Trove Help includes a page on <a class=\"reference external\" href=\"https://trove.nla.gov.au/help/using-trove/downloading\">Downloading</a> that describes the options available in the various Trove categories for downloading images, PDFs, text, and audio. Different formats have different viewers, but generally speaking you just need to find the download tab in the sidebar, select a format, and click the button.</p>", "a[href=\"#download-tag\"]": "<figure class=\"align-default\" id=\"download-tag\">\n<a class=\"reference internal image-reference\" href=\"../_images/web-download-example.png\"><img alt=\"../_images/web-download-example.png\" src=\"../_images/web-download-example.png\" style=\"width: 300px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 12.1 </span><span class=\"caption-text\">Example of the download tab in the digitised magazines and newsletters viewer</span><a class=\"headerlink\" href=\"#download-tag\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
