import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const API_URL = 'https://green-eats.onrender.com/order'
const localStorage = window.localStorage

export const postOrder = createAsyncThunk('order/postOrder', async (orderData, thunkAPI) => {
  try {
    const response = await fetch(`${API_URL}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(orderData)
    })
    if (!response.ok) {
      return thunkAPI.rejectWithValue('Error al agregar orden')
    }
    const data = await response.json()
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const getOrder = createAsyncThunk('order/getOrder', async (id, thunkAPI) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!response.ok) {
      return thunkAPI.rejectWithValue('Error al obtener orden')
    }
    const data = await response.json()
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const getOrderById = createAsyncThunk('order/getOrderById', async (id, thunkAPI) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!response.ok) {
      return thunkAPI.rejectWithValue('Error al obtener orden')
    }
    const data = await response.json()
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const getOrderByCustomerId = createAsyncThunk('order/getOrderByCustomerId', async (id, thunkAPI) => {
  try {
    const response = await fetch(`${API_URL}/customer/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!response.ok) {
      return thunkAPI.rejectWithValue('Error al obtener orden')
    }
    const data = await response.json()
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

const order = createSlice({
  name: 'order',
  initialState: {
    orders: [],
    ordenCargada: [],
    loading: false,
    error: false
  },
  reducers: {
    clearOrder: (state) => {
      state.ordenCargada = []
      state.orders = []
      state.loading = false
      state.error = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postOrder.pending, (state, action) => {
        state.loading = true
        state.error = false
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        state.loading = false
        state.error = false
        state.ordenCargada = action.payload
      })
      .addCase(postOrder.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(getOrder.pending, (state, action) => {
        state.loading = true
        state.error = false
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.loading = false
        state.error = false
        state.orders = action.payload
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(getOrderById.pending, (state, action) => {
        state.loading = true
        state.error = false
      })
  }
})

export const { clearOrder } = order.actions
export default order.reducer
