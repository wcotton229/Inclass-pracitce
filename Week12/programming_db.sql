CREATE DATABASE if not exists programming_db;

USE programming_db;

CREATE TABLE if not exists programming_languages(
id  INTEGER (10) NOT NULL AUTO_INCREMENT
, languages VARCHAR(50)
, rating INTEGER (10)
, PRIMARY KEY (id)
);


INSERT INTO programming_languages
(languages, rating)
VALUES
( "JavaScript", 5);

ALTER TABLE programming_languages
ADD COLUMN mastered BOOLEAN DEFAULT 1;

SELECT * FROM programming_languages;


