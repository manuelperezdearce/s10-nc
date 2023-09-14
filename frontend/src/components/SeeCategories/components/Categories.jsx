import { useNavigate } from 'react-router-dom'

export default function Categories ({ imgUrl, id, category }) {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(`/category/${id}`)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <div role='button' onClick={handleNavigate}>
      <div className='flex flex-col bg-slate-100 shadow-slate-300 shadow-sm hover:shadow-greyCustom hover:shadow-lg transition-shadow rounded-lg  overflow-hidden'>
        <div className=''>
          <img
            src={imgUrl}
            alt={`Category ${id} image`}
            className='w-full aspect-square object-cover'
          />
        </div>
        <h3 className='my-4 text-[1rem] md:text-[1.5rem]  font-medium'>
          {category}
        </h3>
      </div>
    </div>

  )
}
