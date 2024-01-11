// Get location using api
function introToAPI(){
    const demo1 = document.getElementById('demo1');

    function getLocation(){
        try{
            navigator.geolocation.getCurrentPosition(showLocation);
        }catch{
            demo1.innerHTML = err;
        }
        function showLocation(position){
            demo1.innerHTML = `Latitude: ${position.coords.latitude} <br>Longitude: ${position.coords.longitude}`;
        };
    };
    getLocation();
};

// World time API
async function worldTimeApi(){
    const url = "http://worldtimeapi.org/api/timezone/Asia/Manila";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
};

// constraints validation

// Check validity
function constraintsValidationAPI(){
    const input = document.getElementById('demo2-input');
    const button = document.getElementById('demo2-button');

    button.addEventListener("click", function(){
        if(!input.checkValidity()){
            document.getElementById('demo2-p').innerHTML = input.validationMessage;
        };
    });
}
// Constraint Validation DOM Properties

// Validity
// validationMessage
// willValidate

// Validity Properties

// customError
// patternMismatch
// rangeOverflow
// rangeUnderflow
// stepMismatch
// toLong
// typeMismatch
// valueMissing
// valid

// Range Overflow
function rangeOverflow(){
    const input = document.getElementById('demo3-input');
    const button = document.getElementById('demo3-button');

    button.addEventListener("click", function(){
        if(input.validity.rangeOverflow){
            document.getElementById('demo3-p').innerHTML = "Value too large.";
        };
    });
};

// Range Underflow
function rangeOverflow(){
    const input = document.getElementById('demo4-input');
    const button = document.getElementById('demo4-button');

    button.addEventListener("click", function(){
        if(input.validity.rangeUnderflow){
            document.getElementById('demo4-p').innerHTML = "Value too small.";
        };
    });
};

// historyBack()
function historyBack(){
    const back = document.getElementById('back-button-back');
    back.addEventListener('click', function(){
        console.log('Back');
        window.history.back();
    });
};
// historyGo() - go back to specific history count
function historyGo(){
    const back = document.getElementById('back-button-go');
    back.addEventListener('click', function(){
        console.log('Go');
        window.history.go(-2); // go back 2 pages
    });
};

// web storage api

// setItem
function setItem(){
    const text = document.getElementById('demo5-input');
    const submit = document.getElementById('demo5-submit');

    submit.addEventListener('click', function(){
        localStorage.setItem('name', text.value);
    });
};

// getItem
function getItem(){
    console.log(localStorage.getItem('name'));
};

window.onload = 
introToAPI()
worldTimeApi()
constraintsValidationAPI()
rangeOverflow()
historyBack()
historyGo()
setItem()
getItem();