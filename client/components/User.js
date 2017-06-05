import React, { Component } from 'react'
import styles from './User.css'

class User extends Component {
  render() {
    const {
      name,
      dob,
      location,
      picture,
    } = this.props.userData

    return (
      <li
        className={styles.userBox}
        onClick={() => {this.props.showModal(this.props.userData)}}
      >
        <img src={picture.medium} />
        <div className={styles.name}>{name.full}</div>
        <div className={styles.info}>DOB: {dob.slice(0,10).split('-').join('/')}</div>
        <div className={styles.info}>City: {location.city}</div>
      </li>
    )
  }

}

export default User
