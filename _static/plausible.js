var script = document.createElement('script');
script.defer = true;
script.src = "https://plausible.io/js/script.js";
script.dataset.domain = "tdg.glam-workbench.net";

// optional if using proxy, see Plausible.io documentation for more about this
// script.dataset.api = 'https://yourproxy.com/api/event';

document.getElementsByTagName('head')[0].appendChild(script);