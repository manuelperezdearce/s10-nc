import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveIndex } from '../../features/nav/navSlice'
import LeftContact from './LeftContact'
import FormContact from './FormContact'

const Contact = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setActiveIndex('contacto'))
    return () => { setActiveIndex(null) }
  }, [])

  return (
    <section
      className='containerRestaurants mt-[80px] lg:mt-[140px] w-[100%] my-11 min-h-[400px] flex flex-col justify-start items-center content-center lg:flex-row lg:justify-center lg:items-start bg-whiteCustom gap-6 border-2 border-r-emerald-200'
    >
      {/* contenido left */}
      <section className='w-[100%] h-auto lg:w-[50%] flex flex-col justify-center items-center gap-5 bg-green-200'>
        <LeftContact />
      </section>

      {/* contenido right */}
      <section className='contenidoFormulario w-[100%] lg:w-[50%] flex flex-col gap-5 justify-center items-center bg-indigo-300'>
        <FormContact />
      </section>
    </section>

  )
}

export default Contact
