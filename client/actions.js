import fetch from 'isomorphic-fetch'

export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'

const NUMBER_OF_RESULTS = 100

function requestUsers() {
  return {
    type: REQUEST_USERS
  }
}

export function fetchUsers() {
  return dispatch => {
    dispatch(requestUsers())
    return fetch(`https://randomuser.me/api/?results=${NUMBER_OF_RESULTS}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUsers(json)))
  }
}

export function receiveUsers(json) {
  const results = json.results
  return {
    type: RECEIVE_USERS,
    users: results
  }
}
