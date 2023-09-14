import axios from 'axios'
import { uploadImageAndGetLink } from '../firebase/imageStorage'
import { newId } from '../../utils/generateUid'
import { endpoints } from '../../constants/api'

export const createMeal = async (values, image, restaurantId, token) => {
  try {
    const id = newId()
    const imageLink = await uploadImageAndGetLink(id, 'meals', image)
    const body = { ...values, image: imageLink, id, restaurant_id: restaurantId, role_id: 2 }

    const res = await axios.post(`${endpoints.meals}/add`, body, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    console.log(res)
    return res.data.meal
  } catch (err) {
    console.log('Error al crear platillo', err)
  }
}
