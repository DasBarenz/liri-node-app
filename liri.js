require("dotenv").config();
var axios = require("axios");
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var moment = require('moment');
moment().format();
var command = process.argv[2];
var search = process.argv.slice(3).join("+");
var cleanSearch = process.argv.slice(3).join(" ");

function spotifyFunc() {
    if (search === "") {
        spotify.search({ type: 'track', query: "The Sign + Ace of Base", limit: 2 }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            var track = data.tracks.items[0];
            var trackInfo = cleanSearch + ` is performed by ${track.artists[0].name} on the album ${track.album.name}. It can be found at ${track.external_urls.spotify}\n~~~~~~~~~~~~~~\n`;

            fs.appendFile("log.txt", trackInfo, function (err) {
                if (err) {
                    console.log(err);
                }
                console.log(trackInfo);
            })
        });
    } else {
        spotify.search({ type: 'track', query: search, limit: 2 }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            var track = data.tracks.items[0];
            var trackInfo = cleanSearch + ` is performed by ${track.artists[0].name} on the album ${track.album.name}. It can be found at ${track.external_urls.spotify}\n~~~~~~~~~~~~~~\n`;

            fs.appendFile("log.txt", trackInfo, function (err) {
                if (err) {
                    console.log(err);
                }
                console.log(trackInfo);
            })
        });
    }
}

function movieFunc() {
    if (search === "") {
        axios.get("http://www.omdbapi.com/?t=" + "Mr. Nobody" + "&y=&plot=short&apikey=trilogy").then(
            function (response) {
                var movieInfo = `${response.data.Title} was released on ${response.data.Released}. Its IMDB rating is ${response.data.imdbRating} and its Rotten Tomatoes rating is ${response.data.Ratings[1].Value}. \nIt was produced in ${response.data.Country} in ${response.data.Language}. \n${response.data.Title} starred ${response.data.Actors}. Its plot, "${response.data.Plot}"\n~~~~~~~~~~~~~~~\n`;
                fs.appendFile("log.txt", movieInfo, function(err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log(movieInfo);
                });
            }
        );
    } else {
        axios.get("http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy").then(
            function (response) {
                var movieInfo = `${response.data.Title} was released on ${response.data.Released}. Its IMDB rating is ${response.data.imdbRating} and its Rotten Tomatoes rating is ${response.data.Ratings[1].Value}. \nIt was produced in ${response.data.Country} in ${response.data.Language}. \n${response.data.Title} starred ${response.data.Actors}. Its plot, "${response.data.Plot}"\n~~~~~~~~~~~~~~~\n`;
                fs.appendFile("log.txt", movieInfo, function(err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log(movieInfo);
                });
            }
        );
    }
}

function concertFunc() {
    axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=53c587ef2883cf6237115ae97c05b29b").then(
        function (response) {
            var venues = response.data;
            for (var i = 0; i < 15; i++) {
                var dayTime = moment(venues[i].datetime).format("MM/DD/YY")

                var concertInfo = cleanSearch + ` is at ${venues[i].venue.name} in ${venues[i].venue.city}, ${venues[i].venue.region} on ${dayTime}\n~~~~~~~~~~~~~~\n`;
                console.log(concertInfo)

                fs.appendFile("log.txt", concertInfo, function (err) {
                    if (err) {
                        console.log(err);
                    }
                })
            }
        }
    );
};

function doWhatFunc() {
    fs.readFile("random.txt", "utf-8", function(error, data) {
        if (error) {
            return console.log(error);
        };
        var toDo = data.split(",");
        selection = toDo[0];
        doWhatInput = toDo[1];

        switch (selection) {
            case "spotify-this-song":
                spotifyFunc(doWhatInput);
                break;
            case "movie-this":
                movieFunc(doWhatInput);
                break;
            case "concert-this":
                concertFunc(doWhatInput);
                break;
            default:
                break;
        }
    })
}

if (command === "movie-this") {
    movieFunc();
} else if (command === "spotify-this") {
    spotifyFunc();
} else if (command === "concert-this") {
    concertFunc();
} else if (command === "do-what-it-says") {
    doWhatFunc();
} else {
    console.log(`To begin, type one of the following: \n"movie-this" + movie, \n"spotify-this" + song, \n"concert-this" + artist, \nor "do-what-it-says"`);
};
