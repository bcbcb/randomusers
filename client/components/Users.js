import React from 'react'
import User from './User'

import styles from './Users.css'

const Users = ({ users }) => {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const usersByLetter = ALPHABET.map(
    letter => {
      return {
        letter,
        users: users.filter(user => (user.name.first.charAt(0) === letter))
      }
    }
  )

  return (
    <div>
      {usersByLetter.map(letter => (
        letter.users.length > 0 &&
        <div key={letter.letter}>
          <div className={styles.letter}>
            {letter.letter.toUpperCase()}
          </div>
          <ul className={styles.list}>
            {letter.users.map(user => <User {...user} key={user.login.salt} />)}
          </ul>
        </div>
        )
      )}
    </div>
  )
}

export default Users
