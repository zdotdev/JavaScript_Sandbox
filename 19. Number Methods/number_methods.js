// toString() converts int to string
function toString(){
    let number = 10;
    let toString = number.toString();

    // or
    // you can add the number before the typeof()
    // let number = (10).toString();

    document.getElementById('demo1').innerHTML = "toString(): " + toString; 
};

// toExponential() returns a string, with a number rounded and written using exponential notation.
function toExponential(){
    let number = 9;
    let expo = number.toExponential(2);

    document.getElementById('demo2').innerHTML = "toExponential: " + expo;
};

// toFixed() returns a string, with the number written with a specified number of decimals:
function toFixed(){
    let number = 1.1111;
    let toFixed = number.toFixed(2);

    document.getElementById('demo3').innerHTML = "toFixed: " +  toFixed;
};

// toPrecision() returns a string, with a number written with a specified length:
function toPrecision(){
    let number = 9.9999;
    let toPrecisionOne = number.toPrecision(1);
    let toPrecisionTwo = number.toPrecision(10);

    document.getElementById('demo4').innerHTML = "toPrecision: " + toPrecisionTwo;
};

// valueOf() returns a value of a variable:
function valueOf(){
    let number = 10;
    let text = "Hello World";

    document.getElementById('demo5').innerHTML = "valueOf: " + number.valueOf();
};

// Variables to Numbers

// number() Returns a number converted from its argument.
function number(){
    let text = "69";
    
    document.getElementById('demo6').innerHTML = "Number: " + Number(text);
};

// Number() can also convert a date to a number. Dont know how it works
function numberMethod(){
    let date = Number(new Date("2002-10-25"));

    // The method returns the number of milliseconds since 10.25.2002. Date()
    document.getElementById('demo7').innerHTML = "Number() Method in Date: " + date;
};

// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
function parseInt(){
    let text = "10.25000";

    document.getElementById('demo8').innerHTML = "parseInt: " + Number.parseInt(text);
};

// parseFloat parses a string and returns a number. Spaces are allowed. Only the first number is returned:
function parseFloat(){
    let text = "10.2500000";

    document.getElementById('demo9').innerHTML = "parseFloat: " + Number.parseFloat(text);
};

// The method returns if the argument is an integer.Number.isInteger()true
function isInteger(){
    let number = 10;

    document.getElementById('demo10').innerHTML = "isInteger: " + Number.isInteger(number);
};

// Number.isSafeInteger() Method A safe integer is an integer that can be exactly represented as a double precision number.
function safeInteger(){
 let number = 10;
 
//  Safe integers are all integers from -(253 - 1) to +(253 - 1).
 document.getElementById('demo11').innerHTML = "isSafeInteger: " + Number.isSafeInteger(number);
};

function mathPow(){
    const num = 3;
    const expo1 = Math.pow(num, 3);
    console.log(expo1);
}


window.onload =
toString()
toExponential()
toFixed()
toPrecision()
valueOf()
number()
numberMethod()
parseInt()
parseFloat()
isInteger()
safeInteger();
mathPow();