import React, { useEffect } from 'react'
import { IoCheckmarkSharp, IoCloseSharp } from 'react-icons/io5'
import { useParams } from 'react-router-dom'
import PriceFoods from './PriceFoods'
import { useDispatch, useSelector } from 'react-redux'
import { getFoodsById } from '../../features/foods/foodsSlice'
import CardRestaurantName from './cardRestaurantName'

const Detail = () => {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.foods?.productByid)

  const { id } = useParams()

  useEffect(() => {
    dispatch(getFoodsById(Number(id)))
  }, [id, dispatch])

  console.log('producto con id: ', product)
  return (
    <section className='w-[100%] h-auto flex justify-center items-center'>
      <section className='detail mt-0 py-5 lg:mt-[200px] min-h-[500px] h-auto flex flex-col justify-center items-center content-center lg:flex-row lg:justify-center lg:items-start gap-10 max-w-7xl  w-[100%] sm:w-[600px] md:w-[620px] lg:w-[100%]'>

        <section className='containImage w-[100%] lg:w-1/2 h-[300px] lg:h-auto lg:aspect-square flex flex-col justify-center items-center lg:justify-end lg:pl-3 gap-4'>
          <img className='w-[100%] max-w-[620px] h-[100%] max-h-[620px] object-cover p-0 rounded-sm' src={`${product?.linkImage}`} alt={`${product?.name}`} />
        </section>
        <section className='containInfo w-[100%] lg:w-1/2 h-[100%] bg-white flex flex-col justify-center items-center lg:justify-start lg:items-start gap-6 px-2 lg:px-0 lg:pr-3'>
          <section className='w-[100%] max-w-[620px] h-[100%] flex flex-col justify-start items-start gap-4'>

            {/* tituñp + lista atributos */}
            <div className='clasesFood flex flex-col justify-start items-start gap-3'>
              <h2 className='text-3xl font-bold text-marronCustom text-left'>{product?.name}</h2>
              <ul className='listAtributes flez flex flex-row justify-start items-center gap-3 '>
                <li className='itemListAtr flex justify-start items-center gap-1 text-marronCustom font-normal text-base'><IoCheckmarkSharp style={{ color: 'green', fontSize: '1.2rem' }} />Vegano</li>
                <li className='itemListAtr flex justify-start items-center gap-1 text-marronCustom font-normal text-base'><IoCheckmarkSharp style={{ color: 'green', fontSize: '1.2rem' }} />Gluten</li>
                <li className='itemListAtr flex justify-start items-center gap-1 text-marronCustom font-normal text-base'><IoCloseSharp style={{ color: 'red', fontSize: '1.2rem' }} />Proteinas</li>
              </ul>
            </div>
            <p className='descriptionFood font-normal text-base text-marronCustom '>{product?.description}</p>
            <PriceFoods />

          </section>
          <section className='w-[100%] h-auto overflow-hidden flex justify-center lg:justify-start items-center'>
            <CardRestaurantName idRestaurant={product.id_restaurant} />
          </section>
        </section>
      </section>
    </section>
  )
}

export default Detail
