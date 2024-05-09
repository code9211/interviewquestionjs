console.log(mul(2)(3)(3))

function mul(x) {
    return function (y) {
        return function (z) {
            return x * y * z
        }
    }
}

function createBase(value) {
    return function (inner) {
        return value + inner
    }
}

let addFunction = createBase(6)

addFunction(34)

let a = b = 34
console.log(a);



console.log(add(3)(2)(3))


function add(a) {

    return function (b) {
        return function (c) {
            return a + b + c
        }
    }

}

console.log(a(3)(3)(3)(3)(3)());

function a(x) {
    return function (y) {
        if (y) return a(x + y)
        return x
    }

}