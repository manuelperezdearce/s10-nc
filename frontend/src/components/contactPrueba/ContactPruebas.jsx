import React from 'react'
import ContactoLanding from './contactoLanding/ContactoLanding'
import FormContactLanding from './formContactLanding/FormContactLanding'

const ContactPruebas = () => {
  return (
    <section id='contacto' className='contenedor bg-whiteCustom w-[100%] max-w-[1500px] h-auto flex flex-col justify-center items-start lg:flex-row lg:gap-3  gap-[2rem]  px-[1rem] py-[1rem] '>

      <section className='contenidoContacto card-scroll w-full h-full lg:w-1/2 flex flex-col justify-center items-center gap-6 '>
        <ContactoLanding />
      </section>

      {/* formuario */}
      <section className='contenidoFormulario w-full lg:w-1/2 flex flex-col gap-4 justify-center items-center px-5'>
        <FormContactLanding />
      </section>
    </section>
  )
}

export default ContactPruebas
