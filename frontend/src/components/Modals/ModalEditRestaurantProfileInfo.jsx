import { IoCloseSharp, IoLocationSharp } from 'react-icons/io5'
import RestaurantLogo from '../../images/RestaurantLogo.png'
import BtnUploadImgProfileRestaurant from '../Buttons/BtnUploadImgProfileRestaurant'
import { BsFillClipboardDataFill } from 'react-icons/bs'

function ModalEditRestaurantProfileInfo({closeModal, data}) {
    console.log(data)
    return (
        <div className='text-black bg-white px-5 py-14 md:p-10 rounded-xl relative'>
            
            <button 
                onClick={closeModal}
                className='text-greenCustom text-5xl absolute right-0 top-0'
            >
                <IoCloseSharp/>
            </button>

            <div>
                <div className='relative mb-12 max-w-xs mx-auto'>
                    <img src={RestaurantLogo} alt=""/>
                    <div className='absolute bottom-5 right-5'><BtnUploadImgProfileRestaurant/></div>
                </div>


                <form action="">
                    <div className='flex flex-col gap-y-4 mb-10'>
                        <p className='text-2xl md:text-3xl font-bold flex gap-x-2'><span className='text-greenCustom2'><BsFillClipboardDataFill/></span>Datos del restaurant</p>

                        <div className='md:flex gap-x-5'>
                            <div className='flex flex-col md:w-1/2'>
                                <label htmlFor="" className='text-lg'>Nombre del restaurant:</label>
                                <input type="text" placeholder='' className='bg-white border rounded-md p-2'/>
                            </div>
                            <div className='flex flex-col md:w-1/2'>
                                <label htmlFor="" className='text-lg'>Especialidad:</label>
                                <input type="text" placeholder='' className='bg-white border rounded-md p-2'/>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row md:items-center'>
                            <p className='text-lg mr-4'>Horario de atención:</p>
                            <div className='flex items-center'>
                                <label htmlFor="" className='text-lg mr-2'>desde:</label>
                                <input type="time" placeholder='' className='bg-white border rounded-md p-2 mr-2'/>
                                <p className='text-lg mr-2'>horas</p>
                                <label htmlFor="" className='text-lg mr-2'>hasta:</label>
                                <input type="time" placeholder='' className='bg-white border rounded-md p-2 mr-2'/>
                                <p className='text-lg'>horas</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-4 mb-10'>
                        <p className='text-2xl md:text-3xl font-bold flex gap-x-2'><span className='text-greenCustom2'><IoLocationSharp/></span>Ubicación y contacto</p>
                        <div className='md:flex gap-x-5'>
                            <div className='flex flex-col md:w-1/2'>
                                <label htmlFor="" className='text-lg'>Correo electrónico:</label>
                                <input type="email" placeholder='' className='bg-white border rounded-md p-2'/>
                            </div>
                            <div className='flex flex-col md:w-1/2'>
                                <label htmlFor="" className='text-lg'>Teléfono de contacto:</label>
                                <input type="tel" placeholder='' className='bg-white border rounded-md p-2'/>
                            </div>
                        </div>
                        <div className='md:flex gap-x-5'>
                            <div className='flex flex-col md:w-1/2'>
                                <label htmlFor="" className='text-lg'>Dirección:</label>
                                <input type="text" placeholder='' className='bg-white border rounded-md p-2'/>
                            </div>
                            <div className='flex flex-col md:w-1/2'>
                                <label htmlFor="" className='text-lg'>Ciudad:</label>
                                <input type="text" placeholder='' className='bg-white border rounded-md p-2'/>
                            </div>
                        </div>
                    </div>

                    <input type="submit" value="Guardar" className='bg-greenCustom text-white w-full py-2 font-bold text-lg rounded-lg hover:bg-greenCustom2 duration-100 cursor-pointer'/>

                </form>


            </div>
        </div>
    )
}

export default ModalEditRestaurantProfileInfo
