DROP TABLE IF EXISTS users cascade;


CREATE TABLE users(
    user_id serial PRIMARY KEY,
	username text UNIQUE NOT NULL,
	password text NOT NULL
);
INSERT INTO users
            (username,
             password
           )
VALUES      (
             'blueocean-test',
             'blueocean-test-password');
