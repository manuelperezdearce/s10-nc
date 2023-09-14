import { useDispatch, useSelector } from 'react-redux'
import { clearOrder, postOrder } from '../../features/orders/ordersSlice'
import { toast } from 'react-toastify'
import { clearCar } from '../../features/counter/carSlice'
import { clearProductLikes } from '../../features/productLike/productLikeSlice'

/*
{
    "customer_id": 1,
    "total_price": 2000,
    "total_quantity": 2,
    "items": [
        {
        "meal_id":"a12",
        "quantity": 4
    },
        {
        "meal_id":"a13",
        "quantity": 1
    }
    ]
    }
 */

function BillingDetails () {
  const dispatch = useDispatch()
  const general = useSelector((state) => state?.car)

  const { car, customer_id, total_price, total_quantity } = general

  const orden = { customer_id, total_price, total_quantity, item: car }

  console.log('ordebn ->', orden)

  const handleOnclick = (e) => {
    e.preventDefault()
    dispatch(postOrder(orden))
      .then((response) => {
        toast.success('se Cargo su pedido exitosamente')
        console.log('response ->', response)
        dispatch(clearOrder())
        setTimeout(() => {
          dispatch(clearCar())
          dispatch(clearProductLikes())
        }, 3000)
      })
      .catch((error) => {
        console.log('error ->', error)
        toast.error('Ups!!! algo salio mal!!!')
      })
  }

  return (
    <div className='w-9/12 my-7  h-full lg:w-lg:w-11/12 lg:my-0 lg:h-auto lg:mt-1'>
      <div className='lg:h-20 lg:w-full flex items-center justify-start'>
        <h1 className='text-black font-bold text-xl '>Billing Details</h1>
      </div>
      <div className='shadow-xl rounded-md w-full h-full px-5 flex flex-col lg:h-auto justify-around '>
        <div>
          <p className='text-black font-bold text-xl'>Customer</p>
        </div>

        <div className='flex flex-col w-full mx-3  h-1/6 lg:h-20'>
          <p className='text-black'>Nombre apellido</p>
          <p className='text-black'>10 compras anteriores</p>
        </div>
        <div>
          <div className='flex flex-col w-full mx-2 h-1/6 lg:h-20'>
            <div className='flex'>
              <svg xmlns='http://www.w3.org/2000/svg c' className='w-6 h-6 fill-current text-greenCard' viewBox='0 -960 960 960'><path d='M360-440h80v-110h80v110h80v-190l-120-80-120 80v190Zm120 254q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z' /></svg>
              <h3 className='text-black font-bold text-lg mx-1'>Direccion</h3>
            </div>
            <div className='mx-5'>
              <p className='text-black'>New York, USA 2707 Davis</p>
            </div>
          </div>
        </div>
        <div>
          <div className='w-full h-1/6 flex flex-col mx-3 lg:h-20'>
            <div className='flex'>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 fill-current text-greenCard' viewBox='0 -960 960 960'><path d='M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z' /></svg>
              <h3 className='text-black font-bold text-lg mx-2'>Telefono</h3>
            </div>
            <div className='flex mx-5'>
              <p className='text-black'>+569 98989 8888</p>
            </div>
          </div>

        </div>
        <div>
          <div className='w-full h-1/6 flex flex-col mx-3 lg:h-20'>
            <div className='flex'>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 fill-current text-greenCard' viewBox='0 -960 960 960'><path d='M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z' /></svg>
              <h3 className='text-black font-bold text-lg mx-2'>Correo</h3>
            </div>
            <div className='flex mx-5'>
              <p className='text-black'>contacto@gmial.com</p>
            </div>

          </div>

        </div>
        <div className='w-full h-1/6 flex justify-center items-center lg:h-20'>
          <button onClick={handleOnclick} className='bg-greenCard  py-2 rounded-md text-white w-11/12 my-4 lg:my-1'>Editar datos</button>
        </div>
      </div>
    </div>
  )
}

export default BillingDetails
