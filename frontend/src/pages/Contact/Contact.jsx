import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveIndex } from '../../features/nav/navSlice'
import ContactoLanding from '../../components/contactoLanding/ContactoLanding'
import FormContactLanding from '../../components/formContactLanding/FormContactLanding'

const Contact = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setActiveIndex('contacto'))
    return () => { setActiveIndex(null) }
  }, [])

  return (
    <section
      className='containerRestaurants lg:mt-[130px] w-full my-11 min-h-[400px] flex flex-col justify-start items-center content-center bg-whiteCustom gap-6'
    >
      <section id='contacto' className='contenedor bg-whiteCustom w-[100%] max-w-[1500px] h-auto flex flex-col justify-center items-start lg:flex-row lg:gap-3  gap-[2rem]  px-[1rem] py-[1rem] '>

        <section className='contenidoContacto card-scroll w-full h-full lg:w-1/2 flex flex-col justify-center items-center gap-6 '>
          <ContactoLanding />
        </section>

        {/* formuario */}
        <section className='contenidoFormulario w-full lg:w-1/2 flex flex-col gap-4 justify-center items-center px-5'>
          <FormContactLanding />
        </section>
      </section>

    </section>
  )
}

export default Contact
