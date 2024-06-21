selector_to_html = {"a[href=\"#diy-download-links\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">DIY download links<a class=\"headerlink\" href=\"#diy-download-links\" title=\"Link to this heading\">#</a></h2><p>Once you understand the structure of the download urls, you can create your own without using the web interface. All you need to know is a resource\u2019s NLA identifier and the number of pages/images it contains.</p><p>For example, <a class=\"reference external\" href=\"https://nla.gov.au/nla.obj-248742150\">The gold finder of Australia : how he went, how he fared, how he made his fortune</a> is a pamphlet published in 1853. It\u2019s NLA identifier is <code class=\"docutils literal notranslate\"><span class=\"pre\">nla.obj-248742150</span></code> and it has <code class=\"docutils literal notranslate\"><span class=\"pre\">80</span></code> pages. To download all of the OCRd text from this book, you\u2019d insert the identifier and set <code class=\"docutils literal notranslate\"><span class=\"pre\">lastPage</span></code> to <code class=\"docutils literal notranslate\"><span class=\"pre\">79</span></code> (<code class=\"docutils literal notranslate\"><span class=\"pre\">80</span></code> minus <code class=\"docutils literal notranslate\"><span class=\"pre\">1</span></code>):</p>", "a[href=\"#download-button\"]": "<figure class=\"align-default\" id=\"download-button\">\n<a class=\"reference internal image-reference\" href=\"../../_images/download-button.png\"><img alt=\"../../_images/download-button.png\" src=\"../../_images/download-button.png\" style=\"width: 500px;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Download options for a digitised book</span><a class=\"headerlink\" href=\"#download-button\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"extract-embedded-metadata.html#digitised-howto-embedded-pages\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">25.2.4. </span>Get information about pages<a class=\"headerlink\" href=\"#get-information-about-pages\" title=\"Link to this heading\">#</a></h2><p>Books and periodical issues should include <code class=\"docutils literal notranslate\"><span class=\"pre\">page</span></code> data in the <code class=\"docutils literal notranslate\"><span class=\"pre\">children</span></code> field. To find the number of pages, you just need to get the length of the <code class=\"docutils literal notranslate\"><span class=\"pre\">page</span></code> list.</p>", "a[href=\"extract-embedded-metadata.html#digitised-howto-embedded-extract-metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">25.2.2. </span>Extracting the metadata<a class=\"headerlink\" href=\"#extracting-the-metadata\" title=\"Link to this heading\">#</a></h2><p>The function to extract the metadata is fairly straightforward. It loads the viewer\u2019s HTML code and uses a regular expression to find and extract the embedded JSON string. It expects an <code class=\"docutils literal notranslate\"><span class=\"pre\">nla.obj</span></code> identifier. For the image and map viewers, this is the identifier of an individual item. For the book and journal viewer you can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">nla.obj</span></code> identifier for the book, issue, page, or article. This is because page and article identifiers are redirected to issues. Here\u2019s a full examp[le that extracts the embedded metadata for the book <a class=\"reference external\" href=\"https://nla.gov.au/nla.obj-362059651\"><em>Lord Robert Cecil\u2019s gold fields diary</em></a>.</p>", "a[href=\"#background\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Background<a class=\"headerlink\" href=\"#background\" title=\"Link to this heading\">#</a></h2><p>You can download text, images, and PDFs from individual digitised items using the Trove web interface. But only the text of periodical articles is available for machine access through the Trove API. This makes it difficult to assemble datasets, or build processing pipelines involving digitised resources.</p><p>This page documents a workaround developed by reverse-engineering the download link used by the Trove web interface. You can use it to automate the download of text, images, and PDFs from many digitised resources.</p>", "a[href=\"#download-selected-pages\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Download selected pages<a class=\"headerlink\" href=\"#download-selected-pages\" title=\"Link to this heading\">#</a></h2><p>You don\u2019t have to ask for everything at once. By adjusting the <code class=\"docutils literal notranslate\"><span class=\"pre\">firstPage</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">lastPage</span></code> values, you can download a specific range of pages. If you wanted the first ten pages of <em>The gold finder of Australia</em> as zipped images, you\u2019d set <code class=\"docutils literal notranslate\"><span class=\"pre\">firstPage</span></code> to <code class=\"docutils literal notranslate\"><span class=\"pre\">0</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">lastPage</span></code> to <code class=\"docutils literal notranslate\"><span class=\"pre\">9</span></code>:</p><p><a href=\"https://nla.gov.au/nla.obj-248742150/download?downloadOption=zip&amp;firstPage=0&amp;lastPage=9\">https://nla.gov.au/nla.obj-248742150/download?downloadOption=zip&amp;firstPage=0&amp;lastPage=9</a></p>", "a[href=\"#limitations-and-alternatives\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Limitations and alternatives<a class=\"headerlink\" href=\"#limitations-and-alternatives\" title=\"Link to this heading\">#</a></h2><p>This method works really well if you want to get all the OCRd text out of books or periodical issues. It\u2019s also handy if you want to download selected pages or images, such as the front covers of periodicals.</p><p>However, if your aim is to download all the images from a collection of items then there are two potential problems. The first is that the download link doesn\u2019t always provide images at their highest available resolution. This particularly seems to be the case with manuscript and photographic collections.</p>", "a[href=\"#understanding-troves-download-link\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Understanding Trove\u2019s download link<a class=\"headerlink\" href=\"#understanding-troves-download-link\" title=\"Link to this heading\">#</a></h2><p>Trove\u2019s digitised object viewers include a \u2018Download\u2019 tab that provides options for downloading the current item.</p>", "a[href=\"#how-to-get-text-images-and-pdfs-using-troves-download-link\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">HOW TO: Get text, images, and PDFs using Trove\u2019s download link<a class=\"headerlink\" href=\"#how-to-get-text-images-and-pdfs-using-troves-download-link\" title=\"Link to this heading\">#</a></h1><h2>Background<a class=\"headerlink\" href=\"#background\" title=\"Link to this heading\">#</a></h2><p>You can download text, images, and PDFs from individual digitised items using the Trove web interface. But only the text of periodical articles is available for machine access through the Trove API. This makes it difficult to assemble datasets, or build processing pipelines involving digitised resources.</p><p>This page documents a workaround developed by reverse-engineering the download link used by the Trove web interface. You can use it to automate the download of text, images, and PDFs from many digitised resources.</p>", "a[href=\"#how-do-you-know-the-number-of-pages\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">How do you know the number of pages?<a class=\"headerlink\" href=\"#how-do-you-know-the-number-of-pages\" title=\"Link to this heading\">#</a></h2><p>The value of this method lies in the fact that it can be used programatically to download large collections of digitised items without any manual intervention. But to do that you need some way of finding out the number of pages or images in each item so you can set the <code class=\"docutils literal notranslate\"><span class=\"pre\">lastPage</span></code> value. This information isn\u2019t included in the metadata from the API, and so requires a little extra effort to extract.</p><p>The approach varies depending on the type of resource.</p>"}
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