selector_to_html = {"a[href=\"../what-is-trove/collections.html#collections-ispartof\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\"><span class=\"section-number\">4.5. </span><code class=\"docutils literal notranslate\"><span class=\"pre\">isPartOf</span></code> relationships</a><a class=\"headerlink\" href=\"#ispartof-relationships\" title=\"Link to this heading\">#</a></h2><p>Some parent/child relationships in Trove are documented using the Dublin Core <code class=\"docutils literal notranslate\"><span class=\"pre\">isPartOf</span></code> metadata field. This field can appear in records aggregated into Trove from other organisations, as well as in records of digitised resources created by the NLA itself. In the web interface, <code class=\"docutils literal notranslate\"><span class=\"pre\">isPartOf</span></code> values can be displayed under a variety of headings, including \u2018Appears in\u2019, \u2018Part of\u2019, and \u2018Series\u2019. Here\u2019s an example linking an individual oral history interview to an oral history project:</p>", "a[href=\"#stemming-oddities\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\"><span class=\"section-number\">8.3. </span>Stemming oddities</a><a class=\"headerlink\" href=\"#stemming-oddities\" title=\"Link to this heading\">#</a></h2><p>As noted above, Trove stems your search terms, trimming them back to their base form. It seems that Trove uses the Porter stemming algorithm. If you\u2019d to see how stemming affects your query, you can use this <a class=\"reference external\" href=\"http://text-processing.com/demo/stem/\">online tool</a> to test the results of the Porter algorithm.</p><p>I\u2019ve noticed some oddities in handling <code class=\"docutils literal notranslate\"><span class=\"pre\">-ise</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">-ize</span></code> suffixes. For example:</p>", "a[href=\"#table-undocumented-search-indexes\"]": "<table class=\"table\" id=\"table-undocumented-search-indexes\">\n<caption><span class=\"caption-number\">Table 8.5 </span><span class=\"caption-text\">Undocumented search indexes</span><a class=\"headerlink\" href=\"#table-undocumented-search-indexes\" title=\"Link to this table\">#</a></caption>\n<thead>\n<tr class=\"row-odd\"><th class=\"head\"><p>Index</p></th>\n<th class=\"head\"><p>Description</p></th>\n<th class=\"head\"><p>Example</p></th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">series</span></code></p></td>\n<td><p><a class=\"reference internal\" href=\"../what-is-trove/collections.html#collections-ispartof-series\"><span class=\"std std-ref\">Search for resources that are part of a collection</span></a></p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">series:\"Parliamentary</span> <span class=\"pre\">paper</span> <span class=\"pre\">(Australia.</span> <span class=\"pre\">Parliament)</span></code> \u2013 find Parliamentary Papers</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">firstpageseq</span></code></p></td>\n<td><p>Search for newspaper articles published on a specific page</p></td>\n<td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">firstpageseq:2</span></code> \u2013 find articles published on page two</p></td>\n</tr>\n</tbody>\n</table>", "a[href=\"#table-proximity-modifiers\"]": "<table class=\"table\" id=\"table-proximity-modifiers\">\n<caption><span class=\"caption-number\">Table 8.4 </span><span class=\"caption-text\">Using proximity modifiers</span><a class=\"headerlink\" href=\"#table-proximity-modifiers\" title=\"Link to this table\">#</a></caption>\n<thead>\n<tr class=\"row-odd\"><th class=\"head\"><p>Query</p></th>\n<th class=\"head\"><p>Results</p></th>\n<th class=\"head\"><p>Explanation</p></th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">chinese</span> <span class=\"pre\">tasmania</span></code></p></td>\n<td><p><span class=\"pasted-text\">279,443</span></p></td>\n<td><p>articles contain both terms</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">\"chinese</span> <span class=\"pre\">tasmania\"~10</span></code></p></td>\n<td><p><span class=\"pasted-text\">4,179</span></p></td>\n<td><p>articles where \u2018tasmania\u2019 is within 10 words of \u2018chinese\u2019</p></td>\n</tr>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">\"tasmania</span> <span class=\"pre\">chinese\"~10</span></code></p></td>\n<td><p><span class=\"pasted-text\">4,191</span></p></td>\n<td><p>terms in reverse order are matched, but reversing counts towards the word distance so results can differ</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">\"tasmania</span> <span class=\"pre\">chinese\"~10</span> <span class=\"pre\">OR</span> <span class=\"pre\">\"chinese</span> <span class=\"pre\">tasmania\"~10</span></code></p></td>\n<td><p><span class=\"pasted-text\">4,695</span></p></td>\n<td><p>10 word distance in either direction</p></td>\n</tr>\n</tbody>\n</table>", "a[href=\"#table-index-operators\"]": "<table class=\"table\" id=\"table-index-operators\">\n<caption><span class=\"caption-number\">Table 8.6 </span><span class=\"caption-text\">Using search operators with indexes</span><a class=\"headerlink\" href=\"#table-index-operators\" title=\"Link to this table\">#</a></caption>\n<thead>\n<tr class=\"row-odd\"><th class=\"head\"><p>Query</p></th>\n<th class=\"head\"><p>Explanation</p></th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">subject:history</span></code></p></td>\n<td><p>Search for a keyword in the <code class=\"docutils literal notranslate\"><span class=\"pre\">subject</span></code> index</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">subject:(history</span> <span class=\"pre\">weather)</span></code></p></td>\n<td><p>Search for multiple keywords in the <code class=\"docutils literal notranslate\"><span class=\"pre\">subject</span></code> index</p></td>\n</tr>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">subject:(history</span> <span class=\"pre\">NOT</span> <span class=\"pre\">australia)</span></code></p></td>\n<td><p>Search using boolean operators in <code class=\"docutils literal notranslate\"><span class=\"pre\">subject</span></code> index</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">subject:\"Australian</span> <span class=\"pre\">history\"</span></code></p></td>\n<td><p>Search for a phrase in the <code class=\"docutils literal notranslate\"><span class=\"pre\">subject</span></code> index</p></td>\n</tr>\n</tbody>\n</table>", "a[href=\"../newspapers-and-gazettes/data/titles.html#newspaper-titles-aggregate-facet\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id9\" role=\"doc-backlink\">Aggregate search results by title using the <code class=\"docutils literal notranslate\"><span class=\"pre\">l-title</span></code> facet</a><a class=\"headerlink\" href=\"#aggregate-search-results-by-title-using-the-l-title-facet\" title=\"Link to this heading\">#</a></h3><p>You can also explore the characteristics of newspaper titles in Trove by using the API\u2019s <code class=\"docutils literal notranslate\"><span class=\"pre\">/result</span></code> endpoint with <code class=\"docutils literal notranslate\"><span class=\"pre\">category</span></code> set to <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper</span></code>, and <code class=\"docutils literal notranslate\"><span class=\"pre\">l-title</span></code> set to the numeric identifier of a title. For example, to find out how many digitised articles from the <em>Canberra Times</em> are available on Trove, you can just make an API request without any search terms:</p>", "a[href=\"../what-is-trove/collections.html#collections-ispartof-series\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id7\" role=\"doc-backlink\">Search the <code class=\"docutils literal notranslate\"><span class=\"pre\">isPartOf</span></code> field using the <code class=\"docutils literal notranslate\"><span class=\"pre\">series</span></code> index</a><a class=\"headerlink\" href=\"#search-the-ispartof-field-using-the-series-index\" title=\"Link to this heading\">#</a></h3><p>You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">series</span></code> index to search <code class=\"docutils literal notranslate\"><span class=\"pre\">isPartOf</span></code> values. It seems to only match records where the <code class=\"docutils literal notranslate\"><span class=\"pre\">isPartOf</span></code> type is <code class=\"docutils literal notranslate\"><span class=\"pre\">series</span></code>, but you can it\u2019s much more flexible than the <code class=\"docutils literal notranslate\"><span class=\"pre\">contribcollection</span></code> facet as it accepts partial matches and is case-insensitive. For example, a <a class=\"reference external\" href=\"https://trove.nla.gov.au/search/category/music?keyword=series%3A%22Australian%20women%20scientists%20oral%20history%20project%22\">search for <code class=\"docutils literal notranslate\"><span class=\"pre\">series:\"Australian</span> <span class=\"pre\">women</span> <span class=\"pre\">scientists</span> <span class=\"pre\">oral</span> <span class=\"pre\">history</span> <span class=\"pre\">project\"</span></code></a> returns 25 results \u2013 no need to worry about trailing full stops!</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3Dseries%3A%22Australian+women+scientists+oral+history+project%22%26category%3Dmusic%26encoding%3Djson&amp;amp;comment=\"><img alt=\"Try it!\" src=\"https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg\"/></a></p>", "a[href=\"#using-indexes\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id6\" role=\"doc-backlink\"><span class=\"section-number\">8.5. </span>Using indexes</a><a class=\"headerlink\" href=\"#using-indexes\" title=\"Link to this heading\">#</a></h2><p>When you enter queries in the simple search box, or by using the <code class=\"docutils literal notranslate\"><span class=\"pre\">q</span></code> parameter in an API request, you\u2019re searching across most metadata fields and any available full text. To control where and what you\u2019re searching, you can specify the index you want Trove to use. For example, the query <code class=\"docutils literal notranslate\"><span class=\"pre\">title:wragge</span></code> will search only the <code class=\"docutils literal notranslate\"><span class=\"pre\">title</span></code> field for the term <code class=\"docutils literal notranslate\"><span class=\"pre\">wragge</span></code>.</p><p>Other indexes mentioned in <a class=\"reference external\" href=\"https://trove.nla.gov.au/help/searching/constructing-complex-search-query\">Trove\u2019s help documentation</a> are:</p>", "a[href=\"#proximity-searches\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\"><span class=\"section-number\">8.4. </span>Proximity searches</a><a class=\"headerlink\" href=\"#proximity-searches\" title=\"Link to this heading\">#</a></h2><p>The defuzzify examples above use the proximity modifier (<code class=\"docutils literal notranslate\"><span class=\"pre\">~</span></code>) to remove extra words from a query, but you can also use it to set a maximum distance between search terms. One thing to note is that the order of the search terms makes a difference to your results, as reversing the order of your terms counts as a \u2018word\u2019. For example:</p>", "a[href=\"#de-fuzzify-your-searches\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\"><span class=\"section-number\">8.2. </span>De-fuzzify your searches</a><a class=\"headerlink\" href=\"#de-fuzzify-your-searches\" title=\"Link to this heading\">#</a></h2><p>By default, Trove adds a bit of fuzziness to your searches to try and ensure you get back some useful results. This includes:</p>", "a[href=\"#simple-search-options\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">8. </span>\u2018Simple\u2019 search options<a class=\"headerlink\" href=\"#simple-search-options\" title=\"Link to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\"><span class=\"section-number\">8.1. </span>Simple search isn\u2019t!</a><a class=\"headerlink\" href=\"#simple-search-isnt\" title=\"Link to this heading\">#</a></h2><p>The Trove web interface distinguishes between \u2018Advanced\u2019 and \u2018Simple\u2019 search. This is a bit misleading as you can construct complex queries using either. \u2018Advanced\u2019 search really just adds a structured interface over the \u2018Simple\u2019 search options. This Guide focuses on using \u2018Simple\u2019 search because it gives you more control, exposes more of the workings of the search index, and its queries can be easily translated to work with the Trove API.</p><p>See <a class=\"reference external\" href=\"https://trove.nla.gov.au/help/searching/constructing-complex-search-query\">Constructing a complex search query</a> in the Trove help system for an introduction to:</p>", "a[href=\"#simple-search-isnt\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\"><span class=\"section-number\">8.1. </span>Simple search isn\u2019t!</a><a class=\"headerlink\" href=\"#simple-search-isnt\" title=\"Link to this heading\">#</a></h2><p>The Trove web interface distinguishes between \u2018Advanced\u2019 and \u2018Simple\u2019 search. This is a bit misleading as you can construct complex queries using either. \u2018Advanced\u2019 search really just adds a structured interface over the \u2018Simple\u2019 search options. This Guide focuses on using \u2018Simple\u2019 search because it gives you more control, exposes more of the workings of the search index, and its queries can be easily translated to work with the Trove API.</p><p>See <a class=\"reference external\" href=\"https://trove.nla.gov.au/help/searching/constructing-complex-search-query\">Constructing a complex search query</a> in the Trove help system for an introduction to:</p>", "a[href=\"../what-is-trove/categories-and-zones.html#distribution-categories-formats\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id9\" role=\"doc-backlink\"><span class=\"section-number\">2.6. </span>Distribution of formats across categories</a><a class=\"headerlink\" href=\"#distribution-of-formats-across-categories\" title=\"Link to this heading\">#</a></h2><p>As <a class=\"reference internal\" href=\"#what-ends-up-where\"><span class=\"std std-ref\">noted above</span></a>, categories are linked to particular formats. To explore these links further, you can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">format</span></code> facet to see which types of resources are grouped within each category. Currently there are 46 different format values used within Trove. Here\u2019s the number of different formats in each category according to the <code class=\"docutils literal notranslate\"><span class=\"pre\">format</span></code> facet.</p>", "a[href=\"#table-defuzzify-phrases\"]": "<table class=\"table\" id=\"table-defuzzify-phrases\">\n<caption><span class=\"caption-number\">Table 8.2 </span><span class=\"caption-text\">De-fuzzify phrase searches</span><a class=\"headerlink\" href=\"#table-defuzzify-phrases\" title=\"Link to this table\">#</a></caption>\n<thead>\n<tr class=\"row-odd\"><th class=\"head\"><p>Query</p></th>\n<th class=\"head\"><p>Results</p></th>\n<th class=\"head\"><p>Explanation</p></th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">white</span> <span class=\"pre\">OR</span> <span class=\"pre\">australia</span></code></p></td>\n<td><p><span class=\"pasted-text\">49,728,069</span></p></td>\n<td></td>\n</tr>\n<tr class=\"row-odd\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">white</span> <span class=\"pre\">australia</span></code></p></td>\n<td><p><span class=\"pasted-text\">5,792,723</span></p></td>\n<td><p>Same as white AND australia</p></td>\n</tr>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">\"white</span> <span class=\"pre\">australia\"</span></code></p></td>\n<td><p><span class=\"pasted-text\">161,718</span></p></td>\n<td><p>Search for phrase (with stemming)</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">text:\"white</span> <span class=\"pre\">australia\"</span></code></p></td>\n<td><p><span class=\"pasted-text\">157,405</span></p></td>\n<td><p>Search for phrase (no stemming &amp; ignores tags/comments)</p></td>\n</tr>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">\"white</span> <span class=\"pre\">australia\"~0</span></code></p></td>\n<td><p><span class=\"pasted-text\">161,718</span></p></td>\n<td><p>Search for phrase (with stemming, no extra words)</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">text:\"white</span> <span class=\"pre\">australia\"~0</span></code></p></td>\n<td><p><span class=\"pasted-text\">151,737</span></p></td>\n<td><p>Search for exact phrase (no extra words, no stemming, ignore tags/comments)</p></td>\n</tr>\n</tbody>\n</table>", "a[href=\"date-searches.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">9. </span>Date searches<a class=\"headerlink\" href=\"#date-searches\" title=\"Link to this heading\">#</a></h1><p>You can limit your Trove searches by date in a number of ways. These options vary across categories and can cause confusion. This section will attempt to document the possibilities and problems.</p>", "a[href=\"#id1\"]": "<figure class=\"align-default\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../_images/web-facets.png\"><img alt=\"../_images/web-facets.png\" src=\"../_images/web-facets.png\" style=\"width: 200px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 8.1 </span><span class=\"caption-text\">Display of facets in the web interface</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#table-date-index\"]": "<table class=\"table\" id=\"table-date-index\">\n<caption><span class=\"caption-number\">Table 8.7 </span><span class=\"caption-text\">Using the date index</span><a class=\"headerlink\" href=\"#table-date-index\" title=\"Link to this table\">#</a></caption>\n<thead>\n<tr class=\"row-odd\"><th class=\"head\"><p>Query</p></th>\n<th class=\"head\"><p>Explanation</p></th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">date:[1901</span> <span class=\"pre\">TO</span> <span class=\"pre\">1904]</span></code></p></td>\n<td><p>1 January 1901 to 31 December 1904</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">date:[*</span> <span class=\"pre\">TO</span> <span class=\"pre\">1904]</span></code></p></td>\n<td><p>before 31 December 1904</p></td>\n</tr>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">date:[1904</span> <span class=\"pre\">TO</span> <span class=\"pre\">1904]</span></code></p></td>\n<td><p>1 January 1904 to 31 December 1904</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">date:[1942-10-31T00:00:00Z</span> <span class=\"pre\">TO</span> <span class=\"pre\">1942-11-30T00:00:00Z]</span></code></p></td>\n<td><p>1 November 1942 to 31 November 1942 (newspapers only \u2013 dates need timezones, first date in range ignored)</p></td>\n</tr>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">date:[1942-11-09T00:00:00Z</span> <span class=\"pre\">TO</span> <span class=\"pre\">1942-11-10T00:00:00Z]</span></code></p></td>\n<td><p>10 November 1942 (newspapers only \u2013 dates need timezones, first date in range ignored)</p></td>\n</tr>\n</tbody>\n</table>", "a[href=\"#table-cat-facet\"]": "<table class=\"table\" id=\"table-cat-facet\">\n<caption><span class=\"caption-number\">Table 8.9 </span><span class=\"caption-text\">Results for <code class=\"docutils literal notranslate\"><span class=\"pre\">category</span></code> facet combinations</span><a class=\"headerlink\" href=\"#table-cat-facet\" title=\"Link to this table\">#</a></caption>\n<thead>\n<tr class=\"row-odd\"><th class=\"head\"><p>Facet</p></th>\n<th class=\"head\"><p>Results</p></th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">l-category=Article</span></code></p></td>\n<td><p><span class=\"pasted-text\">172,428,352</span></p></td>\n</tr>\n<tr class=\"row-odd\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">l-category=Advertising</span></code></p></td>\n<td><p><span class=\"pasted-text\">46,739,278</span></p></td>\n</tr>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">l-category=Article&amp;l-category=Advertising</span></code></p></td>\n<td><p><span class=\"pasted-text\">5,848</span></p></td>\n</tr>\n</tbody>\n</table>", "a[href=\"#using-facets\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id7\" role=\"doc-backlink\"><span class=\"section-number\">8.6. </span>Using facets</a><a class=\"headerlink\" href=\"#using-facets\" title=\"Link to this heading\">#</a></h2><p>Facets are a set of pre-determined values you can use to set limits on your search resuls. They allow you to take slices of your results.</p><p>In the web interface, facets appear as a set of check boxes next to the list of results. You just click the box next to a facet value to apply it to your search. You can only select one facet value at a time.</p>", "a[href=\"#table-state-facet\"]": "<table class=\"table\" id=\"table-state-facet\">\n<caption><span class=\"caption-number\">Table 8.8 </span><span class=\"caption-text\">Results for state facet combinations</span><a class=\"headerlink\" href=\"#table-state-facet\" title=\"Link to this table\">#</a></caption>\n<thead>\n<tr class=\"row-odd\"><th class=\"head\"><p>Facet</p></th>\n<th class=\"head\"><p>Results</p></th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">l-state=Victoria</span></code></p></td>\n<td><p><span class=\"pasted-text\">47,775,530</span></p></td>\n</tr>\n<tr class=\"row-odd\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">l-state=New</span> <span class=\"pre\">South</span> <span class=\"pre\">Wales</span></code></p></td>\n<td><p><span class=\"pasted-text\">90,512,113</span></p></td>\n</tr>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">l-state=Victoria&amp;l-state=New</span> <span class=\"pre\">South</span> <span class=\"pre\">Wales</span></code></p></td>\n<td><p><span class=\"pasted-text\">138,287,643</span></p></td>\n</tr>\n</tbody>\n</table>", "a[href=\"#table-stemming-oddities\"]": "<table class=\"table\" id=\"table-stemming-oddities\">\n<caption><span class=\"caption-number\">Table 8.3 </span><span class=\"caption-text\">Stemming variations</span><a class=\"headerlink\" href=\"#table-stemming-oddities\" title=\"Link to this table\">#</a></caption>\n<thead>\n<tr class=\"row-odd\"><th class=\"head\"><p>Query</p></th>\n<th class=\"head\"><p>Results</p></th>\n<th class=\"head\"><p>Explanation</p></th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">naturalisation</span></code></p></td>\n<td><p><span class=\"pasted-text\">250,003</span></p></td>\n<td><p>Stemmed to \u2018naturalis\u2019</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">naturalization</span></code></p></td>\n<td><p><span class=\"pasted-text\">15,445,680</span></p></td>\n<td><p>Stemmed to \u2018natur\u2019</p></td>\n</tr>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">text:naturalisation</span></code></p></td>\n<td><p><span class=\"pasted-text\">132,528</span></p></td>\n<td><p>No stemming</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">text:naturalization</span></code></p></td>\n<td><p><span class=\"pasted-text\">24,669</span></p></td>\n<td><p>No stemming</p></td>\n</tr>\n</tbody>\n</table>", "a[href=\"#table-defuzzify-keyword\"]": "<table class=\"table\" id=\"table-defuzzify-keyword\">\n<caption><span class=\"caption-number\">Table 8.1 </span><span class=\"caption-text\">De-fuzzify keyword searches</span><a class=\"headerlink\" href=\"#table-defuzzify-keyword\" title=\"Link to this table\">#</a></caption>\n<thead>\n<tr class=\"row-odd\"><th class=\"head\"><p>Query</p></th>\n<th class=\"head\"><p>Results</p></th>\n<th class=\"head\"><p>Explanation</p></th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">hobart</span></code></p></td>\n<td><p><span class=\"pasted-text\">5,888,588</span></p></td>\n<td><p>Searches article text, tags &amp; comments (some fuzziness, terms are stemmed)</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">hobart*</span></code></p></td>\n<td><p><span class=\"pasted-text\">5,960,052</span></p></td>\n<td><p>Searches article text, tags &amp; comments (more fuzziness, wildcard matches zero or more characters)</p></td>\n</tr>\n<tr class=\"row-even\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">text:hobart</span></code></p></td>\n<td><p><span class=\"pasted-text\">5,601,808</span></p></td>\n<td><p>Searches article text only (exact match, ignores tags &amp; comments)</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p><code class=\"docutils literal notranslate\"><span class=\"pre\">title:hobart</span></code></p></td>\n<td><p><span class=\"pasted-text\">720,106</span></p></td>\n<td><p>Searches headlines only</p></td>\n</tr>\n</tbody>\n</table>"}
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