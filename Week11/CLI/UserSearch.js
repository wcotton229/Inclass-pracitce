// Get inquirer from npm
var args = process.argv;
var inquirer = require("inquirer");
var Moment = require("moment");
var WeatherJS = require("weather-js");


// Function constructor for UserSearch
function UserSearch(userName, location) {
    this.userName = userName;
    this.location = location;
    this.date = Date.now();

    this.getweather = function () {
        weather.find({ search: this.location, degreeType: 'F' }, function (err, result) {
            if (err) console.log(err);

            console.log(JSON.stringify(result, null, 2));
        });
    };
};

// Exports UserSearch JS
module.exports = UserSearch;