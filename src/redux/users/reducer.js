import { 
  GET_USER_PENDING, 
  GET_USER_FULFILLED, 
  GET_USER_REJECTED,
  LOGOUT_USER_FULFILLED,
  LOGOUT_USER_REJECTED 
} from './constants'

const initialState = {
  data: null,
  fetching: false,
  errorMsg: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_PENDING:
      return { ...state, fetching: true }
    case GET_USER_FULFILLED:
      return { ...state, fetching: false, data: action.payload.data }
    case GET_USER_REJECTED:
      return { ...state, fetching: false, errorMsg: 'there was an error getting user'}

    case LOGOUT_USER_FULFILLED:
      return { ...state, data: null}
    default:
      return state;
  }
}