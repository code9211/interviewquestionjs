const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors())


// 4000:login/sumit

let str = 'sumit'
let newStr = ''
for (let index = str.length; index > 0; index--) {
    const element = str[index];
    newStr = newStr + element
}

console.log(newStr);



let arr = [12, 13, 14, 30, 35, 45, 65, 32];

function nearestValue(arr, near, count) {
    let counter = 0
    for (let index = 0; index < arr.length; index++) {

        const element = arr[index];
        console.log(element);
        if (element > near && element < near + 10) {
            console.log(element);
        }
    }
}

nearestValue(arr, 30, 3)






userInfo.find({ $gt: { age: 30 } }, { firstName: 1, lastname: 1 });




// [1,2,3]

// [1][2][3][1,2][2,3][1,3][1,2,3]
// const mainArray = [1, [2, 3], 4, 5];
// const subArray = [2, 3];


function possiblearr(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let temp = arr.slice(i, j + 1)
            if (temp.length > 0) {
                result.push(temp)
            }
        }
    }
    return result
}

console.log(possiblearr([1,2,3]));