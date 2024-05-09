function Largestelement(arr) {
    let max = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (max < element)
            max = element
    }
    console.log(max);
}

// function secondLargest(arr) {

//     let largest = arr[0];
//     let secondLargest = arr[0]
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if (element > largest) {
//             secondLargest = largest
//             largest = element;
//         }
//         else if (element > secondLargest) {
//             secondLargest = element
//         }
//         return secondLargest
//     }
// }

console.log(secondLargest([0, 9, 8, 5, 1, 7]))


Largestelement([0, 9, 8, 5, 1, 7])



function secondLargest(arr) {

    let largest=arr[0];
    let secondLargest=[1];

    for (let index = 0; index < arr.length; index++) {
        const element = array[index];
        
        if(element>largest & element>secondLargest){
            largest=arr[element];
        }
        else if(element>secondLargest){
            secondLargest=arr[element]
        }
    }
    
}

















