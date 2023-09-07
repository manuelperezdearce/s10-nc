import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// permite obtener las coordenadas de una direccion
export const getCoordenadasRestaurant = createAsyncThunk(
  'map/getCoordenadasRestaurant', async (direccion, thunkAPI) => {
    try {
      const encodedDireccion = encodeURIComponent(direccion)
      const url = `https://nominatim.openstreetmap.org/search?q=${encodedDireccion}&format=json`

      const response = await fetch(url)
      const data = await response.json()

      // verificamos que trae
      // console.log('data ubicacion -->', data)

      if (data.length > 0) {
        const lat = data[0].lat
        const lng = data[0].lon
        return { lat, lng }
      } else {
        throw new Error('No se encontrón resultados.')
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  })

// permite obtener las cordenadas actuales del usuario
export const getCoordenadasUser = createAsyncThunk(
  'map/getCoordenadasUser', async (_, thunkAPI) => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
      const lat = position.coords.latitude
      const lng = position.coords.longitude
      return { lat, lng }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
  cordenadas: null,
  cordenadasRestaurant: null,
  cordenadasUser: null,
  loading: false,
  error: null
}

const mapSlice = createSlice({
  name: 'map',
  initialState,

  reducers: {
    setCordenadas: (state, action) => {
      state.cordenadas = action.payload
    },
    resetCordenadasRestaurant: (state) => {
      state.cordenadasRestaurant = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getCoordenadasRestaurant.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getCoordenadasRestaurant.fulfilled, (state, action) => {
        state.loading = false
        state.cordenadasRestaurant = action.payload
      })
      .addCase(getCoordenadasRestaurant.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(getCoordenadasUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getCoordenadasUser.fulfilled, (state, action) => {
        state.loading = false
        state.cordenadasUser = action.payload
      })
      .addCase(getCoordenadasUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export const { setCordenadas, resetCordenadasRestaurant } = mapSlice.actions
export default mapSlice.reducer
