"use strict";
exports.__esModule = true;
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function go(diameter) {
        return diameter * PI;
    }
    MyMath.go = go;
})(MyMath || (MyMath = {}));
var rectangle_1 = require("./math/rectangle");
console.log(rectangle_1["default"](123));
MyMath.go(123);
