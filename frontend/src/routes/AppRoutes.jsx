import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Main from '../layout/Main/Main'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
