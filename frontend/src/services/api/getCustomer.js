import axios from 'axios'
import { endpoints } from '../../constants/api'

export const getCustomerById = async (id) => {
  const customer = await axios.get(`${endpoints.customer}/${id}`)
  return customer.data
}
