import React from 'react'

const Sort = ({ handleSort, sortBy }) => {
  return (
    <div>
      <div>Sort By</div>
      <div>
        <label>
          <input
            type="radio"
            value="last"
            checked={sortBy === 'last'}
            onChange={handleSort}
          />
          Last name
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="first"
            checked={sortBy === 'first'}
            onChange={handleSort}
          />
          First Name
        </label>
      </div>
    </div>
  )
}

export default Sort
