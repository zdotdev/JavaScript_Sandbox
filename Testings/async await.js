function getLocationName() {
    // Async operation to get locationName
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("City");
        }, 3000)
         
    })

    const locationName = "City";
    callback(locationName);
}

function getLocationLatLon() {
    // Async operation to get latlon
    return new Promise((resolve, reject) => {
        resolve({ lat: 12.34, lon: 56.78 });
    })
    
    const latlon = { lat: 12.34, lon: 56.78 };
    callback(latlon);
}

function getWeather() {
    // Async operation to get weatherData
    return new Promise((resolve, reject) => {
        resolve("Sunny")
    })

    const weatherData = "Sunny";
    callback(weatherData);
}

function getWeatherIcon() {
    // Async operation to get weatherIcon
    return new Promise((resolve, reject) => {
        resolve("☀️")
    })

    const weatherIcon = "☀️";
    callback(weatherIcon);
}

function displayWeatherIcon(weatherIcon) {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = `<h1>Displaying weather icon: ${weatherIcon}</h1>`
    console.log(`Displaying weather icon: ${weatherIcon}`);
}

// Usage
// getLocationName((locationName) => {
//     getLocationLatLon(locationName, (latlon) => {
//         getWeather(latlon, (weatherData) => {
//             getWeatherIcon(weatherData, (weatherIcon) => {
//                 displayWeatherIcon(weatherIcon);
//             });
//         });
//     });
// });


getLocationName()
.then(getLocationLatLon)
.then(getWeather)
.then(getWeatherIcon)
.then(displayWeatherIcon)