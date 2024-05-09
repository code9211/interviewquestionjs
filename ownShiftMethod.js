let arr = [1, 2, 3, 4, 5, 6];



function shifted(arr) {

    let temp=arr[0]
    for (let index = 0; index < arr.length; index++) {

        arr[index] = arr[index + 1]

    }
    arr.length--
    return temp;
}

console.log(shifted(arr),arr);
//  how to create own shift function

Array.prototype.customshift=function(){


 // Check if the array is empty
 if (this.length === 0) {
    return undefined;
}

// Store the first element to return later
const firstElement = this[0];

// Shift all elements to the left
for (let i = 0; i < this.length - 1; i++) {
    this[i] = this[i + 1];
}

// Remove the last element
this.length--;

// Return the removed element
return firstElement;


}