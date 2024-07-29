let a = 35;
console.log(a, typeof a);
// setup
//datatypes
// type annotation and inference
let b = 15;
let c = "raj";
/* primitve and non-primitve */
let d = "raj";
let e = true;
let f = undefined;
let h = null;
let g = [2, 3, 5];
let i = [2, "raj", 3]; //tuple
let k = "";
let l = 25;
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["violet"] = 1] = "violet";
    colors[colors["blue"] = 2] = "blue";
})(colors || (colors = {}));
let obj = {
    phno: 25252, password: "sghgsd"
};
/* functions */
function myFun(a, b = 25) {
    throw new Error("probelm happened");
}
function sum(a, b) {
    console.log(a + b);
}
let sum2 = (a, b) => { console.log(a + b); };
let sum3 = (a, b, c) => {
    console.log(a + b + c);
    return a + b + c;
};
let sum4 = (a, b, c) => a + b + c;
/* typescript cannot understand DOM directly */
/* type assertion */
let x = document.getElementById('inp');
x.value = "prasad";
/* OOPS */
class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    walk() {
        console.log(this.name + " is walking");
    }
}
class Manager extends Employee {
    constructor(id, n, a, s) {
        super(n, a, s);
        this.mid = id;
    }
}
//modules
/* there are so many module systems existed, popular ones are commonjs,requirejs,ES6 etc.., */
export default Employee;
export { a, b, c, d, e, obj };
