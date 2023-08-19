import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Main from '../layout/Main/Main'

const AppRoutes = () => {
  return (
    <BrowserRoute>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRoute>
  )
}

export default AppRoutes
