//This code taken from "Hexagon Grid Functions" on http://www.redblobgames.com/grids/hexagons.html (Copyright 2013 Red Blob Games <redblobgames@gmail.com>)

var Lambda = function() {
}
Lambda.array = function(it) {
    var a = new Array();
    var $it0 = $iterator(it)();
    while ($it0.hasNext()) {
        var i = $it0.next();
        a.push(i);
    }
    return a;
}
Lambda.map = function(it, f) {
    var l = new List();
    var $it0 = $iterator(it)();
    while ($it0.hasNext()) {
        var x = $it0.next();
        l.add(f(x));
    }
    return l;
}