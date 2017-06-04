import { combineReducers } from 'redux'

import {
  REQUEST_USERS,
  RECEIVE_USERS,
  SORT_BY_LASTNAME
} from './actions'


function usersReducer (state = {
  isFetching: false,
  users: []
}, action) {
  switch (action.type) {

    case REQUEST_USERS:
      return Object.assign({}, state, {
        isFetching: true
      })

    case RECEIVE_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        users: action.users.sort((a, b) => {
          if (a.name.first < b.name.first) return -1
          if (a.name.first > b.name.first) return 1
          return 0
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
