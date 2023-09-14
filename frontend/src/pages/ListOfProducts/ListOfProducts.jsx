import React, { useEffect, useRef } from 'react'
import CardMenu from '../../components/cardMenu/CardMenu'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveIndex } from '../../features/nav/navSlice'
import { useMeals } from '../../hooks/useMeals'

const ListOfProducts = () => {
  const { data, isLoading } = useMeals()
  const dispatch = useDispatch()
  const menuRef = useRef(null)

  useEffect(() => {
    dispatch(setActiveIndex('menu'))
    return () => { setActiveIndex(null) }
  }, [])

  return (
    <section ref={menuRef} className='lista de productos w-[100%] h-auto flex justify-center items-center content-center'>
      <div className='w-[100%] max-w-[1600px] p-6 min-h-[500px] flex flex-row flex-wrap justify-center content-start items-start mt-0 lg:mt-[110px] gap-5'>
        {!isLoading &&
      data.map((elem, index) => (
        <CardMenu key={index + elem.id} object={elem} />
      ))}
      </div>
    </section>
  )
}

export default ListOfProducts
