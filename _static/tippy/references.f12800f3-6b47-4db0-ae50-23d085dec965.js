selector_to_html = {"a[href=\"https://doi.org/10.1080/14443058.2022.2124303\"]": "\n<div>\n    <h3>\u201cFor Gorsake, Stop Laughing: This is Serious!\u201d\u2014Australia\u2019s Fragile Cartooning Archive</h3>\n    \n    <p><b>Authors:</b> Robert Phiddian, Stephanie Brookes, Lindsay Foyle, Richard Scully</p>\n    \n    <p><b>Publisher:</b> Informa UK Limited</p>\n    <p><b>Published:</b> 2022-11-1</p>\n</div>", "a[href=\"https://doi.org/10.5281/zenodo.5595420\"]": "\n<div>\n    <h3>\u201cFor Gorsake, Stop Laughing: This is Serious!\u201d\u2014Australia\u2019s Fragile Cartooning Archive</h3>\n    \n    <p><b>Authors:</b> Robert Phiddian, Stephanie Brookes, Lindsay Foyle, Richard Scully</p>\n    \n    <p><b>Publisher:</b> Informa UK Limited</p>\n    <p><b>Published:</b> 2022-11-1</p>\n</div>", "a[href=\"https://doi.org/10.1045/march2009-holley\"]": "\n<div>\n    <h3>How Good Can It Get?</h3>\n    \n    <p><b>Authors:</b> Rose Holley</p>\n    \n    <p><b>Publisher:</b> CNRI Acct</p>\n    <p><b>Published:</b> 2009-3-16</p>\n</div>", "a[href=\"https://doi.org/10.1045/march2011-holley\"]": "\n<div>\n    <h3>Resource Sharing in Australia: Find and Get in Trove - Making \"Getting\" Better</h3>\n    \n    <p><b>Authors:</b> Rose Holley</p>\n    \n    <p><b>Publisher:</b> CNRI Acct</p>\n    <p><b>Published:</b> 2011-3-15</p>\n</div>", "a[href=\"https://doi.org/10.5281/zenodo.5035855\"]": "\n<div>\n    <h3>Resource Sharing in Australia: Find and Get in Trove - Making \"Getting\" Better</h3>\n    \n    <p><b>Authors:</b> Rose Holley</p>\n    \n    <p><b>Publisher:</b> CNRI Acct</p>\n    <p><b>Published:</b> 2011-3-15</p>\n</div>", "a[href=\"#references\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">References<a class=\"headerlink\" href=\"#references\" title=\"Link to this heading\">#</a></h1>"}
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
