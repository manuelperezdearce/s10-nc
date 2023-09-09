function ProductOrder () {
  return (
    <div className='w-full h-2/6 flex mt-36 justify-around  items-center '>
      <div className='flex w-1/6 h-3/5'>
        <figure>
          <img className='w-full h-full object-cover rounded-lg' src='https://cdnx.jumpseller.com/espesales/image/11962247/foto.png.png?1601576687' alt='plato' />
        </figure>
      </div>
      <div className='flex flex-col w-2/5 h-3/4  items-center justify-center'>
        <div className='flex items-start w-full'><p className='text-black font-semibold'>Realm Bone</p></div>
        <div className='flex justify-between w-full'>
          <p className='text-black'>Brown</p>
          <p className='text-black'>XL</p>
          <p className='text-black'>1X36.00</p>
        </div>
      </div>
      <div className='h-3/4 w-1/6 flex  justify-center items-center'>
        <p className='text-black font-bold'>$36.00</p>
      </div>
    </div>
  )
}

export default ProductOrder
