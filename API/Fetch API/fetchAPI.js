// fethching world timer
const url = "http://worldtimeapi.org/api/timezone/Asia/Manila";

function fetchText(){
    let fetchTxt = 'text.txt';

    fetch(fetchTxt)
    .then(x => x.text())
    .then(y => document.getElementById('demo1').innerHTML = y);
};

// how to fetch url
async function fetchWorlTime(){

    // this is like parsing the url data
    let myFetch = await fetch(url);

    // this is for converting data into a json file
    let output = await myFetch.json();
    console.log(output);

    // another way to fetch api
    // pass the url to the fetch parameter
    fetch(url)

    // jsonify the data
    .then(Url => Url.json())
    
    // declare the variable as data
    .then(data => console.log(data))
}

// how to use token in fetching url
function tokenUsage(){
    // create a header for the token
    const request = new Request(url, {
        headers: {
            'Authorization': 'Bearer add_token_here'
        }
    });

    // jsonify the request
    const data = request.json();
    console.log(data);
};

// how to handle error when fetching url
function errorHandling(){
    
    // fetch the url
    fetch(url)
    
    // jsonify the data
    .then(Url => Url.json())
    
    // declare the variable as data
    .then(data => console.log(data))

    // handle the error if the fetch is fail
    .catch(error => console.log(error))

    // or

    // use try catch to handle the errors
    async function getData(){
        try{
            
            // fetch the url or you can fetch the header here
            const response = await fetch(url);

            // jsonify the respons and declare it into data variable
            const data = await response.json();

            // handling server error. 200 means the fetching process has no error
            if(response.status === 200){
                console.log(data);
            }else{
                console.log('Server error: ' + data.error.message);
            };
        }catch(error){
            
            // handling the fetching error
            console.log('Fetch Error: ' + error);
        };
    };
    getData();
};

// fetchText();
// fetchWorlTime();
errorHandling();