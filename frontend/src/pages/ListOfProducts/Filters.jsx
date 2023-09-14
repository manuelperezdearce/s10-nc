import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const Filters = ({ filteredList, setFilteredList, data }) => {
  const { categories } = useSelector(state => state.categories)
  const [search, setSearch] = useState('')

  const handleSort = (type) => {
    const sortedList = [...filteredList]
    if (type === 'expensive') {
      sortedList.sort((a, b) => b.price - a.price)
      setFilteredList(sortedList)
    }
    if (type === 'cheap') {
      sortedList.sort((a, b) => a.price - b.price)
      setFilteredList(sortedList)
    }
  }
  const handleSortCategory = (value) => {
    const sortedList = [...data]

    sortedList.filter((item) => (item.category_id === value))
    setFilteredList(sortedList)
    console.log(value)
  }

  useEffect(() => {
    let newData = data.map(item => item)
    if (search) {
      newData = newData.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    setFilteredList(newData)
  }, [search])

  const inputStyle = 'bg-white text-black border rounded-md p-2 focus:outline-none focus:border-greenCustom focus:ring-1 focus:ring-greenCustom'

  return (
    <div className='flex gap-8'>
      <input placeholder='Buscar' className={inputStyle} onChange={(e) => setSearch(e.target.value)} />

      <select placeholder='Ordenar' className={inputStyle} onChange={(e) => handleSort(e.target.value)}>

        <option disabled>Ordenar</option>
        <option value='expensive'>Mayor precio</option>
        <option value='cheap'>Menor precio</option>
      </select>

      {/* <select className={inputStyle} onChange={(e) => handleSortCategory(e.target.value)}>
        <option disabled>Categoria</option>
        {categories.map(item =>
          <option key={item.id} value={item.id}>{item.name}</option>)}
      </select> */}
    </div>
  )
}
