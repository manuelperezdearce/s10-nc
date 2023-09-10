import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  logged: false,
  data: {}
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginIn: (state, action) => {
      const resp = action.payload
      state.logged = true
      state.data = resp.data
    }
  }
})

export const { loginIn } = authSlice.actions
export default authSlice.reducer
