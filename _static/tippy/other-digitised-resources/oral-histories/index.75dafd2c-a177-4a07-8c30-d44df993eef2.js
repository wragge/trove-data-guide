selector_to_html = {"a[href=\"#oral-histories\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24. </span>Oral histories<a class=\"headerlink\" href=\"#oral-histories\" title=\"Link to this heading\">#</a></h1>", "a[href=\"accessing-data.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24.2. </span>Accessing data from digitised oral histories<a class=\"headerlink\" href=\"#accessing-data-from-digitised-oral-histories\" title=\"Link to this heading\">#</a></h1><h2>Identifiers<a class=\"headerlink\" href=\"#identifiers\" title=\"Link to this heading\">#</a></h2><p>Digitised oral histories are uniquely identified by a <code class=\"docutils literal notranslate\"><span class=\"pre\">nla.obj</span></code> identifier, for example: <code class=\"docutils literal notranslate\"><span class=\"pre\">nla.obj-220905784</span></code>.</p><p>You can find these identifiers in the web interface and in API results. In the web interface, for example, the \u2018Listen\u2019 link from <a class=\"reference external\" href=\"https://trove.nla.gov.au/work/245550803\">this oral history record</a> goes to the url <a class=\"reference external\" href=\"https://nla.gov.au/nla.obj-220905784\">https://nla.gov.au/nla.obj-220905784</a> which opens the audio player.</p>", "a[href=\"overview.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24.1. </span>Overview of oral histories<a class=\"headerlink\" href=\"#overview-of-oral-histories\" title=\"Link to this heading\">#</a></h1><h2>Finding oral histories<a class=\"headerlink\" href=\"#finding-oral-histories\" title=\"Link to this heading\">#</a></h2><p>Items from the NLA\u2019s oral history collection can be found in Trove\u2019s <strong>Music, Audio, &amp; Video</strong> category. If you\u2019re only interested in what\u2019s available online, the standard approach to finding digitised resources seems to work effectively \u2013 <a class=\"reference external\" href=\"https://trove.nla.gov.au/search/category/music?keyword=%22nla.obj%22&amp;amp;l-format=Sound%2FInterview,%20lecture,%20talk&amp;amp;l-availability=y\">search in <strong>Music, Audio, &amp; Video</strong> category for <code class=\"docutils literal notranslate\"><span class=\"pre\">\"nla.obj\"</span></code>, with the <code class=\"docutils literal notranslate\"><span class=\"pre\">availability</span></code> facet set to <code class=\"docutils literal notranslate\"><span class=\"pre\">y</span></code>, and the <code class=\"docutils literal notranslate\"><span class=\"pre\">format</span></code> facet set to <code class=\"docutils literal notranslate\"><span class=\"pre\">Sound/Interview,</span> <span class=\"pre\">lecture,</span> <span class=\"pre\">talk</span></code></a>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22nla.obj%22%26category%3Dmusic%26l-format%3DSound%2FInterview%2C+lecture%2C+talk%26l-availability%3Dy%26encoding%3Djson&amp;amp;comment=\"><img alt=\"Try it!\" src=\"https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg\"/></a></p>"}
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
