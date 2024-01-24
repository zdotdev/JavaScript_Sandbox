// This is the normal flow of JS. Synchronous
function synchronous(){
    let text;
    console.log(text)
    function updateText(){
        text = "This is synchronous"
    };
    updateText();
    console.log(text);
};
synchronous();

// This is Asynchronous
function asynchronous(){
    let text;
    function updateText(){
        setTimeout(() => {
            text = "This is asynchronous"
            console.log(text);
        }, 3000);
    };
    updateText();

    function displayCalculation(calculation){
        console.log(calculation);
    }

    function calculate(a, b, calculate){
        const sum = a + b;
        calculate(sum);
    }

    calculate(5, 5, displayCalculation);

};
asynchronous();