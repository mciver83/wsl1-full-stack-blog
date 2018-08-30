const axios = require('axios')

module.exports = {
  auth: async (req, res) => {
    try {
      //this is the domain for our auth0 application
      let authDomain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
      //this is the data that auth0 needs in order to give us an access token that we can use to get user info
      let payload = {
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `${process.env.SERVER_PROTOCOL}://${req.headers.host}/auth/callback`
      }

      //here we are given the access token from auth0
      let accessTokenResponse = await axios.post(`${authDomain}/oauth/token`, payload)
      let accessToken = accessTokenResponse.data.access_token

      //here we trade the access token for the user info
      let userInfoResponse = await axios.get(`${authDomain}/userinfo?access_token=${accessToken}`)
      let userInfo = userInfoResponse.data

      let { sub: auth_id, name, email, picture } = userInfo 

      let db = req.app.get('db')

      //here we check to see if the user is in our db, and we check based on the authId from auth0
      let users = await db.getUserByAuthId(auth_id)
      
      if (users.length) {
        //if they exist in our db we will get back an array with 1 user, so this condition id met
        //we can save them on the session and then redirect to the home page of our app
        req.session.user = users[0]
        res.redirect('/')
      } else {
        //if they do not exist, we will add them and then save them on the session and redirect to home page
        let users = await db.createUser({ auth_id, name, email, picture })
        req.session.user = users[0]
        res.redirect('/')
      }
    } catch (error) {
      console.log('there has been a big error:', error)
      res.redirect('/error_page')
    }
  }
}