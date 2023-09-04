import React from 'react'
import Contador from './Contador'

const PriceFoods = () => {
  return (
    <section className='botoneraPriceFood w-[100%] flex flex-row justify-between items-between'>
      <Contador />
      <span className='text-lg font-medium text-green-500'>720</span>
    </section>

  )
}

export default PriceFoods
