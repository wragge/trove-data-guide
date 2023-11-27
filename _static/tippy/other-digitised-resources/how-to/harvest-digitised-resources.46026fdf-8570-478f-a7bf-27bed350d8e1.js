selector_to_html = {"a[href=\"#check-for-missing-records\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Check for \u2018missing\u2019 records<a class=\"headerlink\" href=\"#check-for-missing-records\" title=\"Permalink to this heading\">#</a></h3><p>Some of the records in the dataset will represent <em>parts</em> of resources, such as the sections of a Parliamentary Paper. The identifiers of the parent resources are added to the child records in the previous processing step. You can check the parent identifiers to make sure they\u2019re already included in the dataset.</p>", "a[href=\"#download-text\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Download text<a class=\"headerlink\" href=\"#download-text\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#harvest-metadata-from-api\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Harvest metadata from API<a class=\"headerlink\" href=\"#harvest-metadata-from-api\" title=\"Permalink to this heading\">#</a></h3><p>Searches using the API return work-level records. Sometimes digitised resources are grouped as versions of a work, even though they\u2019re quite different. To make sure you get everything, you need to work your way down through through the hierarchy of work -&gt; version -&gt; sub-version (labelled \u2018record\u2019 in API responses), harvesting every relevant record.</p>", "a[href=\"#merge-remove-duplicates-from-dataset\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Merge/remove duplicates from dataset<a class=\"headerlink\" href=\"#merge-remove-duplicates-from-dataset\" title=\"Permalink to this heading\">#</a></h3><p>The aim of this step is to de-duplicate the harvested records, while preserving all the harvested metadata. The result is a dataset with one record for each fulltext url. If there are multiple values in any column, these will merged into a single list.</p>", "a[href=\"get-collection-items.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.1. </span>HOW TO: Get a list of items in a digitised collection<a class=\"headerlink\" href=\"#how-to-get-a-list-of-items-in-a-digitised-collection\" title=\"Permalink to this heading\">#</a></h1><p>The NLA\u2019s digitised resources are often presented as \u2018collections\u2019. A collection could be the volumes in a multi-volume work, the issues of a periodical, a map series, an album of photographs, or a manuscript collection. In the web interface, collections will have a \u2018Browse this collection\u2019 link or button that displays a list of the contents, but getting machine-readable data is not so straightforward. You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">magazine/title</span></code> API endpoint to get a list of issues from a periodical, but there\u2019s no way to get the contents of other types of collections from the Trove API.</p><p><mark>==Insert screencap==</mark></p>", "a[href=\"download-items-text-images.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.2. </span>HOW TO: Automate the download of digitised items as text, images, or PDFs<a class=\"headerlink\" href=\"#how-to-automate-the-download-of-digitised-items-as-text-images-or-pdfs\" title=\"Permalink to this heading\">#</a></h1><p>You can download text, images, and PDFs from individual digitised items <a class=\"reference internal\" href=\"../../accessing-data/using-web-interface.html\"><span class=\"doc std std-doc\">using the Trove web interface</span></a>. But only the text of periodical articles is available for machine access through the Trove API. This makes it difficult to assemble datasets, or build processing pipelines involving digitised resources. This page documents a series of work arounds that enable you to automate the download of digitised items as text, images, or PDFs.</p>", "a[href=\"#how-to-harvest-data-relating-to-digitised-resources\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.4. </span>HOW TO: Harvest data relating to digitised resources<a class=\"headerlink\" href=\"#how-to-harvest-data-relating-to-digitised-resources\" title=\"Permalink to this heading\">#</a></h1><p>Harvesting data relating to digitised resources (other than newspapers) in Trove is not as simple as making a few API requests. The major problem is that digitised resources are often assembled into groups or collections, and the full details of these groupings are not available through the Trove API. This means that simply harvesting results from an API query will miss many digitised resources. In addition, the way resources are described and arranged is often inconsistent, so you can\u2019t assume that a particular type of resource will be grouped in a particular way.</p><p>As a result of these problems, a \u2018belts and braces\u2019 approach seems best \u2013 follow every possible route and harvest as many records as possible. This may result in duplicates, but these can be dealt with later. In any case, Trove already contains a large number of duplicate records for digitised resources, so some form of merging or de-duplication will always be required.</p>", "a[href=\"#download-images\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Download images<a class=\"headerlink\" href=\"#download-images\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#enrich-dataset-using-embedded-metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Enrich dataset using embedded metadata<a class=\"headerlink\" href=\"#enrich-dataset-using-embedded-metadata\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#outline-of-harvesting-method\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Outline of harvesting method<a class=\"headerlink\" href=\"#outline-of-harvesting-method\" title=\"Permalink to this heading\">#</a></h2><h3>Harvest metadata from API<a class=\"headerlink\" href=\"#harvest-metadata-from-api\" title=\"Permalink to this heading\">#</a></h3><p>Searches using the API return work-level records. Sometimes digitised resources are grouped as versions of a work, even though they\u2019re quite different. To make sure you get everything, you need to work your way down through through the hierarchy of work -&gt; version -&gt; sub-version (labelled \u2018record\u2019 in API responses), harvesting every relevant record.</p>", "a[href=\"extract-embedded-metadata.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.3. </span>HOW TO: Extract additional metadata from the web page of a digitised work<a class=\"headerlink\" href=\"#how-to-extract-additional-metadata-from-the-web-page-of-a-digitised-work\" title=\"Permalink to this heading\">#</a></h1><p>The viewers you use to examine digitised resources in Trove embed some metadata that isn\u2019t available through the Trove API. This includes a JSON-ified version of the item\u2019s MARC record (presumably copied from the NLA catalogue), as well as structural information used by the viewer itself, such as a list of pages in a digitised book.</p><p>This metadata can be useful in a number of different contexts. For example, you can extract the number of pages in a digitised book, then use this number to <a class=\"reference internal\" href=\"download-items-text-images.html\"><span class=\"doc std std-doc\">automatically download the full text or a PDF</span></a>. The GLAM Workbench includes an example where geospatial coordinates are extracted from the MARC data to add to a <a class=\"reference external\" href=\"https://glam-workbench.net/trove-maps/exploring-digitised-maps/\">harvest of digitised maps</a>.</p>", "a[href=\"#get-metadata-from-api\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Get metadata from API<a class=\"headerlink\" href=\"#get-metadata-from-api\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#expand-collections-and-enrich-dataset-using-embedded-metadata\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Expand collections and enrich dataset using embedded metadata<a class=\"headerlink\" href=\"#expand-collections-and-enrich-dataset-using-embedded-metadata\" title=\"Permalink to this heading\">#</a></h3><p>As noted in <a class=\"reference internal\" href=\"extract-embedded-metadata.html\"><span class=\"doc std std-doc\">HOW TO: Extract additional metadata from the web page of a digitised work</span></a>, most of Trove\u2019s digitised resource viewers embed useful metadata in the HTML of their web pages. You can use this to determine whether a fulltext url points to a single resource or a collection, and to enrich the metadata you obtained from the API.</p>"}
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
