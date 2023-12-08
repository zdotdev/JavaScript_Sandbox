window.onload = function(){
    const a = 1;
    
    // creating a list
    const b = ['item1', 'item2', 'item3'];

    b[0] = 'Banana';
    b[1] = 'Apple';
    b[2] = 'Mango';

    // creating an object
    const c = {car_Color: 'Jasper Green', car_Brand: 'Toyota', car_Model: 'Supra'};
    c.car_Concept = "JDM";

    document.getElementById('demo').innerHTML = 'a multiply by 2: ' + a * 2;

    document.getElementById('list').innerHTML = "List items: " + (b[0] + " " + b[1] + " " + b[2]);

    document.getElementById('car').innerHTML = " The car that I want: " + c.car_Brand + " " + c.car_Model + " " + c.car_Color + " " + c.car_Concept;
};