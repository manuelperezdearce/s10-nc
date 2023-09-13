import { createSlice } from '@reduxjs/toolkit'

const productLikeSlice = createSlice({
  name: 'productsLikes',
  initialState: {
    productLikes: [],
    loading: false,
    error: null
  },
  reducers: {
    addProductLike: (state, action) => {
      // console.log('PAYLOAD -> ', action.payload)
      const product = action.payload
      const index = state.productLikes.findIndex((p) => p.id === product.id)
      // console.log('INDEX -> ', index)
      if (index !== -1) {
        // si ya esta lo elimina
        state.productLikes.splice(index, 1)
      } else {
        // si no esta lo añade
        state.productLikes.push(product)
      }
    }
  }
})

export const { addProductLike } = productLikeSlice.actions
export default productLikeSlice.reducer
