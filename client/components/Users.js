import React from 'react'
import User from './User'

const Users = ({ users }) => (
  <ul className="list">
    {users.map(user => <User {...user} key={user.login.salt} />)}
  </ul>
);

export default Users
