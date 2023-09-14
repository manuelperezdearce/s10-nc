import axios from 'axios'
import { endpoints } from '../../constants/api'

export const getMealsByCategory = async (id) => {
  const meals = await axios.get(`${endpoints.meals}/search?category_id=${id}`)
  console.log(meals.data)
  return meals.data
}
