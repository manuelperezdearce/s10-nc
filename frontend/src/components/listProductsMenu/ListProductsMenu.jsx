import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { getFoodsByCategoryId } from '../../features/foods/foodsSlice'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardMenu from '../cardMenu/CardMenu'
import Loader from '../loader/Loader'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './carruselPerfil.css'

const ListProductsMenu = ({ categoryId }) => {
  const dispatch = useDispatch()
  const foodState = useSelector((state) => state?.foods?.data)
  const loading = useSelector((state) => state?.foods?.loading)

  console.log(foodState)

  useEffect(() => {
    dispatch(getFoodsByCategoryId(categoryId))
  }, [dispatch])

  return (
    <>
      {
      loading
        ? (
          <div className='w-[100%] min-h-[calc(100vh-150px)] grid place-content-center bg-pink-100'>
            <Loader />
          </div>
          )
        : (
            foodState.length > 0
              ? (
                <section className='w-100 h-auto'>
                  <Swiper
                    className='mySwipper'
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          // modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    navigation={{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev'
                    }}
                    pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
                    autoplay={{ delay: 9000 }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
                    style={{ width: '100%', height: '340px', margin: '0 auto', padding: '0 35px' }}
                    slidesPerView={1} // Valor por defecto para pantallas pequeñas
                    breakpoints={{
                      576: {
                        slidesPerView: 2
                      },
                      768: {
                        slidesPerView: 3 // Mostrar 2 tarjetas en pantallas con un ancho mínimo de 768px (tabletas)
                      },
                      992: {
                        slidesPerView: 4 // Mostrar 3 tarjetas en pantallas con un ancho mínimo de 992px (pantallas grandes)
                      },
                      1200: {
                        slidesPerView: 5 // Mostrar 4 tarjetas en pantallas con un ancho mínimo de 1200px (pantallas más grandes)
                      }
                    }}
                  >
                    {
            foodState.map((food, index) => {
              return (
                <SwiperSlide key={index} className='swipperSlider'>
                  <CardMenu key={food.id} object={food} />
                </SwiperSlide>
              )
            })
          }
                    <div className='swiper-button-next'>
                      <ion-icon style={{ color: 'var(--background-naClaro)' }} name='chevron-forward-sharp' />
                    </div>
                    <div className='swiper-button-prev'>
                      <ion-icon style={{ color: 'var(--background-naClaro)' }} name='chevron-back-sharp' />
                    </div>
                  </Swiper>
                </section>
                )
              : (
                <p>No se encontraron productos.</p>
                )
          )
    }
    </>

  )
}

export default ListProductsMenu
