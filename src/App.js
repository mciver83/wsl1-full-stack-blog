import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';

import Header from './components/Header'
import PostsWrapper from './components/Posts/PostsWrapper'
import Login from './components/Login'

import { getUser } from './redux/users/actionCreators'


class App extends Component {
  componentDidMount() {
    this.props.getUser()
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/posts' component={PostsWrapper}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

let mapStateToProps = function(state) {
  return { 
    user: state.user.data && { ...state.user.data }, 
    posts: { ...state.posts.data },
    fetching: state.user.fetching
  }
}


export default connect(mapStateToProps, { getUser })(App);
