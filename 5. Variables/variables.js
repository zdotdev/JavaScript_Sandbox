window.onload = function (){
    // Old version of declaring a variable
    var a = 1;

    // latest way to declare a variable: you can also change the value of the container of variable
    let b;
    
    // Right now, the value of b is 2
    b = 2;

    // But now, the value of b has been updated
    b = 3;

    // In const, you can change it value. You can only change tha value of array or list in const
    const c = 4;

    document.getElementById('demo').innerHTML = (a + b + c);

};