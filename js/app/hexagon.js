/**
* Created with hexamap.
* User: bretshack
* Date: 2014-05-19
* Time: 04:38 PM
*/

define(function(require) {
  "use strict";
  
  function Hexagon(xOffset, yOffset, size) {
    if (!(this instanceof Hexagon)) {
      throw new TypeError("Hexagon constructor cannot be called as a function.");
    }
    this.q = xOffset;
    this.r = yOffset;
    this.size = size;
    var _s32 = Math.sqrt(3)/2;
    this._vertices = [[size+xOffset, 0+yOffset], [size/2+xOffset, size*_s32+yOffset], [-size/2+xOffset, size*_s32+yOffset],
                     [-size+xOffset, 0+yOffset], [-size/2+xOffset, -size*_s32+yOffset], [size/2+xOffset, -size*_s32+yOffset]];
  }
  
  Hexagon.prototype = {
    getVertices: function() {return this._vertices;},
  }
  
  return Hexagon;
  
});
