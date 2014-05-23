/*
 * Created with hexamap.
 * User: bretshack
 * Date: 2014-05-19
 * Time: 09:04 PM
 */
define(["app/getScreenCenter", "d3", "app/hexagon"], function(getScreenCenter, d3, Hexagon) {
  "use strict";
  var _s32 = (Math.sqrt(3) / 2);
  var hexsize = 30;
  var xCenter = getScreenCenter.x;
  var yCenter = getScreenCenter.y;
  var shifty = hexsize * 3 / 2;
  var shiftx = _s32 * hexsize;
  
  
  /*
   * Hexagon shaped grid of radius 'gridsize' (i.e. 'gridsize' hexagons from center to vertex, not counting center hex)
   *    * 
   * Generic Hexagon Vertices:
   * [size, 0], [size/2, size*_s32], [-size/2, size*_s32]
   * [-size, 0], [-size/2, -size*_s32, [size/2, -size*_s32]
   * 
   * Generic Hexagon Path:
   * M (Math.sin(0)*) (Math.cos(0))
   * L (Math.sin(Math.PI/3)*size) (Math.cos(Math.PI/3)*size)
   * L (Math.sin(Math.PI*2/3)*size) (Math.cos(Math.PI*2/3)*size)
   * L (Math.sin(Math.PI*3/3)*size) (Math.cos(Math.PI*3/3)*size)
   * L (Math.sin(Math.PI*4/3)*size) (Math.cos(Math.PI*4/3)*size)
   * L (Math.sin(Math.PI*5/3)*size) (Math.cos(Math.PI*5/3)*size)
   * z
   *  
  */
});