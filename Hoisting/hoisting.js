// Hoisting is just pushing the variable type to the top
function hoisting(){
    name = "Zed";
    console.log(name);
    var name;
};
hoisting();