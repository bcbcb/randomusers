import React from 'react'
import styles from './User.css'

const User = ({
  name,
  dob,
  location,
  picture
}) => (
  <li className={styles.userBox}>
    <img src={picture.medium} />
    <div className={styles.name}>{name.full}</div>
    <div className={styles.info}>DOB: {dob.slice(0,10).split('-').join('/')}</div>
    <div className={styles.info}>City {location.city}</div>
  </li>
);

export default User
