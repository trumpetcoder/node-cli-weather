//Bonus: take in state and city as arguments instead of hardcoding

// console.log(process.argv);
// var state = process.argv[2];
// var city = process.argv[3];

var state = "CO";
var city = "Denver";

//Require apiKey

var apiKey = require('./env.js').keyThing;

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
  console.log('The weather in Denver is ', JSON.parse(body).current_observation.weather);
});
