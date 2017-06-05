import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchUsers,
  filterUsers,
  sortUsers,
  showModal,
  hideModal
} from '../actions'

import Search from '../components/Search'
import Sort from '../components/Sort'
import Loading from '../components/Loading'
import Users from '../components/Users'
import Modal from '../components/Modal'

import styles from './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSort = this.handleSort.bind(this)
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
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

  showModal(user) {
    this.props.dispatch(showModal(user))
  }

  hideModal() {
    console.log('hding');
    this.props.dispatch(hideModal())
  }

  render() {
    const {
      isFetching,
      filteredUsers,
      sortBy,
      modalUser
    } = this.props

    return (
      <div className={styles.app}>

        {modalUser &&
          <Modal
            user={modalUser}
            hideModal={this.hideModal}
          />
        }

        <div className={styles.container}>

          <div className={styles.head}>
            <Search handleSearch={this.handleSearch} />
            <Sort handleSort={this.handleSort} sortBy={sortBy} />
          </div>

          {isFetching ?
            <Loading />
            :
            <Users
              users={filteredUsers}
              showModal={this.showModal}
            />
          }

        </div>


      </div>
    )
  }

}

function mapStateToProps (state) {
  const {
    isFetching,
    filteredUsers,
    sortBy,
    modalUser
  } = state.usersReducer

  return {
    isFetching,
    filteredUsers,
    sortBy,
    modalUser
  }
}

export default connect(mapStateToProps)(App)
