import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import jwtDecode from 'jwt-decode'
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
    // const decodedToken = jwtDecode(data.token)
    // console.log('DECODETOKEN => ', decodedToken)

    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

const initialState = {
  logged: !!(localStorage.getItem('user') && localStorage.getItem('token')),
  token: localStorage.getItem('token') || null,
  user: JSON.parse(localStorage.getItem('user')) || null,
  loading: false,
  error: null,
  msjError: null
}

const authSlice2 = createSlice({
  name: 'auth2',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      state.logged = false
      state.token = null
      state.user = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postLoginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(postLoginUser.fulfilled, (state, action) => {
        // console.log('ACTION PAYLOAD FULLFILED -> ', action.payload)
        state.loading = false
        state.logged = true
        state.error = null
        state.token = action.payload.token

        // Decodificación del Token JWT para su posterior uso
        const decodedToken = jwtDecode(action.payload.token)

        state.user = {
          ...decodedToken
        }
        localStorage.setItem('token', state.token)
        localStorage.setItem('user', JSON.stringify(state.user))
      })
      .addCase(postLoginUser.rejected, (state, action) => {
        // console.log('ACTION PAYLOAD ERROR-> ', action.payload)
        state.loading = false
        state.logged = false
        state.error = action.payload
      })
  }
})

export const { login, logout } = authSlice2.actions
export default authSlice2.reducer
