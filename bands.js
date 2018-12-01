//to run it .... node liri.js concert-this <artist/band name here>
var keys = require('./keys.js');
var bandsKey = keys.bands;


var bandsFunc = function() {
    var nodeArgs = process.argv;

    var artist = "";

    for (var i = 2; i < nodeArgs.length; i++) {
        if (i > 2 && i < nodeArgs.length) {
            artist = artist + "+" + nodeArgs[i];
        } else {
            artist += nodeArgs[i];
        }
    }
    var queryUrl = "https://rest.bandsintown.com/artists/" + "cher" + "/events?app_id=" + bandsKey;
    
    axios.get(queryUrl).then(function(bands) { //the console log of the response works...but the console logs in the for loop do not work with or w/o the loop
            // console.log(bands.data);
            // for (var i = 0; i < bands.length; i++) {
                console.log(`Venue: ${bands.data.venue.name}`); //no response
                // console.log("Venue: " + bands.data.artistdata.name.venue.name); //no response
                console.log(`City: ${bands.venue.city}`);
                console.log("Date: " + moment(bands.datetime).format("MM/DD/YYYY"));
            // }
        }
    );
};

module.exports = bandsFunc;
