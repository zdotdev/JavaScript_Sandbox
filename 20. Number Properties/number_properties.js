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

window.onload =
epsilon()
maxValue();