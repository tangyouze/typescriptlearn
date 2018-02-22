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



function getMyName(): string {
    return "hello"
}


window.onload = function () {

    console.log(greeter.greeting)

    console.log('here')
    console.log('from chrome')
    console.log(getMyName())
}