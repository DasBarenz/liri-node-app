require("dotenv").config();
var axios = require("axios");


//from NPM for spotify
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "504d00084d084a3a98b852898183da12",
  secret: "2e110f5104424de197ff042669d9c049"
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});