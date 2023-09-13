import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Register () {
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      role_id: false,
      email: '',
      password: ''
    }
  })

  const [alert, setAlert] = useState('')
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    if (data.role_id === true) {
      data.role_id = 2
    } else data.role_id = 1
    const res = await axios.post('https://green-eats.onrender.com/users/registration',
      data)
    setAlert(res.data.message)
    if (res.data.error === false) {
      navigate('/login')
    }
  }

  const styledLabel = 'text-sm   mb-0.5 mt-2 text-gray-600'
  const styledErros = 'text-xs text-red-500   mb-0.5 '
  const styledInput = 'form-control w-4/5 bg-whiteBackgraundForm2 mx-auto  px-2 py-1.5 text-gray-900 rounded border border-solid border-gray-300 focus:border-gray-200 fouces:outline-none'
  return (
    <div className='xl:container mx-auto mb-32 bg-whiteBackgroundForm w-screen h-screen flex items-center justify-center '>
      <div className=' w-4/5 h-3/5 flex'>
        <div className='bg-whiteBackgraundForm2 w-3/6 h-full flex justify-center flex-col '>
          <div className='flex items-start w-4/5  mx-auto'>
            <h1 className='text-5x1 sm:text-7x1 text-black text-4xl font-bold px-1 py-3'>Register</h1>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className='flex flex-col w-full  m-0 items-start p-auto'>

                <div className='flex items-start w-4/5 px-1 mx-auto'>
                  <label className={styledLabel}>Email Address</label>
                </div>

                <input className={styledInput} type='text' {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} />
                {errors.email?.type === 'required' && <div className='flex items-start w-4/5 px-1 mx-auto mt-1.5'><p className={styledErros}>Este campo es obligatorio</p></div>}
                {errors.email?.type === 'pattern' && <div className='flex items-start w-4/5 px-1 mx-auto mt-1.5'><p className={styledErros}>Ingresa un email valido</p></div>}

              </div>

              <div className='flex flex-col'>

                <div className='flex items-start w-4/5 px-1 mx-auto'>
                  <label className={styledLabel}>Your Password</label>
                </div>

                <input className={styledInput} type='password' {...register('password', { required: true, minLength: 8 })} />
                {errors.password?.type === 'required' && <div className='flex items-start w-4/5 px-1 mx-auto mt-1.5'><p className={styledErros}>Este campo es obligatorio</p></div>}
                {errors.password?.type === 'minLength' && <div className='flex items-start w-4/5 px-1 mx-auto mt-1.5'> <p className={styledErros}>Minimo 8 caracteres</p></div>}

              </div>

              <div className='flex mt-2 items-start mx-auto w-4/5'>

                <input type='checkbox' {...register('role_id')} />
                <label className='text-sm ms-2  text-gray-600'> Registrar como
                  <a className='text-greenCard'>Restaurante.</a>
                </label>

              </div>

              <div className='flex mt-2 items-start mx-auto w-4/5'>

                <input type='checkbox' />
                <label className='text-sm ms-2  text-gray-600'>I have read and accept the <a className='text-greenCard'>terms and conditions.</a></label>
                {errors.terminos?.type === 'required' && <p className={styledErros}>Este campo es obligatorio.</p>}

              </div>

              <div className='flex flex-col mt-3 items-center'>
                <button type='Submit' className='w-4/5 bg-greenCard text-white mx-auto  px-2 py-2 rounded border border-solid border-gray-300  fouces:outline-none' value='Register0'>
                  Registrar
                </button>
                <span className='text-blackCustom mt-3'>
                  {alert}
                </span>
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
