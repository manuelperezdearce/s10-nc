import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper/modules'
import CardProduct from '../cardProduct/cardProduct'
import './CardSlider.css'
import 'swiper/css'
import 'swiper/css/navigation'
import { useMeals } from '../../hooks/useMeals'
import { getRandom } from '../../utils/getRandomItems'

export const CardSlider = () => {
  const { data, isLoading } = useMeals()
  let randomMeals
  if (!isLoading) {
    randomMeals = getRandom(data, 5)
  }

  return (
    <section className='bg-white flex flex-col items-center py-12 w-[100%'>
      <div className='flex flex-col items-center gap-4'>

        <h2 className='text-greenCustom font-bold text-lg'>Productos más populares</h2>
        <h3 className='font-bold text-black text-3xl'>Artículos más vendidos</h3>
        <p className='text-base text-greyCustom'>¡Descubre lo que todos aman!
        </p>
      </div>
      <div className='w-full'>
        {!isLoading &&

          <Swiper
            slidesPerView='auto'
            className='home-swiper md:max-w-[85vw] max-w-[95vw] md:px-8 px-2 py-8'
            navigation
            freeMode
            spaceBetween={50}
            modules={[FreeMode, Navigation]}
          >

            {randomMeals.map(item =>
              <SwiperSlide key={item.id} style={{ flexShrink: '1' }}>
                <CardProduct data={item} />
              </SwiperSlide>
            )}

          </Swiper>}
      </div>
    </section>
  )
}
