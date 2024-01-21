// Synchronous codes
function synchronous(){
    let pizza;

    function setPizza(){
        pizza = "I am a pizza";
    }
    setPizza();
    console.log(pizza);
};
synchronous();

// asynchronous codes
function asynchronous(){
    let pizza;

    function setPizza(){
        setTimeout(() => {
            pizza = "Pizza na ako"
            console.log(pizza);
        }, 2000);
    };
    
    setPizza();
    console.log(pizza);
};
asynchronous();

// Basic callback
// When you pass a function as an argument, remember not to use parenthesis.
function callBack(){
    function myFucntion(a, b){
        return a + b;
    };

    function display(){
        console.log(myFucntion(1, 1));
    };
    display();

    function myName(){
        console.log('Zedrick');
    }

    // do nat add () in calling function
    setTimeout(myName, 3000);

    function orederBanana(bananaArrived){
        setTimeout(() => {
            const banana = 'banana';
            bananaArrived(banana);
        });
    }

    function bananaIsHere(banana){
        console.log(`${banana} is here!!!`)
    };

    orederBanana(bananaIsHere);

};
callBack();

// addEventListener or any event listener is also a callback
function eventListener(){
    let a = 0;
    document.getElementById('demo1').innerHTML = a;
    const increment = () => {
        a += 1;
        document.getElementById('demo1').innerHTML = a;
    };
    document.getElementById('button').addEventListener('click', increment);
};
eventListener();