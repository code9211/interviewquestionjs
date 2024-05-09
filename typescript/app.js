// export { }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Demo = /** @class */ (function () {
    function Demo(name) {
        this.name = name;
    }
    Demo.prototype.test = function () {
        return this.name;
    };
    return Demo;
}());
var d1 = new Demo('sumit');
console.log(d1.test(), d1.name);
//inheritance of ts
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.setName = function (name) {
        this.name = name;
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // name
    Child.prototype.getName = function () {
        return this.name;
    };
    return Child;
}(Parent));
var c1 = new Child();
c1.setName('sumit is great');
console.log(c1.getName());
