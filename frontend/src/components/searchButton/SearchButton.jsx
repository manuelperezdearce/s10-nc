import React, { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import './searchButton.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToproductsByKeyword, getFoods } from '../../features/foods/foodsSlice'
import filtersProductsByKeyword from '../../hooks/filtersProductsByKeyword'

const SearchButton = () => {
  const dispatch = useDispatch()
  const foods = useSelector((state) => state.foods.data)

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    dispatch(getFoods())
  }, [dispatch])

  const handleSearch = (e) => {
    const filteredData = filtersProductsByKeyword(foods, searchTerm)
    dispatch(addToproductsByKeyword(filteredData))
    console.log('Foods Filter Keyword ->', filteredData)
  }

  return (
    <div className='containerSear'>
      <input
        type='text'
        name='text'
        className='input'
        inputProps={{ 'aria-label': 'Buscar Por Palabra' }}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder='Buscador'
      />
      <button className='icon' onClick={handleSearch}>
        <IoSearch />
      </button>
    </div>
  )
}

export default SearchButton
