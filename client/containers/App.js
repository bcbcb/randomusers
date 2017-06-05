import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchUsers,
  filterUsers
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
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }

  handleSearch(e) {
    const str = e.target.value
    this.props.dispatch(filterUsers(str))
  }

  render() {
    const {
      isFetching,
      filteredUsers
    } = this.props

    return (
      <div className={styles.app}>

        <Search handleSearch={this.handleSearch}/>

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
    filteredUsers
  } = state.usersReducer

  return {
    isFetching,
    filteredUsers
  }
}

export default connect(mapStateToProps)(App)
