import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const API_URL = 'https://green-eats.onrender.com/users'

const localStorage = window.localStorage

export const postLoginUser = createAsyncThunk('auth/postLoginUser', async (userData, thunkAPI) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    if (!response.ok) {
      const error = await response.text()
      return thunkAPI.rejectWithValue(error)
    }
    const data = await response.json()
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

const initialState = {
  logged: !!(localStorage.getItem('user') && localStorage.getItem('token')),
  token: localStorage.getItem('token') || null,
  user: localStorage.getItem('user') || null,
  loading: false,
  error: null
}

const authSlice2 = createSlice({
  name: 'auth2',
  initialState,
  reducer: {
    login: (state, action) => {
      const { token, user } = action.payload
      state.token = token
      state.user = user
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      state.logged = true
    },
    logout: (state) => {
      state.token = null
      state.user = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      state.logged = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postLoginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(postLoginUser.fulfilled, (state, action) => {
        state.loading = false
        state.logged = true
        state.token = action.payload.token
        state.user = {
          id: action.payload.user_id,
          email: action.payload.email
        }
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('user', JSON.stringify(state.user))
      })
      .addCase(postLoginUser.rejected, (state, action) => {
        state.loading = false
        state.logged = false
        state.error = action.payload
      })
  }
})

export const { login, logout } = authSlice2.actions
export default authSlice2.reducer
