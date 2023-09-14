import axios from 'axios'
import { endpoints } from '../../constants/api'

export const getMeals = async () => {
  const meals = await axios.get(endpoints.meals)
  return meals.data
}

