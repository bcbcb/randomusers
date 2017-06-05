import { combineReducers } from 'redux'

import {
  REQUEST_USERS,
  RECEIVE_USERS,
  FILTER_USERS
} from './actions'


function usersReducer (state = {
  isFetching: false,
  users: [],
  filteredUsers: []
}, action) {
  switch (action.type) {

    case REQUEST_USERS:
      return Object.assign({}, state, {
        isFetching: true
      })

    case RECEIVE_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        users: action.users
      })

    case FILTER_USERS:
      return Object.assign({}, state, {
        filteredUsers: state.users.filter((user) => {
          let str = action.str || ''
          str = str.toLowerCase()
          const { first, last } = user.name
          return first.includes(str) || last.includes(str)
        })
      })

    default:
      return state
  }
}

const rootReducer = combineReducers({
  usersReducer
})

export default rootReducer
