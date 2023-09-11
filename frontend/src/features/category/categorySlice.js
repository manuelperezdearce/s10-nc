import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  categories: [],
  error: false
}

const getCategories = createAsyncThunk('categories/getCategories', async () => {
  try {
    const res = await axios.get('https://green-eats.onrender.com/categories')
    return res.data
  } catch (err) {
    console.error('Error in getCategories', err)
    throw err
  }
})

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false
        state.categories = action.payload
        state.error = false
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false
        state.categories = []
        state.error = true
      })
  }
})

export { getCategories }
export default categoriesSlice.reducer
