!function(t){var e={};function n(o){if(e[o])return e[o].exports;var c=e[o]={i:o,l:!1,exports:{}};return t[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(o,c,function(e){return t[e]}.bind(null,c));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.numberToWordsSRB=void 0;e.numberToWordsSRB=function(t){var e=["","jedan","dva","tri","četiri","pet","šest","sedam","osam","devet","deset","jedanaest","dvanaest","trinaest","četrnaest","petnaest","šesnaest","sedamnaest","osamnaest","devetnaest"],n=["","jedna","dve","tri","četiri","pet","šest","sedam","osam","devet","deset","jedanaest","dvanaest","trinaest","četrnaest","petnaest","šesnaest","sedamnaest","osamnaest","devetnaest"],o=["","","dvadeset","trideset","četrdeset","pedeset","šezdeset","sedamdeset","osamdeset","devedeset"],c=["","sto","dvesta","trista","četiristo","petsto","šesto","sedamsto","osamsto","devetsto"],r=parseInt(t),a=t.toString().split("").filter(function(t){return"-"!==t}).join(""),s=parseInt(a.slice(-2)),i=parseInt(a[a.length-4]),u=parseInt(a[a.length-5]),d=parseInt(a[a.length-6]),l=parseInt(a[a.length-7]),f=parseInt(a.slice(-8,-6)),p=function(){return 1!==u&&1<i&&5>i?"hiljade":"hiljada"},v=function(){var t=4===a.length?4:5,e=parseInt(a.slice(-t,-3));return 20>e?n[e]:"".concat(o[u]," ").concat(n[i])},m=function(){return 1===l?"milion":"miliona"},g=function(){return 0===i&&0===u&&0===d?"":p()},b=function(){var t=a.length-3,n=a.length-2,r=a.length-1;return 20>s?"".concat(c[a[t]]," ").concat(e[s]):"".concat(c[a[t]]," ").concat(o[a[n]]," ").concat(e[a[r]])},h=function(){var t=a.length-8,n=a.length-7;return 20>f?"".concat(e[f]," ").concat(m()," "):"".concat(o[a[t]]," ").concat(e[a[n]]," ").concat(m())},j=function(t){return 0>r?"minus ".concat(t.split(" ").filter(function(t){return""!==t}).join(" ")):t.split(" ").filter(function(t){return""!==t}).join(" ")};return 0===r?"nula":9<a.length?"Podržani su samo brojevi koji imaju do 9 cifara":20>parseInt(a)?j(e[a]):2===a.length?j("".concat(o[a[0]]," ").concat(e[a[1]])):3===a.length?j(b()):4===a.length?j("".concat(v()," ").concat(p()," ").concat(b())):5===a.length?j("".concat(v()," ").concat(p()," ").concat(b())):6===a.length?j("".concat(c[a[0]]," ").concat(v()," ").concat(p()," ").concat(b())):7===a.length?j("".concat(e[a[0]]," ").concat(m()," ").concat(c[a[1]]," ").concat(v()," ").concat(g()," ").concat(b())):8===a.length?j("".concat(h()," ").concat(c[a[2]]," ").concat(v()," ").concat(g()," ").concat(b()," ")):9===a.length?j("".concat(c[a[0]]," ").concat(h()," ").concat(c[a[3]]," ").concat(v()," ").concat(g()," ").concat(b()," ")):void 0}},function(t,e,n){"use strict";n.r(e);var o,c,r=n(0),a=document.querySelector(".button"),s=document.querySelector(".input");s.addEventListener("keyup",function(t){13==t.keyCode&&(o=parseInt(t.target.value),c=Object(r.numberToWordsSRB)(o),document.querySelector(".result").innerHTML=c)}),a.addEventListener("click",function(t){var e=parseInt(s.value);c=Object(r.numberToWordsSRB)(e),document.querySelector(".result").innerHTML=c})}]);