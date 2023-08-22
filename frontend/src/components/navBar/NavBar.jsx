import { Link } from 'react-router-dom'
import SearchButton from '../searchButton/SearchButton'
import { IoCartOutline, IoPersonCircleOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const { isOpen } = useSelector(state => state?.nav)

  return (
    <div
      className={`navMenuContainer absolute w-[300px] h-[500px] rounded-[4px] top-[0]  ${isOpen ? 'left-0' : '-left-[320px]'} transition-all ease-in  duration-200 lg:relative lg:w-[100%] lg:h-[80px] bg-whiteCustom1 lg:top-0 lg:left-0 lg:transition-none
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
        >
          home
        </Link>
        <Link to='/restaurant' className='capitalize font-titulo font-normal '>
          Restaurantes
        </Link>
        <Link to='/menus' className='capitalize font-titulo font-normal '>
          Menus
        </Link>
        <Link to='/contact' className='capitalize font-titulo font-normal '>
          Contacto
        </Link>
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

  )
}

export default NavBar
