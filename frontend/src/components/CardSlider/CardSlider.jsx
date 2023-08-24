import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper/modules'
import CardProduct from '../CardProduct/CardProduct'
import './CardSlider.css'
import 'swiper/css'
import 'swiper/css/navigation'

export const CardSlider = () => {
  return (
    <section className='bg-white flex flex-col items-center py-12 w-full'>
      <div className='flex flex-col items-center gap-4'>

        <h2 className='text-greenCustom font-bold text-lg'>Most Popular Products</h2>
        <h3 className='font-bold text-black text-3xl'>Best Selling Items</h3>
        <p className='text-base text-greyCustom'>There are many variations of passages of Lorem Ipsum available
          but the majority have suffered alteration in some form.
        </p>
      </div>
      <div className='w-full'>

        <Swiper
          slidesPerView='auto'
          className='home-swiper md:max-w-[85vw] max-w-[95vw] md:px-8 px-2 py-8'
          navigation
          freeMode
          spaceBetween={50}
          modules={[FreeMode, Navigation]}
        >
          {Array(9).fill(0).map((item, index) => (
            <SwiperSlide key={index} style={{ flexShrink: '1' }}>
              <CardProduct />
            </SwiperSlide>))}

        </Swiper>
      </div>
    </section>
  )
}
