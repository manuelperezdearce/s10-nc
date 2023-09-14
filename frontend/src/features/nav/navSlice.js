import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  activeIndex: null,
  references: {
    homeRef: null,
    restaurantRef: null,
    menuRef: null,
    contactoRef: null,
    categoryRef: null
  }
}

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen
    },
    setActiveIndex: (state, action) => {
      state.activeIndex = action.payload
    },
    setReferences: (state, action) => {
      const { refNAme, ref } = action.payload
      state.references[refNAme] = ref
    }
  }
})

export const { setActiveIndex, setReferences, toggleOpen } = navSlice.actions
export default navSlice.reducer
