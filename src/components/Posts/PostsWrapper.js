import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { getPosts } from '../../redux/posts/actionsCreators'

import Posts from './Posts'
import Post from './Post'

class PostsWrapper extends Component {
  componentDidMount() {
    if (!this.props.user) {
      this.props.history.push('/login')
    } else {
      this.props.getPosts();
    }
  }

  render() {
    return (
      <Switch>
        <Route path='/posts' component={Posts} exact/>
        <Route path='/posts/:id' component={Post} />
      </Switch>
    )
  }
}

let mapStateToProps = state => {
  return { 
    user: state.user.data && { ...state.user.data }, 
    posts: { ...state.posts.data },
    fetchingPosts: state.posts.fetching
  }
}

export default connect(mapStateToProps, { getPosts })(PostsWrapper)