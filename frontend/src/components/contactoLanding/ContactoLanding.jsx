import React from 'react'
import { IoCallOutline, IoMailOutline, IoLocationOutline } from 'react-icons/io5'

import { FaWhatsapp } from 'react-icons/fa'
import BotonBase from '../botonBase/BotonBase'

const ContactoLanding = () => {
  const mail = 'greenEats@gmail.com'
  const watsapp = '541144776655'
  const ubicacion = 'Buenos Aires, Argentina'

  const handleEmailClick = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Interesado en una asesoría personalizada')
    const body = encodeURIComponent('Hola,\n\nEstoy interesad@ en una asesoría personalizada. Me gustaría recibir más información.\n\n¡Gracias!')
    window.open(`mailto:${mail}?subject=${subject}&body=${body}`, '_blank')
  }

  const handlePhoneClick = (e) => {
    e.preventDefault()
    const message = encodeURIComponent('Hola, estoy interesad@. Me gustaría recibir más información. ¡Gracias!')
    window.open(`https://wa.me/${watsapp}?text=${message}`, '_blank')
  }

  const handleLocationClick = (e) => {
    e.preventDefault()
    window.open(`https://www.google.com/maps?q=${ubicacion}`, '_blank')
  }

  return (
    <section className='w-[100%] h-auto  lg:max-w-[1300px] flex flex-col justify-center items-center gap-5 lg:gap-6 xl:gap-7'>
      <div className='w-[100%] h-auto flex flex-col gap-4'>
        <h2 className='font-titulo text-3xl font-bold text-marronCustom'>Ponte en contacto!!!</h2>
        <p className='font-parrafo font-normal text-sm lg:text-base text-marronCustom'>Si tenés curiosidad por saber más sobre alguno de los servicios que brindamos, ¡Escribinos!.. Nos pondremos en contacto contigo lo antes posible.</p>
      </div>
      <div className='w-full h-auto flex flex-col content-start items-start justify-start text-sm lg:text-base gap-4 text-marronCustom'>
        <a
          href='#'
          className='flex flex-row justify-start items-center  font-parrafo font-[400] gap-2 w-[250px]'
          onClick={handleEmailClick}
        >
          <IoMailOutline className='text-2xl' />
          contacto@greenEats.com
        </a>
        <a
          href='#'
          onClick={handlePhoneClick}
          className='flex flex-row justify-start items-center  font-parrafo font-[400] gap-2 w-[250px]'
        >
          <IoCallOutline className='text-2xl' />
          +54 11 44556677
        </a>
        <a
          href='#'
          onClick={handleLocationClick}
          className='flex flex-row justify-start items-center  font-parrafo font-[400] gap-2 w-[250px]'
        >
          <IoLocationOutline className='text-2xl' />
          Buenos Aires - Argentina
        </a>
      </div>
      <div className='w-[100%] h-auto flex justify-start items-center'>
        <BotonBase
          func={handlePhoneClick}
          name='Conecta'
          clase='botonVerde text-base font-[600] xl:font-[700] '
        >
          <FaWhatsapp />
        </BotonBase>
      </div>
    </section>
  )
}

export default ContactoLanding
