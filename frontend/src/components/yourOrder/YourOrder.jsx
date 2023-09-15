import { useSelector } from 'react-redux'
import ProductOrder from '../ProductOrder/ProductOrder'

const text = 'text-black'

function YourOrder () {
  const general = useSelector((state) => state?.car)

  const car = useSelector((state) => state?.car?.car)

  // console.log('CAR ->', car)
  // console.log('GENERAL -> ', general)
  return (
    <div className='w-9/12  flex justify-center flex-col lg:w-11/12 '>
      <div className='mt-8 mb-8 lg:mt-8'>
        <h1 className='mb-4 text-black text-4xl font-bold'>Checkout</h1>
        <p className='text-gray-800'>There are 3 products in your cart</p>
      </div>
      <h1 className='mb-4 text-black text-xl font-bold'>Your Order</h1>
      <div className='w-full h-full shadow-lg flex flex-col justify-around rounded-lg '>
        <div className='flex justify-between items-center px-4 w-full h-14 bg-whiteBackgroundForm rounded-t-lg'>
          <p className={text}>Product</p>
          <p className={text}>Subtotal</p>
        </div>
        <div className='flex flex-col'>
          {
            car.map((item) => (
              <ProductOrder key={item.meal_id} object={item} />
            ))
          }

        </div>
        <div className='h-px w-full bg-gray-300 p-0 my-2' />
        <div className='w-full h-1/4 flex flex-col justify-center p-2 '>

          <div className='flex justify-between px-4 mt-3'>
            <p className={text}>Cantidad</p>
            <p className='text-black font-bold'>{general?.total_quantity}
            </p>
          </div>

        </div>
        <div className='h-px w-full bg-gray-300  p-0 my-2' />
        <div className='flex justify-between px-4 my-3'>
          <p className={text}>{general.total_price}</p>
          <p className='text-black font-bold'>$88.15</p>
        </div>
      </div>
    </div>
  )
}

export default YourOrder
