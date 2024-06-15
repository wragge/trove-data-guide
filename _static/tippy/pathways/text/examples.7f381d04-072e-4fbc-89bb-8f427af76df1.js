selector_to_html = {"a[href=\"newspapers-keywords.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Analysing keywords in Trove\u2019s digitised newspapers<a class=\"headerlink\" href=\"#analysing-keywords-in-troves-digitised-newspapers\" title=\"Link to this heading\">#</a></h1><p>You want to explore differences in language use across a collection of digitised newspaper articles. The <a class=\"reference external\" href=\"https://www.atap.edu.au/\">Australian Text Analytics Platform</a> provides a <a class=\"reference external\" href=\"https://github.com/Australian-Text-Analytics-Platform/keywords-analysis\">Keywords Analysis tool</a> that helps you examine whether particular words are over or under-represented across collections of text. But how do get data from Trove\u2019s newspapers to the keyword analysis tool?</p>", "a[href=\"#tutorials-and-examples\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">27.3. </span>Tutorials and examples<a class=\"headerlink\" href=\"#tutorials-and-examples\" title=\"Link to this heading\">#</a></h1><h2>Tutorials<a class=\"headerlink\" href=\"#tutorials\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#examples-from-the-glam-workbench\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Examples from the GLAM Workbench<a class=\"headerlink\" href=\"#examples-from-the-glam-workbench\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#tutorials\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Tutorials<a class=\"headerlink\" href=\"#tutorials\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#other-examples\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Other examples<a class=\"headerlink\" href=\"#other-examples\" title=\"Link to this heading\">#</a></h2>"}
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
