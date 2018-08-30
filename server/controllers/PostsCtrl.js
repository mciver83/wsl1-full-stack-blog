module.exports = PostsCtrl =  {
  read: async (req, res) => {
    try {
      let db = req.app.get('db')
      let posts = await db.getPosts()
      res.json(posts)
    } catch (error) {
      PostsCtrl.handleError(error, res)
    }
  },

  create: async (req, res) => {
    try {
      let db = req.app.get('db')
      let { title, content } = req.body
      let user_id = req.session.user ? req.session.user.id : 1
      let newPost = { user_id, title, content }

      let postResponse = await db.createPost(newPost)
      let post = postResponse[0]
      res.json(post)
    } catch (error) {
      PostsCtrl.handleError(error, res)
    }
  },

  update: (req, res) => {

  },

  delete: (req, res) => {

  },

  handleError: (error, res) => {
    console.log('there has been an error:', error)
    res.status(500).send(error)
  }
}