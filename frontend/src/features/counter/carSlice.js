import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  customer_id: null,
  total_price: 0,
  total_quantity: 0,
  car: [],
  loading: false,
  error: null
}

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    addItemToCar: (state, action) => {
      const item = action.payload
      //  si existe en car, sumar total_price y total_quantity
      const index = state.car.findIndex((p) => p.meal_id === item.meal_id)

      if (index !== -1) {
        state.car[index].total_quantity += 1
      } else {
        state.car.push({ ...item, quantity: 1 })
      }

      state.total_price += item.price
      state.total_quantity += 1
    },

    removeItemFromCar: (state, action) => {
      const itemRemove = action.payload
      // si existe en car, restar total_price y total_quantity
      const index = state.car.findIndex((item) => item.id === itemRemove.id)

      if (index !== -1) {
        if (index.quantity > 1) {
          state.car[index].quantity -= 1
        } else {
          state.car.splice(index, 1)
        }

        state.total_price -= itemRemove.price
        state.total_quantity -= 1
      }
    },
    clearCar: (state) => {
      state.car = []
      state.total = 0
      state.total_quantity = 0
      state.customer_id = null
    }
  }
})

export const { addItemToCar, removeItemFromCar, clearCar } = carSlice.actions
export default carSlice.reducer
