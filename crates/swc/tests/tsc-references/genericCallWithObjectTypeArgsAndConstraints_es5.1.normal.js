import * as swcHelpers from "@swc/helpers";
// Generic call with constraints infering type parameter from object member properties
// No errors expected
var C = function C() {
    "use strict";
    swcHelpers.classCallCheck(this, C);
};
var D = function D() {
    "use strict";
    swcHelpers.classCallCheck(this, D);
};
var X = function X() {
    "use strict";
    swcHelpers.classCallCheck(this, X);
};
function foo(t, t2) {
    var x;
    return x;
}
var c1 = new X();
var d1 = new X();
var r = foo(c1, d1);
var r2 = foo(c1, c1);
function foo2(t, t2) {
    var x;
    return x;
}
var r = foo2(c1, d1);
var r2 = foo2(c1, c1);
