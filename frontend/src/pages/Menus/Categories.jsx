import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveIndex } from '../../features/nav/navSlice'
import ListProductsMenu from '../../components/listProductsMenu/ListProductsMenu'
import Category from './Category'

const Categories = () => {
  const dispatch = useDispatch()
  const categoeies = useSelector((state) => state.categories?.categories)
  const categoryRef = useRef(null)

  useEffect(() => {
    dispatch(setActiveIndex('category'))
    return () => { setActiveIndex(null) }
  }, [])

  return (
    <section
      ref={categoryRef}
      className='containerRestaurants lg:mt-[130px] w-full my-11 min-h-[400px] flex flex-col justify-start items-center content-center bg-whiteCustom gap-6 border-2 border-r-emerald-200 '
    >
      <section className='contentText px-[1rem] py-[1rem] flex flex-col gap-2 max-w-[1500px] '>
        <h2 className='font-titulo text-3xl font-bold text-marronCustom'>Descubre Nuestra Selección de Platos y bebidas.</h2>
        <p className='font-parrafo font-normal text-sm lg:text-base text-marronCustom'>
          Nuestra selección de platos te brinda una experiencia culinaria única, con opciones saludables y deliciosas para cada etapa de tu comida. Desde entradas frescas hasta postres indulgentes, estamos comprometidos con tu bienestar y satisfacción gastronómica.
        </p>
      </section>

      {categoeies.map(item => (
        <Category key={item.id} data={item} />
      ))}
      
    </section>
  )
}

export default Categories
