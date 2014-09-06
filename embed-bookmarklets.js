/**
 * Created by azu on 2014/09/06.
 * LICENSE : MIT
 */
"use strict";
(function () {
    function load(URL, aTag) {
        var req = new XMLHttpRequest();
        req.open("GET", URL);
        req.onload = function onload() {
            if (req.status >= 400) {
                return console.log("Error", req);
            }
            aTag.href = req.responseText;
        };
        req.onerror = function onerror() {
            console.log("OnError", req)
        };
        req.send();
    }

    var bookmarklets = document.querySelectorAll('[rel="bookmarklets"]');
    Array.prototype.slice.call(bookmarklets).forEach(function (element) {
        load(element.href, element);
    });
})();