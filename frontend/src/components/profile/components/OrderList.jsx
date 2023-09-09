import OrderCard from '../../OrderCard/OrderCard'
import OrderFilterSection from './OrderFilterSection'
import { useEffect, useState } from 'react'

export default function OrderList ({
  userID
}) {
  const [OrderListArray, setOrderListArray] = useState([])

  const getOrders = async () => {
    const resp = await fetch('./Order.json')
    // const data = await resp.json()
    console.log(resp)
    setOrderListArray(data)
  }

  useEffect(() => {
    getOrders()
  }, [])

  // console.log(OrderListArray)

  return (
    <>
      <OrderFilterSection
        OrderListArray={OrderListArray}
        setOrderListArray={setOrderListArray}
      />
      <section className='w-[90%] md:w-[80%] lg:w-[90%] max-w-screen-lg  flex flex-wrap justify-start py-10 '>
        {
     OrderListArray.length > 0
       ? OrderListArray.map((item) => {
         return (

           <OrderCard
             key={item.orderID}
             createdAt={item.createdAt}
             totalPrice={item.totalPrice}
             totalQuantity={item.totalQuantity}
             orderID={item.orderID}
           />

         )
       })
       : <span>Ups!</span>

}
      </section>
    </>

  )
}
