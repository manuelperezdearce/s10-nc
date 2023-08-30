import { useForm } from 'react-hook-form'

function Register () {
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      rolRestaurant: false,
      email: '',
      password: '',
      terminos: ''
    }
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  const styledLabel = 'text-sm ms-11 mb-0.5 mt-2 text-gray-600'
  const styledErros = 'text-xs text-red-500 ml-9 mt-0.5 mb-0.5 '
  const styledInput = 'form-control w-4/5 bg-whiteBackgraundForm2 mx-auto px-2 py-1.5 text-gray-900 rounded border border-solid border-gray-300 focus:border-gray-200 fouces:outline-none'
  return (
    <div className='xl:container mx-auto mb-32 bg-whiteBackgroundForm w-screen h-screen flex items-center justify-center '>
      <div className=' w-4/5 h-3/5 flex'>
        <div className='bg-whiteBackgraundForm2 w-3/6 h-full flex justify-center flex-col '>
          <div className='flex justify-start w-full  mx-5'>
            <h1 className='text-5x1 sm:text-7x1 text-black text-2xl font-bold ps-8'>Register</h1>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col'>
                <label className={styledLabel}>Email Address</label>
                <input className={styledInput} type='text' {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} />
                {errors.email?.type === 'required' && <p className={styledErros}>Este campo es obligatorio</p>}
                {errors.email?.type === 'pattern' && <p className={styledErros}>Ingresa un email valido</p>}
              </div>
              <div className='flex flex-col'>
                <label className={styledLabel}>Your Password</label>
                <input className={styledInput} type='text' {...register('password', { required: true, minLength: 8 })} />
                {errors.password?.type === 'required' && <p className={styledErros}>Este campo es obligatorio</p>}
                {errors.password?.type === 'minLength' && <p className={styledErros}>Minimo 8 caracteres</p>}
              </div>
              <div className='flex px-11 mt-1'>
                <input type='checkbox' {...register('rolRestaurant')} />
                <label className='text-sm ms-2  text-gray-600'>Registrar como <a className='text-greenCard'>Restaurante.</a></label>
              </div>
              <div className='flex px-11 mt-1'>
                <input type='checkbox' {...register('terminos')} />
                <label className='text-sm ms-2  text-gray-600'>I have read and accept the <a className='text-greenCard'>terms and conditions.</a></label>
                {errors.terminos?.type === 'required' && <p className={styledErros}>Este campo es obligatorio.</p>}
              </div>
              <div className='flex mt-3'>
                <input type='Submit' className='w-4/5 bg-greenCard text-white mx-auto  px-2 py-2 rounded border border-solid border-gray-300  fouces:outline-none' value='Register' />
              </div>
            </form>
          </div>
        </div>
        <div className='bg-greenCard w-3/6 h-full flex justify-center items-center'>
          <figure className='flex items-center justify-center'>
            <img className='w-3/5 h-3/5' src='https://png.pngtree.com/png-clipart/20230310/ourmid/pngtree-fresh-fruit-png-image_6642661.png' alt='imagen' />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Register
