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

// Range Overflow


window.onload = 
introToAPI()
worldTimeApi()
constraintsValidationAPI();