function a() {
    
    let x=4;
    function b() {
        console.log(x)
    }
    return b
}

let demo=a();

console.log(demo())