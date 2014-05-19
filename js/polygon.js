/**
* Created with hexamap.
* User: bretshack
* Date: 2014-05-19
* Time: 03:58 PM
*/

function polygon(x,y,rad,sides) {
	var path = "M ";
	for (a=0;a<sides;a++) {
		if (a>0) {path = path + "L ";}
		path = path + (x+(Math.sin(2*Math.PI*a/sides)*rad)) + " " + (y-(Math.cos(2*Math.PI*a/sides)*rad)) + " ";
	}
	path = path + "z";
	return path;
}