
function sumSameKeyValuePairs(arr) {
    const result = {};
  
    arr.forEach(obj => {
      for (let key in obj) {
        console.log(key)
        if (obj.hasOwnProperty(key)) { 
          if (result.hasOwnProperty(key)) {
            result[key] += obj[key];
          } else {
            result[key] = obj[key];
          }
        }
      }
    });
  
    return result;
  }
  
  // Example usage
  const arr = [{ a: 1, b: 3 }, { a: 3, b: 5 }];
  const sum = sumSameKeyValuePairs(arr);
  
  console.log(sum); // Output: { a: 4, b: 8 }