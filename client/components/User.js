import React from 'react'

const User = ({
  name,
  dob,
  location,
  picture
}) => (
  <li>
    <div>{name.first} {name.last}</div>
  </li>
);

export default User
