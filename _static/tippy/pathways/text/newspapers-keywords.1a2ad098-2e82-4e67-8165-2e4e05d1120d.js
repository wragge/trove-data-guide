selector_to_html = {"a[href=\"#analysing-keywords-in-troves-digitised-newspapers\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Analysing keywords in Trove\u2019s digitised newspapers<a class=\"headerlink\" href=\"#analysing-keywords-in-troves-digitised-newspapers\" title=\"Link to this heading\">#</a></h1><p>You want to explore differences in language use across a collection of digitised newspaper articles. The <a class=\"reference external\" href=\"https://www.atap.edu.au/\">Australian Text Analytics Platform</a> provides a <a class=\"reference external\" href=\"https://github.com/Australian-Text-Analytics-Platform/keywords-analysis\">Keywords Analysis tool</a> that helps you examine whether particular words are over or under-represented across collections of text. But how do get data from Trove\u2019s newspapers to the keyword analysis tool?</p>", "a[href=\"#reshaping-your-results\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Reshaping your results<a class=\"headerlink\" href=\"#reshaping-your-results\" title=\"Link to this heading\">#</a></h2><p>Creating corpora\nYou might need to experiment.</p>", "a[href=\"#trove-harvester-finished\"]": "<figure class=\"align-default\" id=\"trove-harvester-finished\">\n<a class=\"reference internal image-reference\" href=\"../../_images/trove-harvester-finished.png\"><img alt=\"../../_images/trove-harvester-finished.png\" src=\"../../_images/trove-harvester-finished.png\" style=\"width: 600px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 27.12 </span><span class=\"caption-text\">The harvest is finished!</span><a class=\"headerlink\" href=\"#trove-harvester-finished\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#getting-your-own-trove-api-key\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Getting your own Trove API key<a class=\"headerlink\" href=\"#getting-your-own-trove-api-key\" title=\"Link to this heading\">#</a></h2><p>The Trove Newspaper &amp; Gazette Harvester downloads data using Trove\u2019s Application Programming Interface (API). Access to the API is managed through the use of \u2018keys\u2019. You\u2019ll need your own API key to use the Harvester. Fortunately, it\u2019s quick and easy to get a key for non-commercial use. See Trove\u2019s <a class=\"reference external\" href=\"https://trove.nla.gov.au/about/create-something/using-api\">Using the API</a> help page for full details, but in summary you need to:</p>", "a[href=\"#trove-harvester-query\"]": "<figure class=\"align-default\" id=\"trove-harvester-query\">\n<a class=\"reference internal image-reference\" href=\"../../_images/trove-harvester-query.png\"><img alt=\"../../_images/trove-harvester-query.png\" src=\"../../_images/trove-harvester-query.png\" style=\"width: 600px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 27.9 </span><span class=\"caption-text\">Paste the url of your search between the quotes.</span><a class=\"headerlink\" href=\"#trove-harvester-query\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#understanding-your-data\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Understanding your data<a class=\"headerlink\" href=\"#understanding-your-data\" title=\"Link to this heading\">#</a></h2><p>You can start exploring your harvested data in the Jupyter Lab interface. By default, the Harvester saves its outputs in the <code class=\"docutils literal notranslate\"><span class=\"pre\">data</span></code> directory. Double click on the <code class=\"docutils literal notranslate\"><span class=\"pre\">data</span></code> directory in the file browser to open it.</p><p>Individual harvests are named according to the date and time they were started. Within the data directory you should see a directory that starts with the current year, for example <code class=\"docutils literal notranslate\"><span class=\"pre\">20240527055711</span></code>. Double click on the directory to open your harvest.</p>", "a[href=\"#running-your-harvest\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Running your harvest<a class=\"headerlink\" href=\"#running-your-harvest\" title=\"Link to this heading\">#</a></h2><p>No matter what service you use to run the notebook, the result will be the same \u2013 the notebook will open in the Jupyter Lab interface.</p>", "a[href=\"#tools\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Tools<a class=\"headerlink\" href=\"#tools\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#gw-iiif-nb\"]": "<figure class=\"align-default\" id=\"gw-iiif-nb\">\n<a class=\"reference internal image-reference\" href=\"../../_images/gw-harvester-package.png\"><img alt=\"../../_images/gw-harvester-package.png\" src=\"../../_images/gw-harvester-package.png\" style=\"width: 600px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 27.3 </span><span class=\"caption-text\">The GLAM Workbench provides a number of ways you can run the notebook.</span><a class=\"headerlink\" href=\"#gw-iiif-nb\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#iiif-nb-jupyterlab\"]": "<figure class=\"align-default\" id=\"iiif-nb-jupyterlab\">\n<a class=\"reference internal image-reference\" href=\"../../_images/harvester-nb.png\"><img alt=\"../../_images/harvester-nb.png\" src=\"../../_images/harvester-nb.png\" style=\"width: 600px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 27.7 </span><span class=\"caption-text\">The notebook running in Jupyter Lab.</span><a class=\"headerlink\" href=\"#iiif-nb-jupyterlab\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#trove-search-location-bar\"]": "<figure class=\"align-default\" id=\"trove-search-location-bar\">\n<a class=\"reference internal image-reference\" href=\"../../_images/trove-search-location-bar.png\"><img alt=\"../../_images/trove-search-location-bar.png\" src=\"../../_images/trove-search-location-bar.png\" style=\"width: 600px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 27.2 </span><span class=\"caption-text\">Copy the url in your browser\u2019s location bar.</span><a class=\"headerlink\" href=\"#trove-search-location-bar\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#aaf-institutions-select\"]": "<figure class=\"align-default\" id=\"aaf-institutions-select\">\n<a class=\"reference internal image-reference\" href=\"../../_images/aaf-institutions-select.png\"><img alt=\"../../_images/aaf-institutions-select.png\" src=\"../../_images/aaf-institutions-select.png\" style=\"width: 300px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 27.5 </span><span class=\"caption-text\">Select your institution from the AAF list</span><a class=\"headerlink\" href=\"#aaf-institutions-select\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#harvester-reshaping-slicer\"]": "<figure class=\"align-default\" id=\"harvester-reshaping-slicer\">\n<a class=\"reference internal image-reference\" href=\"../../_images/harvester-reshaping-slicer.png\"><img alt=\"../../_images/harvester-reshaping-slicer.png\" src=\"../../_images/harvester-reshaping-slicer.png\" style=\"width: 600px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 27.14 </span><span class=\"caption-text\">Create a HarvestSlicer using your harvests id.</span><a class=\"headerlink\" href=\"#harvester-reshaping-slicer\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#starting-the-notebook\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Starting the notebook<a class=\"headerlink\" href=\"#starting-the-notebook\" title=\"Link to this heading\">#</a></h2><p>Go to <a class=\"reference external\" href=\"https://glam-workbench.net/trove-harvester/basic-harvester-example/\">Using the Trove Harvester as a Python package</a> in the Trove newspaper harvester section of the GLAM Workbench.</p><p>This notebook, like all GLAM Workbench notebooks, needs to be run in a customised computing environment. The easiest way to do this is through BinderHub. BinderHub is a cloud-based service that gets a notebook up and running by reading its requirements from a code repository, and creating an environment with the necessary software. The GLAM Workbench is integrated with two BinderHub services:</p>", "a[href=\"../../newspapers-and-gazettes/newspaper-corpus.html#newspapers-corpus-history\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id7\" role=\"doc-backlink\"><span class=\"section-number\">16.2. </span>The newspaper corpus has a history</a><a class=\"headerlink\" href=\"#the-newspaper-corpus-has-a-history\" title=\"Link to this heading\">#</a></h2><p>Oddly enough, Trove is not very good at presenting its own history. While there are regular updates on newly-added titles, there\u2019s no way of seeing when particular titles were added or the change in the number of articles over time. Earlier versions of Trove included a page of useful statistics, but this was removed in the 2020 update. To explore how Trove has changed over time, you need to piece together different data sources.</p><p>I started analysing Trove searches back in 2011, and continued at irregular intervals to create charts showing the number of articles per year in Trove. I\u2019ve extracted the data from these charts and compiled it into a dataset available from <a class=\"reference external\" href=\"https://doi.org/10.5281/zenodo.6471544\">Zenodo</a> and <a class=\"reference external\" href=\"https://github.com/wragge/trove-newspaper-totals-historical\">GitHub</a>. Using this data, you can visualise how Trove has changed between 2011 and 2022. For example, here\u2019s the growth in the total number of articles</p>", "a[href=\"#trove-newspaper-gazette-harvester\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Trove Newspaper &amp; Gazette Harvester<a class=\"headerlink\" href=\"#trove-newspaper-gazette-harvester\" title=\"Link to this heading\">#</a></h2><p>The <a class=\"reference external\" href=\"https://glam-workbench.net/trove-harvester/\">Trove Newspaper &amp; Gazette Harvester</a> is a tool that helps you harvest metadata, text, and images from a search in Trove\u2019s digitised newspapers. You just give the harvester the url of a search and it will create a dataset containing hundreds, thousands, even millions of articles.</p><p>The Trove Newspaper &amp; Gazette Harvester is available in a number of different forms according to your needs and skills. You can use it as:</p>", "a[href=\"#id1\"]": "<figure class=\"align-default\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/ardc-binder-aaf-login.png\"><img alt=\"../../_images/ardc-binder-aaf-login.png\" src=\"../../_images/ardc-binder-aaf-login.png\" style=\"width: 600px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 27.4 </span><span class=\"caption-text\">ARDC Binder will ask you to log in using AAF</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#using-ardc-binder\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Using ARDC Binder<a class=\"headerlink\" href=\"#using-ardc-binder\" title=\"Link to this heading\">#</a></h3><p>To use the ARDC Binder service, click on the ARDC Binder tab under the notebook preview. You should see a big, blue <strong>Run live on ARDC Binder</strong> button. Click on the button to launch the Binder service.</p><p>If this is the first time you\u2019ve used the ARDC Binder service you\u2019ll be asked to login using the Australian Access Federation (AAF).</p>", "a[href=\"#constructing-your-search\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Constructing your search<a class=\"headerlink\" href=\"#constructing-your-search\" title=\"Link to this heading\">#</a></h2><p>The first step is constructing a search that will return relevant newspaper articles. This is harder than it seems. Yes, you can just plug keywords into Trove\u2019s search interface and get back interesting looking results. But it\u2019s important to keep in mind the differing needs of <em>discovery</em> versus <em>analysis</em>. Your aim here is not to find a few useful articles, but to construct a dataset containing <em>all</em> the articles returned by your search query. <strong>Everything.</strong> When you\u2019re searching for individual articles you can usually just ignore the fact that there are millions of articles in your search results, as Trove\u2019s relevance ranking pushes the most likely candidates to the top. But if you\u2019re creating a dataset, you want to be as precise as possible to avoid including unwanted noise.</p>", "a[href=\"#trove-harvester-progress\"]": "<figure class=\"align-default\" id=\"trove-harvester-progress\">\n<a class=\"reference internal image-reference\" href=\"../../_images/trove-harvester-progress.png\"><img alt=\"../../_images/trove-harvester-progress.png\" src=\"../../_images/trove-harvester-progress.png\" style=\"width: 600px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 27.11 </span><span class=\"caption-text\">Monitor your harvest.</span><a class=\"headerlink\" href=\"#trove-harvester-progress\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#harvester-reshaping-years\"]": "<figure class=\"align-default\" id=\"harvester-reshaping-years\">\n<a class=\"reference internal image-reference\" href=\"../../_images/harvester-reshaping-years.png\"><img alt=\"../../_images/harvester-reshaping-years.png\" src=\"../../_images/harvester-reshaping-years.png\" style=\"width: 600px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 27.15 </span><span class=\"caption-text\">Slice your harvest by year or decade.</span><a class=\"headerlink\" href=\"#harvester-reshaping-years\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#trove-harvester-run\"]": "<figure class=\"align-default\" id=\"trove-harvester-run\">\n<a class=\"reference internal image-reference\" href=\"../../_images/trove-harvester-run.png\"><img alt=\"../../_images/trove-harvester-run.png\" src=\"../../_images/trove-harvester-run.png\" style=\"width: 600px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 27.10 </span><span class=\"caption-text\">Select Run &gt; Run All Cells.</span><a class=\"headerlink\" href=\"#trove-harvester-run\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#using-mybinder\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Using MyBinder<a class=\"headerlink\" href=\"#using-mybinder\" title=\"Link to this heading\">#</a></h3><p>To use the MyBinder service, click on the MyBinder tab under the notebook preview. You should see a big, blue <strong>Run live on MyBinder</strong> button. Click on the button to launch the Binder service. No login is required, so MyBinder immediately starts building a customised computing environment. This can take a while, but eventually the notebook should load in the Jupyter Lab interface.</p>", "a[href=\"../../understanding-search/simple-search-options.html#search-simple-defuzzify\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\"><span class=\"section-number\">8.2. </span>De-fuzzify your searches</a><a class=\"headerlink\" href=\"#de-fuzzify-your-searches\" title=\"Link to this heading\">#</a></h2><p>By default, Trove adds a bit of fuzziness to your searches to try and ensure you get back some useful results. This includes:</p>", "a[href=\"#trove-harvester-api-key\"]": "<figure class=\"align-default\" id=\"trove-harvester-api-key\">\n<a class=\"reference internal image-reference\" href=\"../../_images/trove-harvester-api-key.png\"><img alt=\"../../_images/trove-harvester-api-key.png\" src=\"../../_images/trove-harvester-api-key.png\" style=\"width: 600px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 27.8 </span><span class=\"caption-text\">Paste your API key between the quotes.</span><a class=\"headerlink\" href=\"#trove-harvester-api-key\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#trove-user-api-tab\"]": "<figure class=\"align-default\" id=\"trove-user-api-tab\">\n<a class=\"reference internal image-reference\" href=\"../../_images/trove-user-api-tab.png\"><img alt=\"../../_images/trove-user-api-tab.png\" src=\"../../_images/trove-user-api-tab.png\" style=\"width: 600px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 27.1 </span><span class=\"caption-text\">Your API will be displayed in the \u2018For developers\u2019 tab of your user profile.</span><a class=\"headerlink\" href=\"#trove-user-api-tab\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#trove-harvester-results\"]": "<figure class=\"align-default\" id=\"trove-harvester-results\">\n<a class=\"reference internal image-reference\" href=\"../../_images/trove-harvester-results.png\"><img alt=\"../../_images/trove-harvester-results.png\" src=\"../../_images/trove-harvester-results.png\" style=\"width: 600px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 27.13 </span><span class=\"caption-text\">Open the harvest directory to view the results.</span><a class=\"headerlink\" href=\"#trove-harvester-results\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"../../understanding-search/simple-search-options.html#search-simple-facets\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id7\" role=\"doc-backlink\"><span class=\"section-number\">8.6. </span>Using facets</a><a class=\"headerlink\" href=\"#using-facets\" title=\"Link to this heading\">#</a></h2><p>Facets are a set of pre-determined values you can use to set limits on your search resuls. They allow you to take slices of your results.</p><p>In the web interface, facets appear as a set of check boxes next to the list of results. You just click the box next to a facet value to apply it to your search. You can only select one facet value at a time.</p>", "a[href=\"#mybinder-tab\"]": "<figure class=\"align-default\" id=\"mybinder-tab\">\n<a class=\"reference internal image-reference\" href=\"../../_images/mybinder-tab.png\"><img alt=\"../../_images/mybinder-tab.png\" src=\"../../_images/mybinder-tab.png\" style=\"width: 600px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 27.6 </span><span class=\"caption-text\">Click on the MyBinder tab.</span><a class=\"headerlink\" href=\"#mybinder-tab\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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