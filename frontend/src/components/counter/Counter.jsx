import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../features/counter/counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='flex justify-center items-center content-center gap-[1rem]'>

        <button
          className='w-[50px] h-[50px] bg-purple-400 rounded-full border-purple-50 border-2 text-white hover:text-purple-500 hover:bg-slate-400 transition-all ease-in duration-200'
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span>{count}</span>
        <button
          className='w-[50px] h-[50px] bg-purple-400 rounded-full border-purple-50 border-2 text-white hover:text-purple-500 hover:bg-slate-400 transition-all ease-in duration-200'
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Counter
