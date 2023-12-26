// arraySort() The sort() method sorts an array alphabetically:
function arraySort(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();

    document.getElementById('demo1').innerHTML = "arraySort: " + fruits;
};

// arrayReverse() descending sort
function arrayReverse(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.reverse();

    document.getElementById('demo2').innerHTML = "arrayReverse: " + fruits;
};

// numerical sort (ascending and descending)
function numericalSort(){
    const points = [40, 100, 1, 5, 25, 10];
    // points.sort(); // will sort the numbers based on the first number
    points.sort(function(a, b){return a - b}); // will sort the numbers ascending
    // points.sort(function(a, b){return b - a}); // will sort the numbers descending

    document.getElementById('demo3').innerHTML = "numerical sort: " + points;
};
// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, no changes are done with the sort order of the two values.
// Example:
// The compare function compares all the values in the array, two values at a time (a, b).
// When comparing 40 and 100, the sort() method calls the compare function(40, 100).
// The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.
// You can use this code snippet to experiment with numerically and alphabetically sorting:

window.onload =
arraySort()
arrayReverse()
numericalSort();