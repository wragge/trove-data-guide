selector_to_html = {"a[href=\"#how-to-scrape-metadata-from-the-trove-audio-player\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">HOW TO: Scrape metadata from the Trove audio player<a class=\"headerlink\" href=\"#how-to-scrape-metadata-from-the-trove-audio-player\" title=\"Permalink to this heading\">#</a></h1><p>Trove\u2019s audio player displays some metadata that isn\u2019t included in the API records. This can include:</p>"}
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
