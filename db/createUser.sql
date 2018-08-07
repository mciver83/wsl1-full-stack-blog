INSERT INTO users (auth_id, name, email, picture)
VALUES (${auth_id}, ${name}, ${email}, ${picture})
RETURNING *;