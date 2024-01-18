// filter()

// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.


// filter() using parameter
function parameter(){
    const numbers = [1, 2, 3, 4, 5];

    // the number array is passed to the element parameter
    const filteredNumbers = numbers.filter(function (element) {
        // Filter even numbers
        return element % 2 === 0;
    });

    document.getElementById('demo1').innerHTML = "Filter using parameter: " + filteredNumbers; // Output: [2, 4]
};

// currentValue()
function currentValue(){
    const numbers = [1, 2, 3, 4, 5];

    // It has no difference to parameter
    const filteredNumbers = numbers.filter(function (currentValue) {
        // Filter numbers greater than 2
        return currentValue > 2;
    });

    document.getElementById('demo2').innerHTML = "Filter using currentValue: " + filteredNumbers; // Output: [3, 4, 5]
};

// index()
function index(){
    const numbers = [1, 2, 3, 4, 5];

    // filter index will return the value of the array element. It will target the index of the element, not the elemen itself.
    const filteredNumbers = numbers.filter(function (element, index) {
        // Filter elements at even indices
        return index % 2 === 0;
    });

    document.getElementById('demo3').innerHTML = "Filter using index: " + filteredNumbers; // Output: [1, 3, 5]
};

// array()
function array(){
    const numbers = [2, 1, 4, 4, 5];

    //  It filters out any duplicates or elements that are not greater than the previous one, resulting in an array that contains only the distinct ascending elements.
    const filteredNumbers = numbers.filter(function (element, index, array) {
        // Filter elements that are greater than the previous element
        return index === 0 || element > array[index - 1];
    });

    document.getElementById('demo4').innerHTML = "Filter using array: " + filteredNumbers; // Output: [1, 2, 3, 4, 5]
};

// this()
function thisFunction(){
    const numbers = [1, 2, 3, 4, 5];
    const threshold = 3;

    // this function in filter requires calling the variable in `this.variable_name`
    const filteredNumbers = numbers.filter(
        function (element) {
            // Filter numbers greater than the threshold
            return element > this.threshold;
        },
        { threshold } // This function will call the threshold before passing it to the function
    );

document.getElementById('demo5').innerHTML = "Filter using this: " + filteredNumbers; // Output: [4, 5]

};

parameter();
currentValue();
index();
array();
thisFunction();