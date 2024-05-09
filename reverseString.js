function reverseString(value) {
    let str = ""
    for (let index = value.length - 1; index > -1; index--) {
        const element = value[index];
        str=str+element
    }
    console.log(str)
}

reverseString('sumit')