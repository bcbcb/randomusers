import React from 'react'

const Search = ({handleSearch}) => {
  return (
    <div>
      <input type='text' onChange={handleSearch} />
    </div>
  )
}


export default Search
