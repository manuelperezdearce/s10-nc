import { useSelector } from 'react-redux'
import NavMenu from '../navMenu/navMenu'
import NavUtils from '../navUtils/NavUtils'
import NavLogo from '../navLogo/NavLogo'

const NavBar = () => {
  const { isOpen } = useSelector(state => state?.nav)

  return (
    <div
      className={`navMenuContainer absolute w-[300px] h-[500px] rounded-[4px] top-[0]  ${isOpen ? 'left-0' : '-left-[320px]'} transition-all ease-in  duration-200 lg:relative lg:w-[100%] lg:h-[80px] bg-whiteCustom1 lg:top-0 lg:left-0 lg:transition-none flex flex-col justify-center items-center gap-3 p-5 lg:flex lg:flex-row lg:flex-nowrap lg:justify-between lg:items-center lg:content-center lg:gap-[5px]`} style={{ boxShadow: '6px 6px 7px #6ca104, -6px -6px 7px #aafb06' }}
    >
      {/* logotipo nav raiz */}
      <NavLogo />

      {/* menu navegacion */}
      <NavMenu />

      {/* utilidades search, cart, etc */}
      <NavUtils />
    </div>

  )
}

export default NavBar
