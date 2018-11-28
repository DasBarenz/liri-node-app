require("dotenv").config();
var axios = require("axios");
// var spotify = new Spotify(keys.spotify);

//concert-this
// spotify-this-song
// movie-this
// do-what-it-says

//sample axios use
// var movieName = "Titanic"
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// // This line is just to help us debug against the actual URL.
// console.log(queryUrl);

// axios.get(queryUrl).then(
//   function(response) {
//     console.log("Release Year: " + response.data.Year);
//   }
// );

//bands in town
var artist = "Cher";
var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
//Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")
// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log(response.data);
  }
);