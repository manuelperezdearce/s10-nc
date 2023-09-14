import axios from 'axios'
import { endpoints } from '../../constants/api'

export const getMeals = async (id) => {
  const meals = await axios.get(`${endpoints.meals}/${id}`)
  return meals.data
}

