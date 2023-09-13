import { FaCircleUser } from 'react-icons/fa6'
import { IoCloseSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { Formik } from 'formik'
import { useState } from 'react'
import { createMeal } from '../../services/api/createMeal'

export const ModalEditCustomerInfo = ({ closeModal }) => {
  const restaurantId = 2
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk0Mzk0MTYyLCJleHAiOjE2OTQ0ODA1NjJ9.oFI0jZGP-xzQNc5Zb-jBZvEIbptLbxiOxrHgkoE8Dzc'

  const label = 'font-medium'
  const fieldStyle = 'flex flex-col gap-4'
  const inputStyle = 'bg-white border rounded-md p-2 focus:outline-none focus:border-greenCustom focus:ring-1 focus:ring-greenCustom'

  return (
    <div className='text-black bg-white md:p-10 flex flex-col gap-6'>
      <button onClick={closeModal} className='text-greenCustom text-5xl self-end'>
        <IoCloseSharp />
      </button>

      <h1 className='flex gap-4 font-bold text-2xl md:text-4xl'><FaCircleUser className='text-greenCustom' /> Editar información</h1>
      <Formik
        initialValues={{
          name: '',
          is_vegan: false,
          is_glutenfree: false,
          is_proteinplus: false,
          price: 0,
          category_id: 1,
          description: ''

        }}
        onSubmit={(values) => {
          createMeal(values, file, restaurantId, token)
          closeModal()
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (

          <form className='flex flex-col gap-8 text-lg' onSubmit={handleSubmit}>
            <fieldset className={fieldStyle}>
              <label htmlFor='name' className={label}>Nombre</label>
              <input value={values.name} required placeholder='Nombre' name='name' className={inputStyle} onChange={handleChange} onBlur={handleBlur} />
            </fieldset>
            <fieldset className={fieldStyle}>
              <label htmlFor='phone' className={label}>Teléfono</label>
              <input value={values.name} required placeholder='Teléfono' name='phone' className={inputStyle} onChange={handleChange} onBlur={handleBlur} />
            </fieldset>
            <fieldset className={fieldStyle}>
              <label htmlFor='address' className={label}>Dirección</label>
              <input value={values.name} required placeholder='Dirección' name='address' className={inputStyle} onChange={handleChange} onBlur={handleBlur} />
            </fieldset>

            <button type='submit' className='ms-auto bg-greenCustom hover:bg-greenCustom2 duration-75 text-white font-medium px-6 py-2 text-base gap-x-1 rounded-md'>Guardar</button>
          </form>
        )}

      </Formik>
    </div>
  )
}
