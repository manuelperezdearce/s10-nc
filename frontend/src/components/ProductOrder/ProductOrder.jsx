import { useSelector } from 'react-redux'

function ProductOrder ({ object }) {
  const platos = useSelector((state) => state.foods.data)
  const platoFiltradoPorId = platos.find((plato) => plato.id === object.meal_id)

  // restaurant_id

  // console.log(platoFiltradoPorId)
  return (
    <div className='w-11/12 h-auto flex  justify-around m-4  items-center '>
      <div className='flex w-1/6 h-3/5'>
        <figure>
          <img className='w-full h-full object-cover rounded-lg' src={platoFiltradoPorId?.image} alt='plato' />
        </figure>
      </div>
      <div className='flex flex-col w-2/5 h-3/4  items-center justify-center'>
        <div className='flex items-start w-full'><p className='text-black font-semibold'>restaurant #{platoFiltradoPorId?.restaurant_id}</p></div>
        <div className='flex justify-between w-full'>
          <p className='text-black'>{platoFiltradoPorId?.name}</p>
          <p className='text-black'>XL</p>
          <p className='text-black'>{object?.quantity} X {platoFiltradoPorId?.price} </p>
        </div>
      </div>
      <div className='h-3/4 w-1/6 flex  justify-center items-center'>
        <p className='text-black font-bold'>${object.price}</p>
      </div>
    </div>
  )
}

export default ProductOrder
