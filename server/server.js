const express = require('express')
const session = require('express-session')
const massive = require('massive')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
const port = 3005

const AuthCtrl = require('./controllers/AuthCtrl')
const PostsCtrl = require('./controllers/PostsCtrl')

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('db connected!')
})

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(bodyParser.json())

app.get('/auth/callback', AuthCtrl.auth)
app.get('/api/logout', (req, res) => {
  req.session.destroy()
  res.sendStatus(200)
})

app.get('/api/currentUser', (req, res) => {
  res.json(req.session.user || undefined)
})

app.get('/api/posts', PostsCtrl.read)
app.post('/api/posts', PostsCtrl.create)

app.listen(port, () => {
  console.log('listening on port:', port)
})
