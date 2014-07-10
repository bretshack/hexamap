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