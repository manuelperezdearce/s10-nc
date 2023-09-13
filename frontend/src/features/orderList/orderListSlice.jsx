import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const OrderListSlice = createSlice({
  name: 'OrderListSlice',
  initialState,
  reducers: {
    getOrderList: (state, action) => {
      console.log('hola soy redux')
    }
  }

})

export const { getOrderList } = OrderListSlice.actions

export default OrderListSlice.reducer
