import React from 'react'
import AppRoutes from '../../routes/AppRoutes'

const Main = () => {
  return (
    <main className='main w-full h-screen  bg-greenCustom overflow-hidden p-[1rem] box-border flex flex-col justify-center items-center content-center gap-[2rem]'>
      <AppRoutes />
    </main>
  )
}

export default Main
