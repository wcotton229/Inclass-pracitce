CREATE DATABASE IF NOT EXISTS musicplaylist_db;

USE musicplaylist_db;

CREATE TABLE IF NOT EXISTS playlist(
id INTEGER (10) AUTO_INCREMENT NOT NULL,
title VARCHAR (100) NOT NULL,
artist VARCHAR (30) NOT NULL,
genre VARCHAR (30) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO playlist (title, artist, genre)
VALUES ('Castle on the Hill', 'Ed Sheeran', 'Pop')
, ('In The End', 'Linkin Park', 'Rock')
, ('Place to Start', 'Mike Shinoda', 'Alternative')
, ('Way Down We Go', 'Kaleo', 'Alternative')
, ('Not Now', 'Blink-182', 'Rock')
, ('Evil Angel', 'Breaking Benjamin', 'Rock');

SELECT * FROM playlist;