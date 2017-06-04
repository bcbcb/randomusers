import React from 'react'
import User from './User'

const Users = ({ users }) => (
  <ul className="list">
    {users.map(user => <User {...user} />)}
  </ul>
);

export default Users
