import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { BsTelephoneFill } from 'react-icons/bs'
import { BiSolidTimeFive } from 'react-icons/bi'
import { getRestaurantById } from '../../features/restaurantes/restaurantsSlice'

const CardRestaurantName = ({ idRestaurant }) => {
  const dispatch = useDispatch()
  const restaurant = useSelector((state) => state.restaurants?.restaurantById)

  useEffect(() => {
    dispatch(getRestaurantById(idRestaurant))
  }, [idRestaurant, dispatch])

  console.log('restaurant: ', restaurant)
  return (
    <section className='w-[100%]  h-auto flex flex-row justify-center items-center gap-5'>
      <section className='w-[130px] h-[160px] sm:w-[300px] lg:w-1/2 lg:h-[160px]  lg:aspect-square overflow-hidden '>
        <img src={restaurant?.linkImage} alt={restaurant?.name} className='w-[100%] h-[100%] object-cover rounded-md' />
      </section>
      <div className='w-1/2 flex flex-col justify-center items-start gap-2 overflow-hidden text-brownCustom'>
        <h2 className='font-titulo text-xl font-bold text-marronCustom'>{restaurant?.name}</h2>
        <h3 className='font-parrafo text-base font-normal text-marronCustom'>{restaurant?.especiality}</h3>
        <p className='flex items-center gap-x-1 font-parrafo text-sm font-light text-marronCustom'><span className='text-greenCustom2 text-md'><IoLocationSharp /></span>{restaurant?.address}</p>
        <p className='flex items-center gap-x-1 font-parrafo text-sm font-light text-marronCustom'><span className='text-greenCustom2 text-md'><BsTelephoneFill /></span>{restaurant?.phone}</p>
        <p className='flex items-center gap-x-1 font-parrafo text-sm font-light text-marronCustom'><span className='text-greenCustom2 text-md'><BiSolidTimeFive /></span>Desde {restaurant?.time_open} - {restaurant?.time_close}</p>
      </div>

    </section>
  )
}

export default CardRestaurantName
