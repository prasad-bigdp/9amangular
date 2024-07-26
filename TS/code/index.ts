let a = "prasad"; // type inferance
let b: string = "raj"; // type  annotation
let c: number = 25;
let d: undefined = undefined;
let e: null = null;
let f: boolean = false;


//union
let g: string | number = 25;

let h: any = 5;

/* non -primitive */
/* Arrays */
let arr: number[] = [ 2, 5 ];
let arr1: boolean[] = [ true, false, true ];
let arr2: (string | number)[] = [ 2, "raj" ]
let arr3: [number, string, number] = [25, "raj", 28]  //tuple
// create a tuple which accepts a persons name,age,phone number in the same order
let details: [ string, number, number ] = [ "raj", 25, 555555555 ];
//enums - enums are used to store constant value
enum days{
    sunday=1,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
}
console.log(days.sunday)

//objects
// objects are defined by two data types interfaces and type aliases

interface ABC{
    name: string,
    email?: string,
    age: number;
}
interface XYZ extends ABC{
    phno:number
}
let myDetails:ABC = {
    name:"raj",age:25
}
class Employee implements ABC{
    name!:string; age!:number;
}



/* type alias */
type nsb=number|string|boolean
let x: nsb = 25;
type prasad={
name:string,age:number,email:string
}
let obj1: prasad = {
    name:"raj",age:35,email:"a@a.co"
}
/* create a object which we can use for signup(username,email,password) and define its data type by Interface and typeAlias */









