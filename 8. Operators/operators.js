window.onload = function(){
    // Arithmetic Operator:
    let a = 5;
    let b = 3;

    let c = a + b; // Addition
    let d = a - b; // Subtraction 
    let e = a * b; // Multiplication
    let f = a ** b; // Exponent
    let g = a / b; //Division
    let h = a % b; // Modulo
    let i = 1; 
    i++; // Increment
    let j = i;
    let k = 1;
    k--; // decrement
    let l = k; 
    

    // Comparison Operators:
    // == equal to
    // === equal value and equal type
    // != not equal
    // !== not equal value and not equal type
    // > greater than
    // < less than
    // >= greater than or equal
    // <= less than or equal 
    // : = else operator
    // ? ternary operator (then operator) Ex: const a = 1; const b = a < 2 ? 'red' : 'blue';


    document.getElementById('demo1').innerHTML = "Addition: " + c;
    document.getElementById('demo2').innerHTML = "Subtraction: " + d;
    document.getElementById('demo3').innerHTML = "Multiplication: " + e;
    document.getElementById('demo4').innerHTML = "Exponent: " + f;
    document.getElementById('demo5').innerHTML = "Division: " + g;
    document.getElementById('demo6').innerHTML = "Modulus: " + h;
    document.getElementById('demo7').innerHTML = "Increment: " + j;
    document.getElementById('demo8').innerHTML = "Decrement: " + l;
};