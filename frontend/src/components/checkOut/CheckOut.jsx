import YourOrder from '../yourOrder/YourOrder'
import BillingDetails from '../billingDetails/BillingDetails'
// import Payment from '../payment/payment'

function CheckOut () {
  return (
    <div className=' flex flex-col items-center lg:grid-cols-2 lg:h-auto  w-screen lg:grid  lg:mb-20'>
      <div className='w-full flex  justify-center'><YourOrder /></div>
      <div className='w-full flex justify-center'><BillingDetails /></div>
      {/* <div className='w-full h-auto flex justify-center mb-10 lg:mb-0'><Payment /></div> */}
    </div>

  )
}

export default CheckOut
