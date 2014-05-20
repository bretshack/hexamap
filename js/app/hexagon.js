/**
* Created with hexamap.
* User: bretshack
* Date: 2014-05-19
* Time: 04:38 PM
*/

define(['app/coordinates'], function(coordinates){
  return function Hexagon(x, y, size, q, r) {
    
    var height = size * 2;
    var width = Math.sqrt(3)/2 * height;
    this.axial = [q, r];
    this.center = x + "," + y;
    var points = coordinates(x,y,size,6);
    this.points = points;
    var path = "";
    for (i=0;i<6;i++) {
      path = path + points[i] + " ";
    }
    this.path = path;
  }
});