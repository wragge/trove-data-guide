selector_to_html = {"a[href=\"#ocr-quality-and-correction\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">OCR quality and correction<a class=\"headerlink\" href=\"#ocr-quality-and-correction\" title=\"Link to this heading\">#</a></h1><p>This section will examine how the quality of OCR varies across the corpus and the significance of this for research uses. It will also look at patterns in OCR correction \u2013 what gets corrected and why.</p><p>See: <a class=\"reference external\" href=\"https://glam-workbench.net/trove-newspapers/Analysing_OCR_corrections/\">Analyse rates of OCR correction</a></p>"}
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
