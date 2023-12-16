// String
let text = "This is a Text";

function displayText(){
    document.getElementById('demo').innerHTML = text;
};

// String.length
function stringLength(){
    document.getElementById('demo1').innerHTML = "String length: " + text.length;
};

// Escape character
// \' single quote
// \" double quote
// \\ backslash
function escapeCharacters(){
    document.getElementById('demo2').innerHTML = "This is a Text with \'single quote\', \"double quote\", and backslash \\.";
};

// Breaking long code (useless lol)
function breakingLongCode(){
    document.getElementById('demo3').innerHTML = "This is a long \
     code";
};

// String as an object
function stringAsAnObject(){
    let text = "Text";
    let newText = new String("New Text");

    document.getElementById('demo4').innerHTML = text + " " + newText;
};

window.onload = 
displayText()
stringLength()
escapeCharacters()
breakingLongCode()
stringAsAnObject();