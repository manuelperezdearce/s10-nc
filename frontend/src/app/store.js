import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import productReducer from '../features/product/productSlice'
import navReducer from '../features/nav/navSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    nav: navReducer
  }
})
