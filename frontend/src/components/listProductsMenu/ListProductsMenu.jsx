import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { getFoodsByCategoryId } from '../../features/foods/foodsSlice'

const ListProductsMenu = () => {
  const dispatch = useDispatch()
  const foodState = useSelector((state) => state?.foods?.data)

  console.log(foodState)

  useEffect(() => {
    dispatch(getFoodsByCategoryId(1))
  }, [dispatch])

  return (
    <div className='flex flex-row'>
      {
        foodState?.map((food) => (
          <article key={food.id} className='w-[150px] h-[100px] flex flex-col justify-center items-center gap-3'>
            <p>{food.name}</p>
            <img src={`${food.linkImage}`} className='w-[100px] h-[100px]' alt={`${food.name}`} />
          </article>
        ))
      }
    </div>
  )
}

export default ListProductsMenu
