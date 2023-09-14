import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCar } from '../../features/counter/carSlice'

const PriceFoods = () => {
  const product = useSelector((state) => state.foods?.productByid)
  // const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [quantity, setQuantity] = useState(1)

  const handleIncrement = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (quantity < 10) {
      setQuantity(quantity + 1)
    }
  }

  const handleDecrement = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(addItemToCar({ meal_id: product?.id, quantity }))
  }

  return (
    <form className='w-[100%] h-auto flex flex-col justify-center items-start gap-5' onSubmit={handleSubmit}>
      <section className='botoneraPriceFood w-[100%] flex flex-row justify-between items-center content-center'>
        {/* <Contador /> */}
        <section className='containBotoneraSum flex flex-col justify-center items-start gap-1'>
          <p className='font-titulo font-semibold text-md text-marronCustom '>Cantidad</p>
          <div className='botoneraSum flex flex-row gap-1 text-greenCard border-2 rounded-md overflow-hidden'>
            <button
              aria-label='Increment value'
              onClick={handleDecrement}
              className='decrement w-[30px] h-[30px] grid place-content-center font-semibold text-md  text-marronCustom text-md border-r-2'
            >
              -
            </button>
            <span className='font-parrafo font-semibold text-md text-marronCustom w-[30px] h-[30px] grid place-content-center'>{quantity}</span>
            <button
              aria-label='Decrement value'
              onClick={handleIncrement}
              className='increment w-[30px] h-[30px] grid place-content-center font-semibold text-md  text-marronCustom text-md border-l-2'
            >
              +
            </button>
          </div>
        </section>

        <section className='containPriceProduct flex flex-col justify-center items-start  gap-1'>
          <h2 className='text-xl font-parrafo font-bold text-green-500 '>${product?.price * quantity}</h2>
          <p className='font-titulo font-normal text-sm text-marronCustom '>+12% IVA</p>
        </section>

      </section>
      <button type='submit' className='bg-greenCustom w-[100%] h-[40px] rounded-sm text-whiteCustom border-2 border-greenCustom font-titulo font-semibold text-base hover:bg-whiteCustom hover:border-lightBrownCustom hover:text-lightBrownCustom transition-all duration-200 ease-linear'>Añadir Al Carrito</button>
    </form>

  )
}

export default PriceFoods
