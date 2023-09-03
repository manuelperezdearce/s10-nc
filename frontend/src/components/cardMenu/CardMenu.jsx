import React from 'react'
import { IoHeartOutline, IoCartOutline, IoSettingsOutline } from 'react-icons/io5'
import './cardMenu.css'

const CardMenu = ({ object }) => {
  // console.log(object)
  return (
    <div className='whiteCustom cursor-pointer w-[250px] h-[300px] rounded-md overflow-hidden' style={{ boxShadow: '4px 4px 3px #c4c4c4,-3px -3px 3px #efffe8' }}>
      <figure className='relative w-[100%] h-3/4 overflow-hidden box-border rounded-[4px]'>
        <span className='absolute bottom-1 left-1 font-parrafo font-[400] text-marronCustom text-xs bg-white bg-opacity-40 shadow-md backdrop-blur-sm backdrop-filter border rounded-[4px] py-1 px-2'>Restaurant #{object?.id_restaurant}</span>
        <img className='w-[100%] h-[100%] object-cover p-0' src={`${object?.linkImage}`} alt={`${object?.name}`} />
        <section className='ContentButtonCardMenu absolute top-2 right-1 w-9 h-auto flex flex-col justify-center items-center content-center gap-2'>
          <div className='buttonCardMenu  flex w-8 h-8 text-[1.4rem] text-green-500 justify-center items-center rounded-full transition-all duration-150 ease-linear'>
            <IoCartOutline />
          </div>
          <div className='buttonCardMenu flex w-8 h-8 text-[1.4rem] text-green-500 justify-center items-center rounded-full transition-all duration-150 ease-linear'>
            <IoHeartOutline />
          </div>
          <div className='buttonCardMenu flex w-8 h-8 text-[1.4rem] text-green-500 justify-center items-center  rounded-full transition-all duration-150 ease-linear'>
            <IoSettingsOutline />
          </div>
        </section>
      </figure>
      <section className=' w-[100%] h-1/4 py-2 px-2'>
        <p className='flex flex-col justify-start items-start  gap-2'>
          <span className='text-sm font-light text-black'>{object?.name}</span>
          <span className='text-lg font-medium text-green-500'>{object?.price}</span>
        </p>
      </section>
    </div>
  )
}

export default CardMenu