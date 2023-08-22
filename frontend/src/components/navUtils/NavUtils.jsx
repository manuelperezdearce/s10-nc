import React from 'react'
import SearchButton from '../searchButton/SearchButton'
import { Link } from 'react-router-dom'
import { IoCartOutline, IoPersonCircleOutline } from 'react-icons/io5'

const NavUtils = () => {
  return (
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
  )
}

export default NavUtils
