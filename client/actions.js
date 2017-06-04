import fetch from 'isomorphic-fetch'

export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'

const NUMBER_OF_RESULTS = 100

export function fetchUsers() {
  return dispatch => {
    dispatch(requestUsers())
    return fetch(`https://randomuser.me/api/?nat=us&results=${NUMBER_OF_RESULTS}`)
    .then(response => response.json())
    .then(json => dispatch(receiveUsers(json.results)))
  }
}

export function requestUsers() {
  return {
    type: REQUEST_USERS
  }
}

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}
