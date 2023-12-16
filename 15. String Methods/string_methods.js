// String Length
function stringLength(){
    let text = "ABCDEFGHIJKLMNIOPQRSTUVWXYZ";
    document.getElementById('demo1').innerHTML = "String length is " + text.length;
};

// Extracting String Parts:

// String Slice (It starts from 0 like index)
function stringSlice(){
    let text = "Apple, Banana, kiwi";

    // slice(start, end)
    document.getElementById('demo2').innerHTML = "String Slice: " + text.slice(7, 13);

    // If you omit the second parameter, the method will slice out the rest of the string:
    // document.getElementById('demo2').innerHTML = text.slice(7);

    // If a parameter is negative, the position is counted from the end of the string:
    // document.getElementById('demo2').innerHTML = text.slice(-12);

    // This example slices out a portion of a string from position -12 to position -6:
    // document.getElementById('demo2').innerHTML = text.slice(-12);
};

// String substring The difference is that start and end values less than 0 are treated as 0 in substring().
function subString(){
    let text = "Apple, Banana, kiwi";

    // substring(start, end)
    document.getElementById('demo3').innerHTML = "substring: " + text.substring(7, 13);
};

// String substr() The difference is that the second parameter specifies the length of the extracted part.
function subStr(){
    let text = "Apple, Banana, kiwi";

    // substr(start, length)
    document.getElementById('demo4').innerHTML = "substr: " + text.substr(7, 6);

    // If you omit the second parameter, substr() will slice out the rest of the string.
    // document.getElementById('demo4').innerHTML = "substr: " + text.substr(7);

    // If the first parameter is negative, the position counts from the end of the string.
    // document.getElementById('demo4').innerHTML = "substr: " + text.substr(-4);
};

// Replacing String Content

function replace(){
    const text = "This is a text.";

    document.getElementById('demo5').innerHTML = text;
    document.getElementById('demo5').innerHTML = "Replace: " + text.replace("text", "frog");

    // To replace case insensitive, use a regular expression with an /i flag (insensitive):
    // document.getElementById('demo5').innerHTML = text.replace(/TEXT/i, "frog");

    // To replace all matches, use a regular expression with a /g flag (global match):
    // document.getElementById('demo5').innerHTML = text.replace(/TEXT/g, "frog");
};

// ReplaceAll()
function replaceAll(){
    let text = "cats Cats CATS";
    // Regular Parameter
    text =  text.replaceAll('cats', 'dogs');
    text =  text.replaceAll('Cats', 'Dogs');
    text =  text.replaceAll('CATS', 'DOGS');

    // global parameter
    // text =  text.replaceAll(/cats/g, 'dogs');
    // text =  text.replaceAll(/Cats/g, 'Dogs');
    // text =  text.replaceAll(/CATS/g, 'DOGS');

    document.getElementById('demo6').innerHTML = "Replace all: " + text;
};

// toUpperCase() and toLowerCase()
function toUpperAndLower(){
    let text = "ThIs Is A rAnDoM cAsE";
    let toUpper = text.toUpperCase();
    let toLower = text.toLowerCase();

    document.getElementById('demo7').innerHTML = "Uppercase: " + toUpper;
    document.getElementById('demo8').innerHTML = "Lowercase: " + toLower;
};

function concat(){
    let text1 = "Hello";
    let text2 = "World";
    let text3 = text1.concat(" ", text2);

    document.getElementById('demo9').innerHTML ="Concatenated: " + text3;
};

// Trim - remove huge white spaces
function trim(){
    let text1 = "      Hello World!      ";
    let text2 = text1.trim();
    let text3 = text1.trimEnd();
    let text4 = text1.trimStart();

    document.getElementById('demo10').innerHTML = "Trim: " + text3;
};

function padding(){
    let text = "5";

    // padStart(length, value). Kasama sa bilang yung existing string 
    let paddedStart = text.padStart(4,"0");
    let paddedEnd = text.padEnd(4,"0");


    document.getElementById('demo11').innerHTML = `Padding Start: ${paddedStart}.<br> Padded end: ${paddedEnd}`;
};

// Extracting String Characters:

// charAt()

window.onload =
stringLength()
stringSlice()
subString()
subStr()
replace()
replaceAll()
toUpperAndLower()
concat()
trim()
padding();