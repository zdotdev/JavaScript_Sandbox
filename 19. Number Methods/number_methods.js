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

    document.getElementById('demo7').innerHTML = "Number() Method: " + date;
};



window.onload =
toString()
toExponential()
toFixed()
toPrecision()
valueOf()
number()
numberMethod();