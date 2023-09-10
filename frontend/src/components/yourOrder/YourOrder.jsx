import ProductOrder from '../ProductOrder/ProductOrder'

const text = 'text-black'

function YourOrder () {
  return (
    <div className='w-9/12 h-auto flex justify-center flex-col lg:w-2/5  lg:absolute lg:left-20 lg:top-40'>
      <h1 className='mb-4 text-black text-xl font-bold'>Your Order</h1>
      <div className='w-full h-full shadow-lg flex flex-col justify-around rounded-lg '>
        <div className='flex justify-between items-center px-4 w-full h-14 bg-whiteBackgroundForm rounded-t-lg'>
          <p className={text}>Product</p>
          <p className={text}>Subtotal</p>
        </div>
        <div className='flex flex-col'>
          <ProductOrder />
          <ProductOrder />
          <ProductOrder />
        </div>
        <div className='h-px w-full bg-gray-300 p-0 my-2'></div>
        <div className='w-full h-1/4 flex flex-col justify-center p-2 '>
          <div className='flex justify-between px-4 '>
            <p className={text}>Subtotal</p>
            <p className='text-black font-bold'>$108</p>
          </div>
          <div className='flex justify-between px-4 mt-3'>
            <p className={text}>Shipping Cost(+)</p>
            <p className='text-black font-bold'>$10.75</p>
          </div>
          <div className='flex justify-between px-4 mt-3'>
            <p className={text}>Discount</p>
            <p className='text-black font-bold'>$9</p>
          </div>

        </div>
        <div className='h-px w-full bg-gray-300  p-0 my-2'></div>
        <div className='flex justify-between px-4 my-3'>
          <p className={text}>Total Payable</p>
          <p className='text-black font-bold'>$88.15</p>
          
        </div>
      </div>
    </div>
    
  )
}

export default YourOrder
