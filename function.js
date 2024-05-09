console.log('function');
var x=1
a()
b()
console.log(x);
function a() {
   x = 10;
    console.log(x);
}
function b() {
   var x=20
    console.log(x);
}


var twoSum = function(nums, target) {

    for (let i = 0; i < nums.length; i++) {
     const elementI = nums[i];
         for (let j = i+1; j < nums.length; j++) {
             const elementJ = nums[j];
             if(elementJ+elementI==target)
             return [i,j]
         }
     
    } 
};

let temp=[3,2,2]
console.log(twoSum(temp,5))