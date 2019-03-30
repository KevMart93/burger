CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
    id int not null auto_increment,
    burger_name varchar(75) not null,
    devoured BOOL default false,
    primary key (id)
);