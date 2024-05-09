function dup(arr) {

	return arr.filter((el, index) => {
		return arr.indexOf(el) != index
	})
}
console.log(dup([1, 4, 5, 1, 5, 5, 6, 6, 45, 21]))
//---------------------------*-----------------------------------//

var array = [
	{
		name: "sumit",
		Age: 23
	},
	{
		name: "sumit",
		Age: 23
	},
	{
		name: "sumit",
		Age: 23
	},{
		name: "sumit",
		Age: 23
	},
	{
		name: "Steven Smith",
		Age: 35
	},
	{
		name: "Robert Landley",
		Age: 84
	}
];
for (let obj of array) {
	for (let ele of array) {
		if (obj == ele) {
			// console.log(obj);
			continue;
		}
		if (ele.name === obj.name && ele.age === obj.age) {
			console.log(obj);
			break;
		}
	}
}


var array = [
	{
		name: "sumit",
		Age: 23
	},
	{
		name: "sumit",
		Age: 23
	},
	{
		name: "sumit",
		Age: 23
	}, {
		name: "sumit",
		Age: 23
	},
	{
		name: "Steven Smith",
		Age: 35
	},
	{
		name: "Robert Landley",
		Age: 84
	}
];

let newArra = [];
for (let i = 0; i < array.length; i++) {
	for (let j = 0; j < array.length; j++) {
		if (array[i] == array[j]) {
			console.log('asdfasdf');
			continue;
		}
		if (array[i].name == array[j].name && array[i].age == array[j].age) {
			newArra.push(array[i])
			break
		}
	}
}

console.log(newArra)



const map1 = { "first": "1", "second": "2", "third": "3" };

const map2 = { "fourth": "4" };

console.log();

for (const key in map1) {
	if (Object.hasOwnProperty.call(map1, key)) {
		const element = map1[key];
		map2[key] = element
	}
}
// console.log(map2);

let final = { ...map1, ...map2 }
console.log(final);

console.log([...new Set([45, 45, 4, 5, 6, 245, 2, 45, 23, 5, 2345, 7, 3456])])