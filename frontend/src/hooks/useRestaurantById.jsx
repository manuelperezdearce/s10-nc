import { useEffect, useState } from 'react'
import { getRestaurantById } from '../services/api/getRestaurantById'

export const useRestaurantById = (id) => {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ error: false, message: '' })

  const getRestaurant = async () => {
    try {
      const restaurantData = await getRestaurantById(id)
      setData(restaurantData)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      setError({ error: true, message: err.message })
      console.log(err)
    }
  }

  useEffect(() => {
    getRestaurant()
  }, [])

  return { data, isLoading, error }
}
