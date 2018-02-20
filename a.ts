class Greeter {
    greeting: string
    constructor(g: string) {
        this.greeting = g
    }

    greet() {
        return 'Hello' + this.greeting
    }
}



let greeter = new Greeter("world")

let greeter2 = new Greeter("world2")


console.log(greeter.greeting)

console.log('here')
alert('123')