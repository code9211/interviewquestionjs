function armstrong(params) {
    let arr = 0
    while (params>0) {
        let temp = params % 10;
        arr=arr+(temp * temp * temp)
        params = Math.floor(params / 10)
    }
    return arr
}

console.log(armstrong(153))