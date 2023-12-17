// String indexOf() - it will return the first index of the text or it will return the index of the string
function indexOf(){
    let text = "Please locate where 'locate' occurs!";
    let index = text.indexOf("locate");

    document.getElementById('demo1').innerHTML = "indexOf: " + index;
};



window.onload =
indexOf();