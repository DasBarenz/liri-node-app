// //to run it ...... node liri.js movie-this '<movie name here>'
var moviesFunc = function() {
//     var nodeArgs = process.argv;

//     // Create an empty variable for holding the movie name
//     var movieName = "";

//     // Loop through all the words in the node argument
//     // And do a little for-loop magic to handle the inclusion of "+"s
//     for (var i = 2; i < nodeArgs.length; i++) {
//         if (i > 2 && i < nodeArgs.length) {
//             movieName = movieName + "+" + nodeArgs[i];
//         } else {
//             movieName += nodeArgs[i];
//         }
//         if (!movie) {
//             movie = "ghost";
//         }


//         // Then run a request with axios to the OMDB API with the movie specified
//         var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

//         // This line is just to help us debug against the actual URL.
//         console.log(queryUrl);

//         axios.get(queryUrl).then(function(response) {
//                 console.log("Release Year: " + response.data.Year);
//             }
};

module.exports = moviesFunc;