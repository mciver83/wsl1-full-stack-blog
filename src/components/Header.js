import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../redux/users/actionCreators'

function Header(props) {
  return (
    <div style={styles.header}>
      <div id="logo" style={styles.logo}>WSL1 BLOGS</div>
      <div id="navbar" style={styles.navbar}>
        <Link to="/posts">posts</Link>
        { props.user ? <Link to='/' onClick={props.logout}>Logout</Link> : <Link to="/login">Login</Link> }
      </div>
    </div>
  )
}

let styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    borderBottom: '1px solid black',
  },
  logo: {
    flex: 1,
    alignSelf: 'flex-start'
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    flex: 0.5
  }
}

let mapStateToProps = state => {
  return { user: state.user.data && { ...state.user.data }}
}

export default connect(mapStateToProps, { logout })(Header)