import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { BsTelephoneFill } from 'react-icons/bs'
import { BiSolidTimeFive } from 'react-icons/bi'

const ContactRestaurant = ({ restaurant }) => {
  const handlePhoneClick = (e) => {
    e.preventDefault()
    const message = encodeURIComponent('Hola, estoy interesad@ en su sericio. Me gustaría que me contacten. ¡Gracias!')
    window.open(`https://wa.me/${restaurant?.phone_number}?text=${message}`, '_blank')
  }

  const handleLocationClick = (e) => {
    e.preventDefault()
    window.open(`https://www.google.com/maps?q=${restaurant?.address}`, '_blank')
  }

  return (
    <ul className='w-[100%] h-auto flex flex-col gap-2'>
      <li className='w-[100%] flex flex-row justify-start items-center'>
        <button
          onClick={handleLocationClick}
          className='flex items-center gap-x-1 font-parrafo text-xs font-light text-marronCustom text-left'
        >
          <span className='text-greenCustom2 text-lg'>
            <IoLocationSharp />
          </span>
          {restaurant?.address}
        </button>
      </li>
      <li className='w-[100%] flex flex-row justify-start items-center'>
        <button
          onClick={handlePhoneClick}
          className='flex items-center gap-x-1 font-parrafo text-xs font-light text-marronCustom text-left'
        >
          <span className='text-greenCustom2 text-lg'>
            <BsTelephoneFill />
          </span>{restaurant?.phone_number}
        </button>
      </li>
      <li className='w-[100%] flex flex-row justify-start items-center'>
        <p className='flex items-center gap-x-1 font-parrafo text-xs font-light text-marronCustom text-left'><span className='text-greenCustom2 text-lg'><BiSolidTimeFive /></span>Desde {restaurant?.time_open} - {restaurant?.time_close}</p>
      </li>
    </ul>
  )
}

export default ContactRestaurant
