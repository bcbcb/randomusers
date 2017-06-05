import React from 'react'
import User from './User'

import styles from './Users.css'

const Users = ({
  users,
  showModal
}) => {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

  const usersByLetter = ALPHABET.map(
    letter => {
      return {
        letter,
        users: users.filter(user => (user.name.full.charAt(0) === letter))
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
            {letter.users.map(user => (
              <User
                userData={user}
                key={user.login.salt}
                showModal={showModal}
              />)
            )}
          </ul>

        </div>
        )
      )}
    </div>
  )
}

export default Users
