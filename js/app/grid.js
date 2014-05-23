/*
 * Created with hexamap.
 * User: bretshack
 * Date: 2014-05-19
 * Time: 09:04 PM
 */
define(["app/getScreenCenter", "d3", "app/hexagon"], function(getScreenCenter, d3, Hexagon) {
  "use strict";
  var _s32 = (Math.sqrt(3) / 2);
  var rad = 30;
  var xCenter = getScreenCenter.x;
  var yCenter = getScreenCenter.y;
  var shifty = rad * 3 / 2;
  var shiftx = _s32 * rad;
  
  var points = [{"x":rad, "y":0}, 
                {'x':rad/2, 'y':rad*_s32}, 
                {'x':-rad/2, 'y':rad*_s32}, 
                {'x':-rad, 'y':0}, 
                {'x':-rad/2, 'y':-rad*_s32}, 
                {'x':rad/2, 'y':-rad*_s32}];
  
  var canvas = d3.select("#canvas").append("svg")
                 .data([points]).enter()
                 .append('polygon')
                 .attr("points", function(d) { return [scaleX(d.x),scaleY(d.y)].join(",")})
                 .attr("stroke", "black")
                 .attr("stroke-width", 2);
  
  /*
   * Hexagon shaped grid of radius 'gridrad' (i.e. 'gridrad' hexagons from center to vertex, not counting center hex)
   * 
   * Generic Hexagon Vertices:
   * [rad, 0], 
   * [rad/2, rad*_s32], 
   * [-rad/2, rad*_s32], 
   * [-rad, 0], 
   * [-rad/2, -rad*_s32], 
   * [rad/2, -rad*_s32]
   * 
   * Generic Hexagon Path:
   * M (Math.sin(0)*rad)           (Math.cos(0)*rad)
   * L (Math.sin(Math.PI/3)*rad)   (Math.cos(Math.PI/3)*rad)
   * L (Math.sin(Math.PI*2/3)*rad) (Math.cos(Math.PI*2/3)*rad)
   * L (Math.sin(Math.PI*3/3)*rad) (Math.cos(Math.PI*3/3)*rad)
   * L (Math.sin(Math.PI*4/3)*rad) (Math.cos(Math.PI*4/3)*rad)
   * L (Math.sin(Math.PI*5/3)*rad)k (Math.cos(Math.PI*5/3)*rad)
   * z
   *  
  */
});