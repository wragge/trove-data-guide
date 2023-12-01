selector_to_html = {"a[href=\"../glossary.html#term-Endpoint\"]": "<dt id=\"term-Endpoint\">Endpoint</dt><dd><p>The path to a specific API request, see <a class=\"reference internal\" href=\"../accessing-data/trove-api-intro.html\"><span class=\"doc std std-doc\">Trove API introduction</span></a>.</p></dd>", "a[href=\"../newspapers-and-gazettes/data/pages.html#get-a-list-of-front-page-urls\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id12\" role=\"doc-backlink\">Get a list of front page identifiers</a><a class=\"headerlink\" href=\"#get-a-list-of-front-page-identifiers\" title=\"Permalink to this heading\">#</a></h3><p>As <a class=\"reference internal\" href=\"../newspapers-and-gazettes/data/issues.html\"><span class=\"doc std std-doc\">described in the section on newspaper issues</span></a>, you can get information about individual issues from the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints. The issue data includes a <code class=\"docutils literal notranslate\"><span class=\"pre\">date</span></code> and a <code class=\"docutils literal notranslate\"><span class=\"pre\">url</span></code>. But if you request the issue url you\u2019re redirected to the first <em>page</em> of that issue! This means that you can start with a newspaper, request a list of issues, and then capture the identifiers of all the front pages. Here\u2019s a full example:</p>", "a[href=\"#other-digitised-resources\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\"><span class=\"section-number\">5.3. </span>Other digitised resources</a><a class=\"headerlink\" href=\"#other-digitised-resources\" title=\"Permalink to this heading\">#</a></h2><p>Beyond newspapers things get a bit more complicated. As noted above, the rest of the NLA\u2019s digitised resources share a single identifier pattern starting starting with <code class=\"docutils literal notranslate\"><span class=\"pre\">http://nla.gov.au/nla.obj</span></code>. This applies to all formats, and all the physical and logical components that combine to display the resource online. For example, <a class=\"reference external\" href=\"https://trove.nla.gov.au/work/20435169/version/44804862\">three volumes of <em>The Mammals of Australia</em> by John Gould</a> have been digitised and are available online in Trove. Here are the different types of identifiers used to organise and deliver this one publication:</p>", "a[href=\"#web-archives\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id6\" role=\"doc-backlink\"><span class=\"section-number\">5.6. </span>Web archives</a><a class=\"headerlink\" href=\"#web-archives\" title=\"Permalink to this heading\">#</a></h2><p>The Australian Web Archive doesn\u2019t use formal identifiers, however, links have a specific format:</p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">https://webarchive.nla.gov.au/awa/[CAPTURE</span> <span class=\"pre\">DATETIME]/[CAPTURED</span> <span class=\"pre\">URL]</span></code></p>", "a[href=\"#work-and-version-records\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\"><span class=\"section-number\">5.4. </span>Work and version records</a><a class=\"headerlink\" href=\"#work-and-version-records\" title=\"Permalink to this heading\">#</a></h2><p>As noted above, works don\u2019t have persistent identifiers, but they do use a standard url format.</p>", "a[href=\"#gould-platypuses\"]": "<figure class=\"align-default\" id=\"gould-platypuses\">\n<img alt=\"../_images/nla.obj-2334463531.resized.jpeg\" src=\"../_images/nla.obj-2334463531.resized.jpeg\"/>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 5.1 </span><span class=\"caption-text\">These platypuses have two identifiers: <a class=\"reference external\" href=\"http://nla.gov.au/nla.obj-2334463531\"><code class=\"docutils literal notranslate\"><span class=\"pre\">nla.obj-2334463531</span></code></a> points to the page, while <a class=\"reference external\" href=\"http://nla.gov.au/nla.obj-2685532114\"><code class=\"docutils literal notranslate\"><span class=\"pre\">nla.obj-2685532114</span></code></a> points to the section headed \u2018ORNUTHORHYCHUS ANATINUS.\u2019, but they both end up at the same place.</span><a class=\"headerlink\" href=\"#gould-platypuses\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#work-urls\"]": "<table class=\"table\" id=\"work-urls\">\n<caption><span class=\"caption-number\">Table 5.3 </span><span class=\"caption-text\">Work urls</span><a class=\"headerlink\" href=\"#work-urls\" title=\"Permalink to this table\">#</a></caption>\n<thead>\n<tr class=\"row-odd\"><th class=\"head\"><p>Entity type</p></th>\n<th class=\"head\"><p>URL format</p></th>\n<th class=\"head\"><p>Example</p></th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"row-even\"><td><p>work</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">work/[NUMERIC_ID]</span></code></p></td>\n<td><p><a class=\"reference external\" href=\"https://trove.nla.gov.au/work/1144040\">https://trove.nla.gov.au/work/1144040</a></p></td>\n</tr>\n<tr class=\"row-odd\"><td><p>version/edition of a work</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">work/[WORK_ID]/version[VERSION_ID]</span></code></p></td>\n<td><p><a class=\"reference external\" href=\"https://trove.nla.gov.au/work/1144040/version/25729065\">https://trove.nla.gov.au/work/1144040/version/25729065</a></p></td>\n</tr>\n</tbody>\n</table>", "a[href=\"#book-identifiers\"]": "<table class=\"table\" id=\"book-identifiers\">\n<caption><span class=\"caption-number\">Table 5.2 </span><span class=\"caption-text\">Example of book identifiers</span><a class=\"headerlink\" href=\"#book-identifiers\" title=\"Permalink to this table\">#</a></caption>\n<thead>\n<tr class=\"row-odd\"><th class=\"head\"><p>Entity type</p></th>\n<th class=\"head\"><p>Identifier</p></th>\n<th class=\"head\"><p>Note</p></th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"row-even\"><td><p>Collection</p></td>\n<td><p><a class=\"reference external\" href=\"https://nla.gov.au/nla.obj-55392912\">https://nla.gov.au/nla.obj-55392912</a></p></td>\n<td><p>The three volumes are organised as a collection with its own identifier.</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p>Volume</p></td>\n<td><p><a class=\"reference external\" href=\"https://nla.gov.au/nla.obj-55392920\">https://nla.gov.au/nla.obj-55392920</a></p></td>\n<td><p>Each volume has its own identifier.</p></td>\n</tr>\n<tr class=\"row-even\"><td><p>Page</p></td>\n<td><p><a class=\"reference external\" href=\"http://nla.gov.au/nla.obj-2334456661\">http://nla.gov.au/nla.obj-2334456661</a></p></td>\n<td><p>Each page has its own identifier, these are listed as \u2018image identifier\u2019 in the \u2018Cite\u2019 tab.</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p>Chapter or section</p></td>\n<td><p><a class=\"reference external\" href=\"http://nla.gov.au/nla.obj-2685532114\">http://nla.gov.au/nla.obj-2685532114</a></p></td>\n<td><p>If a resource has logical divisions, like articles or chapters, they each have their own identifiers</p></td>\n</tr>\n</tbody>\n</table>", "a[href=\"#digitised-newspapers\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\"><span class=\"section-number\">5.2. </span>Digitised newspapers</a><a class=\"headerlink\" href=\"#digitised-newspapers\" title=\"Permalink to this heading\">#</a></h2><p>Digitised newspapers have the most highly-structured and consistent identifier scheme.</p>", "a[href=\"../other-digitised-resources/how-to/download-items-text-images.html#download-high-res-images\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Downloading high-resolution images individually<a class=\"headerlink\" href=\"#downloading-high-resolution-images-individually\" title=\"Permalink to this heading\">#</a></h2><p>The method described above has a couple of problems when it comes to downloading images. The first is that all the requested images are delivered in a single <code class=\"docutils literal notranslate\"><span class=\"pre\">zip</span></code> file. If you\u2019re requested images of all the pages in a book, this file could get very large. The second problem is that the built-in download link doesn\u2019t always provide images at the highest possible resolution.</p><p>An alternative approach that avoids both of these problems is to construct a url for each individual page. All you need to do this is get the page identifier and tack <code class=\"docutils literal notranslate\"><span class=\"pre\">/image</span></code> on the end of the url.</p>", "a[href=\"#links-and-identifiers\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5. </span>Links and identifiers<a class=\"headerlink\" href=\"#links-and-identifiers\" title=\"Permalink to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\"><span class=\"section-number\">5.1. </span>Identifying identifiers</a><a class=\"headerlink\" href=\"#identifying-identifiers\" title=\"Permalink to this heading\">#</a></h2><p>As you navigate around Trove you\u2019ll find a range of url patterns pointing to different types of resources. Some examples are:</p>", "a[href=\"#transforming-links\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id7\" role=\"doc-backlink\"><span class=\"section-number\">5.7. </span>Transforming links</a><a class=\"headerlink\" href=\"#transforming-links\" title=\"Permalink to this heading\">#</a></h2><p>Understanding the links and identifiers used by Trove helps you find, access, and transform data. The numeric components of some identifiers can be used to retrieve data from the Trove API. The identifiers of digitised pages can be used to <a class=\"reference internal\" href=\"../other-digitised-resources/how-to/download-items-text-images.html#download-high-res-images\"><span class=\"std std-ref\">download high-resolution images</span></a>. By resolving the identifiers of newspaper issues, you can <a class=\"reference internal\" href=\"../newspapers-and-gazettes/data/pages.html#get-a-list-of-front-page-urls\"><span class=\"std std-ref\">find all the front pages</span></a>. There are examples of these sorts of transformations throughout the Trove Data Guide.</p>", "a[href=\"#newspaper-identifiers\"]": "<table class=\"table\" id=\"newspaper-identifiers\">\n<caption><span class=\"caption-number\">Table 5.1 </span><span class=\"caption-text\">Newspaper identifiers</span><a class=\"headerlink\" href=\"#newspaper-identifiers\" title=\"Permalink to this table\">#</a></caption>\n<thead>\n<tr class=\"row-odd\"><th class=\"head\"><p>Entity type</p></th>\n<th class=\"head\"><p>Identifier format</p></th>\n<th class=\"head\"><p>Example</p></th>\n<th class=\"head\"><p>Resolves to url</p></th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"row-even\"><td><p>title</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">nla.news-title[NUMERIC_ID]</span></code></p></td>\n<td><p><a class=\"reference external\" href=\"http://nla.gov.au/nla.news-title246\">http://nla.gov.au/nla.news-title246</a></p></td>\n<td><p><a class=\"reference external\" href=\"https://trove.nla.gov.au/newspaper/title/246\">https://trove.nla.gov.au/newspaper/title/246</a></p></td>\n</tr>\n<tr class=\"row-odd\"><td><p>issue</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">nla.news-issue[NUMERIC_ID]</span></code></p></td>\n<td><p><a class=\"reference external\" href=\"https://nla.gov.au/nla.news-issue120169\">https://nla.gov.au/nla.news-issue120169</a></p></td>\n<td><p><a class=\"reference external\" href=\"https://trove.nla.gov.au/newspaper/page/1216627\">https://trove.nla.gov.au/newspaper/page/1216627</a></p></td>\n</tr>\n<tr class=\"row-even\"><td><p>page</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">nla.news-page[NUMERIC_ID]</span></code></p></td>\n<td><p><a class=\"reference external\" href=\"http://nla.gov.au/nla.news-page8164936\">http://nla.gov.au/nla.news-page8164936</a></p></td>\n<td><p><a class=\"reference external\" href=\"https://trove.nla.gov.au/newspaper/page/8164936\">https://trove.nla.gov.au/newspaper/page/8164936</a></p></td>\n</tr>\n<tr class=\"row-odd\"><td><p>article</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">nla.news-article[NUMERIC_ID]</span></code></p></td>\n<td><p><a class=\"reference external\" href=\"http://nla.gov.au/nla.news-article89701669\">http://nla.gov.au/nla.news-article89701669</a></p></td>\n<td><p><a class=\"reference external\" href=\"https://trove.nla.gov.au/newspaper/article/89701669/\">https://trove.nla.gov.au/newspaper/article/89701669/</a></p></td>\n</tr>\n</tbody>\n</table>", "a[href=\"#identifying-identifiers\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\"><span class=\"section-number\">5.1. </span>Identifying identifiers</a><a class=\"headerlink\" href=\"#identifying-identifiers\" title=\"Permalink to this heading\">#</a></h2><p>As you navigate around Trove you\u2019ll find a range of url patterns pointing to different types of resources. Some examples are:</p>", "a[href=\"#people-and-organisations\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\"><span class=\"section-number\">5.5. </span>People and organisations</a><a class=\"headerlink\" href=\"#people-and-organisations\" title=\"Permalink to this heading\">#</a></h2><p>People and organisation records have persistent identifiers of the form:</p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">https://nla.gov.au/nla.party-[NUMERIC</span> <span class=\"pre\">ID]</span></code></p>"}
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