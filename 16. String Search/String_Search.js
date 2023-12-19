// String indexOf() - it will return the first index of the text or it will return the index of the string
function indexOf(){
    let text = "Please locate where 'locate' occurs!";
    let index = text.indexOf("locate");

    document.getElementById('demo1').innerHTML = "indexOf: " + index;
};

// lastIndexOf() returns the index of the last occurrence of a specified text in a string:
function lastIndexOf(){
    let text = "Please locate where 'locate' occurs!";
    let index = text.lastIndexOf("locate");

    // can input parameter where to start
    // text.lastIndexOf("locate", 15);

    // Both indexOf(), and lastIndexOf() return -1 if the text is not found:
    document.getElementById('demo2').innerHTML = "lastIndexOf: " + index;
};

// search() method searches a string for a string (or a regular expression) and returns the position of the match:
function search(){
    let text = "Please locate where 'locate' occurs!";
    let findText = text.search("locate");
    // or
    // let text = "Please locate where 'locate' occurs!";
    // text.search(/locate/);

    document.getElementById('demo3').innerHTML = "search: " + findText;
};

// match() method returns an array containing the results of matching a string against a string (or a regular expression).
function match(){
    let text = "The rain in SPAIN stays mainly in the plain";
    let findText = text.match("ain");
    // or
    // let text = "The rain in SPAIN stays mainly in the plain";
    // let findText = text.match(/ain/);  
    // or
    // let text = "The rain in SPAIN stays mainly in the plain";
    // text.match(/ain/g); 
    // or
    // let text = "The rain in SPAIN stays mainly in the plain";
    // text.match(/ain/gi);

    document.getElementById('demo4').innerHTML = "match: " + findText;
};

// matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
function matchAll(){
    let text = "Pussy cats cats Cats";
    const iterator = text.matchAll("Cats");

    document.getElementById('demo5').innerHTML = "matchAll: " + iterator;
    // or
    // const iterator = text.matchAll(/Cats/g);
    // or
    // const iterator = text.matchAll(/Cats/gi);
};

// includes() method returns true if a string contains a specified value.
function includes(){
    let text = "Hello world, welcome to the universe.";
    let newText = text.includes("world");

    // Check if a string includes "world". Start at position 12:
    // text.includes("world", 12);

    document.getElementById('demo6').innerHTML = "includes: " + newText;
};

// startsWith() method returns true if a string begins with a specified value.
function startsWith(){
    let text = "Hello world, welcome to the universe.";
    let newText = text.startsWith("Hello");

    document.getElementById('demo7').innerHTML = "startsWith: " + newText;
};

// endsWith() method returns true if a string ends with a specified value.
function endsWith(){
    let text = "John Doe";
    let newText = text.endsWith("Doe");

    // can have a parameter where to start
    // text.endsWith("world", 11);

    document.getElementById('demo8').innerHTML = "endsWith: " + newText;
};

window.onload =
indexOf()
lastIndexOf()
search()
match()
matchAll()
includes()
startsWith()
endsWith();