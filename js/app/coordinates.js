/**
* Created with hexamap.
* User: bretshack
* Date: 2014-05-19
* Time: 03:58 PM
*/

define(function () {
	
  var coordinates = function (x,y,rad,sides) {
    var points = [];
	  for (a=0;a<sides;a++) {
      points.push(x+(Math.sin(2*Math.PI*a/sides)*rad) + "," + (y-(Math.cos(2*Math.PI*a/sides)*rad)));
	  }
	  return points;
  }
  
  return coordinates;
    
});