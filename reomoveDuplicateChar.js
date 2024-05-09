// let log=console.log
// let arr="wawawawawaawa"
// function duplicateChar(arr){
//     let temp=arr.split("");
//     console.log(temp)
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
        
//     }
// }

// duplicateChar(arr)
var x = "Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Double,Double,Double"
var removeDup = [...new Set(x.split(","))].join(",");
console.log(removeDup)