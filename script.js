
'use strict';

var protocol = window.location.protocol;
var pathname = window.location.pathname;
var hash     = window.location.hash;

var htmlElement = document.querySelector('html');
var language    = htmlElement.lang;

var newLocation = protocol + '//' + language + '.m.wikipedia.org' + pathname + hash;

window.location = newLocation;
