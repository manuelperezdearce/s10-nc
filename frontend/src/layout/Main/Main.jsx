import React from 'react'
import ProductDay from '../../components/Sections/ProductDay'
import { CardSlider } from '../../components/CardSlider/CardSlider'
import Banner from '../../components/banner/Banner'

const Main = () => {
  return (
    <>
      <main className='main relative w-full h-screen  bg-[#ffff] overflow-hidden box-border flex flex-col justify-start items-center content-center gap-[2rem]'>
        <Banner />
      </main>
      <ProductDay />
      <CardSlider />
    </>

  )
}

export default Main
