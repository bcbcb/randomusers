import { combineReducers } from 'redux'

import {
  REQUEST_USERS,
  RECEIVE_USERS,
  FILTER_USERS,
  BUILD_FULL_NAMES,
  SHOW_MODAL,
  HIDE_MODAL
} from './actions'


function usersReducer (state = {
  isFetching: false,
  users: [],
  filteredUsers: [],
  query: '',
  modalUser: null
}, action) {
  switch (action.type) {

    case REQUEST_USERS:
      return Object.assign({}, state, {
        isFetching: true
      })

    case RECEIVE_USERS:
      return Object.assign({}, state, {
        users: action.users
      })

    case FILTER_USERS:
      const query = action.query.toLowerCase()
      return Object.assign({}, state, {
          query: query,
          filteredUsers: state.users
            .filter(user => user.name.full.includes(query))
        }
      )

    case BUILD_FULL_NAMES:
      return Object.assign({}, state, {
        isFetching: false,
        sortBy: action.sortBy,
        filteredUsers: state.users
          .map(user => {
            if (action.sortBy === 'first') {
              user.name.full = user.name.first + ' ' + user.name.last
            } else {
              user.name.full = user.name.last + ', ' + user.name.first
            }
            return user
          })
          .filter(user => user.name.full.includes(state.query))
      })

    case SHOW_MODAL:
      return Object.assign({}, state, {
        modalUser: action.user
      })

    case HIDE_MODAL:
      return Object.assign({}, state, {
        modalUser: null
      })

    default:
      return state
  }
}

const rootReducer = combineReducers({
  usersReducer
})

export default rootReducer
