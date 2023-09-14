import { createSlice } from '@reduxjs/toolkit'

const localStorage = window.localStorage

export const saveCarTolocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('car', serializedState)
  } catch (error) {
    console.log(error)
  }
}

const loadCarFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('car')
    if (serializedState === null) {
      return undefined // Si no hay datos en el LocalStorage, devuelve undefined
    }
    return JSON.parse(serializedState)
  } catch (error) {
    return undefined // Si ocurre un error, devuelve undefined
  }
}
const initialState = loadCarFromLocalStorage() || {
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
      console.log('ITEM ->', item.price)
      //  si existe en car, sumar total_price y total_quantity
      const index = state.car.findIndex((p) => p.meal_id === item.meal_id)

      if (index !== -1) {
        state.car[index].total_quantity += item.quantity
      } else {
        state.car.push({ ...item, quantity: item.quantity })
      }

      state.total_price += item.price
      state.total_quantity += item.quantity
      saveCarTolocalStorage(state)
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
        saveCarTolocalStorage(state)
      }
    },
    clearCar: (state) => {
      state.car = []
      state.total = 0
      state.total_quantity = 0
      state.customer_id = null
      saveCarTolocalStorage(state)
    }
  }
})

export const { addItemToCar, removeItemFromCar, clearCar } = carSlice.actions
export default carSlice.reducer
