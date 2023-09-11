import React, { useState } from 'react'
import SearchButton from '../searchButton/SearchButton'
import { Link } from 'react-router-dom'
import { IoAddSharp, IoCartOutline, IoLogInOutline, IoPersonCircleOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const NavUtils = () => {
  const logged = useSelector(state => state?.auth2?.logged)
  const [activeloginMenu, setActiveLoginMenu] = useState(false)

  const handleactiveMenu = () => {
    setActiveLoginMenu(!activeloginMenu)
  }

  console.log(activeloginMenu)
  return (
    <section className='utils
    w-[170px] flex flex-col justify-center items-center
    lg:w-auto lg:flex lg:flex-row lg:flex-nowrap lg:justify-start lg:items-center lg:content-center  gap-2 '
    >
      <SearchButton />
      <a
        onClick={handleactiveMenu}
        className='relative w-[170px] h-[40px] p-3 rounded-[30px] flex flex-row flex-nowrap justify-start items-center content-center gap-2 text-[1.2rem] font-normal lg:w-[40px] lg:rounded-[50%] bg-lightBrownCustom lg:grid lg:place-content-center lg:text-[1.2rem]'
      >
        <IoPersonCircleOutline className='text-[1.6rem]' />
        <span className='font-titulo font-normal  text-[1.1rem] lg:hidden capitalize'>Perfil</span>

        <section className={`subMenuLogin absolute rounded-md w-[150px] h-[150px] bg-whiteCustom flex flex-col gap-2 justify-center items-start p-2 transition-all duration-150 ease-linear ${activeloginMenu ? 'top-[72px] right-[-20px] opacity-1 z-10' : 'top-[0px] right-[-20px] opacity-0 -z-10'}`}>
          <Link
            to='/login'
            className='flex flex-row flex-nowrap justify-start items-center content-center gap-1 text-sm font-parrafo font-normal '
          >
            <IoLogInOutline className='text-lg text-greenCustom2' />
            Ingresar
          </Link>
          <Link
            to='/register'
            className='flex flex-row flex-nowrap justify-start items-center content-center gap-1 text-sm font-parrafo font-normal '
          >
            <IoAddSharp className='text-lg text-greenCustom2' />
            Registrar
          </Link>
        </section>
      </a>
      {/* <Link
        to='/cart'
        className='w-[170px] h-[40px] p-3 rounded-[30px] flex flex-row flex-nowrap justify-start items-center content-center gap-2 text-[1.2rem] font-normal lg:w-[40px] lg:rounded-[50%] bg-lightBrownCustom lg:grid lg:place-content-center lg:text-[1.2rem]'
      >
        <IoCartOutline className='text-[1.6rem]' />
        <span className='font-titulo font-normal  text-[1.1rem] lg:hidden capitalize'>Perfil</span>
      </Link> */}

    </section>
  )
}

export default NavUtils
