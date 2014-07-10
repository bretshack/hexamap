//This code taken from "Hexagon Grid Functions" on http://www.redblobgames.com/grids/hexagons.html (Copyright 2013 Red Blob Games <redblobgames@gmail.com>)

var List = function() {
    this.length = 0;
};
List.prototype = {
    add: function(item) {
        var x = [item];
        if (this.h == null)
            this.h = x;
        else
            this.q[1] = x;
        this.q = x;
        this.length++;
    }
    ,iterator: function() {
        return {h: this.h,hasNext: function() {
                return this.h != null;
            },next: function() {
                if (this.h == null)
                    return null;
                var x = this.h[0];
                this.h = this.h[1];
                return x;
            }};
    }
}