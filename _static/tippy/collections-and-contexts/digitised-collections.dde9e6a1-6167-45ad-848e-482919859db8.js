selector_to_html = {"a[href=\"digitised-collections-books.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12.1. </span>Digitised books<a class=\"headerlink\" href=\"#digitised-books\" title=\"Permalink to this heading\">#</a></h1><p>See <a class=\"reference external\" href=\"https://glam-workbench.net/trove-books/\">Trove Books</a> section of GLAM Workbench.</p>", "a[href=\"digitised-collections-journals.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12.2. </span>Digitised maps<a class=\"headerlink\" href=\"#digitised-maps\" title=\"Permalink to this heading\">#</a></h1><p>See the <a class=\"reference external\" href=\"https://glam-workbench.net/trove-maps/\">Trove Maps</a> section of the GLAM Workbench.</p>", "a[href=\"digitised-collections-oral-history.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12.5. </span>Oral history<a class=\"headerlink\" href=\"#oral-history\" title=\"Permalink to this heading\">#</a></h1><p>See <a class=\"reference external\" href=\"https://glam-workbench.net/trove-books/\">Trove Books</a> section of GLAM Workbench.</p>", "a[href=\"digitised-collections-maps.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12.3. </span>Digitised journals and magazines<a class=\"headerlink\" href=\"#digitised-journals-and-magazines\" title=\"Permalink to this heading\">#</a></h1><p>See the <a class=\"reference external\" href=\"https://glam-workbench.net/trove-journals/\">Trove Journals</a> section of the GLAM Workbench.</p>", "a[href=\"digitised-collections-manuscripts.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12.4. </span>Digitised manuscripts<a class=\"headerlink\" href=\"#digitised-manuscripts\" title=\"Permalink to this heading\">#</a></h1><p>See the <a class=\"reference external\" href=\"https://glam-workbench.net/trove-unpublished/\">Trove Unpublished</a> section of the GLAM Workbench.</p>", "a[href=\"#digitised-collections\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12. </span>Digitised collections<a class=\"headerlink\" href=\"#digitised-collections\" title=\"Permalink to this heading\">#</a></h1><p>This section will explore digitised collections, other than newspapers.</p>"}
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
