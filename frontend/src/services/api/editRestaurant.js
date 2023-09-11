import axios from 'axios'

const editRestaurant = async (id, body, img) => {
  try {
    let data = { ...body }

    if (img) {
      const imageLink = await uploadImageAndGetLink(id, 'restaurant', img)
      data = { ...data, image: imageLink }
    }

    const res = axios.put(`https://green-eats.onrender.com/restaurant/${id}`, { data })
    return res
  } catch (err) {
    console.log(err)
  }
}
