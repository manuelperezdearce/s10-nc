import { useEffect, useState } from 'react'
import { getMeals } from '../services/api/getMeals'

export const useMeals = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ error: false, message: '' })

  const getAllMeals = async () => {
    try {
      const meals = await getMeals()
      setData(meals)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      setError({ error: true, message: err.message })
      console.log(err)
    }
  }

  useEffect(() => {
    getAllMeals()
  }, [])

  return { data, isLoading, error }
}
