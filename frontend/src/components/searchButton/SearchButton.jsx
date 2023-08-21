import React from 'react'
import { IoSearch } from 'react-icons/io5'
import './searchButton.css'

const SearchButton = () => {
  return (
    <div className='containerSear'>
      <input
        type='text'
        name='text'
        className='input'
        required
        placeholder='Buscador'
      />
      <button className='icon'>
        <IoSearch />
      </button>
    </div>
  )
}

export default SearchButton
