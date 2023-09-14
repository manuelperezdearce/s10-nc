import { createSlice } from '@reduxjs/toolkit'

const localStorage = window.localStorage

export const saveLikeProductTolocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('productsLikes', serializedState)
  } catch (error) {
    console.log(error)
  }
}

const loadLikeProductFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('productsLikes')
    if (serializedState === null) {
      return undefined // Si no hay datos en el LocalStorage, devuelve undefined
    }
    return JSON.parse(serializedState)
  } catch (error) {
    return undefined // Si ocurre un error, devuelve undefined
  }
}

const initialState = loadLikeProductFromLocalStorage() || {
  productLikes: [],
  loading: false,
  error: null
}

const productLikeSlice = createSlice({
  name: 'productsLikes',
  initialState,
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
      saveLikeProductTolocalStorage(state)
    },
    clearProductLikes: (state) => {
      state.productLikes = []
      state.loading = false
      state.error = null
      saveLikeProductTolocalStorage(state)
    }
  }
})

export const { addProductLike, clearProductLikes } = productLikeSlice.actions
export default productLikeSlice.reducer
