import fetch from 'isomorphic-fetch'

export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const FILTER_USERS = 'FILTER_USERS'
export const BUILD_FULL_NAMES = 'BUILD_FULL_NAMES'
export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

const NUMBER_OF_RESULTS = 100

export function fetchUsers() {
  return dispatch => {
    dispatch(requestUsers())
    return fetch(`https://randomuser.me/api/?nat=us&results=${NUMBER_OF_RESULTS}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUsers(json.results)))
      .then(() => dispatch(sortUsers('last')))
      .then(() => dispatch(filterUsers('')))
      .catch((e) => { console.log(e) })
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

export function filterUsers(query) {
  return {
    type: FILTER_USERS,
    query
  }
}

export function sortUsers(sortBy) {
  return {
    type: BUILD_FULL_NAMES,
    sortBy
  }
}

export function showModal(user) {
  return {
    type: SHOW_MODAL,
    user
  }
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  }
}
