require("dotenv").config();
var axios = require("axios");
// var Spotify = require('node-spotify-api');
// var keys = require('./keys.js');
var movies = require("./movies.js");
var spotify = require("./spotify.js");
var bands = require("./bands.js");
// var spotifyKey = new Spotify(keys.spotify);
// var bandsKey = keys.bands;

//from tv activity
// var TV = require("./tv");
// var tv = new TV();
// var search = process.argv[2];
// var term = process.argv.slice(3).join(" ");


var search = process.argv[2];
// Joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join(" ");

// By default, if no search type is provided, search for a tv show
if (!search) {
  search = "show";
}

// By default, if no search term is provided, search for "Andy Griffith"
if (!term) {
  term = "Andy Griffith";
}

// Print whether searching for a show or actor, print the term as well
if (search === "movie-this") {
//   console.log("Searching for TV Show");
//   tv.findShow(term);
} else if (search === "spotify-this") {
    //   console.log("Searching for TV Show");
    //   tv.findShow(term);
} else if (search === "concert-this") {
        //   console.log("Searching for TV Show");
        //   tv.findShow(term);
} else {
  console.log(`To begin, type one of the following: \n"movie-this" + movie \n"spotify-this" + song \n"concert-this" + artist`);
}

// do what it says
//to run in ............ node liri.js do-what-it-says
// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Edit the text in random.txt to test out the feature for movie-this and concert-this.
