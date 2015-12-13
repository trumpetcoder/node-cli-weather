var zipcode = process.argv.slice(2)[0];
var env = require("./env.js");
var request = require("request");
var apiUrl ="http://api.wunderground.com/api/"+env.wuApiKey;
var url = apiUrl + "/geolookup/q/"+zipcode+".json";
request(url, function(err,res,body){
  var location = JSON.parse(body).location.requesturl;
  var url = apiUrl + "/conditions/q/"+location+".json";
  request(url, function(err,res,body){
    var observation = JSON.parse(body).current_observation
    console.log("The weather in", observation.display_location.full, "is", observation.weather)
  })
})
