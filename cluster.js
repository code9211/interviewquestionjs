

const cluster = require('cluster');
const os = require('os');


function sum() {
    let sum = 0;
    for (let index = 0; index < 1000; index++) {
        sum += index
    }
    return sum
}



async function a() {
return setTimeout(()=>{
    console.log('completed');
},10000)
}