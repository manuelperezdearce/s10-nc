import axios from 'axios'
import { endpoints } from '../../constants/api'

export const updateCustomer = async (values, userID, token) => {
  try {
    const body = { ...values }

    const res = await axios.put(`${endpoints.customer}/${userID}`, body, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    console.log(res)
    window.location.reload()
  } catch (err) {
    console.log('Error al actualizar el usuario', err)
  }
}
