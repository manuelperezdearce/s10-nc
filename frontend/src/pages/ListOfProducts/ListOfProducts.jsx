import React, { useEffect, useRef, useState } from 'react'
import CardMenu from '../../components/cardMenu/CardMenu'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveIndex } from '../../features/nav/navSlice'
import { useMeals } from '../../hooks/useMeals'
import { Filters } from './Filters'

const ListOfProducts = () => {
  const { data, isLoading } = useMeals()
  const [filteredList, setFilteredList] = useState([])
  const dispatch = useDispatch()
  const menuRef = useRef(null)

  useEffect(() => {
    dispatch(setActiveIndex('menu'))
    return () => { setActiveIndex(null) }
  }, [])

  useEffect(() => {
    if (!isLoading) {
      setFilteredList(data)
    }
  }, [data])


  return (
    <section ref={menuRef} className='lista de productos w-full h-auto flex flex-col gap-4 justify-center items-center content-center mt-[15%]'>
      <Filters filteredList={filteredList} setFilteredList={setFilteredList} data={data}/>
      <div className='w-[100%] max-w-[1600px] p-6 min-h-[500px] flex flex-row flex-wrap justify-center content-start items-start gap-5'>

        {!isLoading &&
      filteredList.map((elem) => (
        <CardMenu key={elem.id} object={elem} />
      ))}
      </div>
    </section>
  )
}

export default ListOfProducts
