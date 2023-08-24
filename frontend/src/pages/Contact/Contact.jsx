import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveIndex } from '../../features/nav/navSlice'

const Contact = () => {
  const dispatch = useDispatch()
  const contactoRef = useRef(null)

  useEffect(() => {
    dispatch(setActiveIndex('contacto'))
    return () => { setActiveIndex(null) }
  }, [])

  return (
    <div
      ref={contactoRef}
      className='mt-[100px] w-full h-[400px] bg-lightBrownCustom grid place-content-center text-blackCustom font-parrafo text-[2rem]'
    >
      Contact
    </div>
  )
}

export default Contact
