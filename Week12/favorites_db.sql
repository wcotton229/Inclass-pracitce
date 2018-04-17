CREATE DATABASE if not exists favorites_db;

USE favorites_db;

CREATE TABLE if not exists favorite_foods(
food_name VARCHAR(50),
score INTEGER(10)
);

CREATE TABLE if not exists favorite_songs(
song_name VARCHAR(100) NOT NULL,
artist_name VARCHAR(50),
score INTEGER(10)
);

CREATE TABLE if not exists favorite_movies(
id  INTEGER (1) NOT NULL AUTO_INCREMENT,
film_title VARCHAR(50) NOT NULL,
five_times BOOLEAN DEFAULT 0,
score INTEGER(10),
PRIMARY KEY (ID)
);