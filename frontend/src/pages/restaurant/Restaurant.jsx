import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveIndex } from '../../features/nav/navSlice'

const Restaurant = () => {
  const dispatch = useDispatch()
  const restaurantRef = useRef(null)

  useEffect(() => {
    dispatch(setActiveIndex('restaurant'))
    return () => { setActiveIndex(null) }
  }, [])

  return (
    <div
      ref={restaurantRef}
      className='mt-[100px] w-full h-[400px] bg-lightBrownCustom grid place-content-center text-blackCustom font-parrafo text-[2rem]'
    >
      Restaurant
    </div>
  )
}

export default Restaurant
