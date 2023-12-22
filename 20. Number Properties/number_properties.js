// Number.EPSILON is the difference between the smallest floating point number greater than 1 and 1.
function epsilon(){
    let x = Number.EPSILON;

    document.getElementById('demo1').innerHTML = "epsilon: " + x;
};

// Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.
function maxValue(){
    let x = Number.MAX_VALUE;

    document.getElementById('demo2').innerHTML = "maxValue: " + x;
};

// Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.
function minValue(){
    let x = Number.MIN_VALUE;

    document.getElementById('demo3').innerHTML = "minValue: " + x;
};

// Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript. Number.MAX_SAFE_INTEGER is (253 - 1).
function maxSafeInteger(){
    let x = Number.MAX_SAFE_INTEGER;

    document.getElementById('demo4').innerHTML = "maxSafeInteger: " + x;
};

// Number.MIN_SAFE_INTEGER represents the minimum safe integer in JavaScript. Number.MIN_SAFE_INTEGER is -(253 - 1).
function minSafeInteger(){
    let x = Number.MIN_SAFE_INTEGER;

    document.getElementById('demo5').innerHTML = "minSafeInteger: " + x;
};

// POSITIVE_INFINITY is returned on overflow:
function infinity(){
    let x = 1 / 0;

    document.getElementById('demo6').innerHTML = "infinity: " + x;
};

function negativeInfinity(){
    let x = -1 / 0;

    document.getElementById('demo7').innerHTML = "negativeInfinity: " + x;
};

function Not_a_Number(){
    let x = 100 / "Apple";

    document.getElementById('demo8').innerHTML = "Not a Number: " + x;
};

window.onload =
epsilon()
maxValue()
minValue()
maxSafeInteger()
minSafeInteger()
infinity()
negativeInfinity()
Not_a_Number();