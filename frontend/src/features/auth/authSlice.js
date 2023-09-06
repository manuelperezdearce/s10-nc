import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  token: null, // si hay token user login
  isAdmin: false,
  isRestaurant: false,
  isNormy: false
}

export const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {}
})

export default authSlice.reducer
