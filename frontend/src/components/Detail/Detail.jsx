import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PriceFoods from './PriceFoods'
import { useDispatch, useSelector } from 'react-redux'
import { getFoodsById } from '../../features/foods/foodsSlice'
import CardRestaurantName from './CardRestaurantName'
import ListAtributes from './ListAtributes'
import MapComponent from './Maps/MapComponent'

const Detail = () => {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.foods?.productByid)
  console.log(product)
  const { id } = useParams()

  useEffect(() => {
    dispatch(getFoodsById(id))
  }, [id, dispatch])

  return (
    <section className='w-[100%] h-auto flex flex-col justify-center items-center'>

      {/* contain responsive */}
      <section className='detail mt-0 py-5 lg:mt-[120px] min-h-[500px] h-auto flex flex-col justify-center items-center content-center lg:flex-row lg:justify-center lg:items-start gap-10 max-w-7xl  w-[100%] sm:w-[600px] md:w-[620px] lg:w-[100%]'>

        {/* contain left  */}
        <section className='containImage w-[100%] lg:w-1/2 h-[300px] lg:h-auto lg:aspect-square flex flex-col justify-center items-center lg:justify-end lg:pl-3 gap-4'>
          <img className='w-[100%] max-w-[620px] h-[100%] max-h-[620px] object-cover p-0 rounded-md' src={`${product?.image}`} alt={`${product?.name}`} />
        </section>

        {/* contain right */}
        <section className='containInfo w-[100%] lg:w-1/2 h-[100%] bg-white flex flex-col justify-center items-center lg:justify-start lg:items-start gap-6 px-2 lg:px-0 lg:pr-3'>

          {/* Descripcion del plato */}
          <section className='w-[100%] max-w-[620px] h-[100%] flex flex-col justify-start items-start gap-4'>
            {/* componente lista de atributos */}
            <ListAtributes />
            <p className='descriptionFood font-normal text-base text-marronCustom '>{product?.description}</p>
            <PriceFoods />
          </section>

          {/* nombre de restaurante  */}
          <section className='w-[100%] h-auto overflow-hidden flex justify-center lg:justify-start items-center'>
            <CardRestaurantName idRestaurant={product.restaurant_id} />
          </section>

          {/* mapa  */}
          <section className='relative containerMpas w-[100%] h-[300px] bg-greenCustom flex justify-center items-center rounded-md p-2 z-0'>
            <MapComponent />
          </section>
        </section>
      </section>

    </section>
  )
}

export default Detail
