import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveIndex } from '../../features/nav/navSlice'

const Home = () => {
  const dispatch = useDispatch()
  const homeRef = useRef(null)

  useEffect(() => {
    dispatch(setActiveIndex('home'))
    return () => { setActiveIndex(null) }
  }, [])

  return (
    <div
      ref={homeRef}
      className='mt-[100px] w-full h-[400px] bg-lightBrownCustom grid place-content-center text-blackCustom font-parrafo text-[2rem]'
    >
      Home
    </div>
  )
}

export default Home
