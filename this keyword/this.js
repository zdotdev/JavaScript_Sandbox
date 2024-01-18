// this

// In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// this in object
const person = {
    firstName: "Diego",
    lastName: "Yeah",
    age: 20,
    id: 69,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

// bind.this
const c = console.log.bind(this);

c(person.fullName())

// this in event handling
const demo1 = document.getElementById('demo1');
this.demo1.style.color = 'red';

// -- regular function
// function handleClick() {
//     c(this.id);
// }

// --arrow function
// const handleClick = () => {
//     console.log(this); // 'this' here will refer to the global object (window in browsers)
// }

// document.getElementById('myButton').addEventListener('click', handleClick);


// call() is for non array
const call = () => {
    function greet(name) {
        console.log(`Hello, ${name}! I'm ${this.title}`);
    }
    
    const person = { title: 'Mr' };
    
    // Using call to invoke the function with 'person' as 'this'
    greet.call(person, 'Diego');
}

// apply() is for array
function apply(){
    function greet(name, age) {
        console.log(`Hello, ${name}! I'm ${this.title} and I'm ${age} years old.`);
    }
    
    const person = { title: 'Mr' };
    
    // Using apply to invoke the function with 'person' as 'this' and an array of arguments
    greet.apply(person, ['John', 11]);
};

// bind()
function bind(){
    function greet(name) {
        console.log(`Hello, ${name}! I'm ${this.title}`);
    }
    
    const person = { title: 'Mr' };
    
    // Using bind to create a new function with 'person' as the fixed 'this'
    const greetPerson = greet.bind(person);
    
    // Invoking the new function
    greetPerson('George');
    
}

call();
apply();
bind();