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
// eventListener();

// example of callback hell
function callbackHell(){
    function getLocationName(callback) {
        // Async operation to get locationName
        const locationName = "City";
        callback(locationName);
    }
    
    function getLocationLatLon(locationName, callback) {
        // Async operation to get latlon
        const latlon = { lat: 12.34, lon: 56.78 };
        callback(latlon);
    }
    
    function getWeather(latlon, callback) {
        // Async operation to get weatherData
        const weatherData = "Sunny";
        callback(weatherData);
    }
    
    function getWeatherIcon(weatherData, callback) {
        // Async operation to get weatherIcon
        const weatherIcon = "☀️";
        callback(weatherIcon);
    }
    
    function displayWeatherIcon(weatherIcon) {
        console.log(`Displaying weather icon: ${weatherIcon}`);
    }
    
    // Usage
    getLocationName((locationName) => {
        getLocationLatLon(locationName, (latlon) => {
            getWeather(latlon, (weatherData) => {
                getWeatherIcon(weatherData, (weatherIcon) => {
                    displayWeatherIcon(weatherIcon);
                });
            });
        });
    });
    
}
callbackHell();