namespace MyMath {
    const PI = 3.14;
    export function go(diameter: number) {
        return diameter * PI
    }
}

import calc from './math/rectangle'

console.log(calc(123))
MyMath.go(123)