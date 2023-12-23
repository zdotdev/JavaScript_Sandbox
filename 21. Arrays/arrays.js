// Arrays - short for loop printing arrays
function arrays(){
    let title = "Short for loop in printing array";
    const arrays = ["Apple", "Mango", "Banana"];

    let demo = `<h2>${title}</h2><ul>`;

    for(const i of arrays){
        demo += `<li>${i}</li>`;
    };

    demo += `</ul>`;

    document.getElementById('demo1').innerHTML = demo;
};

// long for loop
function forLoopArrays(){
    let title = "Long for loop in printing array";
    const arrays = ["Apple", "Mango", "Banana"];

    let demo = `<h2>${title}</h2><ul>`;

    for(let i = 0; i < arrays.length; i++){
        demo += `<li>${arrays[i]}</li>`;
    };

    demo += `</ul>`;

    document.getElementById('demo2').innerHTML = demo;
};

// Add Array Elements
function createArrays(){
    const arrays = [];
    arrays[0] = "Apple";
    arrays[1] = "Mango";
    arrays[2] = "Banana";

    document.getElementById('demo3').innerHTML = "Arrays: " + arrays[0] + ", " + arrays[1] + ", " + arrays[2];
};

// new Array 
function newArray(){
    const cars = new Array("Saab", "Volvo", "BMW");
    let demo = `<ul>`;

    for(const i of cars){
        demo += `<li>${i}</li>`
    }
    demo += `</ul>`;

    document.getElementById('demo4').innerHTML = demo;
};

// Change Array value
function changeArrayValue(){
    const arrays = ["Apple", "Mango", "Banana"];
    arrays[1] = "Strawberry";

    document.getElementById('demo5').innerHTML = "Change array value: " + arrays[1];
};

// Convert Array to String
function arrayToString(){
    const arrays = ["Apple", "Mango", "Banana"];

    document.getElementById('demo6').innerHTML = "Convert Array to String: " + arrays.toString();
};

// Access full Array
function fullArray(){
    const arrays = ["Apple", "Mango", "Banana"];

    document.getElementById('demo7').innerHTML = "Access full Array: " + arrays;
};

// Arrays can be Object
function arrayAsObject() {
    function myFunction() {
        return "Array as Object: ";
    }

    const myArray = [];
    const date = new Date;
    const myCars = ["Toyota", "Nissan", "Ford"];
    myArray[0] = date;
    myArray[1] = document.getElementById('demo8.1').innerHTML = myFunction();
    myArray[2] = myCars;

    document.getElementById('demo8.1').innerHTML = myArray[1] + " " + myArray[0] + " " + myArray[2];
}

// Array length
function arrayLength(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let length = fruits.length;

    document.getElementById('demo9').innerHTML = "Array length: " + length;
};

// Accessing last Array Element
function lastArray(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruit = fruits[fruits.length - 1];

    document.getElementById('demo10').innerHTML = "last Array Element: " + fruit;
};

function forEachArray(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    let text = "<ul>";
    fruits.forEach(myFunction);
    text += "</ul>";

    function myFunction(value) {
    text += "<li>" + value + "</li>";
    };

    document.getElementById('demo11').innerHTML = text;
};

window.onload = 
arrays()
forLoopArrays()
createArrays()
newArray()
changeArrayValue()
arrayToString()
fullArray()
arrayAsObject()
arrayLength()
lastArray()
forEachArray();