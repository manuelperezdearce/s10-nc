import React, { useState } from 'react'
import { useFetchForm } from './useFetchForm'
import { toast } from 'react-toastify'
import Loader from '../../components/loader/Loader'

const FormContact = () => {
  const [loader, setLoader] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [mensaje, setMensaje] = useState('')

  // control del error
  const [errors, setErrors] = useState({})

  const mailUser = 'guillermoneculqueo@gmail.com'

  const handleInputChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'telefono':
        setTelefono(value)
        break
      case 'mensaje':
        setMensaje(value)
        break
      default:
        break
    }
  }

  const handleReset = () => {
    setName('')
    setEmail('')
    setTelefono('')
    setMensaje('')
    setErrors({})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const mensajeUsuario = {
      name,
      message: mensaje,
      email,
      telefono,
      fecha: new Date()
    }

    const validationErrors = {}

    // validamod el nombre
    if (!name) {
      validationErrors.name = 'Se requiere un nombre'
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      validationErrors.name = 'El nombre solo puede contener letras'
    }
    // validamos el email
    if (!email) {
      validationErrors.email = 'Se requiere un email'
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      validationErrors.email = 'El email no es valido'
    }
    // validamos el telefono
    if (!telefono) {
      validationErrors.telefono = 'Se requiere un telefono'
    } else if (!/^[0-9]+$/.test(telefono)) {
      validationErrors.telefono = 'El telefono solo puede contener numeros'
    } else if (!/^\d{4}\d{6}$/.test(telefono)) {
      validationErrors.telefono = '⌨ forma no valida (4 caracteristica) + (6 numero) , ejemplo: 2944123456'
    }
    // validamos mensaje
    if (!mensaje) {
      validationErrors.mensaje = 'Se requiere un mensaje'
    } else if (mensaje.length < 10) {
      validationErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres'
    } else if (mensaje.length > 500) {
      validationErrors.mensaje = 'El mensaje debe tener menos de 500 caracteres'
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else if (Object.keys(validationErrors).length === 0) {
      setErrors({})
      setLoader(true)
      useFetchForm(mailUser, mensajeUsuario)
        .then((response) => {
          setLoader(false)
          if (response.message === 'The form was submitted successfully.') {
            toast.success('Mensaje enviado, me pondre en contacto contigo a la brevedad')
          } else if (response.message === 'This form needs Activation. We\'ve sent you an email containing an \'Activate Form\' link. Just click it and your form will be actived!') {
            toast.warning('Necesita activar el formulario, se le ha enviado un email con un enlace para activarlo')
          } else {
            toast.error('Ocurrio un error al enviar el mensaje')
          }

          handleReset()
        })
        .catch((error) => {
          if (error.message === 'Failed to fetch') {
            toast.error('Ups!!! algo salio mal, intentalo mas tarde')
          } else {
            toast.error(error.message)
          }

          handleReset()
        })
        .finally(() => {
          setTimeout(() => {
            setLoader(false)
          }, 6000)
        })
    }
  }

  return (
    <section className='w-[100%] max-w-[600px] flex flex-col justify-center items-center gap-2'>

      <form
        onSubmit={handleSubmit}
        className='w-[90%] h-auto rounded-md p-5 flex flex-col justify-center items-center gap-5 text-md border-2'
        style={{ boxShadow: '5px 5px 10px #d4d4d4,-5px -5px 10px #ffffff' }}
      >
        <div className='w-[100%] flex flex-col flex-wrap  lg:flex-row gap-4 lg:flex-nowrap overflow-hidden'>
          <label htmlFor='name' className='w-[100%] lg:w-[50%] flex flex-col gap-2 font-titulo font-semibold text-marronCustom leading-[1.5rem] '>
            Nombre
            <input
              type='text' name='name' id='name'
              value={name}
              onChange={handleInputChange}
              className={`w-[100%] bg-greenCustom text-marronCustom placeholder-white p-3 rounded-md font-normal outline-none shadow-sm focus:ring focus:ring-green-500 focus:ring-opacity-100 border-[.5px] ${errors.name ? 'border-2 border-red-600 focus:ring-0' : ''}`}
              style={{ boxShadow: '5px 5px 10px #dcdbe4,-5px -5px 10px #ffffff' }}
              placeholder='Nombre'
            />
            {errors.name && (<p className='text-red-500 font-parrafo font-semibold w-full'>{errors.name}</p>)}
          </label>

          <label htmlFor='email' className='w-[100%] lg:w-[50%] flex flex-col gap-2 font-titulo font-semibold text-marronCustom leading-[1.5rem]'>
            Email
            <input
              type='email' name='email' id='email'
              value={email}
              onChange={handleInputChange}
              className={`w-[100%] p-3 bg-greenCustom text-marronCustom placeholder-white  rounded-md font-normal outline-none shadow-sm focus:ring focus:ring-green-500 focus:ring-opacity-100 border-[.5px] ${errors.email ? 'border-2 border-red-600 focus:ring-0' : ''}`}
              style={{ boxShadow: '5px 5px 10px #dcdbe4,-5px -5px 10px #ffffff' }}
              placeholder='Email'
            />
            {errors.email && (<p className='text-red-500 font-parrafo font-semibold w-full'>{errors.email}</p>)}
          </label>
        </div>

        <div className='w-[100%] flex flex-col lg:flex-row gap-3 flex-nowrap'>
          <label htmlFor='telefono' className='w-[100%] lg:w-[50%] flex flex-col gap-2 font-titulo font-semibold text-marronCustom leading-[1.5rem]'>
            Teléfono
            <input
              type='text' name='telefono' id='telefono'
              value={telefono}
              onChange={handleInputChange}
              className={`w-[100%] bg-greenCustom text-marronCustom placeholder-white  p-3 rounded-md font-normal outline-none shadow-sm focus:ring focus:ring-green-500 focus:ring-opacity-100 border-[.5px] ${errors.telefono ? 'border-2 border-red-600 focus:ring-0' : ''}`}
              style={{ boxShadow: '5px 5px 10px #dcdbe4,-5px -5px 10px #ffffff' }}
              placeholder='Teléfono'
            />
            {errors.telefono && (<p className='text-red-500 font-parrafo font-[400] w-full'>{errors.telefono}</p>)}
          </label>
        </div>

        <label htmlFor='mensaje' className='w-[100%] flex flex-col gap-2 font-titulo font-semibold text-marronCustom leading-[1.5rem]'>
          Mensaje
          <textarea
            name='mensaje' id='mensaje'
            value={mensaje}
            onChange={handleInputChange}
            className={`block p-3 bg-greenCustom text-marronCustom placeholder-white  w-[100%] h-[140px] rounded-lg  outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100 font-parrafo font-[400] resize-none border-[.5px]  ${errors.mensaje ? 'border-2 border-red-600 focus:ring-0' : ''}`}
            placeholder='Ingrese su mensaje'
            style={{ boxShadow: '5px 5px 10px #dcdbe4,-5px -5px 10px #ffffff' }}
          />
          {errors.mensaje && (<p className='text-red-500 font-parrafo font-[400] w-full'>{errors.mensaje}</p>)}
        </label>
        <div className='w-full flex flex-row flex-nowrap justify-center items-center mt-6'>
          {loader ? <div className='font-titulo rounded-md transition-all duration-300 ease-in-out flex flex-row flex-nowrap items-center justify-start gap-2 py-[10px] px-[24px] md:py-[16px] md:px-[32px] xl:px-[36px] xl:py-[24px] xl:text-[18px]'><Loader /></div> : <button type='submit' name='Enviar mensaje' className='text-md font-normal font-titulo px-5 py-2 rounded-md bg-greenCustom text-white border-2 hover:bg-white hover:text-greenCustom hover:border-greemCustom transition-all ease-out duration-150 '>Enviar</button>}
        </div>
      </form>
    </section>
  )
}

export default FormContact
