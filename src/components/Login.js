import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../redux/users/actionCreators'

class Login extends Component {
  

  login = () => {
    console.log(111111111, window.location)
    let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)
    let scope = encodeURI('openid profile email')
    let authDomain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
    let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
    let authUrl = `${authDomain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`

    window.location = authUrl
  }

  render() {
    return (
      <div>
        <button onClick={this.login}>Login</button>
      </div>
    )
  }
}

export default connect(null, { getUser })(Login)