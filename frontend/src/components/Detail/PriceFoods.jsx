import React from 'react'
import Contador from './Contador'
import { useSelector } from 'react-redux'

const PriceFoods = () => {
  const product = useSelector((state) => state.foods?.productByid)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <form className='w-[100%] h-auto flex flex-col justify-center items-start gap-5' onSubmit={handleSubmit}>
      <section className='botoneraPriceFood w-[100%] flex flex-row justify-between items-center content-center'>
        <Contador />

        <section className='containPriceProduct flex flex-col justify-center items-start  gap-1'>
          <h2 className='text-xl font-parrafo font-bold text-green-500 '>${product?.price}</h2>
          <p className='font-titulo font-normal text-sm text-marronCustom '>+12% IVA</p>
        </section>

      </section>
      <button type='submit' className='bg-greenCustom w-[100%] h-[40px] rounded-sm text-whiteCustom border-2 border-greenCustom font-titulo font-semibold text-base hover:bg-whiteCustom hover:border-lightBrownCustom hover:text-lightBrownCustom transition-all duration-200 ease-linear'>Añadir Al Carrito</button>
    </form>

  )
}

export default PriceFoods
