// ==UserScript==
// @name         Google - Unhijack Links
// @description  Disable Google replacing direct search result links with internal Google links. Works on Google Search, Images, and more.
// @version      0.0.1
// @author       Arthur Hammer
// @namespace    https://github.com/a-hammer
// @license      MIT
// @homepage     https://github.com/a-hammer/userscripts/tree/master/Google_UnhijackLinks
// @updateURL    https://github.com/a-hammer/userscripts/raw/master/Google_UnhijackLinks/google_unhijack-links.user.js
// @downloadURL  https://github.com/a-hammer/userscripts/raw/master/Google_UnhijackLinks/google_unhijack-links.user.js
// @supportURL   https://github.com/a-hammer/userscripts/issues
// @match        https://*.google.tld/*
// @grant        none
// ==/UserScript==

(function() {

    // Google's 'rwt' function hijacks direct search result links.
    // Override and disable further overriding.
    Object.defineProperty(window, 'rwt', {
        value: function() {},
        configurable: false,
        writable: false
    });

})();
