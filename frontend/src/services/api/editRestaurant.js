import axios from 'axios'
import { uploadImageAndGetLink } from '../firebase/imageStorage'

export const editRestaurant = async (id, body, img, token) => {
  try {
    let data = { ...body }

    if (img) {
      const imageLink = await uploadImageAndGetLink(id, 'restaurant', img)
      data = { ...data, image: imageLink }
    }

    const res = await axios.put(`https://green-eats.onrender.com/restaurant/${id}`, data, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    console.log(res)
    window.location.reload()
    return res
  } catch (err) {
    console.log(err)
  }
}
