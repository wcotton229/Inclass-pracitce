var mysql = require('mysql');


var connection = mysql.createConnection({

    host: 'localhost',
    port: 3306,

    //Username
    user: 'root',

    //Password
    password: 'Hollow*3090',
    database: 'musicplaylist_db'
});


connection.connect(function(err){
    if(err) throw (err);
    console.log(`connected as id ${connection.threadId}`);

    createSong();
    readPlaylist();
    
    });

    function createSong() {
        console.log("Inserting a new song... \n");
        var query = connection.query (
            "INSERT INTO playlist SET ?",
            {
                title: "Justice For All",
                artist: "Metallica",
                genre: "Rock"
            },
            function(err, res) {
                console.log(res.affectedRows + " song inserted! \n");
                updatePlaylist();
            }
        );
       console.log(query.sql);
        
    }

    function updatePlaylist() {
        console.log("Updating all playlist...\n");
        var query = connection.query(
            "UPDATE playlist SET ? WHERE ?",
            [
                {
                    genre: 'Metal'
                },
                {
                    artist: 'Metallica'
                }
            ],
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " song updated\n");
                // deleteSong();
            }
        );
        console.log(query.sql);
    };
    // }
    // function deleteSong() {
    //     console.log("Deleting song...\n");
    //     connection.query(
    //         "DELETE FROM playlist WHERE ?",
    //         {
    //             genre: "Metal"
    //         },
    //         function(err, res) {
    //             if (err) throw err;
    //             console.log(res.affectedRows + " song deleted!\n");
    //             readPlaylist();               
    //         }
    //     );
    // }

function readPlaylist() {
    console.log("Selecting playlist...\n");
    connection.query("SELECT * FROM playlist", function (err, res) {
        if (err) throw err;
        console.log(res);
        // connection.end();   
    });
    
};
