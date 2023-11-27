selector_to_html = {"a[href=\"#other-possibilities\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Other possibilities<a class=\"headerlink\" href=\"#other-possibilities\" title=\"Permalink to this heading\">#</a></h2><p>Here I\u2019ve focused on methods you can use within your web browser to download a single image at high resolution. But what if you want all the covers of a journal, or all the documents in a manuscript collection? The <a class=\"reference internal\" href=\"../data-access-options.html\"><span class=\"doc std std-doc\">Accessing data</span></a> section describes a number of alternative approaches.</p>", "a[href=\"#url-hacking\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">URL hacking<a class=\"headerlink\" href=\"#url-hacking\" title=\"Permalink to this heading\">#</a></h2><p>There\u2019s an even easier way of getting high-resolution images from the web interface. All that\u2019s needed is a little <a class=\"reference internal\" href=\"../../glossary.html#term-url-hacking\"><span class=\"xref std std-term\">url hacking</span></a>. Here\u2019s a link to a page in one of Alfred Deakin\u2019s diaries:</p><p><a class=\"reference external\" href=\"https://nla.gov.au/nla.obj-226267069/view\">https://nla.gov.au/nla.obj-226267069/view</a></p>", "a[href=\"../../glossary.html#term-url-hacking\"]": "<dt id=\"term-url-hacking\">url hacking</dt><dd><p>definition</p></dd>", "a[href=\"../data-access-options.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1. </span>Data access options<a class=\"headerlink\" href=\"#data-access-options\" title=\"Permalink to this heading\">#</a></h1><p>There are many different <a class=\"reference internal\" href=\"../../what-is-trove/types-of-data.html\"><span class=\"doc std std-doc\">types of data</span></a> available from Trove and many different ways of accessing it. You can manually download some data, such as images, from Trove\u2019s web interface. If you\u2019re creating small, selective datasets, these manual methods might be all you need.</p><p>But what if you want to save <em>all</em> the results from a search, automate downloading of images and text, or create a pipeline to feed Trove data into a specific tool for analysis? In these sorts of cases, you need access methods that are reusable and extensible \u2013 methods that can be invoked using code and that deliver data in a <a class=\"reference internal\" href=\"../../glossary.html#term-Machine-readable\"><span class=\"xref std std-term\">machine readable</span></a> format that computers can manipulate.</p>", "a[href=\"#dezoomify\"]": "<figure class=\"align-default\" id=\"dezoomify\">\n<a class=\"reference internal image-reference\" href=\"../../_images/dezoomify.png\"><img alt=\"../../_images/dezoomify.png\" src=\"../../_images/dezoomify.png\" style=\"width: 500px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 5.4 </span><span class=\"caption-text\">Just paste a Trove url into the box and click the button to download the image.</span><a class=\"headerlink\" href=\"#dezoomify\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#cite-tab-image-id\"]": "<figure class=\"align-default\" id=\"cite-tab-image-id\">\n<a class=\"reference internal image-reference\" href=\"../../_images/cite-tab-image-identifier.png\"><img alt=\"../../_images/cite-tab-image-identifier.png\" src=\"../../_images/cite-tab-image-identifier.png\" style=\"width: 300px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 5.5 </span><span class=\"caption-text\">Get the image identifier from the \u2018Cite\u2019 tab</span><a class=\"headerlink\" href=\"#cite-tab-image-id\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#how-to-download-higher-resolution-versions-of-images-from-the-web-interface\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.1. </span>HOW TO: Download higher resolution versions of images from the web interface<a class=\"headerlink\" href=\"#how-to-download-higher-resolution-versions-of-images-from-the-web-interface\" title=\"Permalink to this heading\">#</a></h1><p>One confusing, and often frustrating, aspect of <a class=\"reference internal\" href=\"../using-web-interface.html#downloading-images-web-interface\"><span class=\"std std-ref\">image downloads via the Trove web interface</span></a> is their resolution. You can use the Trove image viewer to zoom right in to many photographs and manuscripts, enabling you to pick up fine details. But if you download the same image you could find the resolution is much lower. This means you\u2019re limited in how you can use the downloaded image. The available resolutions vary across categories and formats, and you really don\u2019t know what you\u2019ll get until you download it. Many manuscripts, in particular, seem to have low-resolution downloads, which doesn\u2019t help you much when you\u2019re trying to decipher someone\u2019s handwriting!</p><p>Here\u2019s a couple of ways to get higher resolution versions.</p>", "a[href=\"#use-dezoomify\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Use Dezoomify<a class=\"headerlink\" href=\"#use-dezoomify\" title=\"Permalink to this heading\">#</a></h2><p><a class=\"reference external\" href=\"https://dezoomify.ophir.dev/\">Dezoomify</a> is a really handy tool for downloading high resolution images from sites that provide \u2018deep zoom\u2019 image viewers. Deezoomify finds and downloads the highest available resolution from the image viewer, bypassing the download option (if there is one). Just cut and paste the url of the Trove image viewer into Dezoomify and click the button.</p>", "a[href=\"../using-web-interface.html#downloading-images-web-interface\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.1. </span>Downloading images, PDFs, text, and audio<a class=\"headerlink\" href=\"#downloading-images-pdfs-text-and-audio\" title=\"Permalink to this heading\">#</a></h2><p>Items that have been digitised by the NLA and made available through one of Trove\u2019s digitised item viewers can usually be downloaded in a variety of formats. This includes newspapers, books, journals, images, maps, manuscripts, and oral histories.</p><p>The official Trove Help includes a page on <a class=\"reference external\" href=\"https://trove.nla.gov.au/help/using-trove/downloading\">Downloading</a> that describes the options available in the various Trove categories for downloading images, PDFs, text, and audio. Different formats have different viewers, but generally speaking you just need to find the download tab in the sidebar, select a format, and click the button.</p>"}
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
