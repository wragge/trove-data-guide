selector_to_html = {"a[href=\"#accessing-data-from-digitised-oral-histories\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Accessing data from digitised oral histories<a class=\"headerlink\" href=\"#accessing-data-from-digitised-oral-histories\" title=\"Permalink to this heading\">#</a></h1><p>Note about licence.</p><p>To get a list of audio files (and other info), load JS from url like this: <a class=\"reference external\" href=\"https://nla.gov.au/tarkine/listen/transcript/nla.obj-219744819.js\">https://nla.gov.au/tarkine/listen/transcript/nla.obj-219744819.js</a> (changing the ID as required)</p>", "a[href=\"#metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h2><p>Search params:</p>", "a[href=\"#transcripts-and-summaries\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Transcripts and summaries<a class=\"headerlink\" href=\"#transcripts-and-summaries\" title=\"Permalink to this heading\">#</a></h2><p>Using nla.obj id</p>", "a[href=\"#audio-files\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Audio files<a class=\"headerlink\" href=\"#audio-files\" title=\"Permalink to this heading\">#</a></h2><p>Get file ids from javascript</p>"}
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
