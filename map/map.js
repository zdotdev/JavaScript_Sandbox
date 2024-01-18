// map()
// map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array.

// basic usage of map()
const numbers = [4, 9, 16, 25];
// this will return the numbers array but with the squareroot
console.log(numbers.map(Math.sqrt));

// map function(parameter)
function parameter(){
    const numbers = [1, 2, 3];

    // returns the value of array elements multiplied to its self
    const multiplied = numbers.map(function(element) {
    return element * element;
    });

    document.getElementById('demo1').innerHTML = "Map using function(parameter): " + multiplied;
    // Output: [1, 4, 9]
};

// map index()
function index(){
    const numbers = [1, 2, 3, 4, 5];

    // This will map the array and return true of false if the index of the element is modolus of 2 is equal to 0
    const indexed = numbers.map((element, index) => {
        return index % 2 == 0;
    });

    document.getElementById('demo2').innerHTML = "Map using index: " + indexed;
}

parameter();
index();