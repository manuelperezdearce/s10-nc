import { useNavigate } from 'react-router-dom'

function CardProduct ({ data }) {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(`/detalle/${data.id}`)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg shadow-xl' onClick={handleNavigate}>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.5'>B&C Restaurant</span>
        <img className='w-full h-full object-cover rounded-lg' src={data.image} alt='comida' />
        <div className='absolute top-0 right-0 flex bg-white/40 text-green-500 justify-center items-center bg-gray w-6 h-6 rounded-full m-2'>+</div>
      </figure>
      <p className='flex justify-between m-2'>
        <span className='text-sm font-light text-black'>{data.name}</span>
        <span className='text-lg font-medium text-green-500'>$ {data.price}</span>
      </p>
    </div>
  )
}

export default CardProduct
