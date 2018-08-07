import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Posts(props) {
  return (
    <div>
      {props.posts.map(post => {
        return (
          <div key={post.id}>
            <NavLink to={`/posts/${post.id}`}>
              <h1>{post.title}</h1>
              <p>by: {post.author}</p>
            </NavLink>
          </div>
        )
      })}
    </div>
  )
}

let mapStateToProps = state => {
  return { posts: [ ...state.posts.data ]}
}

export default connect(mapStateToProps)(Posts)