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
    }, 200)
  })
})

export const getFoodsById = createAsyncThunk('foods/getFoodsById', async (id, thunkAPI) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newarr = foods.filter(food => food.id === id)
      resolve({ ...newarr[0] })
    }, 200)
  })
})

const initialState = {
  data: [],
  categoryData: [],
  productByid: {},
  productsByKeyword: [],
  loading: false,
  error: false
}

const foodsSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {
    addToproductsByKeyword: (state, action) => {
      state.productsByKeyword = []
      state.productsByKeyword = action.payload
    },
    clearProductByKeyword: (state) => {
      state.productsByKeyword = []
    }
  },
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
        const categoryId = action.meta.arg // trae el id de la categoria que le pasemos
        const existeIndex = state.categoryData.findIndex(category => category.categoryId === categoryId)

        if (existeIndex === -1) {
          const metaData = { categoryId, data: action.payload }
          state.categoryData.push(metaData)
        }
        state.loading = false
        state.error = false
      })
      .addCase(getFoodsByCategoryId.rejected, state => {
        state.loading = false
        state.error = true
      })
      .addCase(getFoodsById.pending, state => {
        state.loading = true
        state.error = false
      })
      .addCase(getFoodsById.fulfilled, (state, action) => {
        state.productByid = action.payload
        state.loading = false
        state.error = false
      })
      .addCase(getFoodsById.rejected, state => {
        state.loading = false
        state.error = true
      })
  }
})

export const { addToproductsByKeyword, clearProductByKeyword } = foodsSlice.actions
export default foodsSlice.reducer
