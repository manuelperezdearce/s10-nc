import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveIndex } from '../../features/nav/navSlice'
import { RestaurantCard } from '../../components/RestaurantCard/RestaurantCard'

// para que simulen la lista de restaurantes, hasta este la db
const ListOfRestaurant = [
  { _id: '1', ing: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692745587/fitnessMatket/rest4_qcdlvq.jpg', nombre: 'Casa Blanca', descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', ciudad: 'bs As', direccion: 'Av. Rivadavia 1901, C1033 AAJ, Buenos Aires', especialidad: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.' },
  { _id: '2', ing: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692745587/fitnessMatket/rest5_pbyngs.png', nombre: 'Buenos Aires Restaurant', descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', ciudad: 'Buenos Aires', direccion: 'ABC, Carlos Pellegrini 111, C1009 C1009ABC, Buenos Aires', especialidad: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.' },
  { _id: '3', ing: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692745587/fitnessMatket/rest1_kfyb0q.jpg', nombre: 'El Mercado', descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', ciudad: 'Buenos Aires', direccion: 'Calle, Martha Salotti 445, Buenos Aires', especialidad: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.' },
  { _id: '4', ing: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692745587/fitnessMatket/rest2_o2sp8o.jpg', nombre: 'El Motivo RestoBar', descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', ciudad: 'Buenos Aires', direccion: 'Av. S. Martín 3305, C1416CSI CABA', especialidad: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.' }
]

const Restaurant = () => {
  const dispatch = useDispatch()
  const restaurantRef = useRef(null)

  useEffect(() => {
    dispatch(setActiveIndex('restaurant'))
    return () => { setActiveIndex(null) }
  }, [])

  return (
    <div
      ref={restaurantRef}
      className='mt-[100px] w-full min-h-[400px] bg-lightBrownCustom flex flex-wrap justify-center items-center gap-4 text-blackCustom font-parrafo text-[2rem]'
    >
      <RestaurantCard />

    </div>
  )
}

export default Restaurant
