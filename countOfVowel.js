let vowel = "aeion".split('');
function demo(str) {

    var count = 0;
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if (vowel.indexOf(element) > -1) count++
    }

    return count
}

console.log(demo('this is sumit ruhela program to rule the world'))
console.log('this is sumit ruhela program to rule the world'.split('').reverse().join(''))