// 3 dots(...) or spread is used to combine an object or an array. In array, use [] to spread arrays.
function spread(){
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];

    const newArr = [...arr1,...arr2];
    console.log(newArr[5]);
};
spread();

// rest is used to create a variable, you can select specific element and the rest will be printed out as a whole.
function rest(){
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];

    const newArr = [...arr1,...arr2];
    const [one, two, ...rest] = newArr; // This is a destructuring function

    console.log("Element 1: " + one);
    console.log("Element 2: " + two);
    console.log("Rest of the elements: " + rest.join(" "));
};
rest();

// spread in object will add or update elements in the object. In object, use {} to spread objects.
function objectSpread(){
    const obj1 = {
        fName: "Diego",
        lName: "Washington",
        age: 21
    };
    const updatedObj = {
        race: "Black",
        sex: "Male"
    };

    const newObj = {...obj1, ...updatedObj};

    console.log(newObj.race);
};
objectSpread();