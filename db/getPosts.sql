SELECT p.*, u.name as author, u.picture
FROM posts p
JOIN users u ON p.user_id = u.id;