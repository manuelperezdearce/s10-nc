import React from 'react'

import AppRoutes from '../../routes/AppRoutes'

const Main = () => {
  return (
    <main className='main w-full h-min-screen  bg-greenCustom overflow-hidden  box-border flex flex-col justify-top gap-[2rem]'>
      <AppRoutes />
    </main>
  )
}
export default Main
