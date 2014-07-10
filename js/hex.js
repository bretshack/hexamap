//This code taken from "Hexagon Grid Functions" on http://www.redblobgames.com/grids/hexagons.html (Copyright 2013 Red Blob Games <redblobgames@gmail.com>)

var Hex = function(q, r) {
    this.q = q;
    this.r = r;
};
Hex.prototype = {
    toString: function() {
        return this.q + ":" + this.r;
    }
}
var HxOverrides = function() {
}
HxOverrides.iter = function(a) {
    return {cur: 0,arr: a,hasNext: function() {
            return this.cur < this.arr.length;
        },next: function() {
            return this.arr[this.cur++];
        }};
}

// (x, y) should be the center
// scale should be the distance from corner to corner
// orientation should be 0 (flat bottom hex) or 1 (flat side hex)
function hexToPolygon(scale, x, y, orientation) {
    // NOTE: the article says to use angles 0..300 or 30..330 (e.g. I
    // add 30 degrees for pointy top) but I instead use -30..270
    // (e.g. I subtract 30 degrees for pointy top) because it better
    // matches the animations I needed for my diagrams. They're
    // equivalent.
    var points = [];
    for (var i = 0; i < 6; i++) {
        var angle = 2 * Math.PI * (2 * i - orientation) / 12;
        points.push(new ScreenCoordinate(x + 0.5 * scale * Math.cos(angle),
        y + 0.5 * scale * Math.sin(angle)));
    }
    return points;
}

// The shape of a hexagon is fixed by the scale and orientation
function makeHexagonShape(scale, orientation) {
    var points = hexToPolygon(scale, 0, 0, orientation);
    var svg_coord = "";
    points.forEach(function(p) {
        svg_coord += p + " ";
    });
    return svg_coord;
}