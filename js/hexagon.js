/**
* Created with hexamap.
* User: bretshack
* Date: 2014-05-19
* Time: 04:38 PM
*/


var draw = SVG('drawing')
var hex = draw.polygon(polygon(150,150,6,5)).fill('none').stroke({ width: 3 });


function polygon(x,y,rad,sides) {
	var path = "";
	for (a=0;a<sides;a++) {
		path = path + (x+(Math.sin(2*Math.PI*a/sides)*rad)) + "," + (y-(Math.cos(2*Math.PI*a/sides)*rad)) + " ";
	}
	return path.trimRight();
}