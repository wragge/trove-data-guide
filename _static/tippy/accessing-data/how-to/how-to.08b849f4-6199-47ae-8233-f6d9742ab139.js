selector_to_html = {"a[href=\"#how-to\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4. </span>How to<a class=\"headerlink\" href=\"#how-to\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"harvest-complete-results.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4.2. </span>HOW TO: Harvest a complete set of search results using the Trove API<a class=\"headerlink\" href=\"#how-to-harvest-a-complete-set-of-search-results-using-the-trove-api\" title=\"Permalink to this heading\">#</a></h1><p>See <a class=\"reference internal\" href=\"../trove-api-intro.html\"><span class=\"doc\">Trove API introduction</span></a> for general information about using the Trove API.</p>", "a[href=\"download-higher-resolution-images.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4.1. </span>HOW TO: Download higher resolution versions of images from the web interface<a class=\"headerlink\" href=\"#how-to-download-higher-resolution-versions-of-images-from-the-web-interface\" title=\"Permalink to this heading\">#</a></h1><p>One confusing, and often frustrating, aspect of <a class=\"reference internal\" href=\"../using-web-interface.html#downloading-images-web-interface\"><span class=\"std std-ref\">image downloads via the Trove web interface</span></a> is their resolution. You can use the Trove image viewer to zoom right in to many photographs and manuscripts, enabling you to pick up fine details. But if you download the same image you could find the resolution is much lower. This means you\u2019re limited in how you can use the downloaded image. The available resolutions vary across categories and formats, and you really don\u2019t know what you\u2019ll get until you download it. Many manuscripts, in particular, seem to have low-resolution downloads, which doesn\u2019t help you much when you\u2019re trying to decipher someone\u2019s handwriting!</p><p>Here\u2019s a couple of ways to get higher resolution versions.</p>"}
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
