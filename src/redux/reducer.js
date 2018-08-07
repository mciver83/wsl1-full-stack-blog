import { combineReducers } from 'redux'

import user from './users/reducer'
import posts from './posts/reducer'

export default combineReducers({ user, posts })