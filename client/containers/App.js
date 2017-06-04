import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

import Search from '../components/Search'
import Sort from '../components/Sort'
import Loading from '../components/Loading'
import Users from '../components/Users'

import styles from './App.css'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }

  render() {
    const {
      isFetching,
      users
    } = this.props

    return (
      <div className={styles.app}>

        {isFetching ?
          <Loading />
          :
          <Users users={users} />
        }

      </div>
    )
  }

}

function mapStateToProps (state) {
  const {
    isFetching,
    users
  } = state.usersReducer

  return {
    isFetching,
    users
  }
}

export default connect(mapStateToProps)(App)
