// Isha Goyal
// 12:38
let c = { greeting: 'Hey!' };
let d;
d = c;
c.greeting = 'Hello';
console.log(d.greeting);
// You
// 12:38
hello
Hover over a message to pin it
keep
// Isha Goyal
// 12:39
let c = 10;
let d;
d = c;
c= 11
console.log(d);
// You
// 12:39
10
// Isha Goyal
// 12:39
var x = 21;
var girl = function () {
console.log(x);
var x = 20;
};
girl ();
// You
// 12:40
20
// Isha Goyal
// 12:40
let x = 51;
let girl = function () {
console.log(x);
let x = 50;
};
girl ();
// You
// 12:40
50
// Isha Goyal
// 12:41
(function() {
console.log(1);
setTimeout(function(){console.log(2)}, 0);
setTimeout(function(){console.log(3)}, 1000);
console.log(4);
})();
// You
// 12:41
1
4
2
3
// Isha Goyal
// 12:42
array (0,9,8,5,1,7)
Find the second smallest number?


// L&R mindtree interview question


let arr = [1, 2, 3, 4]

function add(first, second) {

    let sum = new Promise((resolve, reject) => {
        let temp = first + second;
        resolve(temp)
    })
    return sum;
}

async function addition() {

    let sum = await add(1, 2);

    console.log(await add(sum, 3));

}

addition()


let temp1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log('temp1 completed');
    }, 2000);
})

let temp2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log('temp1 completed');
    }, 5000);
})


app.get('/google?id=123&usename=sumit', checktoken(''), (req, res) => {

    let username = req.body.username;
    let password = req.body.password;

    res.send({})

})

const event=require('event');

event.on();
event.emit();// L&R mindtree interview question