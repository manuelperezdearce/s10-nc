import React, { useState } from 'react'
import { IoChevronDownSharp, IoLogOutOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../features/auth/authSlice2'
import { useNavigate } from 'react-router-dom'

const CardUserLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [activeMenu, setActiveMenu] = useState(false)

  const user = useSelector((state) => state.auth2?.user)

  const activeMenuHandler = () => {
    setActiveMenu(!activeMenu)
  }

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout())
    navigate('/')
  }

  return (
    <>
      <section className='relative cardUSerLogin w-[200px] h-[70px]'>
        <div className={` w-[100%] flex flex-col justify-start items-start rounded-md  transition-all duration-150 ease-linear overflow-hidden ${activeMenu ? 'h-[180px] bg-white' : 'h-[70px'} `}>

          {/* section submenu HEader */}
          <section className='w-[100%] h-[80px] flex flex-row justify-center items-center py-2 overflow-hidden'>
            <section className='titlesPerfil w-2/5 h-[100%] flex flex-col justify-center items-end gap-1 p-1'>
              <h2 className='text-greenCustom2 font-titulo font-bold capitalize text-lg overflow-hidden'>{user.email}</h2>
              <h3 className='font-parrafo font-light capitalize text-sm overflow-hidden'>tipo</h3>
            </section>

            <section className='imgUser w-2/5 h-[100%] grid place-content-center'>
              <img
                className='w-[60px] h-[60px] object-cover rounded-[50%] border-[2px] border-marronCustom'
                src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1694408120/fitnessMatket/avatar_b09ocz.jpg' alt='imgLogin pruebas'
              />
            </section>
            <section className='w-1/5 h-[100%] grid place-content-center'>
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
                <button
                  onClick={handleLogout}
                  className='w-[100%]  cursor-pointer flex flex-row flex-nowrap justify-start items-center content-center gap-1 text-sm capitalize font-parrafo font-normal px-5 py-1 rounded-md hover:bg-lightBrownCustom transition-all duration-150 ease-in'
                >
                  <IoLogOutOutline className='text-lg text-greenCustom2' />
                  Logout
                </button>
              </div>
          }

        </div>
      </section>
    </>
  )
}

export default CardUserLogin
