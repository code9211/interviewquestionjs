
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    getThis: function () {
        return this;
    }
};

console.log('this in object method', person.getThis());
function test() {
    console.log('this in a function', this);
}

test()

const show = () => this

console.log('arrow function this', show())

const per = {
    name: 'sumit',
    age: 3,
    detail: () => this.age + '' + this.name
}