import { GET_POSTS_PENDING, GET_POSTS_FULFILLED, GET_POSTS_REJECTED } from './constants'

const initialState = {
  data: [],
  fetching: false,
  errorMsg: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_PENDING:
      return { ...state, fetching: true }
    case GET_POSTS_FULFILLED:
      return { ...state, fetching: false, data: action.payload.data }
    case GET_POSTS_REJECTED:
      return { ...state, fetching: false, errorMsg: 'there was an error getting posts'}
    default:
      return state;
  }
}
