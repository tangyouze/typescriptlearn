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
console.log(greeter.greeting);
console.log('here');
alert('123');
