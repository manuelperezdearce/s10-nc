export default function Categories ({ imgUrl, id, category }) {
  return (
    <div role='button'>
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
