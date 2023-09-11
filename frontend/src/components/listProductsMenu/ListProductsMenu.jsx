import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { getFoodsByCategoryId } from '../../features/foods/foodsSlice'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardMenu from '../cardMenu/CardMenu'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './carruselPerfil.css'
import Loader from '../loader/Loader'
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5'

const ListProductsMenu = ({ categoryId }) => {
  const dispatch = useDispatch()
  const foodState = useSelector((state) => state?.foods?.categoryData || [])
  // [categoryId]?.data
  const loading = useSelector((state) => state?.foods?.loading)

  // const foodState = []
  const filteredData = foodState?.map(category => {
    if (category?.categoryId === categoryId) {
      return {
        categoryId: category.categoryId,
        data: category.data.filter(item => item.category_id === categoryId)
      }
    }
    return null
  }).filter(category => category !== null)

  useEffect(() => {
    dispatch(getFoodsByCategoryId(categoryId))
  }, [dispatch, categoryId])

  return (
    <>
      {
      loading
        ? (
          <div className='w-[100%] h-[340px] grid place-content-center'>
            <Loader />
          </div>
          )
        : (
            filteredData[0]?.data.length > 0
              ? (
                <section className='sweepCardMenu w-100 h-[350px] flex justify-center items-center content-center'>
                  <Swiper
                    className='mySwipper h-[100%]  flex justify-center items-center content-center'
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
                        slidesPerView: 1
                      },
                      768: {
                        slidesPerView: 2 // Mostrar 2 tarjetas en pantallas con un ancho mínimo de 768px (tabletas)
                      },
                      992: {
                        slidesPerView: 3 // Mostrar 3 tarjetas en pantallas con un ancho mínimo de 992px (pantallas grandes)
                      },
                      1200: {
                        slidesPerView: 4 // Mostrar 4 tarjetas en pantallas con un ancho mínimo de 1200px (pantallas más grandes)
                      }
                    }}
                  >
                    {
                      filteredData[0]?.data.map((food, index) => {
                        return (
                          <SwiperSlide key={index} className='swipperSlider pt-0 h-[100%] flex justify-center items-center content-center'>
                            <CardMenu object={food} />
                          </SwiperSlide>
                        )
                      })
                    }
                    <div className='swiper-button-next'>
                      <IoChevronForwardSharp />
                    </div>
                    <div className='swiper-button-prev'>
                      <IoChevronBackSharp />
                    </div>
                  </Swiper>
                </section>
                )
              : (
                <div className='w-[100%] h-[340px] grid place-content-center'>
                  <p className='text-center font-parrafo font-normal text-marronCustom text-[1.2rem] leading-[30px] tracking-[0.2px] capitalize'>No se encontraron productos 😉😉!!!</p>
                </div>
                )
          )
    }
    </>

  )
}

export default ListProductsMenu
