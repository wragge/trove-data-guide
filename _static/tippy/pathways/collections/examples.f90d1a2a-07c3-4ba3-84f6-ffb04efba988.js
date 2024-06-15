selector_to_html = {"a[href=\"#examples-from-the-glam-workbench\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Examples from the GLAM Workbench<a class=\"headerlink\" href=\"#examples-from-the-glam-workbench\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#tutorials\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Tutorials<a class=\"headerlink\" href=\"#tutorials\" title=\"Link to this heading\">#</a></h2>", "a[href=\"collectionbuilder.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Sharing a Trove List as a CollectionBuilder exhibition<a class=\"headerlink\" href=\"#sharing-a-trove-list-as-a-collectionbuilder-exhibition\" title=\"Link to this heading\">#</a></h1><p>You\u2019ve been collecting and annotating items relating to your research project in a Trove List. You\u2019d like to display the contents of your list as an online exhibition for others to explore. <a class=\"reference external\" href=\"https://collectionbuilder.github.io/\">CollectionBuilder</a> creates online exhibitions using static web technologies. But how do you get your List data from Trove into CollectionBuilder?</p>", "a[href=\"#tutorials-and-examples\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">31.2. </span>Tutorials and examples<a class=\"headerlink\" href=\"#tutorials-and-examples\" title=\"Link to this heading\">#</a></h1><h2>Tutorials<a class=\"headerlink\" href=\"#tutorials\" title=\"Link to this heading\">#</a></h2>"}
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
