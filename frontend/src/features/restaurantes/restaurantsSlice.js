import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const API_URL = 'https://green-eats.onrender.com/restaurant'
const localStorage = window.localStorag

export const getRestaurants = createAsyncThunk('restaurants/getRestaurants', async (_, thunkAPI) => {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      const error = await response.text()
      return thunkAPI.rejectWithValue(error)
    }
    const data = await response.json()
    return data
  } catch {
    return thunkAPI.rejectWithValue('Error al obtener restaurantes')
  }
})

export const getRestaurantById = createAsyncThunk('restaurants/getRestaurantById', async (id, thunkAPI) => {
  try {
    const response = await fetch(`${API_URL}/${id}`)
    if (!response.ok) {
      const error = await response.text()
      return thunkAPI.rejectWithValue(error)
    }
    const data = await response.json()
    return data
  } catch {
    return thunkAPI.rejectWithValue('Error al obtener restaurantes')
  }
})

export const getRestaurantByUserId = createAsyncThunk('restaurants/getRestaurantByUserId', async (id, thunkAPI) => {
  try {
    const response = await fetch(`${API_URL}/user/${id}`)
    if (!response.ok) {
      const error = await response.text()
      return thunkAPI.rejectWithValue(error)
    }
    const data = await response.json()
    return data
  } catch {
    return thunkAPI.rejectWithValue('Error al obtener restaurantes de ese usuario')
  }
})

export const addRestaurant = createAsyncThunk('restaurants/addRestaurant', async (restaurant, thunkAPI) => {
  try {
    const response = await fetch(`${API_URL}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(restaurant)
    })
    if (!response.ok) {
      const error = await response.text()
      return thunkAPI.rejectWithValue(error)
    }
    const data = await response.json()
    return data
  } catch {
    return thunkAPI.rejectWithValue('Error al agregar restaurant')
  }
})

export const updateRestaurant = createAsyncThunk('restaurants/updateRestaurant', async (idRestaurant, newData, thunkAPI) => {
  try {
    const response = await fetch(`${API_URL}/${idRestaurant}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(newData)
    })
    if (!response.ok) {
      const error = await response.text()
      return thunkAPI.rejectWithValue(error)
    }
    const data = await response.json()
    return data
  } catch {
    return thunkAPI.rejectWithValue('Error al actualizar restaurant')
  }
})

const initialState = {
  data: [],
  restaurantById: {},
  restaurantByUserId: {},
  loading: false,
  error: null,
  update: false
}

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(getRestaurants.pending, state => {
        state.loading = true
        state.error = false
      })
      .addCase(getRestaurants.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
        state.error = false
      })
      .addCase(getRestaurants.rejected, state => {
        state.loading = false
        state.error = true
      })
      .addCase(getRestaurantById.pending, state => {
        state.loading = true
        state.error = false
      })
      .addCase(getRestaurantById.fulfilled, (state, action) => {
        state.restaurantById = action.payload
        state.loading = false
        state.error = false
      })
      .addCase(getRestaurantById.rejected, state => {
        state.loading = false
        state.error = true
      })
      .addCase(getRestaurantByUserId.pending, state => {
        state.loading = true
        state.error = false
      })
      .addCase(getRestaurantByUserId.fulfilled, (state, action) => {
        state.restaurantByUserId = action.payload
        state.loading = false
        state.error = false
      })
      .addCase(getRestaurantByUserId.rejected, state => {
        state.loading = false
        state.error = true
      })
      .addCase(addRestaurant.pending, state => {
        state.loading = true
        state.error = false
      })
      .addCase(addRestaurant.fulfilled, (state, action) => {
        state.data.push(action.payload)
        state.loading = false
        state.error = false
      })
      .addCase(addRestaurant.rejected, state => {
        state.loading = false
        state.error = true
      })
      .addCase(updateRestaurant.pending, state => {
        state.loading = true
        state.error = false
      })
      .addCase(updateRestaurant.fulfilled, (state, action) => {
        state.update = true
        state.loading = false
        state.error = false

        // controlamos, remplasamos el restaurante que tenia el id que le pasamos por el nuevo restaurante que le pasamos
        const index = state.data.findIndex(restaurant => restaurant.restaurantId === action.meta.arg)
        state.data[index] = action.payload
      })
  }
})

export default restaurantsSlice.reducer
