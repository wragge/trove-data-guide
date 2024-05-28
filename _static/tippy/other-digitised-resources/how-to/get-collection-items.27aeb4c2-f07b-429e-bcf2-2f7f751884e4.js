selector_to_html = {"a[href=\"#how-to-get-a-list-of-items-in-a-digitised-collection\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">25.1. </span>HOW TO: Get a list of items in a digitised collection<a class=\"headerlink\" href=\"#how-to-get-a-list-of-items-in-a-digitised-collection\" title=\"Link to this heading\">#</a></h1><h2>Background<a class=\"headerlink\" href=\"#background\" title=\"Link to this heading\">#</a></h2><p>The NLA\u2019s digitised resources are often presented as \u2018collections\u2019. A collection could be the volumes in a multi-volume work, the issues of a periodical, a map series, an album of photographs, or a manuscript collection. In the web interface, collections will have a \u2018Browse this collection\u2019 link or button that displays a list of the contents, but getting machine-readable data is not so straightforward. You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">magazine/title</span></code> API endpoint to get a list of issues from a periodical, but there\u2019s no way to get the contents of other types of collections from the Trove API.</p>", "a[href=\"#handling-collections-within-collections\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Handling collections within collections<a class=\"headerlink\" href=\"#handling-collections-within-collections\" title=\"Link to this heading\">#</a></h2><p>The code above works fine if the collection is a simple, flat hierarchy with no sub-collections. However, sometimes collections in Trove are more complex. For example, <a class=\"reference external\" href=\"https://nla.gov.au/nla.obj-147116770\">this collection of photographs</a> includes albums, sketchbooks, and other groups, which are treated as sub-collections with their own child items. To harvest the details of all the items in collections like this you have to recurse your way through all levels of the hierarchy.</p>", "a[href=\"#a-basic-example\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">A basic example<a class=\"headerlink\" href=\"#a-basic-example\" title=\"Link to this heading\">#</a></h2><p>The code below loops through the complete set of items in a collection by updating the <code class=\"docutils literal notranslate\"><span class=\"pre\">startIdx</span></code> value after each request.</p>", "a[href=\"#trove-image-collection\"]": "<figure class=\"align-default\" id=\"trove-image-collection\">\n<img alt=\"../../_images/trove-image-collection.png\" src=\"../../_images/trove-image-collection.png\"/>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 25.1 </span><span class=\"caption-text\">Example of a collection of photographs in Trove, <a class=\"reference external\" href=\"https://nla.gov.au/nla.obj-147116770\">https://nla.gov.au/nla.obj-147116770</a></span><a class=\"headerlink\" href=\"#trove-image-collection\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"extract-embedded-metadata.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">25.3. </span>HOW TO: Extract additional metadata from the digitised resource viewer<a class=\"headerlink\" href=\"#how-to-extract-additional-metadata-from-the-digitised-resource-viewer\" title=\"Link to this heading\">#</a></h1><p>The viewers you use to examine digitised resources in Trove embed some metadata that isn\u2019t available through the Trove API. This includes a JSON-ified version of the item\u2019s MARC record (presumably copied from the NLA catalogue), as well as structural information used by the viewer itself, such as a list of pages in a digitised book.</p><p>This metadata can be useful in a number of different contexts. For example, you can extract the number of pages in a digitised book, then use this number to <a class=\"reference internal\" href=\"download-items-text-images.html\"><span class=\"doc std std-doc\">automatically download the full text or a PDF</span></a>. The GLAM Workbench includes an example where geospatial coordinates are extracted from the MARC data to add to a <a class=\"reference external\" href=\"https://glam-workbench.net/trove-maps/exploring-digitised-maps/\">harvest of digitised maps</a>.</p>", "a[href=\"#background\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Background<a class=\"headerlink\" href=\"#background\" title=\"Link to this heading\">#</a></h2><p>The NLA\u2019s digitised resources are often presented as \u2018collections\u2019. A collection could be the volumes in a multi-volume work, the issues of a periodical, a map series, an album of photographs, or a manuscript collection. In the web interface, collections will have a \u2018Browse this collection\u2019 link or button that displays a list of the contents, but getting machine-readable data is not so straightforward. You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">magazine/title</span></code> API endpoint to get a list of issues from a periodical, but there\u2019s no way to get the contents of other types of collections from the Trove API.</p>"}
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