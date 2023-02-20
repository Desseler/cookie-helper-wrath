// ==UserScript==
// @name         Cookie Clicker Helper
// @namespace    http://tampermonkey.net/
// @version      1.9_02
// @description  free cookies
// @author       petar105
// @match        https://orteil.dashnet.org/cookieclicker/
// @icon         https://www.google.com/s2/favicons?domain=dashnet.org
// @grant        none
// ==/UserScript==

// If editing the script, ignore any "Game is not defined" warnings
(function() {
    'use strict';

    setInterval(function() { Game.ClickCookie(); }, 4);

// allows me to turn on and off the clicking of the Wrath Cookies
var wrathCookieSwitchOn = true;

var SpecialCookieClicker =
    setInterval(function() {
        if (wrathCookieSwitchOn){
            Game.shimmers.forEach(function(shimmer) {
                if (shimmer.type == "golden") { shimmer.pop() }
            })
        } else {
            Game.shimmers.forEach(function(shimmer) {
                if(shimmer.type == "golden" && shimmer.wrath == 0)
                {
                    shimmer.pop()
                }
            })
        }
    }, 500);
