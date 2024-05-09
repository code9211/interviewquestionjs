function generateSubarrays(arr=[]) {
    const subarrays = [];
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            const subarray = arr.slice(i, j + 1);
            console.log(subarray, i, j + 1);
            if (subarray.length > 0) {
                subarrays.push(subarray);
            }
        }
    }
    return subarrays;
}

const arr = [1, 2, 3];
const subarrays = generateSubarrays(arr);
console.log(subarrays);