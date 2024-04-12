selector_to_html = {"a[href=\"#tutorials-and-examples\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Tutorials and examples<a class=\"headerlink\" href=\"#tutorials-and-examples\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#structured-data\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24.3. </span>Structured data<a class=\"headerlink\" href=\"#structured-data\" title=\"Link to this heading\">#</a></h1><h2>Structured data in Trove<a class=\"headerlink\" href=\"#structured-data-in-trove\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#tools-and-resources\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Tools and resources<a class=\"headerlink\" href=\"#tools-and-resources\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#structured-data-in-trove\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Structured data in Trove<a class=\"headerlink\" href=\"#structured-data-in-trove\" title=\"Link to this heading\">#</a></h2>"}
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
