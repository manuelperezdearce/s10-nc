import { BsTelephoneFill } from 'react-icons/bs'
import { BiSolidTimeFive } from 'react-icons/bi'
import { IoLocationSharp } from 'react-icons/io5'
import RestaurantLogo from '../../images/RestaurantLogo.png'
import BtnEditProfileRestaurant from '../Buttons/BtnEditProfileRestaurant'
import { useRestaurantById } from '../../hooks/useRestaurantById'
import { BtnAddMeal } from '../Buttons/BtnAddMeal'
import { BtnEditProfile } from '../Buttons/BtnEditProfile'
import { useSelector } from 'react-redux'

export default function InfoProfileRestaurant ({ id }) {
  const { user } = useSelector(state => state?.auth2)
  const { data, isLoading, error } = useRestaurantById(id)
  if (isLoading) return <p>Cargando...</p>

  return (
    <div className='flex flex-col md:flex-row gap-y-5 gap-x-20'>
      {/* -------------------- Image */}
      <img src={!data.image ? RestaurantLogo : data.image} alt='' className='w-full max-w-xs mx-auto mb-10 lg:mb-0' />

      {/* -------------------- Information */}
      <div>
        <div className='mb-8'>
          <p className='text-3xl font-bold'>{data.name}</p>
          <p className='text-xl'>{data.speciality}</p>
        </div>
        <div className='mt-4 flex flex-col gap-y-3'>
          <p className='flex items-center gap-x-2'>
            <span className='text-greenCustom2 text-lg'>
              <IoLocationSharp />
            </span>
            {data.address}
          </p>
          <p className='flex items-center gap-x-2'>
            <span className='text-greenCustom2 text-lg'>
              <BsTelephoneFill />
            </span>
            {data.phone_number}
          </p>
          <p className='flex items-center gap-x-2'>
            <span className='text-greenCustom2 text-lg'>
              <BiSolidTimeFive />
            </span>
            Desde {data.time_open} - {data.time_close}
          </p>
          <p className='text-base text-greyCustom'>
            {data.description}
          </p>
        </div>
        <div className='mt-8 flex gap-4'>
          {/* <BtnEditProfileRestaurant data={data} id={id} /> */}
          {(user && user.role_id === 2 && user.idByRole === data.id) &&
            <>
              <BtnEditProfile data={data} id={id} />
              <BtnAddMeal id={id} />
            </>}
        </div>
      </div>
    </div>
  )
}
