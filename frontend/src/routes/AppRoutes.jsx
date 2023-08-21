import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Main from '../layout/Main/Main'
import NotFound from '../pages/notFound/NotFound'
import Home from '../pages/home/Home'
import Restaurant from '../pages/restaurant/Restaurant'
import Menus from '../pages/Menus/Menus'
import Contact from '../pages/Contact/Contact'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/home' element={<Home />} />
      <Route path='/restaurant' element={<Restaurant />} />
      <Route path='/menus' element={<Menus />} />
      <Route path='/contact' element={<Contact />} />

      {/* defecto page error */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
