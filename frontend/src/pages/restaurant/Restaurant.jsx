import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveIndex } from '../../features/nav/navSlice'
import { RestaurantCard } from '../../components/RestaurantCard/RestaurantCard'

// para que simulen la lista de restaurantes, hasta este la db
const ListOfRestaurant = [
  { _id: '1', image_url: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692745587/fitnessMatket/rest4_qcdlvq.jpg', name: 'Casa Blanca', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', ciudad: 'bs As', direccion: 'Av. Rivadavia 1901, C1033 AAJ, Buenos Aires', especiality: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', phone: '2944666666', email: 'mail@gmail.com', city: 'CABA', address: 'Av. S. Martín 3305, C1416CSI CABA' },
  { _id: '2', image_url: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692745587/fitnessMatket/rest5_pbyngs.png', name: 'Buenos Aires Restaurant', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', ciudad: 'Buenos Aires', direccion: 'ABC, Carlos Pellegrini 111, C1009 C1009ABC, Buenos Aires', especiality: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', phone: '2944666666', email: 'mail@gmail.com', city: 'CABA', address: 'Av. S. Martín 3305, C1416CSI CABA' },
  { _id: '3', image_url: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692745587/fitnessMatket/rest1_kfyb0q.jpg', name: 'El Mercado', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', ciudad: 'Buenos Aires', direccion: 'Calle, Martha Salotti 445, Buenos Aires', especiality: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', phone: '2944666666', email: 'mail@gmail.com', city: 'CABA', address: 'Av. S. Martín 3305, C1416CSI CABA' },
  { _id: '4', image_url: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692745587/fitnessMatket/rest2_o2sp8o.jpg', name: 'El Motivo RestoBar', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', ciudad: 'Buenos Aires', direccion: 'Av. S. Martín 3305, C1416CSI CABA', especiality: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', phone: '2944666666', email: 'mail@gmail.com', city: 'CABA', address: 'Av. S. Martín 3305, C1416CSI CABA' },
  { _id: '5', image_url: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692745587/fitnessMatket/rest1_kfyb0q.jpg', name: 'El Mercado', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', ciudad: 'Buenos Aires', direccion: 'Calle, Martha Salotti 445, Buenos Aires', especiality: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', phone: '2944666666', email: 'mail@gmail.com', city: 'CABA', address: 'Av. S. Martín 3305, C1416CSI CABA' },
  { _id: '6', image_url: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692745587/fitnessMatket/rest2_o2sp8o.jpg', name: 'El Motivo RestoBar', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', ciudad: 'Buenos Aires', direccion: 'Av. S. Martín 3305, C1416CSI CABA', especiality: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.', phone: '2944666666', email: 'mail@gmail.com', city: 'CABA', address: 'Av. S. Martín 3305, C1416CSI CABA' }
]

const Restaurant = () => {
  const dispatch = useDispatch()
  const restaurantRef = useRef(null)

  useEffect(() => {
    dispatch(setActiveIndex('restaurant'))
    return () => { setActiveIndex(null) }
  }, [])

  return (
    <section className='containerRestaurants lg:mt-[130px] w-full my-11 min-h-[400px] flex flex-col justify-start items-center content-center bg-whiteCustom gap-6'>
      <section className='contentText px-[1rem] py-[1rem] flex flex-col gap-2 max-w-[1500px] '>
        <h2 className='font-titulo text-3xl font-bold text-marronCustom'>Descubre Nuestra Selección de Restaurantes Saludables</h2>
        <p className='font-parrafo font-normal text-sm lg:text-base text-marronCustom'>Nuestra plataforma te conecta con una selección de <strong>restaurantes</strong> que comparten nuestra pasión por la <strong>comida saludable</strong> y sostenible. Cada restaurante en nuestra lista ha sido cuidadosamente elegido para ofrecerte una <strong>experiencia gastronómica única</strong> que cuida tanto de tu bienestar como del planeta.</p>
      </section>
      <section
        ref={restaurantRef}
        className='min-h-[500px] w-[100%] flex flex-wrap justify-center items-center gap-4 text-blackCustom font-parrafo text-[2rem] py-[1rem] max-w-[1500px]'
      >
        {
        ListOfRestaurant.map((restaurant) => {
          return <RestaurantCard key={restaurant._id} object={restaurant} />
        })
      }

      </section>
    </section>
  )
}

export default Restaurant
