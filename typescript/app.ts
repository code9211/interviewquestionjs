// export { }

// class App {

//     test(){
//         console.log('this is my first app file');
//     }
// }

// let a1=new App();
// a1.test()

// function demo(params: any) {
//     return 1 + 1;
// }
// console.log(demo(''));


class Demo {
    name: any
    constructor(name) {
        this.name = name
    }
    test() {
        return this.name
    }
}

let d1 = new Demo('sumit')
console.log(d1.test(), d1.name);
//inheritance of ts


class Parent {
    name
    setName(name) {
        this.name = name
    }
}


class Child extends Parent {
    // name
    getName() {
        return this.name
    }
}


let c1 = new Child();
c1.setName('sumit is great');
console.log(c1.getName());

