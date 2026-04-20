// ==UserScript==
// @name         Pixeldrain Bypass
// @namespace    https://github.com/nazdridoy
// @version      2.1.0
// @description  Bypass PixelDrain hotlink detection and download limits via cdn.pixeldrain.eu.cc
// @author       nazdridoy
// @license      MIT
// @match        https://pixeldrain.com/u/*
// @icon         https://pixeldrain.com/favicon.ico
// @grant        GM_openInTab
// @run-at       document-start
// @homepageURL  https://github.com/nazdridoy/pixeldrain-bypass
// @supportURL   https://github.com/nazdridoy/pixeldrain-bypass/issues
// ==/UserScript==

/*
MIT License

Copyright (c) 2023 nazDridoy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

(function () {
    'use strict';

    const match = window.location.href.match(/pixeldrain\.com\/u\/([a-zA-Z0-9]+)/);
    if (!match) return;

    const url = `https://cdn.pixeldrain.eu.cc/${match[1]}?download`;

    GM_openInTab(url, { active: true, insert: true });
})();
