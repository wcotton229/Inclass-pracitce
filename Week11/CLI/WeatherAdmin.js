import { networkInterfaces } from "os";

// Requiring packages
var args = process.argv;
var UserSearch = require("./UserSearch");
var inquirer = require("inquirer");
var Moment = require("moment");
var WeatherJS = require("weather-js");
var fs = require ("fs");

// WeatherAdmin constructor that takes in users location serach
function WeatherAdmin(){
    this.newUserSearch = function(userName, location){
        var newUserSerach = new UserSearch(name, location);
        var logTxt = 
        `
        Name: ${newUserSerach.name}
        Location: ${newUserSerach.location}
        Date: ${moment(newUserSerach.date).format("MM-DD-YYYY")}
        `;
        fs.appendFile('log.txt', logTxt, function (err){
            if (err) throw err;
        });
    };
    this.getData = function() {
        fs.readFile("log.txt", "utf8", function(error, data) {
            console.log(data);
 });
    }
    newUserSearch()
};

module.exports = WeatherAdmin;

// Search for weather in the WeatherAdmin

// log user serachs in the log.txt file
// Format the date from moment in the log.txt file

//getData returns a list of all the searches by any user

