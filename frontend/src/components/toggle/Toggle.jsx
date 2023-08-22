import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleOpen } from '../../features/nav/navSlice'

const Toggle = () => {
  const dispatch = useDispatch()
  const { isOpen } = useSelector(state => state?.nav)

  const handleToggle = () => {
    dispatch(toggleOpen())
  }

  return (
    <div className={`absolute top-0 left-0 toggle w-[50px] h-[50px] rounded-[4px] bg-whiteCustom1  flex flex-col justify-center items-center gap-1 ${isOpen ? 'active' : ''} lg:hidden`} onClick={handleToggle}>
      <span className={`w-[30px] h-[4px] bg-lightBrownCustom rounded-sm transition-all duration-300 ease-linear ${isOpen ? 'transform rotate-45 translate-x-0 translate-y-[8px]' : ''}`} />
      <span className={`w-[30px] h-[4px] bg-lightBrownCustom rounded-sm transition-all duration-300 ease-linear ${isOpen ? '-translate-x-7 opacity-0' : ''}`} />
      <span className={`w-[30px] h-[4px] bg-lightBrownCustom rounded-sm transition-all duration-300 ease-linear ${isOpen ? 'transform -rotate-45 translate-x-0 -translate-y-[8px]' : ''}`} />
    </div>
  )
}

export default Toggle
