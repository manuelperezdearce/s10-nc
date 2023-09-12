import axios from 'axios'
import { endpoints } from '../../constants/api'

export const getRestaurantById = async (id) => {
  const restaurant = await axios.get(`${endpoints.restaurants}/${id}`)
  return restaurant.data
}
