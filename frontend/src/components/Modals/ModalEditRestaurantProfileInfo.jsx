import { IoCloseSharp, IoLocationSharp } from 'react-icons/io5'
import RestaurantLogo from '../../images/RestaurantLogo.png'
import BtnUploadImgProfileRestaurant from '../Buttons/BtnUploadImgProfileRestaurant'
import { BsFillClipboardDataFill } from 'react-icons/bs'
import { Formik } from 'formik'
import { useState } from 'react'
import { editRestaurant } from '../../services/api/editRestaurant'
import { useSelector } from 'react-redux'

function ModalEditRestaurantProfileInfo ({ closeModal, data, id }) {
  const { token } = useSelector(state => state.auth2)
  const [img, setImg] = useState(null)


  return (
    <div className='text-black bg-white px-5 py-14 md:p-10 rounded-xl relative'>

      <button
        onClick={closeModal}
        className='text-greenCustom text-5xl absolute right-0 top-0'
      >
        <IoCloseSharp />
      </button>

      <div>
        <div className='relative mb-12 max-w-xs mx-auto'>
          <img src={!data.image ? RestaurantLogo : data.image} alt='Restaurant avatar' />
          <div className='absolute bottom-5 right-5'><BtnUploadImgProfileRestaurant setImg={setImg} /></div>
        </div>
        <Formik
          initialValues={{
            name: data.name,
            speciality: data.speciality,
            phone_number: data.phone_number,
            city: data.city,
            address: data.address,
            description: data.description,
            time_open: data.time_open,
            time_close: data.time_close
          }}
          onSubmit={(values) => {
            editRestaurant(id, values, img, token)
            closeModal()
            console.log(values)
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (

            <form onSubmit={handleSubmit}>
              <div className='flex flex-col gap-y-4 mb-10'>
                <p className='text-2xl md:text-3xl font-bold flex gap-x-2'><span className='text-greenCustom2'><BsFillClipboardDataFill /></span>Datos del restaurant</p>

                <div className='md:flex gap-x-5'>
                  <div className='flex flex-col md:w-1/2'>
                    <label htmlFor='' className='text-lg'>Nombre del restaurant:</label>
                    <input type='text' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} className='bg-white border rounded-md p-2' />
                  </div>
                  <div className='flex flex-col md:w-1/2'>
                    <label htmlFor='' className='text-lg'>Especialidad:</label>
                    <input type='text' name='speciality' value={values.speciality} onChange={handleChange} onBlur={handleBlur} className='bg-white border rounded-md p-2' />
                  </div>
                </div>
                <div className='flex flex-col md:flex-row md:items-center'>
                  <p className='text-lg mr-4'>Horario de atención:</p>
                  <div className='flex items-center'>
                    <label htmlFor='' className='text-lg mr-2'>desde:</label>
                    <input type='time' name='time_open' value={values.time_open} onChange={handleChange} onBlur={handleBlur} className='bg-white border rounded-md p-2 mr-2' />
                    <p className='text-lg mr-2'>horas</p>
                    <label htmlFor='' className='text-lg mr-2'>hasta:</label>
                    <input type='time' name='time_close' value={values.time_close} onChange={handleChange} onBlur={handleBlur} className='bg-white border rounded-md p-2 mr-2' />
                    <p className='text-lg'>horas</p>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <label className='text-lg'>Descripción :</label>
                  <textarea className='bg-white border rounded-md p-2' name='description' value={values.description} onChange={handleChange} onBlur={handleBlur} />
                </div>
              </div>

              <div className='flex flex-col gap-y-4 mb-10'>
                <p className='text-2xl md:text-3xl font-bold flex gap-x-2'><span className='text-greenCustom2'><IoLocationSharp /></span>Ubicación y contacto</p>
                <div className='md:flex gap-x-5'>


                  <div className='flex flex-col md:w-1/2'>
                    <label htmlFor='' className='text-lg'>Ciudad:</label>
                    <input type='text' name='city' value={values.city} onChange={handleChange} onBlur={handleBlur} className='bg-white border rounded-md p-2' />
                  </div>
                  <div className='flex flex-col md:w-1/2'>
                    <label htmlFor='' className='text-lg'>Teléfono de contacto:</label>
                    <input type='tel' name='phone_number' value={values.phone_number} onChange={handleChange} onBlur={handleBlur} className='bg-white border rounded-md p-2' />
                  </div>
                </div>
                <div className='md:flex gap-x-5'>
                  <div className='flex flex-col w-full'>
                    <label htmlFor='' className='text-lg'>Dirección:</label>
                    <input type='text' name='address' value={values.address} onChange={handleChange} onBlur={handleBlur} className='bg-white border rounded-md p-2' />
                  </div>

                </div>
              </div>

              <button type='submit' className='bg-greenCustom text-white w-full py-2 font-bold text-lg rounded-lg hover:bg-greenCustom2 duration-100 cursor-pointer'> Guardar </button>

            </form>
          )}
        </Formik>

      </div>
    </div>
  )
}

export default ModalEditRestaurantProfileInfo
