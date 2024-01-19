// reduce - it just reduce the elements / index / array to specific value using function or parameter computation (Math). Initial Value is the value that the accumulator use to start the function
function functionOne(){
    const numbers = [1, 2, 3, 4, 5];

    const sum = numbers.reduce((accumulator, currentValue, currentIndex) => {
    // console.log(`Index: ${currentIndex}, Current Value: ${currentValue}`);
    return accumulator + currentValue;
    }, 0);

    document.getElementById('demo1'). innerHTML = "Using accumulator, currentValue, and currentIndex: " + sum;
};

function functionTwo(){
    const numbers = [1, 2, 3, 4, 5];

    const product = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
    console.log(`Index: ${currentIndex}, Current Value: ${currentValue}`);
    console.log(`Array: [${array}]`);
    return accumulator * currentValue;
    }, 2);

    document.getElementById('demo2').innerHTML = "Using accumulator, currentValue, currentIndex, and array: " + product;
};

functionOne();
functionTwo();