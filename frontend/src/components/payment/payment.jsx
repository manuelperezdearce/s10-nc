import Paypal from '../../images/paypal.png'
import Visa from '../../images/visa.png'
import MasterCard from '../../images/americanexpress.png'

function Payment () {
  return (
    <div className='w-9/12 h-auto flex justify-start lg:w-11/12  lg:left-20 lg:my-5   '>
      <div className='w-full h-full shadow-lg my-5 rounded-lg'>
        <div className='bg-whiteBackgroundForm w-full h-14 flex items-center px-7'>
          <h1 className='text-black text-lg font-bold'>Payment</h1>
        </div>
        <div className='w-full h-auto'>
          <form className='w-full h-34 flex flex-col justify-center my-4 px-7'>
            <div className='flex mb-1'>
              <input type='radio' className='bg-white checked:bg-greenCard mr-2' />
              <p className='text-black'>Direct Banck Transfer</p>
            </div>
            <div className='flex my-1'>
              <input type='radio' className='bg-white checked:bg-greenCard mr-2' />
              <p className='text-black'>Cash on Delivery</p>
            </div>
            <div className='flex my-1'>
              <input type='radio' className=' text-greenCard mr-2' />
              <p className='text-black'>Online Getway</p>
            </div>
          </form>
          <div className='w-full px-7 my-4 flex justify-between items-center'>
            <div className='flex w-3/5'>
              <figure className='w-2/5 h-6 '>
                <img className='w-full h-full object-cover' src={Paypal} alt='paypal' />
              </figure>
              <figure className='w-2/5 h-6'>
                <img className='w-full h-full object-cover' src={Visa} alt='visa' />
              </figure>
              <figure className='w-2/5 h-6'>
                <img className='w-full h-full object-cover' src={MasterCard} alt='americanexpress' />
              </figure>
            </div>
            <div className='w-2/5 h-1/6 flex justify-center items-center px- lg:h-14 '>
              <button className='bg-greenCard  py-2 rounded-md text-white w-11/12 '>Place an Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
