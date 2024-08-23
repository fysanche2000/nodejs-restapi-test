CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARChAR(11) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
) ;

DESCRBE employee

INSERT INTO employee VALUES
    (1,'Joe',1000),
    (1,'Henry',2000),
    (1,'Sam',2500),
    (1,'Max',1500);
    