import { BsTelephoneFill } from 'react-icons/bs'
import { BiSolidTimeFive } from 'react-icons/bi'
import { IoLocationSharp } from 'react-icons/io5'
import RestaurantLogo from '../../images/RestaurantLogo.png'

import BtnEditProfileRestaurant from '../Buttons/BtnEditProfileRestaurant'
import { BtnAddMeal } from '../Buttons/BtnAddMeal'

export default function InfoProfileRestaurant () {
  return (
    <div className='flex flex-col md:flex-row gap-y-5 gap-x-20'>

      {/* -------------------- Image */}
      <img src={RestaurantLogo} alt='' className='w-full max-w-xs mx-auto mb-10 lg:mb-0' />

      {/* -------------------- Information */}
      <div>
        <div className='mb-8'>
          <p className='text-3xl font-bold'>Nombre del restaurant</p>
          <p className='text-xl'>Especialidad</p>
        </div>
        <div className='mt-4 flex flex-col gap-y-3'>
          <p className='flex items-center gap-x-2'><span className='text-greenCustom2 text-lg'><IoLocationSharp /></span>Av. Vegana Springfiels</p>
          <p className='flex items-center gap-x-2'><span className='text-greenCustom2 text-lg'><BsTelephoneFill /></span>9676455432</p>
          <p className='flex items-center gap-x-2'><span className='text-greenCustom2 text-lg'><BiSolidTimeFive /></span>Desde 09:00 - 19:00</p>
          <p className='text-base text-greyCustom'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, corrupti hic. Aliquid laboriosam perspiciatis accusamus?</p>
        </div>
        <div className='mt-8 flex gap-4'>
          <BtnEditProfileRestaurant />
          <BtnAddMeal />
        </div>
      </div>
    </div>
  )
}
