import axios from 'axios'

export const getRestaurantById = async (id) => {
  const restaurant = await axios.get(`https://green-eats.onrender.com/restaurant/${id}`)
  return restaurant.data
}
