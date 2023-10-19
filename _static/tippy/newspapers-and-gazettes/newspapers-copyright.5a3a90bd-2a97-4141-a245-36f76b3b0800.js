selector_to_html = {"a[href=\"#newspapers-and-copyright\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24. </span>Newspapers and copyright<a class=\"headerlink\" href=\"#newspapers-and-copyright\" title=\"Permalink to this heading\">#</a></h1><p>This section will examine both the impact of copyright restrictions on the construction of the Trove newspaper corpus, and the implications of copyright for researchers making use of digitised newspapers.</p><p>See <a class=\"reference external\" href=\"https://glam-workbench.net/trove-newspapers/Beyond_the_copyright_cliff_of_death/\">Beyond the copyright cliff of death</a> and <a class=\"reference external\" href=\"https://glam-workbench.net/trove-newspapers/csv-newspapers-post-54/\">Trove newspapers with articles published after 1954</a></p>"}
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
