let student = {
    name: 'sumit',
    last: 'ruhela',
    year: 1995
}
let teacher = {
    name: 'rahul',
    last: 'sharma',
    year: 1992
}

let getDetails = {
    getfullName: function () {
        return this.name + " " + this.last
    },
    age: function () {
        return new Date().getFullYear() - this.year
    }
}

student.__proto__ = getDetails;
teacher.__proto__ = getDetails

console.log(student.getfullName());
console.log(student.age());
console.log(teacher.getfullName());
console.log(teacher.age());