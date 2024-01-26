// async await. It will wait for the  function to fetch the data before it runs the other code block. await wont work outside the async function
const url = "http://worldtimeapi.org/api/timezone/Asia/Manila";

function basicAsyncAwait(){
    function getTime(){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(data => data.json())
            .then(time => resolve(JSON.stringify(time)))
            .catch(error => reject(error))
        });
    };
    
    async function data(){
        const result = await getTime(); // The function will wait for the getTime function before it run the next statement
        console.log(result)
        console.log('Second code') // this is the next statement
    };
    data();
};
basicAsyncAwait();

// much cleaner than the code above. Async await is automatic promise
function basicAsyncAwait2(){
    async function getData(){
        const data = await fetch(url);
        const time = await data.json();
        console.log(time)
    };
    getData();
};
basicAsyncAwait2();

// async await error handling
function errorHandling(){
    async function getData(){
        try {
            const data = await fetch(url);
            const time = await data.json();
            console.log(time);
        } catch (error) {
            console.log(error)
        };
    };
    getData();
}; 
errorHandling();

function errorHandlingPromise(){
    function getData(){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(data => resolve(data.json()))
            // .then(time => resolve(JSON.stringify(time))) this is optional. use this if you wanna stringify the data
            .catch(error => reject(error))

        });
    };

    async function displayData(){
        try {
            const data = await getData();
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    displayData();
};
errorHandlingPromise();

function myFunction(){
    function getData(){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(data => resolve(data.json()))
            .catch(error => reject(error));
        });
    }

    function onSuccess(data){
        console.log(data);
    };
    function onError(error){
        console.log(error);
    };

    function dataIsReceived(){
        console.log('Data is received!');
    }

    async function dataReceived(){
        try {
            const time = await getData();
            onSuccess(time);
            dataIsReceived();
        } catch (error) {
            onError(error);
        };
    };
    dataReceived();
};
myFunction();