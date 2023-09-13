import React, { useState } from 'react'
import { IoChevronDownSharp, IoLogOutOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../../features/auth/authSlice2.js'
import { logOut } from '../../../features/auth/authSlice.jsx'

const CardUserLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [activeMenu, setActiveMenu] = useState(false)

  // const user = useSelector((state) => state?.auth2?.user)
  const { data } = useSelector((state) => state.auth)

  const activeMenuHandler = () => {
    setActiveMenu(!activeMenu)
  }

  const handleLogout = () => {
    dispatch(logout())
    dispatch(logOut())
    navigate('/')
  }

  return (
    <>
      <section className='relative cardUSerLogin w-[200px] h-[70px]'>
        <div className={`w-[200px] flex flex-col justify-start items-start rounded-md  transition-all duration-150 ease-linear overflow-hidden ${activeMenu ? 'h-[180px] bg-white' : 'h-[70px'} `}>

          {/* section submenu HEader */}
          <section className='w-[100%] h-[70px] flex flex-row justify-center items-center overflow-hidden border-2'>

            <section className='titlesPerfil w-[150px] h-[100%] flex flex-col justify-center items-start gap-1 p-2 overflow-hidden'>
              <h2 className='text-greenCustom2 font-titulo font-bold capitalize text-lg overflow-hidden'>{data.email}</h2>
              <h3 className='font-parrafo font-light capitalize text-sm overflow-hidden'>

                {data?.role_id === 1 ? 'Usuario' : data?.role_id === 2 ? 'Restaurante' : ''}

              </h3>
            </section>

            <section className='w-[50px] h-[100%] grid place-content-center'>
              <div
                onClick={activeMenuHandler}
                className='border-2 border-greenCustom2 p-[1px] rounded-full grid place-content-center'
              >
                <IoChevronDownSharp className='text-greenCustom2 text-[1.1rem]' />
              </div>
            </section>

          </section>

          {/* section submenu main */}
          {
            activeMenu &&
              <div className='submenuLogin2 pt-3 w-[100%] h-[40px] flex-col justify-center items-center border-t-2'>
                <Link
                  to='/profile'
                  className='w-[100%]  cursor-pointer flex flex-row flex-nowrap justify-start items-center content-center gap-1 text-sm capitalize font-parrafo font-normal px-5 py-1 rounded-md hover:bg-lightBrownCustom transition-all duration-150 ease-in'
                >
                  <IoLogOutOutline className='text-lg text-greenCustom2' />
                  Mi Perfil
                </Link>
                <button
                  onClick={handleLogout}
                  className='w-[100%]  cursor-pointer flex flex-row flex-nowrap justify-start items-center content-center gap-1 text-sm capitalize font-parrafo font-normal px-5 py-1 rounded-md hover:bg-lightBrownCustom transition-all duration-150 ease-in'
                >
                  <IoLogOutOutline className='text-lg text-greenCustom2' />
                  Cerrar sesión
                </button>
              </div>
          }

        </div>
      </section>
    </>
  )
}

export default CardUserLogin
