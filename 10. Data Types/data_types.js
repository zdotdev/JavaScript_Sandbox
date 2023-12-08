// 8 Data types

// String

let a = "Demo";

document.getElementById("demo_String").innerHTML ="Example of String: " + a;

// Number

let b = 5;

document.getElementById("demo_Number").innerHTML = "Example of Number: " + b;

// Bigint is for large number like long in Java

let num = BigInt(9999999999999);

document.getElementById("demo_BigInt").innerHTML = "Example of BigInt: " + b;

// Boolean

let c = true;

document.getElementById("demo_Boolean").innerHTML = "Example of Boolean: " + c;

// Undefined

let x;

// Null

// Symbol

// Object

const car = {car_Brand: "Nissan", car_Model: "Skyline Gt R34", car_Color: "Chameleon jasper Green"};

document.getElementById("demo_Object").innerHTML = "Example of an Object: " + car.car_Brand + " " + car.Model;

// Array Object(subclass of object)

const cars = ["Nissan", "Toyota", "Mustang"];

document.getElementById("demo_Array").innerHTML = "Example of an Array: " + cars[1];

// Date Object(subclass of object)

const date = new Date();

document.getElementById("demo_DateObject").innerHTML = "Example of instantiation of an object: " + date;

// typeof operator(It returns the datatype of an object)

typeof a;