### Schema
CREATE DATABASE kraftylab_db;
USE kraftylab_db;

CREATE TABLE class_type
(
	id int NOT NULL AUTO_INCREMENT,
	dt DATETIME,
	class_name VARCHAR (255) NOT NULL,
    city VARCHAR (50) NOT NULL,
    city_address VARCHAR (200) NOT NULL,
    class_attendance int NOT NULL,
    max_attendance int NOT NULL,
	PRIMARY KEY(id)
);


-- CREATE TABLE buyers
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	buyer_name VARCHAR (255) NOT NULL,
-- 	contact_number VARCHAR (255) NOT NULL,
-- 	email VARCHAR(255) NOT NULL,
--     buyer_address VARCHAR (255) NOT NULL,
-- 	buyer_id int NOT NULL,
--     ts TIMESTAMP,
-- 	PRIMARY KEY (id),
-- 	FOREIGN KEY (buyer_id) REFERENCES class_type(id)
-- );
