import { useSelector } from 'react-redux'
import NavMenu from '../navMenu/navMenu'
import NavUtils from '../navUtils/NavUtils'
import NavLogo from '../navLogo/NavLogo'

const NavBar = () => {
  const { isOpen } = useSelector(state => state?.nav)
  // const { } = useSelector(state => state?.logged)

  return (
    <div
      className={`navMenuContainer absolute w-[100%] h-[100vh] rounded-[4px] top-[0]  ${isOpen ? 'left-0' : '-left-[100%]'} transition-all ease-in duration-200 lg:relative lg:w-[100%] lg:h-[100px] bg-white lg:top-0 lg:left-0 lg:transition-none flex flex-col justify-center items-center gap-8 p-5 lg:flex lg:flex-row lg:flex-nowrap lg:justify-between lg:items-center lg:content-center lg:gap-[5px]`} style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
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
