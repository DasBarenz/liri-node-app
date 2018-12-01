//to run it..... node liri.js spotify-this-song '<song name here>'

var keys = require('./keys.js');
// var spotifyKey = new Spotify(keys.spotify);
var spotifyKey = keys.spotify;

var spotifyFunc = function() {

}
// var nodeArgs = process.argv;
// var song = "";
// for (var i = 2; i < nodeArgs.length; i++) {
//     if (i > 2 && i < nodeArgs.length) {
//         song = song + "+" + nodeArgs[i];
//     } else {
//         song += nodeArgs[i];
//     }
// }
// // // Artist(s)
// // // The song's name
// // // A preview link of the song from Spotify
// // // The album that the song is from
// spotify.search({ type: 'track', query: song }, function(err, response) {
//     if (err) {
//         return console.log('Error occurred: ' + err);
//     }

//     console.log(response);

//     // output = space + "================= LIRI FOUND THIS FOR YOU...==================" + 
//     // space + "Song Name: " + "'" +songName.toUpperCase()+ "'" +
//     // space + "Album Name: " + data.tracks.items[0].album.name +
//     // space + "Artist Name: " + data.tracks.items[0].album.artists[0].name +	
//     // space + "URL: " + data.tracks.items[0].album.external_urls.spotify + "\n\n\n";
//     // console.log(output);

//     //     fs.appendFile("log.txt", output, function (err) {
//     //       if (err) throw err;
//     //       console.log('Saved!');
//     //     });		
//     // };
// });

module.exports = spotifyFunc;