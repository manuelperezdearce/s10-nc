import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  car: [],
  total: 0,
  loading: false,
  error: null
}
const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    addItemToCar: (state, action) => {
      const item = action.payload
      const index = state.car.findIndex((p) => p.id === item.id)

      // controlar total_price

      if (index !== -1) {
        state.car[index].total_quantity += 1
      } else {
        state.car.push({ ...item, total_quantity: 1 })
      }
      state.total += 1
    },
    removeItemFromCar: (state, action) => {
      const item = action.payload
      const index = state.car.findIndex((p) => p.id === item.id)

      if (index !== -1) {
        state.car[index].total_quantity -= 1
        state.total -= 1
      }
    },
    clearCar: (state) => {
      state.car = []
      state.total = 0
    }
  }
})
