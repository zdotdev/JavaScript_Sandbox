// Object in JS
const car = {brand: "Toyota", model: "MK4 Supra", color: "Jasper Green"};

function carSpecs() {
    document.getElementById('demo').innerHTML = car.brand + ' ' + car.model + ' ' + car.color;
};

// Object method

const person = {
    f_name: "Diego",
    l_name: "Dabrutus",
    age: 69,
    fullName: function () {
        return this.f_name + " " + this.l_name
    }
};

function displayPerson (){
    document.getElementById('demo1').innerHTML = `First name: ${person.f_name}, Last name: ${person.l_name}, Age: ${person.age}, Fullname: ${person.fullName()}`; //to use the this unction you have to use () to return the of the this function, not the code of function
};

window.onload =
carSpecs()
displayPerson();

