import { useEffect, useState } from 'react'
import { getMealsByRestaurantId } from '../services/api/getMealsByRestaurantId'

export const useMealsByRestaurantId = (id) => {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ error: false, message: '' })

  const getMeals = async () => {
    try {
      const meals = await getMealsByRestaurantId(id)
      setData(meals)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      setError({ error: true, message: err.message })
      console.log(err)
    }
  }

  useEffect(() => {
    getMeals()
  }, [])

  return { data, isLoading, error }
}
