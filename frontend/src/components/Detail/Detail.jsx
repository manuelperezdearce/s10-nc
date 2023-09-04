import React from 'react'
import { IoCheckmarkSharp, IoCloseSharp } from 'react-icons/io5'
import { useParams } from 'react-router-dom'
import PriceFoods from './PriceFoods'

const Detail = () => {
  const object = {
    id: 4,
    name: 'Limonada Refrescante',
    description: 'Limonada fría con rodajas de limón y hojas de menta.',
    price: 120, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193707/fitnessMatket/4-limonada-refrescante_jixcya.jpg',
    id_category: 4,
    id_restaurant: 1,
    is_vegan: true,
    is_glutenfree: true,
    is_proteinplus: false
  }

  const { id } = useParams()
  console.log('producto con id: ', id)
  return (
    <section className='detail mt-0 lg:mt-[120px] w-[100%] h-[400px] bg-green-300 p-4 flex gap-3'>
      <section className='containImage w-1/2 h-[100%] bg-blue-200'>
        <img className='w-[100%] h-[100%] object-cover p-0 rounded-sm' src={`${object?.linkImage}`} alt={`${object?.name}`} />

      </section>
      <section className='containInfo w-1/2 h-[100%] bg-blue-200 flex flex-col justify-start items-start gap-3'>
        <div className='clasesFood flex flex-col justify-start items-start gap-0'>
          <h2 className='text-3xl font-bold text-marronCustom text-left'>{object?.name}</h2>
          <ul className='listAtributes flez flex flex-row justify-start items-center gap-3 bg-blue-300'>
            <li className='itemListAtr flex justify-start items-center gap-1 text-marronCustom font-normal text-base'><IoCheckmarkSharp style={{ color: 'green', fontSize: '1.2rem' }} />Vegano</li>
            <li className='itemListAtr flex justify-start items-centenpmr gap-1 text-marronCustom font-normal text-base'><IoCheckmarkSharp style={{ color: 'green', fontSize: '1.2rem' }} />Gluten</li>
            <li className='itemListAtr flex justify-start items-center gap-1 text-marronCustom font-normal text-base'><IoCloseSharp style={{ color: 'red', fontSize: '1.2rem' }} />Proteinas</li>
          </ul>
        </div>
        <p className='descriptionFood font-normal text-base text-marronCustom '>{object?.description}</p>
        <PriceFoods />
      </section>
    </section>
  )
}

export default Detail
