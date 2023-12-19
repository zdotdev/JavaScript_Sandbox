// By default, JavaScript displays numbers as base 10 decimals.
// But you can use the toString() method to output numbers from base 2 to base 36.
// Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
function toString(){
    let myNumber = 32;
    let newNumber =  myNumber.toString(32);

    document.getElementById('demo1').innerHTML = newNumber;
};



window.onload =
toString();