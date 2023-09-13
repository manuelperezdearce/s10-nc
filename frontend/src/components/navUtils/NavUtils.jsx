import React, { useState } from 'react'
import SearchButton from '../searchButton/SearchButton'
import { useNavigate } from 'react-router-dom'
import { IoAddSharp, IoLogInOutline, IoPersonCircleOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import CardUserLogin from './cardUserLogin/CardUserLogin'

const NavUtils = () => {
  // const logged = useSelector(state => state?.auth2?.logged)
  const { logged, data } = useSelector(state => state?.auth)

  const [activeloginMenu, setActiveLoginMenu] = useState(false)

  const navigate = useNavigate()

  const handleactiveMenu = (event) => {
    event.preventDefault()
    event.stopPropagation()

    setActiveLoginMenu(!activeloginMenu)
  }

  return (
    <section className='utils
    w-[170px] flex flex-col justify-center items-center
    lg:w-auto lg:flex lg:flex-row lg:flex-nowrap lg:justify-start lg:items-center lg:content-center  gap-4'
    >
      <SearchButton />

      {
      logged
        ? (
          <CardUserLogin />
          )
        : (
          <a
            onClick={handleactiveMenu}
            className='relative w-[170px] h-[40px] p-3 rounded-md flex flex-row flex-nowrap justify-start items-center content-center gap-2 text-[1.2rem] font-normal lg:w-[40px] lg:rounded-md bg-greenCustom lg:grid lg:place-content-center lg:text-[1.2rem] cursor-pointer text-whiteCustom'
          >
            <IoPersonCircleOutline className='text-[1.6rem]' />
            <span className='font-titulo font-normal  text-[1.1rem] lg:hidden capitalize'>Perfil</span>

            <section className={`subMenuLogin absolute rounded-md w-[100%] lg:w-[150px] lg:h-[150px] bg-marronCustom text-whiteCustom flex flex-col gap-2 justify-center items-start p-1 transition-all duration-150 ease-linear ${activeloginMenu ? ' right-0 top-[46px] lg:top-[75px] lg:right-[-19px] opacity-1 z-10' : 'top-0 right-0 lg:right-[-20px] opacity-0 -z-10'}`}>
              <a
                onClick={() => { navigate('/login') }}
                className='w-[100%] flex flex-row flex-nowrap justify-start items-center content-center gap-1 text-sm capitalize font-parrafo font-normal p-1 rounded-md hover:bg-lightBrownCustom transition-all duration-150 ease-in'
              >
                <IoLogInOutline className='text-lg text-greenCustom2' />
                Ingresar
              </a>
              <a
                onClick={() => { navigate('/register') }}
                className='w-[100%] flex flex-row flex-nowrap justify-start items-center content-center gap-1 text-sm capitalize font-parrafo font-normal p-1 rounded-md hover:bg-lightBrownCustom transition-all duration-150 ease-in'
              >
                <IoAddSharp className='text-lg text-greenCustom2' />
                Registrar
              </a>
            </section>
          </a>
          )
      }

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
