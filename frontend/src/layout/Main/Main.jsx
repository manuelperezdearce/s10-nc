import React from 'react'
import Counter from '../../components/counter/Counter'

const Main = () => {
  return (
    <div className='w-full h-screen bg-greenCustom overflow-hidden p-[1rem] box-border flex flex-col justify-center items-center content-center gap-[2rem]'>
      <h1 className='w-full p-[1rem] text-3xl font-bold underline text-center'>
        Hola!
      </h1>
      <button className='botonPruebas'>Boton de pruebas</button>
      <Counter />
    </div>
  )
}

export default Main
