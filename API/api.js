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
    console.log(data.client_ip);
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
        text.value = "";
    });
};

// getItem
function getItem(){
    document.getElementById('getItem-p').innerHTML = localStorage.getItem('name');
};

// creating object array and store it in localStorage
function objectArrayLocalStorage(){

    // const array = JSON.stringify([{}]);
    // localStorage.setItem('myArrayKey', array);
    
    // Load existing array from localStorage
    const existingArray = JSON.parse(localStorage.getItem('myArrayKey')) || [];

    // Display existing items
    displayItems();

    function displayItems() {
        const itemList = document.getElementById('demo7-ul');
        itemList.innerHTML = '';
        
        existingArray.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.id + " " + item.name;
            itemList.appendChild(listItem);
        });
    };

    const button = document.getElementById('demo7-button');

    button.onclick = function () {
        // Get the item name from the input
        const itemNameInput = document.getElementById('demo7-input');
        const itemName = itemNameInput.value.trim();

        // Check if the input is not empty
        if (itemName !== '') {
            // Add a new item to the array
            existingArray.push({ id: existingArray.length + 1, name: itemName });

            // Update localStorage with the modified array
            localStorage.setItem('myArrayKey', JSON.stringify(existingArray));

            // Display the updated items
            displayItems();

            // Clear the input for the next item
            itemNameInput.value = '';
        };
    };
};

// The sessionStorage Object
// The sessionStorage object is identical to the localStorage object.

// The difference is that the sessionStorage object stores data for one session.

// The data is deleted when the browser is closed.

function removeItem(){
    const input = document.getElementById('demo8-input');
    const button = document.getElementById('demo8-button');
    const existingArray = JSON.parse(localStorage.getItem('myArrayKey')) || [];
    
    button.onclick = function(){
        
        const itemTrue = existingArray[input.value - 1];
        console.log(itemTrue);
        existingArray.splice(itemTrue, 1);

        localStorage.setItem('myArrayKey', JSON.stringify(existingArray));
        console.log(existingArray);
    };
};

function clearLocalStorage(){
    localStorage.clear();
};

window.onload = 
introToAPI()
worldTimeApi()
constraintsValidationAPI()
rangeOverflow()
historyBack()
historyGo()
setItem()
getItem()
objectArrayLocalStorage()
removeItem()
// clearLocalStorage();