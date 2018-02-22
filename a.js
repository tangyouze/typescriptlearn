"use strict";
var Greeter = /** @class */ (function () {
    function Greeter(g) {
        this.greeting = g;
    }
    Greeter.prototype.greet = function () {
        return 'Hello' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var greeter2 = new Greeter("world2");
function getMyName() {
    return "hello";
}
window.onload = function () {
    console.log(greeter.greeting);
    console.log('here');
    console.log(getMyName());
};
//# sourceMappingURL=a.js.map