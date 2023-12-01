selector_to_html = {"a[href=\"#oral-histories\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4. </span>Oral histories<a class=\"headerlink\" href=\"#oral-histories\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"overview.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4.1. </span>Overview of oral histories<a class=\"headerlink\" href=\"#overview-of-oral-histories\" title=\"Permalink to this heading\">#</a></h1><p>The National Library of Australia holds over <a class=\"reference external\" href=\"https://www.nla.gov.au/collections/what-we-collect/oral-history-and-folklore\">55,000 hours of oral history and folklore recordings</a> dating back to the 1950s. This collection is being made available online, and many recordings can now be listened to using <a class=\"reference external\" href=\"https://trove.nla.gov.au/help/navigating/audio-player\">Trove\u2019s audio player</a>.</p>", "a[href=\"accessing-data.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4.2. </span>Accessing data from digitised oral histories<a class=\"headerlink\" href=\"#accessing-data-from-digitised-oral-histories\" title=\"Permalink to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">Identifiers</a><a class=\"headerlink\" href=\"#identifiers\" title=\"Permalink to this heading\">#</a></h2><p>Digitised oral histories are uniquely identified by a <code class=\"docutils literal notranslate\"><span class=\"pre\">nla.obj</span></code> identifier, for example: <code class=\"docutils literal notranslate\"><span class=\"pre\">nla.obj-220905784</span></code>.</p><p>You can find these identifiers in the web interface and in API results. In the web interface, for example, the \u2018Listen\u2019 link from <a class=\"reference external\" href=\"https://trove.nla.gov.au/work/245550803\">this oral history record</a> goes to the url <a class=\"reference external\" href=\"https://nla.gov.au/nla.obj-220905784\">https://nla.gov.au/nla.obj-220905784</a> which opens the audio player.</p>"}
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
