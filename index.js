//Bonus: take in state and city as arguments instead of hardcoding

'use strict'
const http = require('http');
const key = require('./env');
// defines some port to listen to
const PORT=8080;

// handles requests coming in and sends a response to each
function handleRequests(request, response){
    response.end(console.log (key) );
}

// create a server
const server = http.createServer(handleRequests);

// start the server
server.listen(PORT, function(){
    console.log("listening on port", PORT); // this code is run when the server starts
});


//Require apiKey

//Require the request library
var request = require('request');

request('http://api.wunderground.com/api/' + key + '/conditions/q/CO/Denver.json', function (error, response, body) {
	var weather = JSON.parse(body);
 var temp = weather.current_observation.temp_f;
 // console.log('error:', error); // Print the error if one occurred
 // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
 console.log('The Current Weather in Denver is ' + temp + '.'); // Print the HTML for the Google homepage.
 // console.log(weather);
});
//What is the `request` library you ask?
//Google `npm request` and you can find out!


// Set the API URL we are hitting, with our API Key and zipcode

//The actual request sending

// request(apiUrl, function (error, response, body) {
  //Inside that callback

  //Print out the weather result
// });
