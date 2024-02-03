// block is like function 

// you cant use `a` here
{
    let a = 5
}
// you cant use `a` here

function myFunction(){
    let a = 5; // You can use `a` only inside this function
};

// But if you call the function first, you can use the `a`
newFunction()
// You can use `a` here

function newFunction(){
    let a = 5;
};

// global Scope
let b = 5; 