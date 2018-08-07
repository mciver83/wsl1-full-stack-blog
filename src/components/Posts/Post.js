import React from 'react'
import { connect } from 'react-redux'

function Post(props) {
  let { post } = props
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.author}</p>
      <hr/>
      <p>{post.content}</p>
    </div>
  )
}

let mapStateToProps = (state, props) => {
  let { id } = props.match.params
  let post = state.posts.data.find(post => Number(post.id) === Number(id))
  return { post }
}
export default connect(mapStateToProps)(Post)