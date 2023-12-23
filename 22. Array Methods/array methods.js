// Array length
function arrayLength(){
    const array = ["Apple", "Banana", "Mango", "Strawberry"];

    document.getElementById('demo1').innerHTML = "arrayLength: " + array.length;
};

// Array toString()
function arrayToString(){
    const array = ["Apple", "Banana", "Mango", "Strawberry"];

    //The join() method also joins all array elements into a string.
    //It behaves just like toString(), but in addition you can specify the separator:
    // document.getElementById('demo2').innerHTML = "arrayToString: " + array.join("*");

    document.getElementById('demo2').innerHTML = "arrayToString: " + array.toString();
};

// Array pop() remove the last array element
function arrayPop(){
    const array = ["Apple", "Banana", "Mango", "Strawberry"];
    array.pop();

    // shows the popped item
    // document.getElementById('demo3').innerHTML = "arrayPop: " + array.pop();
    
    document.getElementById('demo3').innerHTML = "arrayPop: " + array;
};

// Array push()
function arrayPush(){
    const array = ["Apple", "Banana", "Mango", "Strawberry"];
    array.push("Peach");
    
    // document.getElementById('demo4').innerHTML = "arrayPush: " + array.push("Peach"); returns the length
    document.getElementById('demo4').innerHTML = "arrayPush: " + array;
};

// Array shift() The shift() method removes the first array element and "shifts" all other elements to a lower index.
function arrayShift(){
    const array = ["Apple", "Banana", "Mango", "Strawberry"];
    array.shift();

    // Returns the value that was shifted out
    // document.getElementById('demo5').innerHTML = "arrayShift: " + array.shift();

    document.getElementById('demo5').innerHTML = "arrayShift: " + array;
};

// Array unshift() The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:


// Array join()
// Array delete()
// Array concat()
// Array flat()
// Array splice()
// Array slice()

window.onload = 
arrayLength()
arrayToString()
arrayPop()
arrayPush()
arrayShift();