/*
* Created with hexamap.
* User: bretshack
* Date: 2014-05-19
* Time: 09:04 PM
*/


define(["app/getScreenCenter", "app/coordinates", "svg.min", "app/hexagon"], function(getScreenCenter, coordinates, SVG, Hexagon) {
  var canvas = SVG('canvas')
  var centerx = getScreenCenter.x;
  var centery = getScreenCenter.y;
  var size = 30;
  var shifty = size * 3/2;
  var shiftx = Math.sqrt(3)/2* size;
  
  var grid = [];
  var griddraw = canvas.group();
  
  //Ineffecient algorithm for building square grid
  for (col=0;col<=15;col++) {
    for (row=0;row<=15;row++) {
      var q = col - 7;
      var r = row - 7;
      if (Math.abs(row)%2===0){
          var hex = new Hexagon(centerx+(shiftx*(q*2)),centery+(shifty*(r)),size,q,r);
          grid.push(hex);
          griddraw.add(canvas.polygon(hex.path).fill('none').stroke({ width: 3 }));
      } else {
          var hex = new Hexagon(centerx+(shiftx*(q*2+1)),centery+(shifty*(r)),size,q,r);
          grid.push(hex);
          griddraw.add(canvas.polygon(hex.path).fill('none').stroke({ width: 3 }));
      } 
    }
  }
  
  /*
   * 
   * 
   */
  
});