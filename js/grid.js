/*
* Created with hexamap.
* User: bretshack
* Date: 2014-05-19
* Time: 09:04 PM
*/

var grid = SVG("grid");
var centerx = Math.floor(window.innerWidth/2);
var centery = Math.floor(window.innerHeight/2);

var hex = draw.polygon(coordinates(centerx,centery,20,6)).fill('none').stroke({ width: 3 });