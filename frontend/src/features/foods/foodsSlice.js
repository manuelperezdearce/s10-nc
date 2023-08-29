import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { foods } from '../../constants/dbPrueba'

export const getFoods = createAsyncThunk('foods/getFoods', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(foods)
    }, 2000)
  })
})

export const getFoodsByCategoryId = createAsyncThunk('foods/getFoodsByCategoryId', async (categoryId, thunkAPI) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(foods.filter(food => food.id_category === categoryId))
    }, 2000)
  })
})

const foodsSlice = createSlice({
  name: 'foods',
  initialState: {
    data: [],
    categoryData: [],
    loading: false,
    error: false
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFoods.pending, state => {
        state.loading = true
        state.error = false
      })
      .addCase(getFoods.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
        state.error = false
      })
      .addCase(getFoods.rejected, state => {
        state.loading = false
        state.error = true
      })
      .addCase(getFoodsByCategoryId.pending, state => {
        state.loading = true
        state.error = false
      })
      .addCase(getFoodsByCategoryId.fulfilled, (state, action) => {
        const categoryId = action.meta.arg
        const metaData = { categoryId, data: action.payload }
        state.categoryData.push(metaData)
        state.loading = false
        state.error = false
      })
      .addCase(getFoodsByCategoryId.rejected, state => {
        state.loading = false
        state.error = true
      })
  }
})

export default foodsSlice.reducer
