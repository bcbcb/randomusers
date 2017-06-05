import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchUsers,
  filterUsers,
  sortUsers
} from '../actions'

import Search from '../components/Search'
import Sort from '../components/Sort'
import Loading from '../components/Loading'
import Users from '../components/Users'

import styles from './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSort = this.handleSort.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }

  handleSearch(e) {
    this.props.dispatch(filterUsers(e.target.value))
  }

  handleSort(e) {
    this.props.dispatch(sortUsers(e.target.value))
  }

  render() {
    const {
      isFetching,
      filteredUsers,
      sortBy
    } = this.props

    return (
      <div className={styles.app}>

        <div className={styles.head}>
          <Search handleSearch={this.handleSearch} />
          <Sort handleSort={this.handleSort} sortBy={sortBy} />
        </div>

        {isFetching ?
          <Loading />
          :
          <Users users={filteredUsers} />
        }

      </div>
    )
  }

}

function mapStateToProps (state) {
  const {
    isFetching,
    filteredUsers,
    sortBy
  } = state.usersReducer

  return {
    isFetching,
    filteredUsers,
    sortBy
  }
}

export default connect(mapStateToProps)(App)
