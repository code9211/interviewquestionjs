function objArray(data) {
    
    data.forEach(element => {
            if(Array.isArray(element[Object.keys(element)[0]])){
                console.log('its array')
            }
            else
            console.log('not an array')
    });
}
let value=[{"a":[1,2]},{b:3}]
console.log(objArray(value))


const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();
console.log("asdf",iterator)
for (const key of iterator) {
  console.log(key);
}