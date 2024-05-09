// var a = "sumitruhelaruhela";
// let obj = {}

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     if (!obj[element]) {
//         obj[element] = 1
//     }
//     else {
//         obj[element] = obj[element] + 1
//     }
// }
// console.log(obj);

let str1 = "abcd", str2 = "dabc"
function anagram(str1, str2) {

    for (let index = 0; index < str1.length; index++) {
        const element = str1[index];
        if (!str2.includes(element)) {
            return false;
        }
    }
    return true
}
console.log(anagram(str1, str2))

let arr = [34, 6, 7, 8, 34523543245, 23, 4523, 4532, 54, 2, 354];
// console.log(Math.max(...arr));



// console.log(8% 2 == 0);
// gulp and grunt

console.log(parseInt(Number(3434).toString(2),2));
