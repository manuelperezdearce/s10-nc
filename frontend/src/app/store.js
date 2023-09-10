import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import authReducer2 from '../features/auth/authSlice2'
import productReducer from '../features/product/productSlice'
import navReducer from '../features/nav/navSlice'
import foodsReducer from '../features/foods/foodsSlice'
import counterReducer from '../features/counter/counterSlice'
import restaurantsReducer from '../features/restaurantes/restaurantsSlice'
import mapReducer from '../features/map/mapSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    auth2: authReducer2,
    product: productReducer,
    nav: navReducer,
    foods: foodsReducer,
    counter: counterReducer,
    restaurants: restaurantsReducer,
    map: mapReducer
  }
})
