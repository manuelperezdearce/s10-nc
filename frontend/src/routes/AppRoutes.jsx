import { Route, Routes } from 'react-router-dom'
import React from 'react'
import NotFound from '../pages/notFound/NotFound'
import Home from '../pages/home/Home'
import Restaurant from '../pages/restaurant/Restaurant'
import Contact from '../pages/Contact/Contact'
import Register from '../pages/Register/Register'
import ListOfProducts from '../pages/ListOfProducts/ListOfProducts'
import RestaurantID from '../pages/restaurant/RestaurantID'
import ProfilePage from '../components/profile/profile'
import LoginUser from '../pages/Login/Login'
import Detail from '../components/Detail/Detail'
import CheckOut from '../pages/CheckOut/CheckOut'

import { useSelector } from 'react-redux'
import { MealsByCategory } from '../pages/MealsByCategory/MealsByCategory'
import Categories from '../pages/Menus/Categories'

const AppRoutes = () => {
  const { logged } = useSelector(state => state?.auth2)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      {/* <Route path='/home' element={<Home />} /> */}
      <Route path='/restaurant' element={<Restaurant />} />
      <Route path='/restaurant/:id' element={<RestaurantID />} />
      <Route path='/category' element={<Categories />} />
      <Route path='/category/:id' element={<MealsByCategory />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/register' element={<Register />} />
      {
        logged === true &&
          <Route path='/profile' element={<ProfilePage />} />
      }

      <Route path='/detalle/:id' element={<Detail />} />

      {/* <Route path='/detalle:id/:owner' element={<Detail />} /> */}

      {/* defecto page error */}
      <Route path='/menu' element={<ListOfProducts />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/login' element={<LoginUser />} />
      <Route path='/car' element={<CheckOut />} />
    </Routes>
  )
}

export default AppRoutes
