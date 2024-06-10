selector_to_html = {"a[href=\"#subcollection\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Subcollection?<a class=\"headerlink\" href=\"#subcollection\" title=\"Link to this heading\">#</a></h2><p>Subcollections are just items in the parent collection (ie the first image in the subcollection is an item in the parent).</p><p>There doesn\u2019t seem to be anything in the item metadata to indicate this.</p>", "a[href=\"#collection\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Collection<a class=\"headerlink\" href=\"#collection\" title=\"Link to this heading\">#</a></h2><p>Embedded metadata of collection:</p>", "a[href=\"#how-to-get-information-about-images-in-a-collection\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">HOW TO: Get information about images in a collection<a class=\"headerlink\" href=\"#how-to-get-information-about-images-in-a-collection\" title=\"Link to this heading\">#</a></h1><h2>Collection<a class=\"headerlink\" href=\"#collection\" title=\"Link to this heading\">#</a></h2><p>Embedded metadata of collection:</p>", "a[href=\"#item\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Item<a class=\"headerlink\" href=\"#item\" title=\"Link to this heading\">#</a></h2>"}
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
