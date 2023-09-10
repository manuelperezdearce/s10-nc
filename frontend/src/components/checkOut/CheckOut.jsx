import YourOrder from '../yourOrder/YourOrder'
import BillingDetails from '../billingDetails/BillingDetails'

function CheckOut () {
  return (
    <div className='flex flex-col items-center'>
      <YourOrder />
      <BillingDetails />
    </div>

  )
}

export default CheckOut
