/**
* Created with hexamap.
* User: bretshack
* Date: 2014-05-19
* Time: 03:58 PM
*/

function coordinates(x,y,rad,sides) {
	var path = "";
	for (a=0;a<sides;a++) {
		path = path + (x+(Math.sin(2*Math.PI*a/sides)*rad)) + "," + (y-(Math.cos(2*Math.PI*a/sides)*rad)) + " ";
	}
	return path.trimRight();
}