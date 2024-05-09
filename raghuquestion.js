// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.
// Note: the scores will always be unique (so no duplicate values)



// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]

// let obj = { "Java": 10, "Ruby": 80, "Python": 65 }
// function test1(object) {
//     console.log(Object.keys(object).filter(el => object[el] > 60).sort(function (a, b) { return object[b] - object[a] }))
// }
// test1(obj)
// function test(results) {
//     let objArray = [];

//     for (key in results) {
//         objArray.push({ key: key, val: results[key] });
//     }
//     objArray = objArray.sort((a, b) => {
//         return b.val - a.val;
//     }).filter((val) => {
//         return val.val >= 60;
//     }).map((val) => {
//         return val.key;
//     });

//     return objArray;
// }

// test(obj)

// function delay() {
//     return new Promise((resolve) => setTimeout(resolve, 2000));
// }
// async function delayedLog(item) {
//     await delay();
//     console.log("Processing: ", item);
// }
// async function process(array) {
//     array.map(async (item) => {
//         console.log("Start process: " + item)
//         await delayedLog(item);
//         console.log("Processed: " + item)
//     });
//     console.log("Process completed");

// }

// process([1, 2, 3]);

// start process 1
// Processing 1
// processed  1

// start process 2
// Processing 2
// processed  2

// start process 3
// Processing 3
// processed  3

// Process completed

// let result;
// result = 1 == "1"
// console.log(result)
// result = [1, 2, 3] == [1, 2, 3]
// console.log(result) 
// result = [9, 4, 8] == "9,4,8"
// console.log(result);

// const arr2D = [ [1,2],[3,4],[5,6,7] ];
// const arr2D = [ [1,2],[3,4],[5,[6,7]]];
// console.log(arr2D.toString());
// function name(arr) {

//     return arr.reduce((element,i) => {
//         return element.concat(i)
//     },[])
// }
// let n=name(arr2D)
// console.log(n);
// console.log(name(n));


// let arr =[];
// for(let i=0;i<arrMD.length;i++){
//     arr.push(...arr2D[i]);
// }


// let a = {}, b = { key: 'b' }, c = { key: "c" }

// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);

// var y = 1;
// if (function g() { }) {
//     y += typeof g
// }
// console.log(y); //1undefined


// (function () {
//     console.log(1);
//     setTimeout(function () { console.log(2); }, 1000)
//     setTimeout(function () { console.log(3); }, 1000)
//     console.log(4);
// })()

// mul(2)(3)(3) //18


// Concepts – Theory:
// What is TypeScript, TS vs JS.
// Webpack, tsconfig and usage.
// Gulp / Grunt exposure and usage.
// Closures and callbacks.
// Promises and Async-Await
// Single threaded behaviour of JavaScript / NodeJS
// Event driven nature and event loop.
// Blocking/ Non-blocking code and scaling.
// Using EventEmitter for custom events.
// AWS Keys, Roles, Policies.
// AWS Lambda – Cold start, runtime, Layers
// Lambda use cases.
// DynamoDB – Database read/write and Index concepts.
// SQS/SNS – Decoupling concepts
// HTTPS – Encryption process between browser and server
// Docker knowledge check
// Third party integration – slow upstream scenario (High TPS to low TPS)
// Concepts – Coding:
// JavaScript Basics: Loops, Callbacks, iteration.
// Closures – local variables
// Scope using let / var / const
// Usage of basic data structures – Array (Push/Pop) & Dict.
// Recursion, Memoization
// Space vs Time Complexity (Big O) – Stack / Hashmap
// ES6/ES5 syntax

// let str = "abrd251su#&y"

// console.log("9".charCodeAt());
// let rt = "Hello r".split(' ')

// console.log(rt[rt.length - 1].length)


// let s = "the sky is blue".split('').reverse().join('')
// console.log(s);
// // Output: "blue is sky the"

// var nums = [1, 3, 5, 6], target = 5
// Output = 2
// console.log(nums.indexOf(5));

// var word1 = "abc", word2 = "pqrasdfasdf";
// var out = "apbqcr";
// console.log((word1.length > word2.length) ? word1.length : word2.length);
// let final = "";
// // for (let index = 0; index < (word1.length > word2.length) ? word1.length : word2.length; index++) {
// //     let e1 = word1.length > word2.length ? word1[index] : word2[index];
// //     let e2 = word1.length < word2.length ? word2[index] : word1[index];
// //     console.log(e1,e2);
// //     // if (e1 && e2) {
// //     //     final = final + e1 + e2
// //     // }
// //     // else if (e1) {
// //     //     final = final + e2
// //     // }
// //     // else {
// //     //     final = final + e2
// //     // }
// // }
// console.log(final);

// return
// var nums = [0, 1, 0, 3, 12]
// var Output = [1, 3, 12, 0, 0];
// console.log(nums);
// for (let index = 0; index < nums.length; index++) {
//     const el = nums[index];

//     console.log(index, el, nums[index + 1]);
//     if (nums.indexOf(undefined) > -1 || nums.length < index) {
//         console.log('break');
//         break
//     }
//     if (el == 0 && nums[index + 1] == 0) {
//         console.log('inside loop', index)
//         // index++;
//         // continue;
//     }
//     else if (el == 0 && nums[index + 1] != 0) {
//         console.log('else lopp', index, el, nums[index + 1]);
//         let temp = el;
//         nums[index] = nums[index < nums.length ? index + 1 : nums.length - 1];
//         nums[index < nums.length ? index + 1 : nums.length - 1] = temp;
//     }
//     console.log('else value', nums)
// }
// // nums.splice()

// console.log('final' + nums);


// let object = { event_date: '2023-02-24T18:30:00.000Z', createdon: '2023-02-20T05:51:17.827Z', modifiedon: '2023-02-20T05:51:17.827Z', event_cst_date_time: '2023-02-25T08:50:00.000Z', event_middate: '2023-02-22T08:50:00.000Z' }

// let date=[]
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(element)    
//         date.push(new Date(element).toLocaleDateString())
//     }
// }
// console.log(date);

if (function g() { }) {
    y += typeof g
}

