import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveIndex } from '../../features/nav/navSlice'
import ListRestaurants from '../../components/listRestaurants/ListRestaurants'

const Restaurant = () => {
  const dispatch = useDispatch()
  const restaurantRef = useRef(null)

  useEffect(() => {
    dispatch(setActiveIndex('restaurant'))
    return () => { setActiveIndex(null) }
  }, [])

  return (
    <section
      ref={restaurantRef}
      className='containerRestaurants lg:mt-[130px] w-full my-11 min-h-[400px] flex flex-col justify-start items-center content-center bg-whiteCustom gap-6'
    >
      <section className='contentText px-[1rem] py-[1rem] flex flex-col gap-2 max-w-[1500px] '>
        <h2 className='font-titulo text-3xl font-bold text-marronCustom'>Descubre Nuestra Selección de Restaurantes Saludables</h2>
        <p className='font-parrafo font-normal text-sm lg:text-base text-marronCustom'>Nuestra plataforma te conecta con una selección de <strong>restaurantes</strong> que comparten nuestra pasión por la <strong>comida saludable</strong> y sostenible. Cada restaurante en nuestra lista ha sido cuidadosamente elegido para ofrecerte una <strong>experiencia gastronómica única</strong> que cuida tanto de tu bienestar como del planeta.</p>
      </section>
      <ListRestaurants />
    </section>
  )
}

export default Restaurant
