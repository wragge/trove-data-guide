selector_to_html = {"a[href=\"#ardc-community-data-lab\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">ARDC Community Data Lab<a class=\"headerlink\" href=\"#ardc-community-data-lab\" title=\"Link to this heading\">#</a></h2><p>These tools are developed, maintained or supported by the Community Data Lab or other projects within the HASS&amp;I Research Data Commons.</p>", "a[href=\"#tools-and-resources\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">28.2. </span>Tools and resources<a class=\"headerlink\" href=\"#tools-and-resources\" title=\"Link to this heading\">#</a></h1><h2>ARDC Community Data Lab<a class=\"headerlink\" href=\"#ardc-community-data-lab\" title=\"Link to this heading\">#</a></h2><p>These tools are developed, maintained or supported by the Community Data Lab or other projects within the HASS&amp;I Research Data Commons.</p>", "a[href=\"#other-tools-and-resources\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Other tools and resources<a class=\"headerlink\" href=\"#other-tools-and-resources\" title=\"Link to this heading\">#</a></h2>"}
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
