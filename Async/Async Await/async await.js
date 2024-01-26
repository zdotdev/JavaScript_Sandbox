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
// basicAsyncAwait();

function basicAsyncAwait2(){
    async function getData(){
        const data = await fetch(url);
        const time = await data.json();
        console.log(time)
    };
    getData();
};
basicAsyncAwait2();