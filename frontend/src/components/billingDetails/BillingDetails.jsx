function BillingDetails () {
  return (
    <div className='w-9/12 h-3/5 lg:absolute lg:top-40 lg:right-20 lg:w-2/6'>
      <div>
        <h1 className='text-black font-bold text-xl mb-5'>Billing Details</h1>
      </div>
      <div className='shadow-lg w-full h-5/6 px-5 flex flex-col justify-around'>
        <div>
          <p className='text-black font-bold text-xl'>Customer</p>
        </div>

        <div className='flex flex-col w-full mx-3  h-1/6'>
          <p className='text-black'>Nombre apellido</p>
          <p className='text-black'>10 compras anteriores</p>
        </div>
        <div>
          <div className='flex flex-col w-full mx-3 h-1/6'>
            <div className='flex'>
              <p>P</p>
              <h3 className='text-black font-bold text-lg mx-2'>Direccion</h3>
            </div>
            <div className='mx-5'>
              <p className='text-black'>New York, USA 2707 Davis</p>
            </div>
          </div>
        </div>
        <div>
          <div className='w-full h-1/6 flex flex-col mx-3'>
            <div className='flex'>
              <p>Q</p>
              <h3 className='text-black font-bold text-lg mx-2'>Telefono</h3>
            </div>
            <div className='flex mx-5'>
              <p className='text-black'>+569 98989 8888</p>
            </div>
          </div>

        </div>
        <div>
          <div className='w-full h-1/6 flex flex-col mx-3'>
            <div className='flex'>
              <p>Q</p>
              <h3 className='text-black font-bold text-lg mx-2'>Correo</h3>
            </div>
            <div className='flex mx-5'>
              <p className='text-black'>contacto@gmial.com</p>
            </div>

          </div>

        </div>
        <div className='w-full h-1/6 flex justify-center items-center'>
          <button className='bg-greenCard  py-2 rounded-md text-white w-11/12'>Editar datos</button>
        </div>
      </div>
    </div>
  )
}

export default BillingDetails
