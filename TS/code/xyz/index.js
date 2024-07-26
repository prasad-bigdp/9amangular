"use strict";
let a = "prasad"; // type inferance
let b = "raj"; // type  annotation
let c = 25;
let d = undefined;
let e = null;
let f = false;
//union
let g = 25;
let h = 5;
/* non -primitive */
/* Arrays */
let arr = [2, 5];
let arr1 = [true, false, true];
let arr2 = [2, "raj"];
let arr3 = [25, "raj", 28]; //tuple
// create a tuple which accepts a persons name,age,phone number in the same order
let details = ["raj", 25, 555555555];
//enums - enums are used to store constant value
var days;
(function (days) {
    days[days["sunday"] = 1] = "sunday";
    days[days["monday"] = 2] = "monday";
    days[days["tuesday"] = 3] = "tuesday";
    days[days["wednesday"] = 4] = "wednesday";
    days[days["thursday"] = 5] = "thursday";
    days[days["friday"] = 6] = "friday";
    days[days["saturday"] = 7] = "saturday";
})(days || (days = {}));
console.log(days.sunday);
let myDetails = {
    name: "raj", age: 25
};
class Employee {
}
let x = 25;
let obj1 = {
    name: "raj", age: 35, email: "a@a.co"
};
/* create a object which we can use for signup(username,email,password) and define its data type by Interface and typeAlias */
