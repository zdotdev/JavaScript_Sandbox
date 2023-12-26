// Array length
function arrayLength(){
    const array = ["Apple", "Banana", "Mango", "Strawberry"];

    document.getElementById('demo1').innerHTML = "arrayLength: " + array.length;
};

// Array toString()
function arrayToString(){
    const array = ["Apple", "Banana", "Mango", "Strawberry"];

    document.getElementById('demo2').innerHTML = "arrayToString: " + array.toString();

    //The join() method also joins all array elements into a string.
    //It behaves just like toString(), but in addition you can specify the separator:
    document.getElementById('demo2.1').innerHTML = "arrayJoin: " + array.join("*");
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
function arrayUnShift(){
    const array = ["Apple", "Banana", "Mango", "Strawberry"];
    array.unshift("Pomelo"); // Add in the parameter the element you want to add

    // Returns the value that was shifted out
    // document.getElementById('demo5').innerHTML = "arrayShift: " + array.shift();

    document.getElementById('demo6').innerHTML = "arrayunshift: " + array;
};

// Array join() specifies the separator
function arrayJoin(){
    const array = ["Apple", "Banana", "Mango", "Strawberry"];

    document.getElementById('demo7').innerHTML = "arrayJoin:" + array.join('*');
};

function arrayChangeElementsUsinglength(){
    const array = ["Apple", "Banana", "Mango", "Strawberry"];

    document.getElementById('demo8').innerHTML = "arrayChangeElementsUsinglength: " + (array[array.length] = "Kiwi");
};

// Array delete() Array elements can be deleted using the JavaScript operator delete. Using delete leaves undefined holes in the array. Use pop() or shift() instead.
function arrayDelete(){
    const array = ["Apple", "Banana", "Mango", "Strawberry"];
    delete array[0];

    document.getElementById('demo9').innerHTML = "arrayDelete: " + array;
};

// Array concat()
function arrayConcat(){
    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];
    const arr3 = ["Robin", "Morgan"];
    
    const myChildren = myGirls.concat(myBoys);
    // const myChildren = arr1.concat(arr2, arr3); Concat 3 arrays
    // const myChildren = arr1.concat("Peter"); concat with values

    document.getElementById('demo10').innerHTML = "arrayConcat: " + myChildren;
};

// Array flat() Flattening an array is the process of reducing the dimensionality of an array. The flat() method creates a new array with sub-array elements concatenated to a specified depth.
function arrayFlat(){
    const myArr = [[1,2],[3,4],[5,6]];
    const newArr = myArr.flat();

    document.getElementById('demo11').innerHTML = "arrayFlat: " + newArr;
}

// Array splice() The splice() method can be used to add new items to an array:
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items:

function arraySplice(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 0, "Lemon", "Kiwi");

    // fruits.splice(0, 1); to remove an element, you can put it on the parameter. First value is for the index, second is for the length of item(s) to be removed

    document.getElementById('demo12').innerHTML = "arraySplice: " + fruits;
};

// Array slice() will return the array element starting from the index inside inside the parameter
function arraySlice(){
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    // const newfruits = fruits.slice(1, 5); The first parameter is for the index where to start and the second is where to end. Note: the second parameter is base on position, not on index. 

    document.getElementById('demo13').innerHTML = "arraySlice: " + fruits.slice(3);
};

window.onload = 
arrayLength()
arrayToString()
arrayPop()
arrayPush()
arrayShift()
arrayUnShift()
arrayJoin()
arrayChangeElementsUsinglength()
arrayDelete()
arrayConcat()
arrayFlat()
arraySplice()
arraySlice();