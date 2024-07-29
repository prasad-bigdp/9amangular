let a = 35;
console.log(a, typeof a)
// setup
//datatypes
// type annotation and inference

let b: number = 15;
let c = "raj"
/* primitve and non-primitve */
let d: string = "raj";
let e: boolean = true;
let f: undefined = undefined;
let h: null = null;
let g: number[] = [ 2, 3, 5 ];
let i: [ number, string, number ] = [ 2, "raj", 3 ]; //tuple
let k: number | string = "";
let l: any = 25
enum colors{
    red,
    violet,
    blue
}
//type alias and interfaces
interface login1{
    phno:number,password:string
}
interface newInterface extends login1{ age:number}
type login2 = {
    phno:number,password:string
}
let obj: login1 = {
    phno:25252,password:"sghgsd"
}
/* functions */
function myFun(a:number, b:number=25):never
{
     throw new Error("probelm happened")
   
}


function sum(a:number, b:number):void {
    console.log(a + b);
}
let sum2 = (a: number, b: number): void => { console.log(a + b); }
type prasad = (a: string, b: string, c: string) => string
let sum3: prasad = (a, b, c) => {
    console.log(a + b + c);
    return a + b + c
};
let sum4: prasad = (a, b, c) => a + b + c

/* typescript cannot understand DOM directly */
/* type assertion */
let x= document.getElementById('inp') as HTMLInputElement
x.value="prasad"

/* OOPS */
 class Employee{
    readonly name: string; age: number; salary:number;
    constructor(name:string, age:number, salary:number) {
        this.name = name;
        this.age = age;
        this.salary= salary
    }
     walk() {
         console.log(this.name + " is walking")
     }
}
class Manager extends Employee{
    mid: number;
    constructor(id: number, n:string, a:number, s:number) {
        super(n,a,s)
        this.mid=id
    }
}




//modules
/* there are so many module systems existed, popular ones are commonjs,requirejs,ES6 etc.., */


export default Employee;
export {a,b,c,d,e,obj}
























