
function fibonacci(value) {
    let fib = [];
    fib = [0, 1];
    for (let i = 2; i < value; i++) {
        console.log(i);
        fib[i] = fib[i - 2] + fib[i - 1];
        console.log(fib);
    }
}


fibonacci(11)