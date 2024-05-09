function name(arr) {


    return arr.reduce((acc, curr) => {
        return acc = acc + curr
    }, 0)
}

function bobalen(a, b) {
    let alen = 0;
    let bob = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alen++
        }
        else if (a[i] < b[i]) {
            bob++
        }

    }
    return [alen, bob]
}

console.log(bobalen([5, 6, 7], [3, 6, 10]));


let arr =
    [[2, 3, 4],
    [3, 4, 4],
    [6, 7, 8]]

console.log(dif(arr));
function dif(arr) {
    let n = arr.length;
    let leftToRight = 0, righttoleft = 0;
    for (let i = 0; i < arr.length; i++) {
        leftToRight = leftToRight + arr[i][i];
        righttoleft = righttoleft + arr[i][n - 1 - i]
    }
    console.log(leftToRight, righttoleft)
    return Math.abs(leftToRight - righttoleft)
}

let plusminusvar = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
    // Write your code here
    let len = arr.length;
    let positive = 0, negitive = 0, zero = 0;
    for (let index = 0; index < len; index++) {
        const element = arr[index];
        if (element > 0) {
            positive++
        }
        else if (element < 0) {
            negitive++
        }
        else zero++
    }
    return [positive / len, negitive / len, zero / len]
}

console.log(plusMinus(plusminusvar));



function pattern(value) {
    for (let i = 0; i < value; i++) {
        let stair = ''
        for (let j = value; j >= 0; j--) {
            if (i < j) stair += ' '
            else stair = stair + '#'
        }
        console.log(stair)
    }
}

// #
// ##
// ###
// ####
// #####
// ######
pattern(6)

function minmaxsumofarr(arr) {
    let len = arr.length;
    arr.sort()
    let sumhigh = 0;
    let sumlow = 0;
    for (let index = len - 4; index < len; index++) {
        const element = arr[index];
        sumhigh += element
    }
    for (let index = 0; index < 4; index++) {
        const element = arr[index];
        sumlow+=element
    }
    console.log(sumlow,sumhigh);
}
console.log(minmaxsumofarr([1, 2, 3 ,4, 5]));



function birthdayCakeCandles(candles) {
    // Write your code here
    let count=0;
    candles.sort((a,b)=>a-b);
    for (let index = 0; index < candles.length; index++) {
        const element = candles[candles.length-1];
        if(candles[index]==element)
        count++
    }
    return count
}


function timeConversion(s) {
    // Write your code here
    let time=s
    if(time.includes("PM")){
        let temp=time.split('PM').shift().split(':');
        temp[0]=Number(temp[0])+12;
        console.log(temp[0]);
        return temp.join(':')
    }
    else{
        return time.split(':').shift().join(':')
    }
}
function timeConversion(s) {
    let time = s;
    if (time.includes("PM")) {
        let temp = time.split('PM').shift().split(':');
        if (temp[0] !== '12') {
            temp[0] = Number(temp[0]) + 12;
        }
        return temp.join(':');
    } else {
        let temp = time.split('AM').shift().split(':');
        if (temp[0] === '12') {
            temp[0] = '00';
        }
        return temp.join(':');
    }
}
function timeConversion(s) {
    let time = s;
    if (time.includes("PM")) {
        let temp = time.split('PM').shift().split(':');
        temp[0] = Number(temp[0]) + 12;
        return temp.join(':');
    } else {
        let temp = time.split('AM').shift().split(':');
        if (temp[0] === '12') {
            temp[0] = '00';
        }
        return temp.join(':');
    }
}
// console.log(timeConversion())


console.log('start');
setTimeout(() => {
    console.log('start 1');
}, 0);

setTimeout(() => {
    console.log('start2')
}, 0);

new Promise((resolve, reject) => {
    
    console.log('promise');
})
console.log('end');


let obj={
    value:23,
    getfunction:function() {
        return this.value    
    },
    arrowFunction: () => {
        return this.arrowFunction
    },
}
console.log(obj.getfunction());
console.log(obj.arrowFunction());



