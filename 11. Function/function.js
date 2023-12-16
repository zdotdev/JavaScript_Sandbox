function myFunction(a, b){
    return a * b;
};

const res = myFunction(10, 15);

document.getElementById("demo1").innerHTML ='fucntion return: ' + res;


// It has a codeblock

window.onload = function myFunction2(){
    let a, b;
    a = 10;
    b = 10;
    const res =  a * b;
    document.getElementById("demo2").innerHTML ='Function code block: ' + res;
}

// the () Operator - Parameters

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius(77);

  document.getElementById('demo3').innerHTML = `Parameter method: ${value}`; // Backtick ang gamit para gumana yung replace method na ${}