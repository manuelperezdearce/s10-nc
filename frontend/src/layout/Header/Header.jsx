import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './header.css'
import { IoPersonCircleOutline, IoCartOutline } from 'react-icons/io5'
import SearchButton from '../../components/searchButton/SearchButton'

const Header = () => {
  const [isOpem, setIdOpen] = useState(false)

  const handleToggle = () => {
    setIdOpen(!isOpem)
  }

  return (
    <header className='headerContainer fixed top-0 lg:left-0 w-[100%]  h-[80px] lg:h-auto  text-blackCustom flex justify-center items-center font-bold text-xl uppercase text-center pt-[1rem] lg:p-[1rem]'>
      <div
        className={`navMenuContainer absolute w-[300px] h-[500px] rounded-[4px] top-[0]  ${isOpem ? 'left-0' : '-left-[320px]'} transition-all ease-in  duration-200 lg:relative lg:w-[100%] lg:h-[80px] bg-whiteCustom1 lg:top-0 lg:left-0 lg:transition-none
        flex flex-col justify-center items-center gap-3 p-5
        lg:flex lg:flex-row lg:flex-nowrap lg:justify-between lg:items-center lg:content-center lg:gap-[5px]`} style={{ boxShadow: '6px 6px 7px #6ca104, -6px -6px 7px #aafb06' }}
      >
        {/* logotipo */}
        <Link to='/' className='logoContainer font-titulo text-[40px] text-greenCustom grid place-content-center'>
          <span className='capitalize font-titulo'>
            GreenEats
          </span>
        </Link>

        {/* menu de navegacion */}
        <nav className='navMenu
        flex flex-col justify-center items-start gap-3 p-5
        lg:flex lg:flex-row lg:justify-start lg:items-center lg:content-center lg:gap-5 text-[1.2rem]'
        >
          <Link
            to='/home'
            className='normalNavLink capitalize font-titulo font-normal '
          >home
          </Link>
          <Link to='/restaurant' className='capitalize font-titulo font-normal '>Restaurantes</Link>
          <Link to='/menus' className='capitalize font-titulo font-normal '>Menus</Link>
          <Link to='/contact' className='capitalize font-titulo font-normal '>Contacto</Link>
        </nav>

        {/* utilidades */}
        <section className='utils
        w-[170px] flex flex-col justify-center items-center
        lg:w-auto lg:flex lg:flex-row lg:flex-nowrap lg:justify-start lg:items-center lg:content-center overflow-hidden gap-2'
        >
          <SearchButton />
          <Link
            to='/perfil'
            className='w-[170px] h-[40px] p-3 rounded-[30px] flex flex-row flex-nowrap justify-start items-center content-center gap-2 text-[1.2rem] font-normal
            lg:w-[40px] lg:rounded-[50%] bg-lightBrownCustom lg:grid lg:place-content-center lg:text-[1.2rem]'
          >
            <IoPersonCircleOutline className='text-[1.6rem]' />
            <span className='font-titulo font-normal  text-[1.1rem] lg:hidden capitalize'>Perfil</span>
          </Link>
          <button className='w-[170px] h-[40px] p-3 rounded-[30px] flex flex-row flex-nowrap justify-start items-center content-center gap-2 text-[1.2rem] font-normal
            lg:w-[40px] lg:rounded-[50%] bg-lightBrownCustom lg:grid lg:place-content-center lg:text-[1.2rem]'
          >
            <IoCartOutline className='text-[1.6rem]' />
            <span className='font-titulo font-normal  text-[1.1rem] lg:hidden capitalize'>Perfil</span>
          </button>
        </section>
      </div>
      <div className={`absolute top-0 left-0 toggle w-[50px] h-[50px] rounded-[4px] bg-whiteCustom1  flex flex-col justify-center items-center gap-1 ${isOpem ? 'active' : ''} lg:hidden`} onClick={handleToggle}>
        <span className={`w-[30px] h-[4px] bg-lightBrownCustom rounded-sm transition-all duration-300 ease-linear ${isOpem ? 'transform rotate-45 translate-x-0 translate-y-[8px]' : ''}`} />
        <span className={`w-[30px] h-[4px] bg-lightBrownCustom rounded-sm transition-all duration-300 ease-linear ${isOpem ? '-translate-x-7 opacity-0' : ''}`} />
        <span className={`w-[30px] h-[4px] bg-lightBrownCustom rounded-sm transition-all duration-300 ease-linear ${isOpem ? 'transform -rotate-45 translate-x-0 -translate-y-[8px]' : ''}`} />
      </div>
    </header>
  )
}

export default Header
