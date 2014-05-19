/**
* Created with hexamap.
* User: bretshack
* Date: 2014-05-19
* Time: 04:38 PM
*/

$("#svg_div").svg();
var svg = $("#svg_div").svg("get");
// call using polygon(x,y,rad,sides) where x and y are centre co-ordinates
// rad is the radius of the vertices, and sides is the number of sides
svg.path(polygon(15,15,60,6),{stroke: "black", "stroke-width":5, fill: "green",});


function polygon(x,y,rad,sides) {
	var path = "M ";
	for (a=0;a<sides;a++) {
		if (a>0) {path = path + "L ";}
		path = path + (x+(Math.sin(2*Math.PI*a/sides)*rad)) + " " + (y-(Math.cos(2*Math.PI*a/sides)*rad)) + " ";
	}
	path = path + "z";
	return path;
}