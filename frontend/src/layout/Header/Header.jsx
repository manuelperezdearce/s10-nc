import React, { useState } from 'react'

const Header = () => {
  const [isOpem, setIdOpen] = useState(false)

  const handleToggle = () => {
    setIdOpen(!isOpem)
  }

  return (
    <header className='fixed top-0 -left-[400px] lg:left-0 w-screen h-[80px] bg-lightBrownCustom text-white flex justify-center items-center font-bold text-xl text-[titulo] uppercase text-center shadow-sm '>
      <div className='w-full h-[80px] bg-slate-400 top-0 left-0'>
        <nav />
      </div>
    </header>
  )
}

export default Header
