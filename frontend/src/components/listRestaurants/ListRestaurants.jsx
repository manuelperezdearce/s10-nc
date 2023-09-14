import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { RestaurantCard } from '../RestaurantCard/RestaurantCard'
import { getRestaurants } from '../../features/restaurantes/restaurantsSlice'

const ListRestaurants = () => {
  const dispatch = useDispatch()
  const listOfRestaurant = useSelector((state) => state?.restaurants?.data)
  const fixedList = listOfRestaurant.filter(item => item.name !== "")

  useEffect(() => {
    dispatch(getRestaurants())
  }, [dispatch])

  console.log(listOfRestaurant)
  return (
    <section
      className='min-h-[500px] w-[100%] flex flex-wrap justify-center items-center gap-4 text-blackCustom font-parrafo text-[2rem] py-[1rem] max-w-[1500px]'
    >
      {
        fixedList.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} object={restaurant} />
        })
      }

    </section>
  )
}

export default ListRestaurants
