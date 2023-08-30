import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveIndex } from '../../features/nav/navSlice'

const Contact = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setActiveIndex('contacto'))
    return () => { setActiveIndex(null) }
  }, [])

  return (
    <section
      className='containerRestaurants lg:mt-[130px] w-full my-11 min-h-[400px] flex flex-col justify-start items-center content-center bg-whiteCustom gap-6'
    />
  )
}

export default Contact
