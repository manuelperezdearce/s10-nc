import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import './searchButton.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToproductsByKeyword, getFoods } from '../../features/foods/foodsSlice'
import filtersProductsByKeyword from '../../hooks/filtersProductsByKeyword'
import { setActiveIndex } from '../../features/nav/navSlice'

const SearchButton = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const foods = useSelector((state) => state.foods.data)
  const [searchTerm, setSearchTerm] = useState('')
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    dispatch(getFoods())
  }, [dispatch])

  useEffect(() => {
    if (redirect === true) {
      setTimeout(() => {
        navigate('/search')
        setRedirect(false)
        dispatch(setActiveIndex(null))
      }, 2000)
    }
  }, [redirect])

  const handleSearch = (e) => {
    const filteredData = filtersProductsByKeyword(foods, searchTerm)
    dispatch(addToproductsByKeyword(filteredData))
    console.log('Foods Filter Keyword ->', filteredData)
    setRedirect(true)
  }

  return (
    <div className='containerSear'>
      {
        redirect
          ? (
            <p className='redirect '>redirigiendo...</p>
            )
          : (
            <>
              <input
                type='text'
                name='text'
                className='input'
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder='Buscador'
              />
              <button className='icon' onClick={handleSearch}>
                <IoSearch />
              </button>
            </>
            )
      }
    </div>
  )
}

export default SearchButton
