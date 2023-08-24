import React from 'react'
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './swipperPersonalizado.css'

const Banner = () => {
  return (
    <section className='banner w-screen top-0 h-[100vh] flex justify-center items-center content-center'>
      <Swiper
      // install Swiper modules
        modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        effect='fade'
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 90000,
          disableOnInteraction: false
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='mySwiper w-screen h-[100%]'
      >
        <SwiperSlide className=' bg-greenCustom'>
          <div className='absolute top-0 left-0 w-[100%] h-[100%] flex flex-col-reverse lg:flex-row lg:items-center text-whiteCustom'>
            <section className='w-full h-1/2 lg:w-1/2 lg:h-[100%] flex flex-col justify-center items-start p-[1.5rem] lg:p-[3rem] gap-3 sm:gap-5 lg:gap-6'>
              <h1 className='font-titulo font-bold text-3xl lg:text-5xl'>Bienvenido a <span className='text-oranjeCustom'>GreenEats Delivery</span>!!!</h1>
              <h3 className='font-parrafo font-bold text-base lg:text-xl'>Tu conexión con la comida saludable y sostenible directamente en tu hogar!</h3>
              <p className='font-parrafo font-normal text-sm lg:text-lg'>Diseñada para satisfacer tus deseos de una alimentación consciente sin comprometer el sabor ni la comodidad. Déjanos guiarte a través de un mundo de opciones frescas y nutritivas.</p>
              <button className='botonBase ' style={{ marginTop: '.5rem' }}>ver seccion</button>
            </section>
            <section className='bgImage w-[100%] h-1/2 lg:w-1/2 lg:h-[100%]'>
              <img className='w-full h-full object-cover' src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1692752160/fitnessMatket/fut_banner35_lvboks.jpg' alt='fondo verduras saludables' />
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-[#203a0b] relative'>
          <div className='absolute top-0 left-0 w-[100%] h-[100%] flex flex-col-reverse lg:flex-row lg:items-center text-whiteCustom'>
            <section className='w-full h-1/2 lg:w-1/2 lg:h-[100%] flex flex-col justify-center items-start p-[1.5rem] lg:p-[3rem] gap-3 sm:gap-5 lg:gap-6'>
              <h2 className='font-titulo font-bold text-3xl lg:text-5xl'>Explora Nuestro menú saludble!!!</h2>
              <h3 className='font-parrafo font-bold text-base lg:text-xl'>Sumérgete en un paraíso de opciones que te nutrirán y energizarán.</h3>
              <p className='font-parrafo font-normal text-sm lg:text-lg'>Desde platos vegetarianos exquisitos hasta creaciones veganas llenas de sabor, nuestra variedad es un reflejo de la naturaleza misma.</p>
              <button className='botonBase'>ver seccion</button>
            </section>
            <section className='bgImage w-[100%] h-1/2 lg:w-1/2 lg:h-[100%]'>
              <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1692752158/fitnessMatket/fut_banner15_qidan5.jpg' alt='fondo verduras saludables' className='w-[100%] h-[100%] object-cover' />
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-[#c23e1a] relative'>
          <div className='absolute top-0 left-0 w-[100%] h-[100%] flex flex-col-reverse lg:flex-row lg:items-center text-whiteCustom'>
            <section className='w-full h-1/2 lg:w-1/2 lg:h-[100%] flex flex-col justify-center items-start p-[1.5rem] lg:p-[3rem] gap-3 sm:gap-5 lg:gap-6'>
              <h2 className='font-titulo font-bold text-3xl lg:text-5xl'>Tu Comida, Tu Elección!!!</h2>
              <h3 className='font-parrafo font-bold text-base lg:text-xl'>Personaliza tu pedido para que se adapte perfectamente a tus gustos y necesidades.</h3>
              <p className='font-parrafo font-normal text-sm lg:text-lg'>¿Tienes restricciones alimentarias o preferencias específicas? No hay problema. Hacemos que tu comida sea tuya en todos los sentidos.</p>
              <button className='botonBase'>ver seccion</button>
            </section>
            <section className='bgImage w-[100%] h-1/2 lg:w-1/2 lg:h-[100%]'>
              <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1692752156/fitnessMatket/fut_banner03_anbw3p.jpg' alt='fondo verduras saludables' className='w-[100%] h-[100%] object-cover' />
            </section>
          </div>
        </SwiperSlide>
        ...
        <div className='swiper-button-next w-[30px] h-[50px] rounded-[4px] text-lightBrownCustom text-[1rem]'>
          <IoChevronForwardSharp />
        </div>
        <div className='swiper-button-prev w-[30px] h-[50px] rounded-[4px] text-lightBrownCustom text-[1rem]'>
          <IoChevronBackSharp />
        </div>
      </Swiper>
    </section>
  )
}

export default Banner
