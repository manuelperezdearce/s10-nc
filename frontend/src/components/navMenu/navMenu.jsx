import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NavMenu = () => {
  const { activeIndex } = useSelector(state => state?.nav)
  return (
    <>
      <nav className='navMenu w-[170px] px-1 lg:px-auto lg:w-auto flex flex-col justify-center items-start gap-3 lg:flex lg:flex-row lg:justify-start lg:items-center lg:content-center lg:gap-5 text-[1.2rem]'>
        <Link
          to='/home'
          className='capitalize font-titulo font-normal flex flex-col justify-start items-start content-start gap-2 relative'
        >
          home
          <span className={`h-[5px] rounded-[30px]  bg-greenCustom absolute -bottom-1 transition-all duration-200 ease-in ${activeIndex === 'home' ? 'w-[100%]' : 'w-0'}`} />
        </Link>
        <Link to='/restaurant' className='capitalize font-titulo font-normal flex flex-col justify-start items-start content-start gap-2 relative'>
          Restaurantes
          <span className={`h-[5px] rounded-[30px]  bg-greenCustom  absolute -bottom-1 transition-all duration-200 ease-in ${activeIndex === 'restaurant' ? 'w-[100%]' : 'w-0'}`} />
        </Link>
        <Link to='/menu' className='capitalize font-titulo font-normal flex flex-col justify-start items-start content-start gap-2 relative'>
          Menus
          <span className={`h-[5px] rounded-[30px]  bg-greenCustom absolute -bottom-1 transition-all duration-200 ease-in ${activeIndex === 'menu' ? 'w-[100%]' : 'w-0'}`} />
        </Link>
        <Link to='/category' className='capitalize font-titulo font-normal flex flex-col justify-start items-start content-start gap-2 relative'>
          Categorias
          <span className={`h-[5px] rounded-[30px]  bg-greenCustom absolute -bottom-1 transition-all duration-200 ease-in ${activeIndex === 'category' ? 'w-[100%]' : 'w-0'}`} />
        </Link>
        <Link to='/contact' className='capitalize font-titulo font-normal flex flex-col justify-start items-start content-start gap-2 relative'>
          Contacto
          <span className={`h-[5px] rounded-[30px]  bg-greenCustom  absolute -bottom-1 transition-all duration-200 ease-in ${activeIndex === 'contacto' ? 'w-[100%]' : 'w-0'}`} />
        </Link>

      </nav>
    </>
  )
}

export default NavMenu
