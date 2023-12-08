function myFunction(a, b){
    return a * b;
};

const res = myFunction(10, 15);

document.getElementById("demo1").innerHTML = res;


// It has a codeblock

window.onload = function myFunction2(){
    let a, b;
    a = 10;
    b = 10;
    const res =  a * b;
    document.getElementById("demo2").innerHTML = res;
};

