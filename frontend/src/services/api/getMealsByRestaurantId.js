import axios from 'axios'
import { endpoints } from '../../constants/api'

export const getMealsByRestaurantId = async (id) => {
  const meals = await axios.get(`${endpoints.meals}/search?restaurant_id=${id}`)
  return meals.data
}
