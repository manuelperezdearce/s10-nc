import React, { useEffect } from 'react'
import { IoCheckmarkSharp, IoCloseSharp } from 'react-icons/io5'
import { useParams } from 'react-router-dom'
import PriceFoods from './PriceFoods'
import InfoProfileRestaurant from '../Sections/InfoProfileRestaurant'
import { useDispatch, useSelector } from 'react-redux'
import { getFoodsById } from '../../features/foods/foodsSlice'

const Detail = () => {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.foods?.productByid)
  const object = {
    linkImage: { img1: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193707/fitnessMatket/4-limonada-refrescante_jixcya.jpg', img2: 'https://www.comedera.com/wp-content/uploads/2022/04/Limonada-shutterstock_379385302.jpg', img3: 'https://cdn1.celebritax.com/sites/default/files/styles/amp/public/recetas/limonada.jpg' }
  }
  const { id } = useParams()

  useEffect(() => {
    dispatch(getFoodsById(Number(id)))
  }, [id, dispatch])

  console.log('producto con id: ', product)
  return (
    <section className='w-[100%] h-auto flex justify-center items-center'>
      <section className='detail mt-0 py-5 lg:mt-[200px] w-[100%] min-h-[500px] h-auto flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-start gap-10 max-w-7xl '>

        <section className='containImage w-100% lg:w-1/2 h-[100%] flex flex-col justify-center items-center lg:justify-end gap-4'>
          <img className='w-[100%] max-w-[620px] h-[100%] max-h-[620px] object-cover p-0 rounded-sm' src={`${product?.linkImage}`} alt={`${object?.name}`} />
          <div className='vistasImg flex flex-row justify-center items-center gap-5 h-[150px] p-2 overflow-hidden '>
            <img className='h-[100%] aspect-square rounded-sm cursor-pointer' src={`${object?.linkImage?.img3}`} alt={`${object?.name}`} />
            <img className='h-[100%] aspect-square rounded-sm cursor-pointer' src={`${object?.linkImage?.img2}`} alt={`${object?.name}`} />
          </div>
        </section>
        <section className='containInfo w-[100%] lg:w-1/2 h-[100%] bg-white flex flex-col justify-center items-center lg:justify-start lg:items-start gap-4 px-3'>
          <section className='w-[100%] max-w-[620px] h-[100%] flex flex-col justify-start items-start gap-4'>
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
          <section className='w-[100%] h-[300px] overflow-hidden  grid place-content-center'>
            <InfoProfileRestaurant />
          </section>
        </section>
      </section>
    </section>
  )
}

export default Detail
