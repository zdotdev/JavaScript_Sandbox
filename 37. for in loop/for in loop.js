// for in is used for objects. It is used like an array
function forIn(){
    const myObj = {
        fName: "Diego",
        lName: "Narsiso",
        age: 12
    };

    for(let i in myObj){
        console.log(myObj[i]);
    }
};
forIn();