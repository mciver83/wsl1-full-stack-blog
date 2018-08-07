CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  auth_id VARCHAR NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  picture TEXT NOT NULL 
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  title TEXT,
  content TEXT
);