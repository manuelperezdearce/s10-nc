import { useEffect, useState } from 'react'
import { getMealsByCategory } from '../services/api/getMealsByCategory'

export const useMealsByCategory = (id) => {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ error: false, message: '' })

  const getMeals = async () => {
    try {
      const meals = await getMealsByCategory(id)
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
