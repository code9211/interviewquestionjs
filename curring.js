console.log(mul(2)(3)(3));

function mul(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

function createBase(value) {
  return function (inner) {
    return value + inner;
  };
}

let addFunction = createBase(6);

addFunction(34);

let a = (b = 34);
console.log(a);

console.log(add(3)(2)(3));

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(a(3)(3)(3)(3)(3)());

function a(x) {
  return function (y) {
    if (y) return a(x + y);
    return x;
  };
}

{
  // input=[1,2]
  // output=[3,6,12,...a.];

  function sumofarray(input = [], count) {
    let result = [];

    let total = input.reduce((sum, el) => {
      return sum + el;
    }, 0);

    for (let index = 0; index < count; index++) {
      result.push(total);
      total += total;
      count--;
    }
    return result;
  }
  console.log(sumofarray([1, 2], 6));
}
