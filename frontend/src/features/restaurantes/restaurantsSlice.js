import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { restaurants } from '../../constants/dbPrueba'

export const getRestaurants = createAsyncThunk('restaurants/getRestaurants', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(restaurants)
    }, 2000)
  })
})

export const getRestaurantById = createAsyncThunk('restaurants/getRestaurantById', async (id, thunkAPI) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newarr = restaurants.filter(restaurant => restaurant.id === id)
      resolve({ ...newarr[0] })
    }, 2000)
  })
})

const initialState = {
  data: [],
  restaurantById: {},
  loading: false,
  error: null
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
  }
})

export default restaurantsSlice.reducer
