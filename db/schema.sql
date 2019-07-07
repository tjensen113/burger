DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
use burgers_db;

CREATE TABLE burgers (
  id int  AUTO_INCREMENT NOT NULL,
  burger_name varchar(30) NOT NULL,
  devoured boolean NOT NULL,
  PRIMARY KEY(id)
  );