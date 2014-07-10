//This code taken from "Hexagon Grid Functions" on http://www.redblobgames.com/grids/hexagons.html (Copyright 2013 Red Blob Games <redblobgames@gmail.com>)

var Cube = function(x, y, z) {
    this.v = [x, y, z];
};
Cube.direction = function(i) {
    return new Cube(Cube._directions[i][0], Cube._directions[i][1], Cube._directions[i][2]);
}
Cube.makeLine = function(A, B) {
    var d = A.subtract(B);
    var N = 0;
    var _g = 0;
    while (_g < 3) {
        var i = _g++;
        var j = (i + 1) % 3;
        var distance = Math.abs(d.v[i] - d.v[j]) | 0;
        if (distance > N)
            N = distance;
    }
    var cubes = [];
    var prev = new Cube(0, 0, -999);
    var _g1 = 0, _g = N + 1;
    while (_g1 < _g) {
        var i = _g1++;
        var c = A.add(d.scale(i / N)).round();
        if (!c.equals(prev)) {
            cubes.push(c);
            prev = c;
        }
    }
    return cubes;
}
Cube.prototype = {
    toString: function() {
        return this.v.join(",");
    },
    equals: function(other) {
        return this.v[0] == other.v[0] && this.v[1] == other.v[1] && this.v[2] == other.v[2];
    },
    scale: function(f) {
        return new Cube(f * this.v[0], f * this.v[1], f * this.v[2]);
    },
    add: function(other) {
        return new Cube(this.v[0] + other.v[0], this.v[1] + other.v[1], this.v[2] + other.v[2]);
    },
    subtract: function(other) {
        return new Cube(this.v[0] - other.v[0], this.v[1] - other.v[1], this.v[2] - other.v[2]);
    },
    rotateLeft: function() {
        return new Cube(-this.v[1], -this.v[2], -this.v[0]);
    },
    rotateRight: function() {
        return new Cube(-this.v[2], -this.v[0], -this.v[1]);
    },
    length: function() {
        var len = 0.0;
        var _g = 0;
        while (_g < 3) {
            var i = _g++;
            if (Math.abs(this.v[i]) > len)
                len = Math.abs(this.v[i]);
        }
        return len;
    },
    round: function() {
        var r = [];
        var sum = 0;
        var _g = 0;
        while (_g < 3) {
            var i = _g++;
            r[i] = Math.round(this.v[i]);
            sum += r[i];
        }
        if (sum != 0) {
            var e = [];
            var worst_i = 0;
            var _g = 0;
            while (_g < 3) {
                var i = _g++;
                e[i] = Math.abs(r[i] - this.v[i]);
                if (e[i] > e[worst_i])
                    worst_i = i;
            }
            r[worst_i] = -sum + r[worst_i];
        }
        return new Cube(r[0], r[1], r[2]);
    }
}