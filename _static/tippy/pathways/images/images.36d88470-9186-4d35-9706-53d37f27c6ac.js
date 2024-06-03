selector_to_html = {"a[href=\"data-sources.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">28.1. </span>Data sources<a class=\"headerlink\" href=\"#data-sources\" title=\"Link to this heading\">#</a></h1><h2>Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">#</a></h2><p>These sections of the Trove Data Guide explain how to access images from different parts of Trove:</p>", "a[href=\"examples.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">28.3. </span>Tutorials and examples<a class=\"headerlink\" href=\"#tutorials-and-examples\" title=\"Link to this heading\">#</a></h1>", "a[href=\"tools.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">28.2. </span>Tools and resources<a class=\"headerlink\" href=\"#tools-and-resources\" title=\"Link to this heading\">#</a></h1><h2>ARDC Community Data Lab<a class=\"headerlink\" href=\"#ardc-community-data-lab\" title=\"Link to this heading\">#</a></h2><p>These tools are developed, maintained or supported by the Community Data Lab or other projects within the HASS&amp;I Research Data Commons.</p>", "a[href=\"#images\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">28. </span>Images<a class=\"headerlink\" href=\"#images\" title=\"Link to this heading\">#</a></h1><p>Trove includes millions of digital images. Most of these are digitised pages from books, newspapers, and periodicals, but there are also thousands of digitised photographs, pieces of ephemera, art works, and manuscripts.</p>"}
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
