INSERT INTO posts (user_id, title, content)
VALUES (${user_id}, ${title}, ${content})
RETURNING *;