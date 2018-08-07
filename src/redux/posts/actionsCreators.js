import axios from 'axios'

import { GET_POSTS } from './constants'

export function getPosts() {
  return {
    type: GET_POSTS,
    payload: axios.get('/api/posts')
  }
}