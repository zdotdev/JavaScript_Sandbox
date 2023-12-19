// backtics literals
function backtics(){
    let text = `Hello World!`;

    document.getElementById('demo1').innerHTML = text;
};

// Interpolation

function interpolation(){
    let hello = "Hello";
    let world = "World";

    let text = `${hello} ${world}!`;

    document.getElementById('demo2').innerHTML = text;
};

// Expression Substitution
function expressionSubstitution(){
    let price = 10;
    let VAT = 0.25;

    let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`; // toFixed() will fixed the value to a number with specific length of decimals based on the parameter

    document.getElementById('demo3').innerHTML = total;
};

// HTML Templates
function htmlTemplates(){
    let header = "Templates Literals";
    let tags = ["template literals", "javascript", "es6"];

    let html = `<h2>${header}</h2><ul>`;

    for ( const x of tags){
        html += `<li>${x}</li>`
    }

    // Testing lol (printing of array)
    // for (let x = 0; x < tags.length; x++) {
    //     html += `<li>${tags[x]}</li>`;
    // }

    html += `</ul>`;
    document.getElementById("demo4").innerHTML = html;
};

window.onload = 
backtics()
interpolation()
expressionSubstitution()
htmlTemplates();