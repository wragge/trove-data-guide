selector_to_html = {"a[href=\"#finding-parliamentary-papers-in-trove\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1.2. </span>Finding Parliamentary Papers in Trove<a class=\"headerlink\" href=\"#finding-parliamentary-papers-in-trove\" title=\"Permalink to this heading\">#</a></h1><h2>Finding Parliamentary Papers in Trove<a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this heading\">#</a></h2><p>You can <a class=\"reference internal\" href=\"../../understanding-search/finding-digitised-content.html\"><span class=\"doc std std-doc\">find NLA digitised resources</span></a> by searching for <code class=\"docutils literal notranslate\"><span class=\"pre\">\"nla.obj\"</span></code> and selecting the \u2018Online\u2019 facet (if you\u2019re using the API set <code class=\"docutils literal notranslate\"><span class=\"pre\">l-availability</span></code> to <code class=\"docutils literal notranslate\"><span class=\"pre\">y</span></code>). To further limit the results to digitised Parliamentary Papers the best option seems to be adding <code class=\"docutils literal notranslate\"><span class=\"pre\">series:\"Parliamentary</span> <span class=\"pre\">paper</span> <span class=\"pre\">(Australia.</span> <span class=\"pre\">Parliament)</span></code> to <a class=\"reference external\" href=\"https://trove.nla.gov.au/search?keyword=%22nla.obj%22%20series%3A%22Parliamentary%20paper%20%28Australia.%20Parliament%29%22&amp;l-availability=y\">your search query</a>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22nla.obj%22+series%3A%22Parliamentary+paper+%28Australia.+Parliament%29%22%26category%3Dall%26l-availability%3Dy%26encoding%3Djson%26bulkHarvest%3Dtrue&amp;comment=\"><img alt=\"Try it!\" src=\"https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg\"/></a></p>", "a[href=\"#how-many-digitised-parliamentary-papers-are-there-in-trove\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">How many digitised Parliamentary Papers are there in Trove?<a class=\"headerlink\" href=\"#how-many-digitised-parliamentary-papers-are-there-in-trove\" title=\"Permalink to this heading\">#</a></h2><p>Using this query, you can find the total number of work-level records describing digitised Parliamentary Papers in Trove.</p>", "a[href=\"../../understanding-search/finding-digitised-content.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4. </span>Finding NLA digitised content you can download<a class=\"headerlink\" href=\"#finding-nla-digitised-content-you-can-download\" title=\"Permalink to this heading\">#</a></h1><p>Trove provides a platform for the delivery of digitised content from the National Library of Australia and its partners. This digitised content is easy to find in the <em>Newspapers &amp; gazettes</em> and <em>Magazines &amp; newsletters</em> categories \u2013 they\u2019re full of it! But it\u2019s not so easy to find digitised content in other categories where it\u2019s mixed with works aggregated from a range of different sources.</p><p>There are a few different approaches to finding digitised content, but they all have potential problems. While I highlight what I think is the most reliable option, it\u2019s really a matter of working out what will best meet your research needs.</p>", "a[href=\"#how-are-parliamentary-papers-arranged-and-described\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">How are Parliamentary Papers arranged and described?<a class=\"headerlink\" href=\"#how-are-parliamentary-papers-arranged-and-described\" title=\"Permalink to this heading\">#</a></h2><p>The splitting of Parliamentary Papers also generates some odd-looking \u2018articles\u2019, such as contents pages and appendices. When combined with the <a class=\"reference internal\" href=\"../../what-is-trove/works-and-versions.html\"><span class=\"doc std std-doc\">grouping of versions into works</span></a>, this can have some unfortunate consequences. For example, <a class=\"reference external\" href=\"https://trove.nla.gov.au/work/237938382\">here\u2019s a record</a> where the \u2018Table of contents\u2019 sections of different Parliamentary Papers have been grouped as a single work!</p><p>Not all of the Parliamentary Papers are split into \u2018articles\u2019. Sometimes they are only described as single, standalone works. This <a class=\"reference external\" href=\"https://trove.nla.gov.au/work/9710970\">report by the Australian Science and Technology Council on \u2018Marine sciences and technologies in Australia\u2019</a> is treated like a book, and is linked to a single digitised resource. If you <a class=\"reference external\" href=\"https://trove.nla.gov.au/search?keyword=%22nla.obj-1459420424%22\">search for its NLA identifier</a> you won\u2019t find any child articles.</p>", "a[href=\"../../what-is-trove/works-and-versions.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">3. </span>Works and versions<a class=\"headerlink\" href=\"#works-and-versions\" title=\"Permalink to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\"><span class=\"section-number\">3.1. </span>Grouping versions into works</a><a class=\"headerlink\" href=\"#grouping-versions-into-works\" title=\"Permalink to this heading\">#</a></h2><p>The idea is simple enough \u2013 bring all the versions of a publication together under a single heading to simplify a user\u2019s search results. Instead of having to wade through a long list of near-identical entries, a user can quickly focus in on a title of interest, and drill down to find a specific version at a specific library. This idea is based on the <a class=\"reference external\" href=\"https://www.ifla.org/references/best-practice-for-national-bibliographic-agencies-in-a-digital-age/resource-description-and-standards/bibliographic-control/functional-requirements-the-frbr-family-of-models/functional-requirements-for-bibliographic-records-frbr/\">Functional Requirements for Bibliographic Records</a> (FRBR). The FRBR data model describes four entities: \u2018work\u2019, \u2018expression\u2019, \u2018manifestation\u2019, and \u2018item\u2019:</p>", "a[href=\"../../what-is-trove/collections.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4. </span>Collections within collections<a class=\"headerlink\" href=\"#collections-within-collections\" title=\"Permalink to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\"><span class=\"section-number\">4.1. </span>A collection of collections</a><a class=\"headerlink\" href=\"#a-collection-of-collections\" title=\"Permalink to this heading\">#</a></h2><p>Trove is a collection of collections. Some of those collections are harvested into Trove from collaborating organisations. Other collections, such as the digitised newspapers, are a product of the NLA\u2019s own processing pipelines. Within these groups, resources are linked together in a variety of different ways. For example, a newspaper article is part of an issue, a periodical issue is part of a title, a photograph might be part of an album, a book might be part of a series, and a letter might be part of a manuscript collection. These sorts of relationships can help you navigate through the layers of collections, moving from whole to part and back again.</p><p>Unfortunately, Trove doesn\u2019t have a standard way of representing these sorts of parent/child relationships. Instead, a variety of metadata fields, facets, hierarchical structures, and interfaces group things in inconsistent and sometimes confusing ways. This means that collections are often fragmented in Trove search results, making it hard to see patterns and connections.</p>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Finding Parliamentary Papers in Trove<a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this heading\">#</a></h2><p>You can <a class=\"reference internal\" href=\"../../understanding-search/finding-digitised-content.html\"><span class=\"doc std std-doc\">find NLA digitised resources</span></a> by searching for <code class=\"docutils literal notranslate\"><span class=\"pre\">\"nla.obj\"</span></code> and selecting the \u2018Online\u2019 facet (if you\u2019re using the API set <code class=\"docutils literal notranslate\"><span class=\"pre\">l-availability</span></code> to <code class=\"docutils literal notranslate\"><span class=\"pre\">y</span></code>). To further limit the results to digitised Parliamentary Papers the best option seems to be adding <code class=\"docutils literal notranslate\"><span class=\"pre\">series:\"Parliamentary</span> <span class=\"pre\">paper</span> <span class=\"pre\">(Australia.</span> <span class=\"pre\">Parliament)</span></code> to <a class=\"reference external\" href=\"https://trove.nla.gov.au/search?keyword=%22nla.obj%22%20series%3A%22Parliamentary%20paper%20%28Australia.%20Parliament%29%22&amp;l-availability=y\">your search query</a>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22nla.obj%22+series%3A%22Parliamentary+paper+%28Australia.+Parliament%29%22%26category%3Dall%26l-availability%3Dy%26encoding%3Djson%26bulkHarvest%3Dtrue&amp;comment=\"><img alt=\"Try it!\" src=\"https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg\"/></a></p>"}
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
