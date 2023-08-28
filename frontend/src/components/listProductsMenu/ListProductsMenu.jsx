import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { getFoodsByCategoryId } from '../../features/foods/foodsSlice'
import CardMenu from '../cardMenu/CardMenu'

const ListProductsMenu = ({ categoryId }) => {
  const dispatch = useDispatch()
  const foodState = useSelector((state) => state?.foods?.data)

  console.log(foodState)

  useEffect(() => {
    dispatch(getFoodsByCategoryId(categoryId))
  }, [dispatch])

  return (
    <div className='flex flex-row'>
      {
        foodState?.map((food) => (
          <CardMenu key={food.id} object={food} />
        ))
      }
    </div>
  )
}

export default ListProductsMenu
