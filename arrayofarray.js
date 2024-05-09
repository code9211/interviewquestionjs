{
    let result = [];

    // [1,2,4,[5,6,7,[8,9,1,[2,3],2,4]]]
    let arr = [1, 2, 4, [5, 6, 7, [8, 9, 1, [2, 3], 2, 4]]]
    subarray(arr)
    
    function subarray(arr) {
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
                console.log(element);
                if(Array.isArray(element)){
                    subarray(element)
                    // break;
                }
                else{
                    result.push(element)
                }
        }
        console.log('output',result);
    }
}
