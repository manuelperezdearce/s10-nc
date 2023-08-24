import React from 'react'
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Banner = () => {
  return (
    <section className='banner w-screen top-0 h-[calc(100vh-110px)] bg-slate-500 flex justify-center items-center content-center'>
      <Swiper
      // install Swiper modules
        modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        effect='fade'
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 90000,
          disableOnInteraction: false
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='mySwiper w-screen h-[100%] bg-green-300'
      >
        <SwiperSlide className=' bg-orange-400'>
          <section className='bg-red w-full h-1/2 flex flex-col justify-center items-start p-3 gap-3'>
            <h1 className='font-titulo font-bold text-3xl lg:text-5xl'>Bienvenido a <span className='text-oranjeCustom'>GreenEats Delivery</span>!!!</h1>
            <h3 className='font-parrafo font-bold text-base lg:text-xl'>Tu conexión con la comida saludable y sostenible directamente en tu hogar!</h3>
            <p className='font-parrafo font-normal text-sm lg:text-lg'>Diseñada para satisfacer tus deseos de una alimentación consciente sin comprometer el sabor ni la comodidad. Déjanos guiarte a través de un mundo de opciones frescas y nutritivas.</p>
            <button className='botonBase'>ver seccion</button>
          </section>
          <section className='bgImage h-1/2'>
            <img className='w-full h-full object-cover' src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1692752160/fitnessMatket/fut_banner35_lvboks.jpg' alt='fondo verduras saludables' />
          </section>
        </SwiperSlide>
        <SwiperSlide className='bg-green-300 relative'>
          <div className='absolute top-0 left-0 w-[100%] h-[100%]'>
            <section className='h-1/2 w-[100%]'>
              <h2>Explora Nuestro menú saludble!!!</h2>
              <h3>Sumérgete en un paraíso de opciones que te nutrirán y energizarán.</h3>
              <p>Desde platos vegetarianos exquisitos hasta creaciones veganas llenas de sabor, nuestra variedad es un reflejo de la naturaleza misma.</p>
              <button>ver seccion</button>
            </section>
            <section className='bgImage w-[100%] h-1/2'>
              <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1692752158/fitnessMatket/fut_banner15_qidan5.jpg' alt='fondo verduras saludables' className='w-[100%] h-[100%] object-cover' />
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-yellow-800 relative'>
          <div className='absolute top-0 left-0 w-[100%] h-[100%]'>
            <section className='h-1/2 w-[100%]'>
              <h2>Tu Comida, Tu Elección!!!</h2>
              <h3>Personaliza tu pedido para que se adapte perfectamente a tus gustos y necesidades.</h3>
              <button>ver seccion</button>
            </section>
            <section className='bgImage w-[100%] h-1/2'>
              <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1692752156/fitnessMatket/fut_banner03_anbw3p.jpg' alt='fondo verduras saludables' className='w-[100%] h-[100%] object-cover' />
            </section>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </section>
  )
}

export default Banner
