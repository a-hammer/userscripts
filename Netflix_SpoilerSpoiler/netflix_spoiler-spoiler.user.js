// ==UserScript==
// @name         Netflix - Spoiler Spoiler
// @description  Hides the background spoiler images of upcoming episodes. Works when loading an episode and when switching between episodes.
// @version      0.0.1
// @author       Arthur Hammer
// @namespace    https://github.com/a-hammer
// @license      MIT
// @homepage     https://github.com/a-hammer/userscripts/tree/master/Netflix_SpoilerSpoiler
// @updateURL    https://github.com/a-hammer/userscripts/raw/master/Netflix_SpoilerSpoiler/netflix_spoiler-spoiler.user.js
// @downloadURL  https://github.com/a-hammer/userscripts/raw/master/Netflix_SpoilerSpoiler/netflix_spoiler-spoiler.user.js
// @supportURL   https://github.com/a-hammer/userscripts/issues
// @match        http*://www.netflix.com/*
// @run-at       document-body
// @grant        none
// ==/UserScript==

(function() {

     var styles = [
        '.player-loading-background { display: none; }',           // Episode loading
        '.player-postplay-background-image { display: none; }',    // Episode transition
        '.player-postplay { background-color: #222 !important; }'  // More contrast for mini-player
    ];

    styles.forEach(function(style) {
        document.styleSheets[0].insertRule(style, 0);
    });

})();
