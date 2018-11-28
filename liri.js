require("dotenv").config();
var axios = require("axios");
var spotify = new Spotify(keys.spotify);

// //concert-this
// // spotify-this-song
// // movie-this
// // do-what-it-says

// //bands in town
// //to run it .... node liri.js concert-this <artist/band name here>
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var artist = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {
    if (i > 2 && i < nodeArgs.length) {
        artist = artist + "+" + nodeArgs[i];
    } else {
       artist += nodeArgs[i];
    }
}
var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
// //Name of the venue
// // Venue location
// // Date of the Event (use moment to format this as "MM/DD/YYYY")
// // This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
    function (response) {
        console.log(response.data);
    }
);

// //spotify
// //to run it..... node liri.js spotify-this-song '<song name here>'
var nodeArgs = process.argv;
var song = "";
for (var i = 2; i < nodeArgs.length; i++) {
    if (i > 2 && i < nodeArgs.length) {
        song = song + "+" + nodeArgs[i];
    } else {
       song += nodeArgs[i];
    }
}
// // Artist(s)
// // The song's name
// // A preview link of the song from Spotify
// // The album that the song is from
spotify.search({ type: 'track', query: song }, function (err, response) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(response);
});

//movie this
//to run it ...... node liri.js movie-this '<movie name here>'
// Store all of the arguments in an array
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {
    if (i > 2 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
    } else {
        movieName += nodeArgs[i];
    }
}

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
    function (response) {
        console.log("Release Year: " + response.data.Year);
    }
);

// do what it says
//to run in ............ node liri.js do-what-it-says
// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Edit the text in random.txt to test out the feature for movie-this and concert-this.
