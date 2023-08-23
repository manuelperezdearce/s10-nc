import React from 'react'

const Main = () => {
  return (
    <main className='main w-full h-screen  bg-greenCustom overflow-hidden box-border flex flex-col justify-start items-center content-center gap-[2rem]'>
      <section className='banner w-screen min-h-[calc(100vh)] bg-orange-500 flex flex-col justify-start items-center content-center'>
        {/* <div className='bannerContainer w-screen h-[calc(100%-110px)]'>
          <section className='w-screen h-1/2 bg-purple-400'>
            <h1>¡Bienvenido a <span>GreenEats Delivery</span></h1>
            <h2> Tu conexión con la comida saludable y sostenible directamente en tu hogar!</h2>
          </section>
          <section className='w-screen h-1/2 bg-slate-400' />
        </div> */}
      </section>
      <button className='botonPruebas'>Boton de pruebas</button>
    </main>
  )
}

export default Main
