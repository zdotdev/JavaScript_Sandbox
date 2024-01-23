// destructuring is declaring all elements in array or object in one variable.
function destructuringArray(){
    const myArr = ["Dog", "Cow", "Sheep"];

    const [dog, cow, sheep] = myArr; // Declaring a variable for each items in the array
    console.log(dog);
    console.log(cow);
    console.log(sheep);
};
function destructuringArrayTwo(){
    const myArr = ["Dog", "Cow", "Sheep"];
    const [dog,,sheep] = myArr; // you can destructure specific part of an array

    console.log(dog + sheep);
}
destructuringArrayTwo();

destructuringArray();

// In destructuring an object, the object element name must be the same in declaring it as a variable.
function destructuringObject(){
    const person = {
        fName: "George",
        lName: "Lapuz",
        age: 100 
    }
    const {fName, lName, age} = person;

    console.log(`${fName} ${lName} ${age}`);
};
destructuringObject();

// destrucring is handy in function if the fucntion has to return multiple sets of computations or data processing.
function destructuringFucntion(){
    function myFunction(a, b){
        const add = a + b;
        const subtract = a - b;
        const multiply = a * b;
        const divide = a / b;
        const modulo = a % b;
        const exponent = a.toExponential(b);

        return [add, subtract, multiply, divide, modulo, exponent];
    };

    const [add, subtract, multiply, divide, modulo, exponent] = myFunction(2, 5);

    console.log(add);
};
destructuringFucntion();