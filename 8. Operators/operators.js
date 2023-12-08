window.onload = function(){
    // Arithmetic Operator
    let a = 5;
    let b = 3;

    let c = a + b;
    let d = a - b;
    let e = a * b;
    let f = a ** b;
    let g = a / b;
    let h = a % b;
    let i = 1;
    i++;
    let j = i;
    let k = 1;
    k--;
    let l = k;
    

    // Comparison Operators
    // == equal to
    // === equal value and equal type
    // != not equal
    // !== not equal value and not equal type
    // > greater than
    // < less than
    // >= greater than or equal
    // <= less than or equal 
    // ? ternary operator


    document.getElementById('demo1').innerHTML = "Addition: " + c;
    document.getElementById('demo2').innerHTML = "Subtraction: " + d;
    document.getElementById('demo3').innerHTML = "Multiplication: " + e;
    document.getElementById('demo4').innerHTML = "Exponent: " + f;
    document.getElementById('demo5').innerHTML = "Division: " + g;
    document.getElementById('demo6').innerHTML = "Modulus: " + h;
    document.getElementById('demo7').innerHTML = "Increment: " + j;
    document.getElementById('demo8').innerHTML = "Decrement: " + l;
};