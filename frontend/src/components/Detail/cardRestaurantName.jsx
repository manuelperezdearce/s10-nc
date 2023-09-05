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
    <section className='w-[100%] h-auto flex flex-row gap-5'>
      <section className='w-[100px] h-[100px] lg:w-1/2 lg:h-[150px] lg:aspect-square overflow-hidden bg-red-300'>
        <img src={restaurant?.linkImage} alt={restaurant?.name} className='w-[100%] h-[100%] object-contain lg:object-cover rounded-md' />
      </section>
      <div className='w-1/2 flex flex-col justify-start items-start gap-1 overflow-hidden text-brownCustom'>
        <h2 className='font-titulo text-xl font-bold text-marronCustom'>{restaurant?.name}</h2>
        <h3 className='font-parrafo text-base font-normal text-marronCustom'>{restaurant?.especiality}</h3>
        <p className='flex items-center gap-x-1 font-parrafo text-sm font-light text-marronCustom'><span className='text-greenCustom2 text-lg'><IoLocationSharp /></span>Av. Vegana Springfiels</p>
        <p className='flex items-center gap-x-1 font-parrafo text-sm font-light text-marronCustom'><span className='text-greenCustom2 text-lg'><BsTelephoneFill /></span>9676455432</p>
        <p className='flex items-center gap-x-1 font-parrafo text-sm font-light text-marronCustom'><span className='text-greenCustom2 text-lg'><BiSolidTimeFive /></span>Desde {restaurant?.time_open} - {restaurant?.time_close}</p>
      </div>

    </section>
  )
}

export default CardRestaurantName
