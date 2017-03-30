//Bonus: take in state and city as arguments instead of hardcoding
var state = "CO";
var city = "Denver";

//Require apiKey

var apiKey = require('./env.js');

//Require the request library
//What is the `request` library you ask?
//Google `npm request` and you can find out!

var request = require('request');

// Set the API URL we are hitting, with our API Key and zipcode

var apiUrl = "http://api.wunderground.com/api/" + apiKey + "/conditions/q/" + state + "/" + city + ".json";

//The actual request sending

request(apiUrl, function (error, response, body) {
  //Inside that callback

  //Print out the weather result
  console.log('Weather:', body); // Print the HTML for the Google homepage. 
});
