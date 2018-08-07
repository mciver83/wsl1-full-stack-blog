import axios from 'axios'
import { GET_USER, LOGOUT_USER } from './constants'

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get('/api/currentUser')
  }
}

export function logout() {
  return {
    type: LOGOUT_USER,
    payload: axios.get('/api/logout')
  }
}