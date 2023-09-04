import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../features/counter/counterSlice'

const Contador = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (

    <div className='botoneraSum flex flex-row gap-1 p-2 text-greenCard'>
      <button
        aria-label='Increment value'
        onClick={() => dispatch(decrement())}
        className='w-[30px] h-[30px] grid place-content-center font-semibold text-md rounded-full bg-green-400 text-amber-800 text-md'
      >
        -
      </button>
      <span className='font-parrafo font-semibold text-md text-amber-800 w-[30px] h-[30px] grid place-content-center'>{count}</span>
      <button
        aria-label='Decrement value'
        onClick={() => dispatch(increment())}
        className='w-[30px] h-[30px] grid place-content-center font-semibold text-md rounded-full bg-green-400 text-amber-800 text-md'
      >
        +
      </button>
    </div>
  )
}

export default Contador
