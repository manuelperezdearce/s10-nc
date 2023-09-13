import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../features/counter/counterSlice'

const Contador = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <section className='containBotoneraSum flex flex-col justify-center items-start gap-1'>
      <p className='font-titulo font-semibold text-md text-marronCustom '>Cantidad</p>
      <div className='botoneraSum flex flex-row gap-1 text-greenCard border-2 rounded-md overflow-hidden'>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(decrement())}
          className='decrement w-[30px] h-[30px] grid place-content-center font-semibold text-md  text-marronCustom text-md border-r-2'
        >
          -
        </button>
        <span className='font-parrafo font-semibold text-md text-marronCustom w-[30px] h-[30px] grid place-content-center'>{count}</span>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(increment())}
          className='increment w-[30px] h-[30px] grid place-content-center font-semibold text-md  text-marronCustom text-md border-l-2'
        >
          +
        </button>
      </div>
    </section>
  )
}

export default Contador
