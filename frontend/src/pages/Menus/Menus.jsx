import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveIndex } from '../../features/nav/navSlice'

const Menus = () => {
  const dispatch = useDispatch()
  const menuRef = useRef(null)

  useEffect(() => {
    dispatch(setActiveIndex('menu'))
    return () => { setActiveIndex(null) }
  }, [])

  return (
    <div
      ref={menuRef}
      className='mt-[100px] w-full h-[400px] bg-lightBrownCustom grid place-content-center text-blackCustom font-parrafo text-[2rem]'
    >
      Menu
    </div>
  )
}

export default Menus
