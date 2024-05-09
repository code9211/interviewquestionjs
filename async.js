

///////////////////////////////////////////////////////////////////

async function ruhela() {

    let data1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data 1')
        }, 0);
    })

    let data2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data 2')
        }, 70);
    })

    let d2 = await data2
    console.log(d2);
    let d1 = await data1
    console.log(d1);

    return [d1, d2]
}

// ruhela()
// async function test() {
//     let a = await ruhela()
//     console.log(a)
// }

console.log('start here');

let data1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('data 1')
    }, 2000);
})


let data2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('reject the request')
    }, 1000);
})
console.log(data1);

Promise.allSettled([data1, data2]).then(el => console.log(el))
// data1.then(e=>console.log(e))

async function handlePromise() {

    let d1 = await data1;
    console.log(d1);
    console.log('this is my first promise');

    let d2 = await data2;
    console.log(d2);
    console.log('this is my second promise');
}


// handlePromise()






// return false
let arr = [1, 2, 3, 1, 4, 1, 1];

function remove31(arr) {
    let temp = [];
    let counter = 0
    for (let index = arr.length - 1; index >= 0; index--) {
        const element = arr[index];
        console.log(index, element, counter);
        if (element != 1) {
            // temp.splice(0,0,element)
            temp.push(element)
        } else if (element == 1 && counter > 2) {
            // temp.splice(0,0,element)
            temp.push(element)
        }
        if (element === 1) counter++;
    }
    console.log(temp.reverse());
}

// remove31(arr)/


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


{
    // [1,2,4,[5,6,7,[8,9,1,[2,3],2,4]]]
    let arr = [1, 2, 4, [5, 6, 7, [8, 9, 1, [2, 3], 2, 4]]]

    let result = []
    for (let i = 0; i < arr.length; i++) {

        let test = arr[i]
        console.log(test);
    }
}