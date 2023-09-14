import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { RestaurantCard } from '../RestaurantCard/RestaurantCard'
import { getRestaurants } from '../../features/restaurantes/restaurantsSlice'

// para que simulen la lista de restaurantes, hasta este la db
// const ListOfRestaurant = [
//   { _id: '1', image_url: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692745587/fitnessMatket/rest4_qcdlvq.jpg', name: 'Casa Blanca', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', ciudad: 'bs As', direccion: 'Av. Rivadavia 1901, C1033 AAJ, Buenos Aires', especiality: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', phone: '2944666666', email: 'mail@gmail.com', city: 'CABA', address: 'Av. S. Martín 3305, C1416CSI CABA' },
//   { _id: '2', image_url: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692745587/fitnessMatket/rest5_pbyngs.png', name: 'Buenos Aires Restaurant', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', ciudad: 'Buenos Aires', direccion: 'ABC, Carlos Pellegrini 111, C1009 C1009ABC, Buenos Aires', especiality: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', phone: '2944666666', email: 'mail@gmail.com', city: 'CABA', address: 'Av. S. Martín 3305, C1416CSI CABA' },
//   { _id: '3', image_url: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692745587/fitnessMatket/rest1_kfyb0q.jpg', name: 'El Mercado', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', ciudad: 'Buenos Aires', direccion: 'Calle, Martha Salotti 445, Buenos Aires', especiality: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', phone: '2944666666', email: 'mail@gmail.com', city: 'CABA', address: 'Av. S. Martín 3305, C1416CSI CABA' },
//   { _id: '4', image_url: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692745587/fitnessMatket/rest2_o2sp8o.jpg', name: 'El Motivo RestoBar', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', ciudad: 'Buenos Aires', direccion: 'Av. S. Martín 3305, C1416CSI CABA', especiality: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', phone: '2944666666', email: 'mail@gmail.com', city: 'CABA', address: 'Av. S. Martín 3305, C1416CSI CABA' },
//   { _id: '5', image_url: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692745587/fitnessMatket/rest1_kfyb0q.jpg', name: 'El Mercado', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', ciudad: 'Buenos Aires', direccion: 'Calle, Martha Salotti 445, Buenos Aires', especiality: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', phone: '2944666666', email: 'mail@gmail.com', city: 'CABA', address: 'Av. S. Martín 3305, C1416CSI CABA' },
//   { _id: '6', image_url: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692745587/fitnessMatket/rest2_o2sp8o.jpg', name: 'El Motivo RestoBar', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', ciudad: 'Buenos Aires', direccion: 'Av. S. Martín 3305, C1416CSI CABA', especiality: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', phone: '2944666666', email: 'mail@gmail.com', city: 'CABA', address: 'Av. S. Martín 3305, C1416CSI CABA' }
// ]

const ListRestaurants = () => {
  const dispatch = useDispatch()
  const listOfRestaurant = useSelector((state) => state?.restaurants?.data)
  const fixedList = listOfRestaurant.filter(item => item.name !== "")

  useEffect(() => {
    dispatch(getRestaurants())
  }, [dispatch])

  console.log(listOfRestaurant)
  return (
    <section
      className='min-h-[500px] w-[100%] flex flex-wrap justify-center items-center gap-4 text-blackCustom font-parrafo text-[2rem] py-[1rem] max-w-[1500px]'
    >
      {
        fixedList.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} object={restaurant} />
        })
      }

    </section>
  )
}

export default ListRestaurants
