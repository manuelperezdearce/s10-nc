import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCoordenadasRestaurant, resetCordenadasRestaurant } from '../../../features/map/mapSlice'

const MapComponent = () => {
  const dispatch = useDispatch()
  const cordenada = useSelector((state) => state?.map?.cordenadasRestaurant)
  const restaurant = useSelector((state) => state.restaurants?.restaurantById)

  const redOptions = { color: 'red' }
  const direcion = restaurant?.address

  useEffect(() => {
    dispatch(resetCordenadasRestaurant())
    dispatch(getCoordenadasRestaurant(direcion))
  }, [direcion, dispatch])

  return (
    <>
      {
        cordenada
          ? (
            <MapContainer
              className='mapCustom relative w-[100%] h-[100%] bg-greenCustom rounded-md'
              // center={{ lat: -41.3290, long: -69.5472 }}
              center={{ lat: cordenada?.lat, lng: cordenada?.lng }}
              zoom={15}
              scrollWheelZoom={false}
            >
              <TileLayer
                className='w-[100%] h-[100%] bg-yellow-200 top-0 left-0'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
              <Marker position={{ lat: cordenada?.lat, lng: cordenada?.lng }}>
                <Popup>
                  {restaurant.name}.
                </Popup>
              </Marker>
              <CircleMarker center={{ lat: cordenada?.lat, lng: cordenada?.lng }} pathOptions={redOptions} radius={100}>
                <Popup>Popup in CircleMarker</Popup>
              </CircleMarker>
            </MapContainer>
            )
          : <h2>Cargando zona de reparto...</h2>
    }
    </>
  )
}

export default MapComponent
