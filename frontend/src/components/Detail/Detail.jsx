import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const object = {
    id: 4,
    name: 'Limonada Refrescante',
    description: 'Limonada fría con rodajas de limón y hojas de menta.',
    price: 120, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193707/fitnessMatket/4-limonada-refrescante_jixcya.jpg',
    id_category: 4,
    id_restaurant: 1
  }

  const { id } = useParams()
  console.log('producto con id: ', id)
  return (
    <section className='detail w-[100%] h-[400px] bg-green-300 p-4'>
      <section className='containImage w-1/2 h-[100%] bg-blue-200'>
        <img className='w-[100%] h-[100%] object-cover p-0' src={`${object?.linkImage}`} alt={`${object?.name}`} />

      </section>
      Detail
    </section>
  )
}

export default Detail
