import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveIndex } from '../../features/nav/navSlice'
import FormContact from './FormContact'

const Contact = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setActiveIndex('contacto'))
    return () => { setActiveIndex(null) }
  }, [])

  return (
    <section
      className='containerRestaurants mt-[80px] lg:mt-[140px] w-[100%] my-11 min-h-[400px] flex flex-col justify-center items-center content-center lg:flex-row lg:justify-center lg:items-center gap-6 '
    >
      <section className='relative contenidoFormulario w-[100%] h-[250px] lg:h-[600px] lg:w-[50%] flex flex-col gap-5 justify-center items-center content-center'>
        <img className='w-[100%] h-[100%] object-cover' src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1692752161/fitnessMatket/fut_banner38_ishnsr.jpg' alt='verduras varias' />
        <h2 className='absolute w-[90%] text-center p-5 bg-white rounded-md font-titulo text-3xl font-bold text-marronCustom'>Ponte en contacto con Nosotros...</h2>
      </section>

      {/* contenido right */}
      <section className='contenidoFormulario w-[100%] lg:w-[50%] flex flex-col gap-5 justify-center items-center content-center py-10'>
        <FormContact />
      </section>
    </section>

  )
}

export default Contact
