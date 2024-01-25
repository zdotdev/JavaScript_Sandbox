// Promise is the ticket for the code block to run, it fetches data from the api and if the data is fetched, specific parameter(resolve) will run. If it fails, the other parameter will run(reject).

function firstPromise(){
    // maker of the promise.
    function getWeather(){
        return new Promise((resolve, reject) => {
            reject('Rainy') // The value of the variable is declared using parameter
        });
    };

    // this is the reciever of the promise. It must contain 2 functions for the resolve and reject parameter in the promise.
    let promise = getWeather();
    promise.then((data) => {
        console.log(`resolve: ${data}`);
    }, (data) => {
        console.log(`reject: ${data}`)
    });
};
firstPromise();

// rewrite of the code above
function secondPromise(){
    // promise maker
    function getWeather(){
        return new Promise((resolve, reject) =>{
            resolve('Sunny')
        });
    }
    function success(success){
        console.log(`Success ${success}`);
    }
    function fail(fail){
        console.log(`Fail ${fail}`);
    }
    // promise receiver
    getWeather().then(success, fail);
};
secondPromise();

// sequential promise. Sequential Promise is chaining of response from the first promise to the next promise by adding it to the .then function
function sequentialPromise(){
    function getWeather(){
        return new Promise((resolve, reject) => {
            resolve('Sunny')
        });
    };

    function getWeatherIcon(weather){ // The parameter will receive the state of the promise of the first promise
        return new Promise((resolve, reject) => {
            switch(weather){
                case 'Sunny':
                resolve('☀️')
                break;
                case 'Rainy':
                resolve('⛈️')
                break;
                default:
                    reject('No Icon')
            }
        });
    }
    function onSuccess(success){  // The output of the switch of getWetherIcon() will be passed to the parameter of this function
        console.log(`Success: ${success}`);
    }
    function onFail(fail){
        console.log(`Fail: ${fail}`);
    }

    getWeather()
    .then(getWeatherIcon) // The value for the parameter will be automatically pass.
    .then(onSuccess, onFail)
};
sequentialPromise();

function sequentialPromiseV2(){
    function getLocationName() {
        // Async operation to get locationName
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("City");
            }, 3000)
             
        })
    }
    
    function getLocationLatLon() {
        // Async operation to get latlon
        return new Promise((resolve, reject) => {
            resolve({ lat: 12.34, lon: 56.78 });
        })
    }
    
    function getWeather() {
        // Async operation to get weatherData
        return new Promise((resolve, reject) => {
            resolve("Sunny")
        })
    }
    
    function getWeatherIcon() {
        // Async operation to get weatherIcon
        return new Promise((resolve, reject) => {
            resolve("☀️")
        })
    }
    
    function displayWeatherIcon(weatherIcon) {
        console.log(`Displaying weather icon: ${weatherIcon}`);
    }
    
    getLocationName()
    .then(getLocationLatLon)
    .then(getWeather)
    .then(getWeatherIcon)
    .then(displayWeatherIcon)
};
sequentialPromiseV2();