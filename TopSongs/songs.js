var inquirer = require("inquirer");
var mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    //Username
    user: 'root',

    //Password
    password: 'password',
    database: 'song_db'

});
