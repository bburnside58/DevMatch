CREATE DATABASE profiles_db;

USE profiles_db;

CREATE TABLE users(
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE users ADD address varchar(255) NOT NULL;
ALTER TABLE users ADD phone_number varchar(255) NOT NULL;	
ALTER TABLE users ADD linkedin varchar(255) NOT NULL;   
ALTER TABLE users ADD github varchar(255) NOT NULL;
ALTER TABLE users ADD email varchar(255) NOT NULL;


CREATE TABLE recruiter(
	id int NOT NULL AUTO_INCREMENT,
    company_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE skills(
	CSS boolean not null,
    HTML boolean not null,
    Node boolean not null,
    Angular boolean not null,
    Ruby_on_Rails boolean not null,
    Java boolean not null,
    Javascript boolean not null,
	MySQL boolean not null,
    React boolean not null,
    PHP boolean not null,
    Python boolean not null,
    Groovy_on_Grails boolean not null,
    C boolean not null,
    first_language varchar(255) NOT NULL,
    user_id int NOT NULL,
    recruiters_id int NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (recruiters_id) REFERENCES recruiter(id)
);


