import React from 'react'
import CardMenu from '../../components/cardMenu/CardMenu'
import { useSelector } from 'react-redux'

const ListOfProducts = () => {
  const filtrados = useSelector((state) => state.foods.productsByKeyword)

  console.log(filtrados)
  return (
    <section className='lista de productos w-[100%] h-auto flex justify-center items-center content-center'>
      <div className='w-[100%] max-w-[1600px] p-6 min-h-[500px] flex flex-row flex-wrap justify-center content-start items-start mt-0 lg:mt-[110px] gap-5'>
        {
      filtrados.map((elem, index) => (
        <CardMenu key={index + elem.id} object={elem} />
      ))
      }
      </div>
    </section>
  )
}

export default ListOfProducts
