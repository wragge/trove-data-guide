selector_to_html = {"a[href=\"#timegates-timemaps-and-mementos\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Timegates, Timemaps, and Mementos<a class=\"headerlink\" href=\"#timegates-timemaps-and-mementos\" title=\"Link to this heading\">#</a></h1><p>The NLA has frequently said that the Australian Web Archive has no API. This is not strictly true. You can\u2019t retrieve search results from the AWA in a machine-readable form as you can with other Trove categories. But the software used by the AWA supports the <a class=\"reference external\" href=\"https://datatracker.ietf.org/doc/html/rfc7089\">Memento protocol</a> and allows requests for certain types of machine-readable information. It\u2019s just baked in to the system.</p><p>In particular, the AWA supports two Memento-compliant API requests:</p>", "a[href=\"#timegates\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Timegates<a class=\"headerlink\" href=\"#timegates\" title=\"Link to this heading\">#</a></h2><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">Link</span></code> parameter contains the Memento information. You can see that it\u2019s actually providing information on four types of link:</p>", "a[href=\"#timemap\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Timemap<a class=\"headerlink\" href=\"#timemap\" title=\"Link to this heading\">#</a></h2>"}
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
