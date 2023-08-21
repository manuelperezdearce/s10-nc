import React, { useState } from 'react'
import './header.css'
import { IoSearch, IoPersonCircleOutline, IoCartOutline } from 'react-icons/io5'

const Header = () => {
  const [isOpem, setIdOpen] = useState(false)

  const handleToggle = () => {
    setIdOpen(!isOpem)
  }

  return (
    <header className='headerContainer fixed top-0 lg:left-0 w-[100%]  h-[80px] lg:h-auto  text-blackCustom flex justify-center items-center font-bold text-xl uppercase text-center pt-[1rem] lg:p-[1rem]'>
      <div className={`navMenuContainer absolute w-[300px] h-[400px] rounded-sm top-[80px]  ${isOpem ? 'left-0' : '-left-[300px]'} transition-all ease-in  duration-200 lg:relative lg:w-[100%] lg:h-[80px] bg-whiteCustom1 lg:top-0 lg:left-0 lg:transition-none
      flex flex-col justify-center items-center gap-3 p-5
      lg:flex lg:flex-row lg:flex-nowrap lg:justify-between lg:items-center lg:content-center lg:gap-[5px]`}
      >
        <button className='logoContainer font-titulo text-[40px] text-greenCustom'>
          GreenEats
        </button>
        <nav className='navMenu flex flex-row justify-start items-center content-center gap-5 text-[24px]'>
          <button className='capitalize font-titulo font-normal '>home</button>
          <button>restaurants</button>
          <button>menus</button>
          <button>contact</button>
        </nav>
        <section className='utils'>
          <button><IoSearch /></button>
          <button><IoPersonCircleOutline /></button>
          <button><IoCartOutline /></button>
        </section>
      </div>
      <div className={`absolute top-0 left-0 toggle w-[60px] h-[80px] bg-purple-300 flex flex-col justify-center items-center gap-1 ${isOpem ? 'active' : ''} lg:hidden`} onClick={handleToggle}>
        <span className={`w-[30px] h-[4px] bg-red-500 rounded-sm transition-all duration-300 ease-linear ${isOpem ? 'transform rotate-45 translate-x-0 translate-y-[8px]' : ''}`} />
        <span className={`w-[30px] h-[4px] bg-red-500 rounded-sm transition-all duration-300 ease-linear ${isOpem ? '-translate-x-7 opacity-0' : ''}`} />
        <span className={`w-[30px] h-[4px] bg-red-500 rounded-sm transition-all duration-300 ease-linear ${isOpem ? 'transform -rotate-45 translate-x-0 -translate-y-[8px]' : ''}`} />
      </div>
    </header>
  )
}

export default Header
