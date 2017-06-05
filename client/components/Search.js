import React from 'react'
import styles from './Search.css'

const Search = ({handleSearch}) => {
  return (
    <div>
      <input
        type='text'
        onChange={handleSearch}
        placeholder='Search...'
        className={styles.searchInput}
      />
    </div>
  )
}


export default Search
