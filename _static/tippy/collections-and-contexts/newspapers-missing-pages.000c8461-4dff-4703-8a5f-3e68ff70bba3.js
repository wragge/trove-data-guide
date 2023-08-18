selector_to_html = {"a[href=\"#missing-newspaper-pages-and-issues\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">9.2. </span>Missing newspaper pages and issues<a class=\"headerlink\" href=\"#missing-newspaper-pages-and-issues\" title=\"Permalink to this heading\">#</a></h1><p>This section will attempt some analysis of missing pages and issues in Trove\u2019s newspapers. As of 11 August 2023, I\u2019m running a very long harvest of essentially every article in Trove to try and get an idea of what\u2019s missing. This will never be precise, but it should at least provide a baseline and point to specific titles and periods that seem to be more affected.</p><p>Here\u2019s a <a class=\"reference external\" href=\"https://hcommons.social/@wragge/110845292959103039\">quick example using the Canberra Times</a>.</p>"}
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
