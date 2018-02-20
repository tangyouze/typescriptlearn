function Greeter(g: string) {
    this.greeting = g
}

Greeter.prototype.greet = function () {
    return 'Hello' + this.greeting
}


let greeter = new Greeter("world")

let greeter2 = new Greeter("world2")


let button = document.createElement('button')

button.textContent = 'sayHello'
